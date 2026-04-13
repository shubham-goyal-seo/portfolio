import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plan of Action — Organic Growth | Shubham Goyal",
  description:
    "Annual organic growth plan for 2025 — SEO goals, traffic projections, content categories, product dependencies, and initiative impact.",
};

export default function PlanOfActionPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--cream)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Nav bar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 200,
          background: "rgba(250,250,247,0.80)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          borderBottom: "1px solid var(--border)",
          height: 60,
          display: "flex",
          alignItems: "center",
          padding: "0 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            width: "100%",
            maxWidth: 1120,
            margin: "0 auto",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              fontWeight: 500,
              color: "var(--muted)",
              transition: "color .2s",
            }}
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <span
            style={{
              marginLeft: "auto",
              fontSize: 14,
              fontWeight: 600,
              color: "var(--body-text)",
            }}
          >
            Plan of Action — Organic Growth 2025
          </span>
        </div>
      </nav>

      {/* Embedded content */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <iframe
          src="/shubham-goyal-portfolio/plan-of-action-organic-growth.html"
          title="Plan of Action — Organic Growth"
          style={{
            width: "100%",
            maxWidth: 1120,
            height: "calc(100vh - 60px)",
            border: "none",
            background: "white",
          }}
        />
      </div>
    </div>
  );
}
