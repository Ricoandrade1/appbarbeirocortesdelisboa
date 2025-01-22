import { supabase } from './supabase'

export async function testConnection() {
  const { data, error } = await supabase
    .from('products')
    .select('count')
    .single()

  if (error) {
    console.error('Erro de conexão:', error)
    return false
  }

  console.log('Conexão bem sucedida!')
  return true
} 