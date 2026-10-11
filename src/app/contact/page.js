import { site, services } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: `Contact | ${site.name}` };

export default function Contact() {
  const h = "mb-1 text-lg font-bold";
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-[clamp(3.5rem,13vw,9rem)] font-extrabold uppercase leading-[.9] tracking-tighter">
        Let&apos;s<br /><span className="text-accent">Connect</span>
      </h1>
      <div className="mt-14 grid gap-12 pb-16 md:grid-cols-[1fr_2fr]">
        <div className="grid content-start gap-8">
          <div><h2 className={h}>Email</h2><a className="link" href={`mailto:${site.email}`}>{site.email}</a></div>
          <div>
            <h2 className={h}>Social</h2>
            <p className="grid gap-1">
              <a className="link w-fit" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="link w-fit" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>
        <ContactForm services={services} />
      </div>
    </main>
  );
}
