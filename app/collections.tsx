
"use client";

import Link from "next/link";

const collections = [
  {
    title: "Եղունգների յուղ",
    image: "/nails.webp",
    link: "/collections/nails",
  }
];

export default function Collections() {
  return (
    <section className="collections-section">

      <h2 className="collections-title">
        հավաքածուներ
      </h2>

      <div className="collections-grid">
        {collections.map((item, index) => (
          <Link
            href={item.link}
            className="collection-card"
            key={index}
          >
            <img
              src={item.image}
              alt={item.title}
              className="collection-image"
            />

            <div className="collection-overlay"></div>

            <h3 className="collection-name">
              {item.title}
            </h3>

            <span className="collection-shop">
              գնել
            </span>
          </Link>
        ))}
      </div>

    </section>
  );
}
