
"use client";

const logos = [
  "/img4.avif",
  "/img6.avif",
  "/img7.avif",
  "img1.avif",
  "/img2.avif",
  "/img3.avif",
  "/img5.avif",
  "/img8.avif",
];

export default function AsSeenIn() {
  return (
    <section className="media-marquee">
      <h2 className="media-marquee-title">
        
ՑՈՒՑԱԴՐՎԵԼ Է
      </h2>

      <div className="media-marquee-window">
        <div className="media-marquee-track">

          {[0, 1].map((group) => (
            <div className="media-marquee-group" key={group}>
              {logos.map((logo, index) => (
                <div className="media-marquee-logo" key={index}>
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
