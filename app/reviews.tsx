
"use client";

const testimonials = [
  {
    text: "Եղունգներս դարձրեց չափազանց ամուր և պինդ։ Խորհուրդ եմ տալիս բոլոր նրանց, ովքեր ցանկանում են ազատվել փխրուն եղունգներից։",
    color: "pink",
  },
  {
    text: "Ես շատ եմ հավանում եղունգների յուղը։ Հատկապես դուր է գալիս ապլիկատորը․ յուղը չի տարածվում այնտեղ, որտեղ պետք չէ, այլ մնում է հենց այն հատվածում, որտեղ քսվել է։",
    color: "beige",
  },
  {
    text: "Շատ եմ հավանում, թե ինչ տեսք ունեն կուտիկուլներս և եղունգներս։ Այս միջոցը հիանալի է։",
    color: "light-pink",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">

      <div className="testimonials-heading">
        <h2>հաճախորդների կարծիքներ</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div
            className={`testimonial-card ${item.color}`}
            key={index}
          >
            <div className="testimonial-stars">
              ★★★★★
            </div>

            <p className="testimonial-text">
              {item.text}
            </p>

            <span className="testimonial-name">
              {item.name}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
