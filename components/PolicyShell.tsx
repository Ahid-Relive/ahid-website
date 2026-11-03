import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function PolicyShell({
  pill,
  title,
  meta,
  hero,
  children,
  footer = true,
}: {
  pill: string;
  title: string;
  meta: string;
  hero?: React.ReactNode;
  children: React.ReactNode;
  footer?: boolean;
}) {
  return (
    <main className="policy-page">
      <SiteHeader />

      <section className="shell policy-hero reveal-up">
        <p className="pill">{pill}</p>
        <h1>{title}</h1>
        <p className="policy-meta">{meta}</p>
        {hero}
      </section>

      <article className="shell policy-card reveal-up">{children}</article>

      {footer && <SiteFooter />}
    </main>
  );
}
