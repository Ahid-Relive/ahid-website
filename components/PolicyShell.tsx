import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function PolicyShell({
  pill,
  title,
  meta,
  hero,
  children,
}: {
  pill: string;
  title: string;
  meta: string;
  hero?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main>
      <SiteHeader />

      <section className="shell policy-hero">
        <p className="eyebrow">{pill}</p>
        <h1>{title}</h1>
        <p className="policy-meta">{meta}</p>
        {hero}
      </section>

      <article className="shell policy-card">{children}</article>

      <SiteFooter />
    </main>
  );
}
