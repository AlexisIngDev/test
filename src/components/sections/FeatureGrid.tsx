import type { FeatureGridProps } from '@/types/page-builder';

export default function FeatureGrid({ title, description, items }: FeatureGridProps) {
  return (
    <section id="features" className="px-4 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="mb-9">
          <h2 className="mb-3 text-[clamp(1.9rem,4vw,2.9rem)] font-semibold tracking-[-0.025em] text-white animate-[fade-up_700ms_ease-out_both]">
            {title}
          </h2>
          <p className="max-w-[760px] leading-relaxed text-zinc-400 animate-[fade-up_850ms_ease-out_both]">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 opacity-0 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-950 animate-[fade-up_700ms_ease-out_forwards]"
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <span className="mb-5 inline-flex rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-[11px] font-medium tracking-[0.08em] text-zinc-300">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
