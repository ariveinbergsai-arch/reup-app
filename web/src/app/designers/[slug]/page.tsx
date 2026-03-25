import DesignerContent from './DesignerContent'

const designerSlugs = [
  'nike', 'supreme', 'jordan', 'stussy', 'carhartt', 'the-north-face',
  'vintage', 'levis', 'adidas', 'new-balance', 'yeezy', 'off-white',
  'balenciaga', 'gucci', 'prada', 'acne-studios', 'rick-owens', 'raf-simons',
  'comme-des-garcons', 'maison-margiela', 'stone-island', 'palm-angels',
  'fear-of-god', 'kapital'
]

export function generateStaticParams() {
  return designerSlugs.map((slug) => ({ slug }))
}

export default async function DesignerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <DesignerContent slug={slug} />
}
