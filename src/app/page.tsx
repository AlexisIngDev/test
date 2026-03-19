import PageBuilder from '@/components/PageBuilder';
import pageData from '@/data/page-data.json';
import type { PageBlock } from '@/types/page-builder';

export default function HomePage() {
  const blocks = pageData as PageBlock[];

  return <PageBuilder blocks={blocks} />;
}
