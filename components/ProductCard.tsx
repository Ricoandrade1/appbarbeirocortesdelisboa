import Image from 'next/image'
import { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="relative h-48 w-full mb-4">
        <Image
          src={product.image_url || '/placeholder.png'}
          alt={product.name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">R$ {product.price.toFixed(2)}</span>
        <span className="text-sm text-gray-500">
          Estoque: {product.stock_quantity}
        </span>
      </div>
    </div>
  )
} 