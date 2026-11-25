
"use client";

import { useState } from "react";

const customerResults = [
  {
    before:
      "https://radiantcosmetics.com/cdn/shop/t/33/assets/rc-fd45072c.webp?v=49186997614382313471792484128",
    after:
      "https://radiantcosmetics.com/cdn/shop/t/33/assets/rc-dc41d859.webp?v=57462180870115978561792484128",
  },
  {
    before:
      "https://radiantcosmetics.com/cdn/shop/t/33/assets/rc-4eb6ea78.jpg?v=155749799163007289071792484128",
    after:
      "https://radiantcosmetics.com/cdn/shop/t/33/assets/rc-498bd55f.jpg?v=29266912595724214891792484128",
  },
  {
    before:
      "https://radiantcosmetics.com/cdn/shop/t/33/assets/rc-e0d7dce2.webp?v=1439601653027509151792484128",
    after:
      "https://radiantcosmetics.com/cdn/shop/t/33/assets/rc-3ea25517.webp?v=97134596409527043711792484128",
  },
  {
    before:
      "https://radiantcosmetics.com/cdn/shop/t/33/assets/rc-a763ba1e.jpg?v=72851593333741668681792484128",
    after:
      "https://radiantcosmetics.com/cdn/shop/t/33/assets/rc-44616c61.jpg?v=71873672059246227401792484128",
  },
  {
    before:
      "https://radiantcosmetics.com/cdn/shop/t/33/assets/rc-14848415.jpg?v=35718287602046627341792484128",
    after:
      "https://radiantcosmetics.com/cdn/shop/t/33/assets/rc-dfcd2339.jpg?v=178482481172390109581792484128",
  },
];

export default function CustomerResults() {
  const [paused, setPaused] = useState(false);

  const duplicatedResults = [...customerResults, ...customerResults];

  return (
    <section className="customer-results-section">
      <h2 className="customer-results-title">
        Հաճախորդների արդյունքներ։
      </h2>

      <div
        className={`customer-results-marquee ${paused ? "is-paused" : ""}`}
        onClick={() => setPaused((prev) => !prev)}
        role="button"
        tabIndex={0}
        aria-label={paused ? "Resume animation" : "Pause animation"}
        aria-pressed={paused}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setPaused((prev) => !prev);
          }
        }}
      >
        <div className="customer-results-track">
          {duplicatedResults.map((item, index) => (
            <div
              className={`customer-result-card card-${index % 5}`}
              key={index}
            >
              <div className="customer-result-half">
                <img
                  src={item.before}
                  alt="Customer nails before"
                  draggable="false"
                />
                <span className="result-label before-label">
                  before
                </span>
              </div>

              <div className="customer-result-half">
                <img
                  src={item.after}
                  alt="Customer nails after"
                  draggable="false"
                />
                <span className="result-label after-label">
                  after
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
