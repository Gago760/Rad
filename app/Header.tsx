
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <button
          type="button"
          className={`menu-button ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="hamburger-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>

        <Link
          href="/"
          className="brand-logo"
          aria-label="Radiant Cosmetics home"
          onClick={closeMenu}
        >
          <span className="brand-name">Radiant</span>
          <span className="brand-subtitle">COSMETICS ARMENIA</span>
        </Link>

        <Link
          href="/cart"
          className="cart-link"
          onClick={closeMenu}
        >
          cart (0)
        </Link>
      </header>

      {menuOpen && (
        <div className="menu-overlay">
          <nav
            id="main-menu"
            className="burger-menu"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className="menu-link"
              onClick={closeMenu}
            >
              home
            </Link>

            <div className="shop-group">
              <Link
                href="/shop"
                className="menu-link"
                onClick={closeMenu}
              >
                shop
              </Link>

              <div className="submenu">
                <Link href="/shop/nails" onClick={closeMenu}>
                  nails
                </Link>

                <Link href="/shop/eyes" onClick={closeMenu}>
                  eyes
                </Link>

                <Link href="/shop/lips" onClick={closeMenu}>
                  lips
                </Link>
              </div>
            </div>

            <Link
              href="/merch"
              className="menu-link"
              onClick={closeMenu}
            >
              merch
            </Link>

            <Link
              href="/video-tutorials"
              className="menu-link"
              onClick={closeMenu}
            >
              video tutorials
            </Link>

            <Link
              href="/faq"
              className="menu-link"
              onClick={closeMenu}
            >
              faq&apos;s
            </Link>

            <Link
              href="/wholesale"
              className="menu-link"
              onClick={closeMenu}
            >
              wholesale
            </Link>

            <Link
              href="/how-to-start-a-business"
              className="menu-link"
              onClick={closeMenu}
            >
              how to start a business
            </Link>

            
          </nav>
        </div>
      )}
    </>
  );
}
