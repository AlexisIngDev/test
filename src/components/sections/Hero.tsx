import Link from 'next/link';
import type { HeroProps } from '@/types/page-builder';

export default function Hero({ eyebrow, title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="px-4 pt-14 pb-10 sm:pt-24 sm:pb-14">
      <div className="mx-auto w-full max-w-[1080px]">
        {eyebrow ? (
          <p className="mb-5 inline-flex rounded-full border border-zinc-800 bg-zinc-900/80 px-3.5 py-1.5 text-xs font-medium tracking-[0.11em] text-zinc-300 uppercase animate-[fade-up_600ms_ease-out_both]">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="max-w-[13ch] text-[clamp(2.5rem,7vw,5.4rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-white animate-[fade-up_700ms_ease-out_both]">
          {title}
        </h1>
        <p className="mt-5 max-w-[720px] text-[1.04rem] leading-relaxed text-zinc-400 sm:text-lg animate-[fade-up_850ms_ease-out_both]">
          {subtitle}
        </p>

        <div className="mt-9 flex flex-wrap gap-3 animate-[fade-up_1000ms_ease-out_both]">
          <Link
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-200"
            href={primaryCta.href}
          >
            {primaryCta.label}
          </Link>

          {secondaryCta ? (
            <Link
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/70 px-5 py-2.5 text-sm font-medium text-zinc-200 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-900"
              href={secondaryCta.href}
            >
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>

        <div className="mt-10 flex flex-wrap gap-2 text-[11px] font-medium tracking-[0.08em] text-zinc-400 uppercase animate-[fade-up_1150ms_ease-out_both]">
          <span className="rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1.5">Headless CMS Pattern</span>
          <span className="rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1.5">Typed Blocks</span>
          <span className="rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1.5">Graceful Fallback</span>
        </div>
      </div>
    </section>
  );
}
