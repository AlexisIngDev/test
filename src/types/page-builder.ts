export interface Cta {
  label: string;
  href: string;
}

export interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeatureGridProps {
  title: string;
  description: string;
  items: FeatureItem[];
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

export interface PricingProps {
  title: string;
  description: string;
  plans: PricingPlan[];
}

export interface BaseBlock<TType extends string, TProps> {
  id: string;
  type: TType;
  props: TProps;
}

export type HeroBlock = BaseBlock<'hero', HeroProps>;
export type FeatureGridBlock = BaseBlock<'feature-grid', FeatureGridProps>;
export type PricingBlock = BaseBlock<'pricing', PricingProps>;
export type UnknownBlock = BaseBlock<string, Record<string, unknown>>;

export type PageBlock = HeroBlock | FeatureGridBlock | PricingBlock | UnknownBlock;
