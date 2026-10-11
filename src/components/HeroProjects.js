import Image from "next/image";

const pos = [
  { r: "-4deg", x: "0%", y: "8%", z: 30 },
  { r: "6deg", x: "17%", y: "-6%", z: 20 },
  { r: "-10deg", x: "-14%", y: "-12%", z: 10 },
];

export default function HeroProjects({ projects }) {
  return (
    <div className="fan relative mx-auto aspect-5/4 w-full max-w-xl" aria-hidden="true">
      {projects.slice(0, 3).map((p, i) => (
        <div
          key={p.title}
          className="fan-card absolute left-[10%] top-[14%] w-[76%] overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl"
          style={{ "--r": pos[i].r, "--tx": pos[i].x, "--ty": pos[i].y, "--d": `${i * 140}ms`, zIndex: pos[i].z }}
        >
          <div className="flex gap-1.5 border-b border-line px-3 py-2">
            <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><i className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="relative aspect-16/10">
            {p.image ? (
              <Image src={p.image} alt="" fill sizes="(min-width:1024px) 30vw, 80vw" className="object-cover object-top" />
            ) : (
              <div className="grid h-full place-items-center bg-accent/10 px-4 text-center text-xl font-bold text-accent">{p.title}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
