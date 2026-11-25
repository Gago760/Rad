"use client";
import Header from "../Header";
import "../globals.css";
export default function Shop() {
    const products = [
        {
            id: 1,  
            name: "Radiant Gel Polish",
            price: "$19.99",
            image: "https://radiantcosmetics.com/cdn/shop/files/Mini_Radiant_Nail_Growth_Oil_Pen.png?v=1791013537&width=990",
            href: "/products/radiant-gel-polish",
        },
        {
            id: 2,
            name: "Radiant Nail Growth Oil",
            price: "$14.99",
            image: "https://radiantcosmetics.com/cdn/shop/files/Mini_Radiant_Nail_Growth_Oil_Pen.png?v=1791013537&width=990",
            href: "/products/radiant-nail-growth-oil",
        },
        {
            id: 3,
            name: "Radiant Cuticle Oil",
            price: "$9.99",
            image: "https://radiantcosmetics.com/cdn/shop/files/Mini_Radiant_Nail_Growth_Oil_Pen.png?v=1791013537&width=990",
            href: "/products/radiant-cuticle-oil",
        },
        {
            id: 4,
            name: "Radiant Nail Strengthener",
            price: "$12.99",
            image: "https://radiantcosmetics.com/cdn/shop/files/Mini_Radiant_Nail_Growth_Oil_Pen.png?v=1791013537&width=990",
            href: "/products/radiant-nail-strengthener",
        },
        {
            id: 5,
            name: "Radiant Hand Cream",
            price: "$11.99",
            image: "https://radiantcosmetics.com/cdn/shop/files/Mini_Radiant_Nail_Growth_Oil_Pen.png?v=1791013537&width=990",
            href: "/products/radiant-hand-cream",
        
        }
    ];

    return (
        <div className="shop-page">
            <Header />
            <div className="products">
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <a href={product.href}>View Product</a>
                    </div>
                ))}
            </div>
        </div>
  );
}