import { getProdutos } from '@/lib/db'
import { ProductCard } from '@/components/ProductCard'

export default async function ProdutosPage() {
  const { data: products, error } = await getProdutos()

  if (error) {
    return <div>Erro ao carregar produtos</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nossos Produtos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
} 