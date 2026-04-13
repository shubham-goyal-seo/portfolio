"use client";

import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";

const links = [
  { href: "#truemeds", label: "Truemeds" },
  { href: "#dentsu", label: "Dentsu" },
  { href: "#samples", label: "Work Samples" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="nav-hamburger"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <div className="nav-mobile-menu">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-mobile-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-mobile-cta"
            onClick={() => setOpen(false)}
          >
            <Mail size={14} /> Get in touch
          </a>
        </div>
      )}
    </>
  );
}
