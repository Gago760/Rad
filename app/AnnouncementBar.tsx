
"use client";

import "./globals.css";

export default function AnnouncementBar() {
  const message = "անվճար առաքում 15000 դրամ և ավելի արժողությամբ պատվերների դեպքում";

  return (
    <div className="announcement-bar">
      <div className="announcement-track">
        {[...Array(5)].map((_, i) => (
          <span className="announcement-item" key={i}>
            {message}
          </span>
        ))}
      </div>
    </div>
  );
}
