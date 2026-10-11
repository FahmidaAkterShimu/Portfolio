export default function Section({ id, title, eyebrow, lead, children }) {
  return (
    <section id={id} className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {(eyebrow || title) && (
          <header className="mb-10">
            {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-accent">{eyebrow}</p>}
            {title && <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h2>}
            {lead && <p className="mt-3 max-w-xl text-muted">{lead}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
