import { useEffect, useLayoutEffect, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { pageOrder } from "../data/navItems";

/**
 * Custom hook for GSAP page entrance animations and scroll/swipe navigation.
 * Handles: nav fade-in, bg letter reveal, hero elements stagger,
 * `.fade-in` and `.opacity-in` class-based animations.
 */
export function usePageAnimations(isPreloaderDone = true) {
  const navigate = useNavigate();
  const location = useLocation();
  const isNavigating = useRef(false);
  const initialLoadDone = useRef(false);
  const containerRef = useRef(null);

  // Page entrance animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Persistent elements should only animate once on initial load
      const nav = !initialLoadDone.current ? document.getElementById("main-nav") : null;
      const marqueeUls = !initialLoadDone.current ? document.querySelectorAll(".marqee ul") : [];
      const bgLetter = document.querySelector(".bg");
      const playBtn = document.querySelector(".play-btn-circle");
      const watchBtn = document.querySelector(".watch-video-circle");
      const bannerTags = document.querySelector(".banner-tags");
      const heroBanner = document.getElementById("hero-banner");
      const fadeIns = document.querySelectorAll(".fade-in");
      const opacityIns = document.querySelectorAll(".opacity-in");

      const initialElements = [
        nav,
        ...marqueeUls,
        bgLetter,
        playBtn,
        watchBtn,
        bannerTags,
        heroBanner,
        ...fadeIns,
        ...opacityIns,
      ].filter(Boolean);

      // ALWAYS hide elements on initial render, even while preloader is running
      gsap.set(initialElements, { opacity: 0 });

      if (marqueeUls.length > 0) {
        // Start hidden from left side (so it reveals right to left)
        gsap.set(marqueeUls, { y: -50, clipPath: "inset(0 0 0 100%)" });
      }

      // Stop here if preloader is still showing
      if (!isPreloaderDone) return;

      const pageTl = gsap.timeline();

      if (nav) {
        pageTl.to(nav, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
      }
      if (marqueeUls.length > 0) {
        // Drop them in
        pageTl.to(marqueeUls, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.2 }, "-=0.2")
              // Reveal from right to left slowly
              .to(marqueeUls, { clipPath: "inset(0 0 0 0%)", duration: 1.8, ease: "power2.inOut", stagger: 0.1 }, "-=0.5");
      }
      if (bgLetter) {
        pageTl.to(bgLetter, { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3");
      }
      if (playBtn) {
        pageTl.to(playBtn, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.5");
      }
      if (bannerTags) {
        pageTl.to(bannerTags, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }, "-=0.3");
      }
      if (heroBanner) {
        pageTl.to(heroBanner, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.4");
      }
      if (fadeIns.length > 0) {
        pageTl.to(fadeIns, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.4");
      }
      if (watchBtn) {
        pageTl.to(watchBtn, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4");
      }
      if (opacityIns.length > 0) {
        pageTl.to(opacityIns, { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.2");
      }

      // Mark initial load as complete after the first animation run
      initialLoadDone.current = true;
    });

    return () => ctx.revert();
  }, [isPreloaderDone, location.pathname]);

  // Scroll/swipe navigation
  const navigateTo = useCallback(
    (direction) => {
      if (isNavigating.current) return;

      const currentIndex = pageOrder.indexOf(location.pathname);
      if (currentIndex === -1) return;

      const targetIndex = currentIndex + direction;
      if (targetIndex >= 0 && targetIndex < pageOrder.length) {
        isNavigating.current = true;
        const targetPage = pageOrder[targetIndex];

        // Slide transition completely off-screen
        const container = document.querySelector(".container");
        if (container) {
          gsap.to(container, {
            opacity: 0,
            y: direction > 0 ? "-100vh" : "100vh",
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              navigate(targetPage);
              // Add a small delay before accepting new scrolls to let the new page settle
              setTimeout(() => {
                isNavigating.current = false;
              }, 800);
            },
          });
        } else {
          navigate(targetPage);
          isNavigating.current = false;
        }
      }
    },
    [location.pathname, navigate]
  );

  // Wheel listener
  useEffect(() => {
    const handleWheel = (e) => {
      // Don't navigate when scrolling inside interactive containers
      if (e.target.closest(".portfolio-slider") || e.target.closest(".contact-page")) return;

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        if (e.deltaY > 50) {
          navigateTo(1);
        } else if (e.deltaY < -50) {
          navigateTo(-1);
        }
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [navigateTo]);

  // Touch listener
  useEffect(() => {
    let touchStartY = 0;
    let touchStartedInSlider = false;

    const handleTouchStart = (e) => {
      touchStartedInSlider = !!(e.target.closest(".portfolio-slider") || e.target.closest(".contact-page"));
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e) => {
      // Don't navigate when swiping inside the portfolio slider
      if (touchStartedInSlider) return;

      const touchEndY = e.changedTouches[0].screenY;
      if (touchStartY - touchEndY > 50) {
        navigateTo(1);
      } else if (touchEndY - touchStartY > 50) {
        navigateTo(-1);
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigateTo]);

  return containerRef;
}
