

export default function Hero() {
  return (
    <main className="hero-section">
      <div className="hero-copy">
        <p className="hero-eyebrow">
          Եղունգների աճի օրիգինալ յուղ
        </p>
        <h1>
            100% ԲՆԱԿԱՆ  ՕՐԳԱՆԱԿԱՆ   ԲՈՒՍԱԿԱՆ 

          <br />
          
        </h1>

        <p className="hero-description">
          
նպաստում է ամուր, երկար և պայծառ բնական եղունգների պահպանմանը։
        </p>

        <a href="/shop" className="hero-button">
          shop now
        </a>

        <div className="hero-benefits">
          <span><b>✓</b>ՕՐԳԱՆԱԿԱՆ </span>
          <span><b>✓</b> ԲՈՒՍԱԿԱՆ</span>
        </div>
      </div>

      <div className="hero-visual">
        <img
          src="https://radiantcosmetics.com/cdn/shop/files/radiant-hero-portrait-2.jpg?v=1792484968&width=1400"
          alt="Radiant Cosmetics nail growth oil"
          className="hero-product-image"
        />

        <div className="hero-badge">
          <div className="hero-badge-inner">
            <strong>#1</strong>
            <span>nail oil on</span>
            <span>tiktok shop</span>
          </div>
        </div>
      </div>
    </main>
  );
}
