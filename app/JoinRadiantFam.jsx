
"use client";

import "./globals.css";

export default function JoinRadiantFam() {
  return (
    <section className="join-radiant">
      <div className="join-radiant-inner">

        <h2>join the radiant fam.</h2>

        <p>
          first dibs on new drops + secret discounts.
          no spam, promise.
        </p>

        <form
          className="join-radiant-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your email 📧"
            aria-label="your email"
            required
          />

          <button type="submit">
            i'm in
          </button>
        </form>

      </div>
    </section>
  );
}
