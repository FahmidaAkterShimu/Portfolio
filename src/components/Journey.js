
import Reveal from "./Reveal";

export default function Journey({ items }) {
  return (
    <div className="overflow-x-clip">
      <ol className="relative grid gap-12 before:absolute before:bottom-0 before:left-3 before:top-0 before:w-px before:bg-line md:before:left-1/2">
        {items.map((j, i) => {
          const left = i % 2 === 0;

          return (
            <li
              key={j.title}
              className="relative pl-10 md:grid md:grid-cols-2 md:pl-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-3 top-9 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-accent bg-bg md:left-1/2"
              />

              <Reveal
                from={left ? "left" : "right"}
                className={
                  left
                    ? "md:col-start-1 md:pr-14"
                    : "md:col-start-2 md:pl-14"
                }
              >
                <div className="relative rounded-2xl border border-line bg-panel p-6">
                  <span
                    aria-hidden="true"
                    className={`absolute top-[2.65rem] hidden h-px w-14 bg-line md:block ${
                      left ? "-right-14" : "-left-14"
                    }`}
                  />

                  <span className="inline-block rounded-md border border-accent/40 bg-accent/10 px-3 py-0.5 text-sm text-accent">
                    {j.years}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">
                    {j.title}
                  </h3>

                  {j.department && (
                    <h4 className="mt-1 text-[18px]">
                      {j.department}
                    </h4>
                  )}

                  {j.institute && (
                    <p className="mt-3 text-base">
                      {j.institute}
                    </p>
                  )}

                  {j.location && (
                    <p className="mt-1 text-sm text-muted">
                      {j.location}
                    </p>
                  )}

                  {j.text && (
                    <p className="mt-3 text-muted">
                      {j.text}
                    </p>
                  )}
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
