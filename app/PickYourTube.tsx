
"use client";

import "./globals.css";

const options = [
  "just trying it out",
  "daily nail girl",
  "sharing with my girls",
  "i do nails for others",
];

export default function PickYourTube() {
  return (
    <section className="pick-your-tube">
      <h2>pick your tube.</h2>

      <div className="pick-tube-options">
        {options.map((option, index) => (
          <button
            className="pick-tube-card"
            key={index}
            type="button"
          >
            <span>{option}</span>
            <span className="pick-tube-arrow">↗</span>
          </button>
        ))}
      </div>
    </section>
  );
}
