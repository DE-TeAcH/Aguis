import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Preloader overlay with GSAP animation.
 * Shows an "A" outline that fills up (loads) then disappears.
 */
export default function Preloader({ onComplete }) {
  const preloaderRef = useRef(null);
  const letterOutlineRef = useRef(null);
  const letterFillRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const preloader = preloaderRef.current;
    const outline = letterOutlineRef.current;
    const fill = letterFillRef.current;
    const container = containerRef.current;

    // Total sequence should be fast (~2.5s here, leaving 1.5s for page elements = 4s total)
    const tl = gsap.timeline({
      onComplete: () => {
        preloader.style.display = "none";
        onComplete?.();
      },
    });

    // 1. "A" appear empty
    tl.fromTo(
      outline,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
    )
    // 2. then load (fill from bottom to top)
    .fromTo(
      fill,
      { clipPath: "inset(100% 0 0 0)" },
      { clipPath: "inset(0% 0 0 0)", duration: 1.2, ease: "power2.inOut" }
    )
    // 3. after it loads it disappear
    .to(
      container,
      { opacity: 0, scale: 1.2, duration: 0.4, ease: "power2.in" },
      "+=0.2"
    )
    // 4. hide preloader overlay
    .to(preloader, { opacity: 0, duration: 0.3, ease: "power2.out" });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div className="preloader" ref={preloaderRef} id="preloader">
      <div className="preloader__a-container" ref={containerRef}>
        <span className="preloader__a-outline" ref={letterOutlineRef}>A</span>
        <span className="preloader__a-fill" ref={letterFillRef}>A</span>
      </div>
    </div>
  );
}
