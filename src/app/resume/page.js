import Link from "next/link";
import { site, stack, projects, education } from "@/lib/data";

export const metadata = { title: `Resume | ${site.name}` };

const ext = { target: "_blank", rel: "noopener noreferrer" };

export default function Resume() {
  return (
    <div className="px-4 pb-12 print:p-0">
      <div className="mx-auto flex max-w-4xl items-center justify-between py-4 print:hidden">
        <Link className="link font-semibold" href="/">Back to portfolio</Link>
        <a className="btn btn-primary px-4! py-2! text-sm" href={site.resume} download>Download PDF</a>
      </div>
      <article className="paper mx-auto max-w-4xl rounded-xl bg-white p-8 text-neutral-900 sm:p-10 print:rounded-none print:p-0">
        <h1 className="text-4xl font-extrabold tracking-tight">{site.name}</h1>
        <p className="text-xl font-semibold">{site.role}</p>
        <p>{site.location} | <a href={`mailto:${site.email}`}>{site.email}</a></p>
        <p><a href={site.linkedin} {...ext}>LinkedIn</a> | <a href={site.github} {...ext}>GitHub</a></p>

        <h2>Career Objective</h2>
        {site.about.map((p, i) => <p key={i}>{p}</p>)}

        <h2>Technical Skills</h2>
        <ul className="grid gap-1">
          {stack.map((g) => <li key={g.group}><strong>{g.group}:</strong> {g.items.join(", ")}</li>)}
        </ul>


        <h2>Projects</h2>
        {projects.map((p, i) => (
          <div key={p.title} className="mb-4">
            <div className="flex items-start justify-between gap-4">
              <h3 className="min-w-0 font-bold">
                {i + 1}. {p.title} - {p.subtitle}
              </h3>

              <div className="flex shrink-0 flex-wrap justify-end gap-x-2 font-normal">
                <a href={p.live} {...ext}>Live</a>
                <span>|</span>
                <a href={p.client} {...ext}>
                  {p.server ? "Client" : "GitHub"}
                </a>
                {p.server && (
                  <>
                    <span>|</span>
                    <a href={p.server} {...ext}>Server</a>
                  </>
                )}
              </div>
            </div>

            <p>
              <strong>Tech Stack:</strong> {p.stack.join(", ")}
            </p>

            <ul className="list-disc pl-5">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        ))}


        <h2>Education</h2>
        {education.map((e) => (
          <div key={e.degree} className="mb-3">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-bold">{e.degree}</h3>
              <span className="shrink-0 text-right font-normal">
                {e.years}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <p className="min-w-0">{e.school}</p>
              <p className="shrink-0 text-right">{e.result}</p>
            </div>
          </div>
        ))}


        <h2>Languages</h2>
        <p>{site.languages.join(" | ")}</p>
      </article>
    </div>
  );
}
