import Reveal from "./Reveal";
import { getIcon } from "@/lib/icons";

const level = {
  Easy: "bg-green-500/15 text-green-600 dark:text-green-400",
  Medium: "bg-orange-500/15 text-orange-600 dark:text-orange-400",
  Hard: "bg-red-500/15 text-red-600 dark:text-red-400",
};

export default function ProblemSolving({ data }) {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {data.platforms.map((p, i) => {
          const Icon = getIcon(p.icon);
          return (
            <Reveal key={`${p.name}-${i}`} delay={i * 90}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="lift group block rounded-3xl border border-line bg-panel p-7">
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent"><Icon size={22} /></span>
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-sm text-muted">{p.handle}</p>
                {p.language && (
                  <p className="mt-1 text-sm text-muted">
                    {p.language}
                  </p>
                )}
                <p className="mt-3 text-muted">{p.stat}</p>
                <p className="mt-4 font-semibold text-accent">View profile <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">↗</span></p>
              </a>
            </Reveal>
          );
        })}
      </div>

      <h3 className="mb-4 mt-14 text-2xl font-bold tracking-tight">Featured solutions</h3>
      <ul className="grid gap-3">
        {data.featured.map((f, i) => (
          <li key={f.title}>
            <Reveal delay={i * 90}>
              <div className="flex flex-col gap-4 rounded-2xl border border-line bg-panel p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-bold">{f.title}</p>
                  <p className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                    <span className="text-muted">{f.language}</span>
                    <span className="tag">{f.topic}</span>
                    <span className={`rounded-full px-3 py-0.5 font-medium ${level[f.difficulty] || ""}`}>{f.difficulty}</span>
                  </p>
                </div>
                <p className="flex gap-5 font-semibold">
                  <a className="link" href={f.url} target="_blank" rel="noopener noreferrer"> View Problem & Solution ↗</a>
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </>
  );
}
