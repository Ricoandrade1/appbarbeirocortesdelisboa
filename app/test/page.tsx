import { testConnection } from '@/lib/test-connection'

export default async function TestPage() {
  const result = await testConnection()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Teste de Conexão</h1>
      
      <div className={`p-4 rounded-md ${result.success ? 'bg-green-100' : 'bg-red-100'}`}>
        <p className="font-medium">
          Status: {result.success ? '✅ Conectado' : '❌ Erro de conexão'}
        </p>
        {!result.success && (
          <p className="text-red-600 mt-2">
            Erro: {result.error}
          </p>
        )}
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p>URL do Supabase: {process.env.NEXT_PUBLIC_SUPABASE_URL || 'Não definida'}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Tabelas do Banco:</h2>
        <pre className="bg-gray-100 p-4 rounded-md">
          ▸ appointments
          ▸ barbers
          ▸ clients
          ▸ products
          ▸ product_sales
          ▸ services
          ▸ users
        </pre>
      </div>
    </div>
  )
} 