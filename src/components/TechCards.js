import Reveal from "./Reveal";
import { getIcon } from "@/lib/icons";

const tones = {
  yellow: "bg-yellow-500/15 text-yellow-500",
  blue: "bg-blue-500/15 text-blue-500",
  cyan: "bg-cyan-500/15 text-cyan-500",
  green: "bg-green-500/15 text-green-500",
  orange: "bg-orange-500/15 text-orange-500",
  violet: "bg-violet-500/15 text-violet-500",
};

export default function TechCards({ cards }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((c, i) => {
        const Icon = getIcon(c.icon);
        return (
          <Reveal key={c.title} delay={(i % 3) * 90}>
            <article className="lift rounded-3xl border border-line bg-panel p-8">
              <span className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl ${tones[c.tone] || tones.blue}`}>
                <Icon size={24} />
              </span>
              <h3 className="mb-3 text-2xl font-bold tracking-tight">{c.title}</h3>
              <ul className="grid gap-1.5 text-muted">{c.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
