// Función que usamos en components/user/usuario_dashboard para calcular el porcentaje
// de cada categoria para mostrarlo.

interface CategoriaScore {
  categoria: string
  actividades: { aportePorcentajeCategoria: number }[]
}

export function calcularPorcentajePorCategoria(scores: CategoriaScore[]) {
  return scores.map(({ categoria, actividades }) => ({
    categoria,
    porcentaje: Math.round(
      actividades.reduce((acc, act) => acc + act.aportePorcentajeCategoria, 0)
    ),
  }))
}