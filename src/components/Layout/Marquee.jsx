import { marqueeItems } from "../../data/navItems";

/**
 * Reusable marquee strap component.
 * Renders an infinitely scrolling horizontal list of items.
 *
 * @param {"dark"|"light"} variant - Visual variant
 */
export default function Marquee({ variant = "dark" }) {
  const className =
    variant === "light" ? "marqee marqee-light" : "marqee";

  // Duplicate items for seamless infinite scroll
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className={className}>
      <ul>
        {items.map((item, i) => (
          <li key={`${item}-${i}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
