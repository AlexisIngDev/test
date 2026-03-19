import type { ComponentType } from 'react';
import FeatureGrid from '@/components/sections/FeatureGrid';
import Hero from '@/components/sections/Hero';
import Pricing from '@/components/sections/Pricing';
import type { PageBlock } from '@/types/page-builder';

interface PageBuilderProps {
  blocks: PageBlock[];
}

const componentRegistry: Record<string, ComponentType<any>> = {
  hero: Hero,
  'feature-grid': FeatureGrid,
  pricing: Pricing,
};

export default function PageBuilder({ blocks }: PageBuilderProps) {
  if (!blocks.length) {
    return null;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-zinc-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-linear-to-br from-white/18 via-zinc-300/8 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),rgba(0,0,0,0)_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:100%_44px] opacity-15"
      />

      <div className="relative z-10">
        {blocks.map((block) => {
          const Component = componentRegistry[block.type];

          if (!Component) {
            return (
              <section key={block.id} className="px-4 py-12 sm:py-16">
                <div className="mx-auto w-full max-w-[1080px]">
                  <div
                    className="rounded-2xl border border-zinc-800 bg-zinc-950/90 px-6 py-5 font-medium text-zinc-200"
                    role="status"
                  >
                    Unsupported component type: {block.type}
                  </div>
                </div>
              </section>
            );
          }

          return <Component key={block.id} {...block.props} />;
        })}
      </div>
    </main>
  );
}
