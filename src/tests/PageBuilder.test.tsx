import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PageBuilder from '@/components/PageBuilder';
import type { PageBlock } from '@/types/page-builder';

describe('PageBuilder', () => {
  it('renders supported component types', () => {
    const blocks: PageBlock[] = [
      {
        id: 'hero-1',
        type: 'hero',
        props: {
          title: 'Build landing pages from JSON',
          subtitle: 'Rendered through a dynamic page builder.',
          primaryCta: {
            label: 'Start Free Trial',
            href: '#pricing',
          },
        },
      },
      {
        id: 'features-1',
        type: 'feature-grid',
        props: {
          title: 'What this renderer can do',
          description: 'Render sections dynamically.',
          items: [
            {
              title: 'Flexible content',
              description: 'Driven by a CMS-style payload.',
            },
          ],
        },
      },
      {
        id: 'pricing-1',
        type: 'pricing',
        props: {
          title: 'Simple pricing',
          description: 'A pricing section.',
          plans: [
            {
              name: 'Starter',
              price: '$9/mo',
              description: 'Basic access',
              features: ['1 page'],
              ctaLabel: 'Choose Starter',
              ctaHref: '#',
            },
          ],
        },
      },
    ];

    render(<PageBuilder blocks={blocks} />);

    expect(
      screen.getByRole('heading', { name: 'Build landing pages from JSON' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: 'What this renderer can do' })).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: 'Simple pricing' })).toBeInTheDocument();
  });

  it('renders a visible fallback for unknown component types', () => {
    const blocks: PageBlock[] = [
      {
        id: 'unknown-1',
        type: 'slider',
        props: {},
      },
    ];

    render(<PageBuilder blocks={blocks} />);

    expect(screen.getByText('Unsupported component type: slider')).toBeInTheDocument();
  });

  it('continues rendering valid components after an unknown block type', () => {
    const blocks: PageBlock[] = [
      {
        id: 'hero-1',
        type: 'hero',
        props: {
          title: 'Top section',
          subtitle: 'Hero section subtitle',
          primaryCta: {
            label: 'Get Started',
            href: '#',
          },
        },
      },
      {
        id: 'unknown-1',
        type: 'slider',
        props: {},
      },
      {
        id: 'pricing-1',
        type: 'pricing',
        props: {
          title: 'Bottom pricing',
          description: 'Pricing still renders after unknown content.',
          plans: [
            {
              name: 'Pro',
              price: '$29/mo',
              description: 'Advanced access',
              features: ['Unlimited sections'],
              ctaLabel: 'Choose Pro',
              ctaHref: '#',
            },
          ],
        },
      },
    ];

    render(<PageBuilder blocks={blocks} />);

    expect(screen.getByRole('heading', { name: 'Top section' })).toBeInTheDocument();
    expect(screen.getByText('Unsupported component type: slider')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Bottom pricing' })).toBeInTheDocument();
  });

  it('renders nothing for an empty blocks array', () => {
    const { container } = render(<PageBuilder blocks={[]} />);

    expect(container).toBeEmptyDOMElement();
  });
});
