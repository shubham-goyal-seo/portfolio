"use client";

/* eslint-disable @next/next/no-img-element */
export default function BrandImage({
  logo,
  name,
  dark,
}: {
  logo: string;
  name: string;
  dark?: boolean;
}) {
  return (
    <>
      <img
        src={logo}
        alt={name}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          const fb = e.currentTarget.nextElementSibling as HTMLElement;
          if (fb) fb.style.display = "block";
        }}
      />
      <span
        className="brand-fallback"
        style={{ display: "none", ...(dark ? { color: "#fff" } : {}) }}
      >
        {name}
      </span>
    </>
  );
}
