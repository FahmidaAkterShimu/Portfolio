import { site, services } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: `Contact | ${site.name}` };

export default function Contact() {
  const row = "flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-accent";
  const icon =
    "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent";

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Heading (grid er baire) */}
      <h1 className="text-[clamp(3.5rem,13vw,9rem)] font-extrabold uppercase leading-[.9] tracking-tighter">
        Let&apos;s<br /><span className="text-accent">Connect</span>
      </h1>

      {/* Form (left) + Cards (right): same top line theke shuru */}
      <div className="mt-14 grid items-start gap-12 pb-16 lg:grid-cols-[1.4fr_1fr]">
        <ContactForm services={services} />

        <aside className="grid content-start gap-5">
          <div className="rounded-xl border border-white/10 bg-white/3 p-6">
            <h2 className="mb-5 text-sm font-semibold">Or reach out directly</h2>
            <div className="grid gap-4">
              <a className={row} href={`mailto:${site.email}`}>
                <span className={icon}>✉</span>
                {site.email}
              </a>
              <a className={row} href={site.github} target="_blank" rel="noopener noreferrer">
                <span className={icon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" /></svg>
                </span>
                {site.github.replace("https://", "")}
              </a>
              <a className={row} href={site.linkedin} target="_blank" rel="noopener noreferrer">
                <span className={icon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3zM9.5 9.75h3.83v1.57h.05c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.12v5.88h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4z" /></svg>
                </span>
                {site.linkedin.replace("https://www.", "").replace("https://", "")}
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
            <p className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent shadow-[0_0_8px] shadow-accent" />
              Open to work
            </p>
            <p className="text-sm text-white/60">
              Available for full-time roles and interesting contract opportunities.
              Response within 24h.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}