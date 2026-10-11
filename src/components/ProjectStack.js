import Image from "next/image";

export default function ProjectStack({ projects }) {
  return (
    <ol className="pb-10">
      {projects.map((p, i) => (
        <li key={p.title} className="sticky mb-10 last:mb-0" style={{ top: `${6.5 + i * 1.25}rem` }}>
          <article className="grid gap-8 rounded-3xl border border-line bg-panel p-6 shadow-lg md:min-h-104 md:grid-cols-2 md:p-10">
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold tracking-tight md:text-4xl">{p.title}</h3>
              <p className="mt-1 text-lg text-muted">{p.subtitle}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted">{p.stack.join(", ")}</p>
              <ul className="mt-5 grid gap-2 text-muted">
                {p.features.map((f) => <li key={f} className="flex gap-2"><span aria-hidden="true" className="text-accent">↳</span><span>{f}</span></li>)}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a className="btn" href={p.live} target="_blank" rel="noopener noreferrer">View Project</a>
                <a className="link font-semibold" href={p.client} target="_blank" rel="noopener noreferrer">{p.server ? "Client code" : "Source code"}</a>
                {p.server && <a className="link font-semibold" href={p.server} target="_blank" rel="noopener noreferrer">Server code</a>}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-bg">
              <div className="flex gap-1.5 border-b border-line px-4 py-3" aria-hidden="true">
                <i className="h-3 w-3 rounded-full bg-[#ff5f57]" /><i className="h-3 w-3 rounded-full bg-[#febc2e]" /><i className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="relative aspect-16/10">
                {p.image ? (
                  <Image src={p.image} alt={`${p.title} screenshot`} fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover object-top" />
                ) : (
                  <div className="grid h-full place-items-center bg-accent/10 text-2xl font-bold text-accent">{p.title}</div>
                )}
              </div>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}
