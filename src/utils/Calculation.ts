export function calcularRendimentoPorHoraEmReais(salarioCentavos: number, horasTrabalhadasPorDiaMillis: number): number {
    // Calcula o total de horas trabalhadas no mês em horas
    const totalHorasTrabalhadasNoMes = (horasTrabalhadasPorDiaMillis * 22) / (1000 * 60 * 60);
    
    // Calcula o rendimento por hora em centavos
    const rendimentoPorHoraCentavos = salarioCentavos / totalHorasTrabalhadasNoMes;
    
    // Converte o rendimento por hora para Reais e arredonda para duas casas decimais
    const rendimentoPorHoraReais = parseFloat((rendimentoPorHoraCentavos / 100).toFixed(2));
    
    return rendimentoPorHoraReais;
  }
