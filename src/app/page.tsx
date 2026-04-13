/* eslint-disable @next/next/no-img-element */
import BrandImage from "@/components/BrandImage";
import ContactForm from "@/components/ContactForm";
import MobileNav from "@/components/MobileNav";
import {
  Trophy, TrendingUp, BadgeCheck, GraduationCap,
  FileText, BarChart3, Search, PenTool, Smartphone,
  Mail, Phone, ArrowRight, ExternalLink,
  Briefcase, Users, DollarSign, Globe, Award,
  Sparkles, ChevronRight, Link2, Star,
  // Skills icons
  SearchCheck, AppWindow, ShieldCheck, BookOpen, MessageSquare, Rocket, CirclePlay,
  Megaphone, HeartHandshake, Bot, Hash, Newspaper,
  Brain, LayoutGrid, Monitor, Lightbulb, Map, Target, FlaskConical, PenLine,
  Activity, Flame, MousePointerClick, Database, TestTube, Radar, Bell, Eye,
  Link as LinkIcon, Bug, Terminal, CircleDollarSign,
  PenSquare, SquareKanban, Layers, HardDrive, BarChart2, Blocks, Palette,
  type LucideIcon,
} from "lucide-react";
import {
  siteConfig, heroTags, heroStats, awards, aboutFacts, brands, timeline,
  truemedsPrimaryMetrics, truemedsSecondaryMetrics, pillars, aiCitations,
  backlinkStats, redditBefore, redditAfter, quoraBefore, quoraAfter,
  dentsuTopMetrics, dentsuSecondaryMetrics, dentsuSystems, workSamples,
  caseStudies, thoughtLeadership, skillCategories, globalExposure,
} from "@/data/portfolio";
import type { ReactNode } from "react";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const skillIconMap: Record<string, LucideIcon> = {
  // Growth Marketing
  "SEO": SearchCheck, "ASO": AppWindow, "E-E-A-T": ShieldCheck, "Content Strategy": BookOpen,
  "ORM": MessageSquare, "GTM Strategy": Rocket, "YouTube Strategy": CirclePlay,
  "SEM": Megaphone, "CRM": HeartHandshake, "AEO / GEO": Bot,
  "Reddit / Quora Community": Hash, "Digital PR": Newspaper,
  // Product & Strategy
  "AI Product Management": Brain, "CMS Architecture": LayoutGrid, "Website Tech Architecture": Monitor,
  "Product Strategy": Lightbulb, "Roadmapping": Map, "CRO": Target,
  "Market Research": FlaskConical, "Wireframing": PenLine,
  // Analytics & Data
  "GA4": Activity, "Mixpanel": Flame, "Hotjar": MousePointerClick, "SQL": Database,
  "BigQuery": Database, "A/B & MVT Testing": TestTube, "Appsflyer": Radar,
  "Amplitude": BarChart3, "CleverTap": Bell, "Microsoft Clarity": Eye,
  // SEO & Growth Tools
  "Ahrefs": LinkIcon, "SEMrush": Search, "Screaming Frog": Bug,
  "Google Search Console": SearchCheck, "Optimizely": TestTube,
  "Firebase": Flame, "Postman": Terminal, "Google Ads": CircleDollarSign,
  // Design, PM & Infrastructure
  "Figma": PenSquare, "Jira": SquareKanban, "Linear": Layers, "MongoDB": Database,
  "Redshift": HardDrive, "Metabase": BarChart2, "Strapi": Blocks,
  "WordPress": Globe, "Webflow": Monitor, "Canva": Palette,
};

const colorMap: Record<string, string> = { blue: "", green: "mn-green", purple: "mn-purple", amber: "mn-amber" };
const tagColorMap: Record<string, { bg: string; color: string }> = {
  purple: { bg: "var(--purple-l)", color: "var(--purple)" },
  blue: { bg: "var(--blue-l)", color: "var(--blue)" },
  amber: { bg: "var(--amber-l)", color: "var(--amber)" },
  green: { bg: "var(--green-l)", color: "var(--green)" },
};
const pillarColorMap: Record<string, string> = { blue: "var(--blue)", green: "var(--green)", purple: "var(--purple)", amber: "var(--amber)", pink: "#EC4899" };

const awardIcons: Record<string, ReactNode> = {
  Trophy: <Trophy size={20} />, TrendingUp: <TrendingUp size={20} />,
  BadgeCheck: <BadgeCheck size={20} />, GraduationCap: <GraduationCap size={20} />,
};
const fileIcons: Record<string, ReactNode> = {
  FileText: <FileText size={22} />, BarChart3: <BarChart3 size={22} />,
  Search: <Search size={22} />, PenTool: <PenTool size={22} />,
  Smartphone: <Smartphone size={22} />,
};

function MetricCard({ value, label, context, color = "blue", small }: {
  value: string; label: string; context: string; color?: string; small?: boolean;
}) {
  return (
    <div className="mcard" style={small ? { padding: 16 } : undefined}>
      <div className={`mn ${colorMap[color] || ""}`} style={small ? { fontSize: 26 } : undefined}>{value}</div>
      <div className="ml" style={small ? { fontSize: 12 } : undefined}>{label}</div>
      <div className="mc">{context}</div>
    </div>
  );
}

type NetworkNode = { text: string; severity: string; size?: string };

function SentimentCard({ title, type, badge, description, nodes, visTitle, legendItems }: {
  title: string; type: "before" | "after"; badge: string; description: string;
  nodes: NetworkNode[]; visTitle: string; legendItems: { color: string; label: string }[];
}) {
  return (
    <div className="sent-card">
      <div className={`sent-head ${type}`}>
        <span className={`sent-title ${type}`}>{title}</span>
        <span className={`sent-badge ${type}`}>{badge}</span>
      </div>
      <div className="sent-body">
        {description}
        <div className={`net-vis ${type === "after" ? "positive" : ""}`}>
          <div className={`net-vis-title ${type === "after" ? "positive" : ""}`}>{visTitle}</div>
          <div className="net-nodes">
            {nodes.map((node) => (<span key={node.text} className={`net-node ${node.severity} ${node.size || ""}`}>{node.text}</span>))}
          </div>
          <div className="net-legend">
            {legendItems.map((item) => (
              <div key={item.label} className="net-legend-item"><div className="net-legend-dot" style={{ background: item.color }} />{item.label}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const beforeLegend = [
  { color: "#7F1D1D", label: "Critical" }, { color: "#991B1B", label: "High Severity" },
  { color: "#9A3412", label: "Medium Severity" }, { color: "#92400E", label: "Low Severity" },
];
const afterRedditLegend = [
  { color: "#065F46", label: "Highly Positive" }, { color: "#059669", label: "Positive" },
  { color: "#0284C7", label: "Neutralized by Community" }, { color: "#0369A1", label: "Neutral / Mixed" },
  { color: "#6D28D9", label: "Competitor Reference" }, { color: "#C2410C", label: "Mild Concern" },
];
const afterQuoraLegend = [
  { color: "#065F46", label: "Highly Positive" }, { color: "#059669", label: "Positive" },
  { color: "#0284C7", label: "Neutralized by Community" }, { color: "#0369A1", label: "Neutral / Mixed" },
  { color: "#C2410C", label: "Mild Concern" }, { color: "#6D28D9", label: "Competitor Reference" },
];

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#hero" className="nav-brand" style={{ fontFamily: "var(--ff-display)" }}>
            Shubham Goyal
          </a>
          <div className="nav-links">
            <a href="#truemeds">Truemeds</a><a href="#dentsu">Dentsu</a>
            <a href="#samples">Work Samples</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="nav-cta"><Mail size={14} /> Get in touch</a>
          <MobileNav />
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="wrap">
          <div className="hero-inner">
            <div className="hero-top">
              <div className="hero-left">
                <div className="hero-eyebrow"><span className="hero-eyebrow-dot" />Organic Growth &nbsp;&middot;&nbsp; PLG &nbsp;&middot;&nbsp; SEO &nbsp;&middot;&nbsp; AI Systems</div>
                <div className="hero-name-row">
                  <div className="hero-photo-container">
                    <img className="hero-photo" src="/portfolio/photo.png" alt="Shubham Goyal" />
                  </div>
                  <h1 className="hero-name" style={{ fontFamily: "var(--ff-display)" }}>Shubham<br />Goyal</h1>
                </div>
                <p className="hero-role">{siteConfig.role}</p>
                <div className="hero-badge-inline">
                  <strong>Organic Growth Lead @ Truemeds</strong> &nbsp;&middot;&nbsp; Sequoia / Accel &nbsp;&middot;&nbsp; $350M+ Valuation
                </div>
                <p className="hero-bio">I build scalable growth systems — not just campaigns. With 6+ years leading SEO, content infrastructure, and product-led growth across health-tech, fintech, e-commerce, and enterprise B2B, I&apos;ve driven measurable revenue impact at every stage.</p>
                <div className="hero-tags">{heroTags.map((tag) => (<span key={tag} className="hero-tag">{tag}</span>))}</div>
              </div>
            </div>
            <div className="hero-stats">
              {heroStats.map((stat) => (
                <div key={stat.value} className="hstat">
                  <div className="hstat-n" style={{ fontFamily: "var(--ff-display)" }}>{stat.value}</div>
                  <div className="hstat-l">{stat.label}<br />{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards" className="awards-banner">
        <div className="awards-inner">
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(253,211,77,0.6)", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}><Award size={14} /> Recognition &amp; Awards</span>
          </div>
          <div className="awards-row">
            {awards.map((award) => (
              <div key={award.title} className="award-item">
                <div className="award-icon-wrap">{awardIcons[award.icon]}</div>
                <div><div className="award-title">{award.title}</div><div className="award-source">{award.source}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec">
        <div className="wrap-sm">
          <span className="lbl"><Users size={14} /> About Me</span>
          <h2 className="h2" style={{ fontFamily: "var(--ff-display)" }}>I build growth systems, not just run campaigns.</h2>
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--muted)" }}>My edge is sitting at the intersection of SEO, product, engineering, and AI — and being able to design the system and then ship it. I don&apos;t hand off a strategy deck and walk away. I stay in the trenches with engineering sprints, data analysis, content operations, and UX experiments until the metrics move.</p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--muted)" }}>At Truemeds, I inherited a near-zero organic channel and turned it into the company&apos;s largest acquisition lever — 27x traffic growth, $11.1M in incremental ARR, a custom AI-ready CMS powering 250K+ pages, and a community reputation engine spanning 20+ subreddits and Quora. I manage a team of 18–22 contributors and report directly to the CMO and CTO with a $2–3M annual budget.</p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--muted)" }}>Before Truemeds, I led SEO and ASO at Dentsu India for 13+ global brands — Amazon Business, P&amp;G, Microsoft SMB, UNICEF UAE, and more — managing a 28-person team and achieving category-defining organic growth across every vertical I touched.</p>
          </div>
          <div className="about-facts">
            {aboutFacts.map((fact, i) => {
              const icons = [<Briefcase key="b" size={16} />, <Star key="s" size={16} />, <GraduationCap key="g" size={16} />, <DollarSign key="d" size={16} />];
              return (<div key={fact.label}><div style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>{icons[i]} {fact.label}</div><div style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)" }}>{fact.value}</div></div>);
            })}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* BRANDS */}
      <section className="sec sec-alt" id="brands">
        <div className="wrap">
          <span className="lbl"><Globe size={14} /> Brand Universe</span>
          <h2 className="h2" style={{ fontFamily: "var(--ff-display)" }}>Brands I&apos;ve worked with</h2>
          <p className="sub">Across health-tech, e-commerce, fintech, enterprise B2B, FMCG, fashion, ed-tech, and non-profit — India, US, Canada, UAE, and Australia.</p>
          <div className="brand-grid">
            {brands.map((brand) => (
              <div key={brand.name} className={`brand-item ${brand.primary ? "primary" : ""}`} style={brand.dark ? { background: "#000" } : undefined}>
                <BrandImage logo={brand.logo} name={brand.name} dark={brand.dark} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TIMELINE */}
      <section className="sec" id="timeline">
        <div className="wrap-sm">
          <span className="lbl"><Briefcase size={14} /> Career Journey</span>
          <h2 className="h2" style={{ fontFamily: "var(--ff-display)" }}>Growth Trajectory</h2>
          <div className="timeline-wrap">
            {timeline.map((item) => (
              <div key={item.date} className="tl-item">
                <div className={`tl-dot ${item.active ? "active" : ""}`} />
                <div className="tl-date">{item.date}</div>
                <div className="tl-title" style={{ fontFamily: "var(--ff-display)" }}>{item.title}</div>
                <div className="tl-company">{item.company}</div>
                <div className="tl-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TRUEMEDS */}
      <section className="sec" id="truemeds" style={{ background: "linear-gradient(180deg, #F0F7FF 0%, var(--cream) 100%)" }}>
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <span className="tag tag-green"><Star size={12} /> Flagship Case</span>
            <span className="tag tag-blue">Jan 2023 – Present</span>
          </div>
          <span className="lbl"><TrendingUp size={14} /> Deep Dive</span>
          <h2 className="h2" style={{ maxWidth: 760, fontFamily: "var(--ff-display)" }}>Building Truemeds&apos; organic growth engine — from zero to India&apos;s fastest-scaling health-content platform</h2>
          <p className="sub" style={{ maxWidth: 720, marginTop: 14 }}>Truemeds is a Sequoia, Accel, and Westbridge-backed e-pharmacy ($350M+ valuation, ~$80M ARR) making chronic healthcare affordable for millions of Indians. I joined when organic was a blank canvas — no team, no content system, no SEO infrastructure. Everything you see below was built from scratch.</p>

          <div className="metric-grid-4">{truemedsPrimaryMetrics.map((m) => <MetricCard key={m.value} {...m} />)}</div>
          <div className="metric-grid-4" style={{ marginTop: 16 }}>{truemedsSecondaryMetrics.map((m) => <MetricCard key={m.label} {...m} small />)}</div>

          <div style={{ marginTop: 48 }}>
            <div className="card-plain" style={{ borderLeft: "4px solid var(--blue)", padding: 32 }}>
              <span className="lbl"><Users size={14} /> Leadership Scope</span>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--muted)", marginTop: 0 }}>I lead Truemeds&apos; end-to-end organic growth strategy across SEO (web + app), Digital PR, YouTube, ORM, CRO, AEO, GEO, content strategy, and large-scale content operations. I&apos;m responsible not just for growth execution — I built the systems, team culture, and cross-functional operating model required to scale it sustainably.</p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--muted)", marginTop: 12 }}>My team of 18–22 contributors spans SEO specialists, a Technical Product Owner, frontend &amp; backend engineering leads, content writers, PR specialists, and designers. I report to the VP Growth &amp; Marketing with direct access to the CEO, CPO, CTO, and Head of Engineering. Annual budget: $2–3M, with ~$1M in external vendor and tooling partnerships.</p>
            </div>
          </div>

          <div style={{ marginTop: 48 }}><span className="lbl">Areas of Ownership</span><h2 className="h2" style={{ fontSize: 26, marginBottom: 0, fontFamily: "var(--ff-display)" }}>Five strategic pillars I own</h2></div>
          <div className="pillar-grid">
            {pillars.map((p) => (<div key={p.title} className={`pillar pillar-${p.color}`} style={p.fullWidth ? { gridColumn: "1 / -1" } : undefined}><div className="pillar-num" style={{ color: pillarColorMap[p.color] }}>{p.num}</div><h4>{p.title}</h4><p>{p.desc}</p></div>))}
          </div>

          <div style={{ marginTop: 48 }}>
            <span className="lbl"><Sparkles size={14} /> AI Engine Optimization (AEO/GEO)</span>
            <h2 className="h2" style={{ fontSize: 26, fontFamily: "var(--ff-display)" }}>Truemeds is cited across every major AI search engine</h2>
            <div style={{ marginTop: 20 }}>
              <div className="card-plain" style={{ padding: "28px 32px" }}>
                <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, marginBottom: 20 }}>I defined brand citation probability across 3000+ prompts and built AEO/GEO strategies to optimise for next-generation search surfaces. The results: Truemeds now receives citations from every major AI search engine, with Reddit-seeded content being pulled directly into ChatGPT 5.2 as citation sources.</p>
                <div className="metric-grid-4" style={{ marginTop: 0 }}>
                  <div className="mcard" style={{ padding: 16 }}><div className="mn" style={{ fontSize: 22 }}>69.1K</div><div className="ml" style={{ fontSize: 12 }}>Google AI Overview Citations</div></div>
                  <div className="mcard" style={{ padding: 16 }}><div className="mn mn-green" style={{ fontSize: 22 }}>29.5K</div><div className="ml" style={{ fontSize: 12 }}>ChatGPT Citations</div></div>
                  <div className="mcard" style={{ padding: 16 }}><div className="mn mn-purple" style={{ fontSize: 22 }}>42K</div><div className="ml" style={{ fontSize: 12 }}>Perplexity Citations</div></div>
                  <div className="mcard" style={{ padding: 16 }}><div className="mn mn-amber" style={{ fontSize: 22 }}>26.8K</div><div className="ml" style={{ fontSize: 12 }}>Gemini Citations</div></div>
                </div>
                <div className="ahrefs-panel">
                  <div className="ahrefs-panel-header"><span><Search size={14} /> Ahrefs — AI Citations Dashboard</span><span className="ahrefs-live">Live Data</span></div>
                  <div className="ai-cit-grid">
                    {aiCitations.map((c) => (<div key={c.source} className="ai-cit-item"><div className="ai-cit-logo"><div className={`ai-cit-logo-icon ${c.iconClass}`}>{c.icon}</div><span className="ai-cit-source">{c.source}</span></div><div className="ai-cit-num" style={{ fontFamily: "var(--ff-display)" }}>{c.value}</div><div className={`ai-cit-delta ${c.deltaType}`}>{c.delta}</div><div className="ai-cit-pages">{c.pages}</div></div>))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-plain" style={{ marginTop: 32, padding: "28px 32px" }}>
            <span className="lbl"><Link2 size={14} /> Backlink &amp; Authority Growth</span>
            <div className="two-col" style={{ alignItems: "center", gap: 40, marginTop: 0 }}>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75 }}>I grew our Domain Rating from 28 to 73 — approximately 3x — through a combination of off-page strategy, UGC-focused campaigns, high-authority content partnerships, and regulatory certifications including AACI. Current backlink profile: 222K backlinks across 6.4K referring domains (all-time: 1.2M backlinks, 11.1K domains).</p>
              <div className="metric-grid-2">
                <div className="mcard" style={{ padding: 16, textAlign: "center" }}><div className="mn mn-green" style={{ fontSize: 28 }}>73</div><div className="ml" style={{ fontSize: 12 }}>Domain Rating</div><div className="mc">Was 28 (+14 recently)</div></div>
                <div className="mcard" style={{ padding: 16, textAlign: "center" }}><div className="mn" style={{ fontSize: 28 }}>222K</div><div className="ml" style={{ fontSize: 12 }}>Total Backlinks</div><div className="mc">+70.8K recent growth</div></div>
              </div>
            </div>
            <div className="backlink-panel">
              <div className="ahrefs-panel-header"><span><Link2 size={14} /> Ahrefs — Backlink Profile</span><span className="ahrefs-live">Live Data</span></div>
              <div className="bl-grid">
                {backlinkStats.map((s) => (<div key={s.label} className="bl-item"><div className="bl-num" style={s.color ? { color: `var(--${s.color})`, fontFamily: "var(--ff-display)" } : { fontFamily: "var(--ff-display)" }}>{s.value}</div>{s.delta && <div className={`bl-delta ${s.deltaType}`}>{s.delta}</div>}<div className="bl-label" style={!s.delta ? { marginTop: 6 } : undefined}>{s.label}</div>{s.sub && <div className="bl-sub">{s.sub}</div>}</div>))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 48 }}>
            <span className="lbl"><Users size={14} /> Community Reputation Management</span>
            <h2 className="h2" style={{ fontSize: 26, fontFamily: "var(--ff-display)" }}>Reddit &amp; Quora — a full sentiment turnaround</h2>
            <p className="sub" style={{ marginTop: 12, maxWidth: 700 }}>I designed and executed a strategic community seeding program across Reddit and Quora. The transformation in brand sentiment — from overwhelmingly negative to predominantly positive — is one of the most measurable ORM stories I&apos;ve built.</p>
          </div>
          <div className="sent-grid">
            <SentimentCard title="Reddit — Before" type="before" badge="Negative-Dominant" description="Network flooded with critical and high-severity nodes. The conversation was dominated by safety fears, ethics violations, and operational failures — working entirely against brand trust." nodes={redditBefore} visTitle="Reddit Network — Before (Critical/High Dominant)" legendItems={beforeLegend} />
            <SentimentCard title="Reddit — After" type="after" badge="Positive-Dominant" description='Network transformed — dominated by large "Highly Positive" green nodes. Critical nodes eliminated. Community now actively defending and recommending the brand. 68 live posts · 399K+ views · 887+ comments.' nodes={redditAfter} visTitle="Reddit Network — After (Positive Dominant)" legendItems={afterRedditLegend} />
          </div>
          <div className="sent-grid" style={{ marginTop: 16 }}>
            <SentimentCard title="Quora — Before" type="before" badge="Critical Severity" description="Network almost entirely Critical/High severity nodes — identical failure patterns as Reddit. Zero positive presence. Every high-intent query about Truemeds surfaced damaging content with no brand response." nodes={quoraBefore} visTitle="Quora Network — Before (Critical Dominant)" legendItems={beforeLegend} />
            <SentimentCard title="Quora — After" type="after" badge="Minor Severity" description="66% of all topics now Minor severity. Highly Positive nodes dominate: Affordable Generic Alternatives, Significant Cost Savings, Timely Delivery. Safety fears neutralized. Quora answers rank #1 for key brand queries. 43 live answers." nodes={quoraAfter} visTitle="Quora Network — After (Positive Dominant)" legendItems={afterQuoraLegend} />
          </div>

          <div className="card-plain" style={{ marginTop: 24 }}>
            <span className="lbl"><Search size={14} /> SERP Proof</span>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: 20 }}>Our seeded community posts now rank on Google for high-intent queries like &quot;truemeds review reddit,&quot; &quot;best chronic care meds delivery India,&quot; and &quot;budget-friendly substitutes.&quot; ChatGPT 5.2 is pulling our Reddit posts as direct citation sources — confirming that Google indexing leads directly to AI citation.</p>
            <div style={{ background: "#1A1A2E", borderRadius: "var(--r-lg)", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="serp-chrome">
                <div className="serp-dots"><div className="serp-dot" style={{ background: "#FF5F57" }} /><div className="serp-dot" style={{ background: "#FEBC2E" }} /><div className="serp-dot" style={{ background: "#28C840" }} /></div>
                <div style={{ flex: 1, background: "#3A3A4A", borderRadius: 6, padding: "5px 12px", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>google.com — <strong style={{ color: "rgba(255,255,255,0.85)" }}>best chronic care meds delivery in India</strong></div>
              </div>
              <div style={{ padding: "20px 24px" }}>
                <div style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)", borderRadius: 10, padding: "14px 16px", marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#93C5FD", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}><Sparkles size={12} /> Google AI Overview</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.6, margin: 0 }}>For the best chronic care medicine delivery in India, top platforms include PharmEasy (huge reach, discounts, labs), <strong style={{ color: "#60A5FA" }}>Truemeds (great for refills/generics, cost savings)</strong>, 1mg (wide range, health info), Apollo 24/7 (vast stock, quick delivery)...</p>
                </div>
                <div style={{ background: "rgba(255,69,0,0.12)", border: "1.5px solid rgba(255,69,0,0.35)", borderRadius: 10, padding: "14px 16px", marginBottom: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#FF4500", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, color: "white", flexShrink: 0 }}>r</div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#FCA5A5" }}>Reddit &middot; r/AskIndia &middot; Ranked #1 in Discussions</span>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#FED7AA", marginBottom: 4 }}>Which is the best chronic care meds delivery in india? — Reddit</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>21 Dec 2025 — <strong style={{ color: "rgba(255,255,255,0.8)" }}>Truemeds, easy.</strong> For chronic meds their whole thing is repeat refills plus cheaper alternatives with pharmacist guidance... <span style={{ color: "#93C5FD" }}>Top answer</span></div>
                </div>
                <div className="serp-stats">
                  {[{ val: "4", label: "Comments on post", color: "#60A5FA" }, { val: "#1", label: "Discussions ranking", color: "#34D399" }, { val: "AI", label: "Cited in AI Overview", color: "#A78BFA" }, { val: "68", label: "Live posts indexed", color: "#FBBF24" }].map((item) => (
                    <div key={item.label} className="serp-stat-item">
                      <div style={{ fontSize: 18, fontWeight: 800, color: item.color, fontFamily: "var(--ff-display)" }}>{item.val}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* DENTSU */}
      <section className="sec sec-alt" id="dentsu">
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <span className="tag tag-blue">Jan 2020 – Dec 2022</span>
            <span className="tag tag-purple"><Users size={10} /> 3 Years &middot; 28-Person Team</span>
          </div>
          <span className="lbl"><Briefcase size={14} /> Chapter 2</span>
          <h2 className="h2" style={{ fontFamily: "var(--ff-display)" }}>Dentsu India — Multi-brand SEO leadership across 13+ global accounts</h2>
          <p className="sub" style={{ maxWidth: 720, marginTop: 12 }}>At Dentsu India, one of the world&apos;s largest integrated marketing networks, I led SEO and ASO strategy for a portfolio of 13+ global and Indian brands — translating their business goals into data-driven organic growth while managing a 28-member team of analysts across multiple client accounts.</p>
          <div className="metric-grid-3">{dentsuTopMetrics.map((m) => <MetricCard key={m.label} {...m} />)}</div>
          <div className="metric-grid-4" style={{ marginTop: 16 }}>{dentsuSecondaryMetrics.map((m) => <MetricCard key={m.label} {...m} small />)}</div>
          <div style={{ marginTop: 40 }}>
            <span className="lbl"><Sparkles size={14} /> Systems &amp; Innovation Built</span>
            <div className="two-col" style={{ marginTop: 16 }}>{dentsuSystems.map((sys) => (<div key={sys.title} className="card-plain"><h4>{sys.title}</h4><p>{sys.desc}</p></div>))}</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* WORK SAMPLES */}
      <section className="sec" id="samples">
        <div className="wrap">
          <span className="lbl"><FileText size={14} /> Work Samples</span>
          <h2 className="h2" style={{ fontFamily: "var(--ff-display)" }}>Planning artifacts — showing the thinking behind the execution</h2>
          <p className="sub">These documents show how I plan organic growth at the strategic level — tied to revenue, category analysis, and operational execution, not just keyword targets.</p>
          <div className="file-list">
            {workSamples.map((s) => (
              <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" className="file-card">
                <div className="file-icon">{fileIcons[s.icon]}</div>
                <div className="file-info"><h5>{s.title}</h5><p>{s.desc}</p></div>
                <div className="file-arrow"><ArrowRight size={18} /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CASE STUDIES */}
      <section className="sec sec-alt" id="case-studies">
        <div className="wrap">
          <span className="lbl"><BarChart3 size={14} /> Published Case Studies</span>
          <h2 className="h2" style={{ fontFamily: "var(--ff-display)" }}>Client-published results — recognised by CMOs</h2>
          <p className="sub">Three case studies published on Merkle (Dentsu) — all recognised by client CMOs for measurable organic growth.</p>
          {caseStudies.map((cs) => (
            <div key={cs.title} className="cs-card" style={{ marginTop: 32 }}>
              <div className="cs-head"><div>
                <span className="tag tag-green" style={{ marginBottom: 10 }}><BadgeCheck size={10} /> Published &middot; Merkle / Dentsu</span>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: "var(--ink)", marginTop: 8, fontFamily: "var(--ff-display)" }}>{cs.title}</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 4 }}>{cs.subtitle}</p>
              </div></div>
              <div className="cs-body">
                <div className="two-col" style={{ gap: 28 }}>
                  <div><div style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>The Challenge</div><p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>{cs.challenge}</p></div>
                  <div><div style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>My Approach</div><p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>{cs.approach}</p></div>
                </div>
                <div className="cs-mets">{cs.metrics.map((m) => (<div key={m.label} className="cs-met"><div className="cs-met-n" style={{ fontFamily: "var(--ff-display)" }}>{m.value}</div><div className="cs-met-l">{m.label}</div></div>))}</div>
                <a href={cs.link} target="_blank" rel="noopener noreferrer" className="cs-link">Read Full Case Study on Merkle <ExternalLink size={13} /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* THOUGHT LEADERSHIP */}
      <section className="sec" id="thought-leadership">
        <div className="wrap">
          <span className="lbl"><Award size={14} /> Thought Leadership &amp; Speaking</span>
          <h2 className="h2" style={{ fontFamily: "var(--ff-display)" }}>Published work &amp; industry engagement</h2>
          <div className="proof-grid">
            {thoughtLeadership.map((item) => (
              <div key={item.title} className="proof-card">
                <span className="proof-tag" style={{ background: tagColorMap[item.tagColor].bg, color: tagColorMap[item.tagColor].color }}>{item.tag}</span>
                <h4>{item.title}</h4><p>{item.desc}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="proof-link">View on LinkedIn <ChevronRight size={14} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SKILLS */}
      <section className="sec sec-alt" id="skills">
        <div className="wrap">
          <span className="lbl"><Sparkles size={14} /> Capabilities Stack</span>
          <h2 className="h2" style={{ fontFamily: "var(--ff-display)" }}>Tools, skills &amp; technical fluency</h2>
          <p className="sub">I believe in being a practitioner, not just a strategist. These are the tools and skills I use hands-on.</p>
          <div style={{ marginTop: 32 }}>
            {skillCategories.map((cat) => (
              <div key={cat.name} style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>{cat.name}</div>
                <div className="skill-chips">{cat.skills.map((s) => { const Icon = skillIconMap[s]; return (<span key={s} className="skill-chip">{Icon && <Icon size={14} />}{s}</span>); })}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* GLOBAL */}
      <section className="sec" id="global">
        <div className="wrap">
          <span className="lbl"><Globe size={14} /> Global Exposure</span>
          <h2 className="h2" style={{ fontFamily: "var(--ff-display)" }}>International market experience</h2>
          <p className="sub">My international exposure spans remote growth engagements across four countries — collaborating with globally distributed teams and adapting strategies to diverse market contexts.</p>
          <div className="globe-grid">
            {globalExposure.map((item) => (<div key={item.country} className="globe-card"><div className="globe-flag">{item.flag}</div><div className="globe-country">{item.country}</div><div className="globe-desc">{item.desc}</div></div>))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CONTACT */}
      <section className="closing-section" id="contact">
        <div className="wrap closing-inner">
          <h2 style={{ fontFamily: "var(--ff-display)" }}>Let&apos;s build something that scales.</h2>
          <p>I&apos;m open to leadership conversations in organic growth, PLG, product strategy, and growth engineering. If you&apos;re building something ambitious and need someone who designs systems — not just campaigns — I&apos;d love to talk.</p>

          <ContactForm />

          <div className="contact-divider">or reach out directly</div>

          <div className="closing-btns">
            <a href={`mailto:${siteConfig.email}`} className="btn-primary"><Mail size={16} /> {siteConfig.email}</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost"><LinkedinIcon size={16} /> LinkedIn Profile</a>
            <a href={`tel:${siteConfig.phone}`} className="btn-ghost"><Phone size={16} /> {siteConfig.phone}</a>
          </div>
        </div>
      </section>

      {/* CONDENSED */}
      <section className="sec" id="condensed" style={{ background: "var(--cream-2)" }}>
        <div className="wrap">

          <h2 className="h2" style={{ fontFamily: "var(--ff-display)" }}>Condensed leave-behind version</h2>

          <div className="onepager">
            <div className="onepager-head">
              <div><div className="onepager-name" style={{ fontFamily: "var(--ff-display)" }}>Shubham Goyal</div><div className="onepager-role">Organic Growth Lead &nbsp;&middot;&nbsp; SEO &nbsp;&middot;&nbsp; PLG &nbsp;&middot;&nbsp; AI Content Systems</div></div>
              <div className="onepager-contact">{siteConfig.email}<br />{siteConfig.phone}<br />{siteConfig.linkedinHandle}</div>
            </div>
            <p className="onepager-bio">I build scalable organic growth systems at the intersection of SEO, product, engineering, and AI. Currently leading organic growth at Truemeds (Sequoia/Accel-backed, $350M+ valuation), where I&apos;ve scaled organic sessions from 0.4M to 10.9M/month and added $11.1M in incremental ARR. Previously led SEO for 13+ brands at Dentsu India including Amazon Business, P&amp;G, and Microsoft — managing a 28-person team. Award: Inkspell Mcube Best Healthcare SEO. Ranked #8 SimilarWeb Digital 100 (2026).</p>
            <div className="onepager-stats">
              {[{ n: "27x", l: "Traffic Growth" }, { n: "$11.1M", l: "ARR Added" }, { n: "250K+", l: "Pages via CMS" }, { n: "28+", l: "Team Led" }].map((s) => (<div key={s.l} className="ops"><div className="ops-n" style={{ fontFamily: "var(--ff-display)" }}>{s.n}</div><div className="ops-l">{s.l}</div></div>))}
            </div>
            <div className="onepager-cols">
              <div><h4>Truemeds (Jan 2023 – Present)</h4><p>Organic Growth Lead. Built AI-ready CMS, 250K-page content engine, community ORM programme (Reddit/Quora sentiment turnaround), 50+ A/B tests, CSR→SSR migration (72% crawl gain), DR growth 28→73. Direct C-suite collaboration. $2–3M budget.</p></div>
              <div><h4>Dentsu India (Jan 2020 – Dec 2022)</h4><p>Business Strategy Manager. Led SEO/ASO for Amazon Business, P&amp;G, Freecharge, HBR Ascend, UNICEF UAE and 8+ more. Built traffic forecasting tool (MAE &lt;15%). 28-person team. 19x clicks (Freecharge), 211% sessions (PG Shop India), 3 published CMO case studies.</p></div>
            </div>
            <div className="onepager-footer"><strong>Education:</strong> MBA, Warwick Business School &nbsp;&middot;&nbsp;<strong>Awards:</strong> Inkspell Mcube Best Healthcare SEO &middot; SimilarWeb Digital 100 #8 (2026) &middot; AACI Certification &nbsp;&middot;&nbsp;<strong>Speaking:</strong> Christ University, India &nbsp;&middot;&nbsp;<strong>Skills:</strong> SEO &middot; ASO &middot; AEO/GEO &middot; CRO &middot; PLG &middot; CMS Architecture &middot; AI Product Mgmt &middot; GA4 &middot; BigQuery &middot; SQL &middot; Mixpanel &middot; A/B Testing &middot; Figma &middot; Ahrefs &middot; Optimizely</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16 }}>
          <span>Shubham Goyal Portfolio &nbsp;&middot;&nbsp; April 2026</span>
          <span>&middot;</span>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 4 }}><LinkedinIcon size={12} /> LinkedIn</a>
          <span>&middot;</span>
          <a href={`mailto:${siteConfig.email}`} style={{ display: "flex", alignItems: "center", gap: 4 }}><Mail size={12} /> Email</a>
        </div>
      </footer>
    </>
  );
}
