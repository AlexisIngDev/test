import Link from 'next/link';
import type { PricingProps } from '@/types/page-builder';

export default function Pricing({ title, description, plans }: PricingProps) {
  return (
    <section id="pricing" className="px-4 pt-10 pb-18 sm:pt-14 sm:pb-24">
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="mb-9">
          <h2 className="mb-3 text-[clamp(1.9rem,4vw,2.9rem)] font-semibold tracking-[-0.025em] text-white animate-[fade-up_700ms_ease-out_both]">
            {title}
          </h2>
          <p className="max-w-[760px] leading-relaxed text-zinc-400 animate-[fade-up_850ms_ease-out_both]">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`flex h-full flex-col rounded-2xl border p-6 opacity-0 animate-[fade-up_700ms_ease-out_forwards] ${
                plan.highlighted
                  ? 'border-zinc-500 bg-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]'
                  : 'border-zinc-800 bg-zinc-950/80'
              }`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {plan.highlighted ? (
                <span className="mb-4 inline-flex w-fit rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-[0.68rem] font-medium tracking-[0.12em] text-zinc-200 uppercase">
                  Most Popular
                </span>
              ) : null}

              <h3 className="text-xl font-semibold tracking-[-0.015em] text-white">{plan.name}</h3>
              <p className="my-2 text-[2.1rem] leading-none font-semibold text-white">{plan.price}</p>
              <p className="leading-relaxed text-zinc-400">{plan.description}</p>

              <ul className="my-5 grid list-none gap-3 p-0 text-zinc-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-zinc-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                className={`mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 ${
                  plan.highlighted ? 'bg-pink-500 text-black/25 hover:bg-zinc-200' : 'bg-zinc-800 hover:bg-zinc-700'
                }`}
                href={plan.ctaHref}
              >
                {plan.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
