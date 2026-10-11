import { FiLayout, FiServer, FiDatabase, FiSmartphone } from "react-icons/fi";
import { site, services, stack, techCards, problemSolving, projects, journey, faqs, leads } from "@/lib/data";
import { getIcon, hasIcon } from "@/lib/icons";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ProjectStack from "@/components/ProjectStack";
import Journey from "@/components/Journey";
import TechCards from "@/components/TechCards";
import ProblemSolving from "@/components/ProblemSolving";

const tech = [...new Set(stack.flatMap((g) => g.items))].filter(hasIcon);
const serviceIcons = [FiLayout, FiServer, FiDatabase, FiSmartphone];

export default function Home() {
  return (
    <main>
      <Hero site={site} projects={projects} />

      <div className="marquee marquee-mask w-full overflow-hidden py-6" aria-hidden="true">
        <div className="track flex w-max">
          {[...tech, ...tech].map((t, i) => {
            const Icon = getIcon(t);
            return (
              <span key={i} className="inline-flex items-center gap-3 whitespace-nowrap pr-14 text-2xl font-bold text-muted">
                <Icon className="h-7 w-7" />{t}
              </span>
            );
          })}
        </div>
      </div>

      <Section id="about" title="About me">
        {site.about.map((p, i) => <p key={i} className="mb-3 max-w-3xl text-lg">{p}</p>)}
      </Section>

      <Section id="services">
        <div className="mb-10 grid gap-4 md:grid-cols-2 md:items-end">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">What I can build<br />for your team</h2>
          <p className="max-w-md text-muted md:justify-self-end">{leads.services}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <Reveal key={s.title} delay={i * 90}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-panel p-7 transition-colors hover:border-accent">
                  <span aria-hidden="true" className="absolute right-6 top-4 text-6xl font-black text-ink/5 transition-colors group-hover:text-accent/20">0{i + 1}</span>
                  <span className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"><Icon size={22} /></span>
                  <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
                  <p className="max-w-md text-muted">{s.text}</p>
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section id="stack" eyebrow="Technical expertise" title="My Tech Stack" lead={leads.stack}>
        <TechCards cards={techCards} />
      </Section>

      <Section id="problem-solving" eyebrow="Problem solving" title="Practice that builds fundamentals" lead={leads.problems}>
        <ProblemSolving data={problemSolving} />
      </Section>

      <Section id="projects" title="Selected work">
        <ProjectStack projects={projects} />
      </Section>

      <Section id="journey" title="Journey">
        <Journey items={journey} />
      </Section>

      <Section id="faq" title="Common questions">
        {faqs.map((f) => (
          <details key={f.q} className="max-w-3xl border-b border-line py-4">
            <summary className="cursor-pointer font-semibold">{f.q}</summary>
            <p className="mt-2 text-muted">{f.a}</p>
          </details>
        ))}
      </Section>
    </main>
  );
}
