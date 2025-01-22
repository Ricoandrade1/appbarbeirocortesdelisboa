import { supabase } from './supabase'

export async function testConnection() {
  try {
    console.log('Testando conexão...')
    console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
    
    const { data, error } = await supabase
      .from('products')
      .select('count')
      .single()

    if (error) {
      console.error('Erro de conexão:', error)
      return {
        success: false,
        error: error.message
      }
    }

    console.log('Conexão bem sucedida!')
    return {
      success: true,
      data
    }
  } catch (error) {
    console.error('Erro:', error)
    return {
      success: false,
      error: 'Erro ao conectar'
    }
  }
} 