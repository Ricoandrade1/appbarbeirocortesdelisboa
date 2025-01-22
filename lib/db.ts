// Funções para Barbeiros
export async function getBarbeiros() {
  const { data, error } = await supabase
    .from('barbers')
    .select('*')
  return { data, error }
}

// Funções para Agendamentos
export async function criarAgendamento(dados: any) {
  const { data, error } = await supabase
    .from('appointments')
    .insert([dados])
  return { data, error }
}

// Funções para Produtos
export async function getProdutos() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
  return { data, error }
} 