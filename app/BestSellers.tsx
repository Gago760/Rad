
"use client";

import Link from "next/link";
import "./globals.css";

const products = [
  {
    id: 1,
    name: "Եղունգների աճը խթանող յուղ",
    price: "$14.99",
    image:
      "https://radiantcosmetics.com/cdn/shop/files/Radiant_Cosmetics_Nail_Growth_Oil_Pen-5.png?v=1791013537&width=1946",
    href: "/products/nail-growth-oil",
    badge: "fan favorite",
    soldOut: false,
  },
  {
    id: 2,
    name: "Եղունգների աճը խթանող յուղ («մեծ» տարբերակ)",
    price: "$21.99",
    image:
      "https://radiantcosmetics.com/cdn/shop/files/Radiant_Champagne_Nail_Oil_Applicator.png?v=1791013537&width=1946",
    href: "/products/jumbo-nail-growth-oil",
    soldOut: false,
  },
  {
    id: 3,
    name: "Եղունգների աճը խթանող յուղ («փոքր» տարբերակ)",
    price: "$7.99",
    image:
      "https://radiantcosmetics.com/cdn/shop/files/Mini_Radiant_Nail_Growth_Oil_Pen.png?v=1791013537&width=1946",
    href: "/products/mini-nail-growth-oil",
    soldOut: true,
  },
  {
    id: 4,
    name: "Եղունգների աճը խթանող յուղ (մեծ քանակությամբ)",
    price: "from $48",
    image:
      "https://radiantcosmetics.com/cdn/shop/files/Radiant_Cosmetics_Nail_Oil_Bottle.png?v=1791013536&width=1946",
    href: "/products/bulk-nail-growth-oil",
    soldOut: false,
  },
];

export default function BestSellers() {
  return (
    <section className="best-sellers">

      <div className="best-sellers-header">
        <h2>ամենա շատ վաճառվողները</h2>

        <Link href="/shop" className="view-all">
          դիտել բոլորը
        </Link>
      </div>

      <div className="best-sellers-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>

            <div className="product-image">

              <Link
                href={product.href}
                className="product-image-link"
              >
                <img
                  src={product.image}
                  alt={product.name}
                />
              </Link>

              {product.badge && (
                <span className="product-badge">
                  {product.badge}
                </span>
              )}

              <Link
                href={product.href}
                className={`add-to-cart ${
                  product.soldOut ? "sold-out" : ""
                }`}
              >
                {product.soldOut ? "sold out" : "add to cart"}
              </Link>

            </div>

            <div className="product-info">

              <Link
                href={product.href}
                className="product-name"
              >
                {product.name}
              </Link>

              <span className="product-price">
                {product.price}
              </span>

            </div>

          </article>
        ))}
      </div>

    </section>
  );
}
