// Funções utilitárias para o sistema SAR-EB

/**
 * Formata data no padrão brasileiro (DD/MM/AAAA)
 */
export function formatarData(data: Date | string): string {
  const d = typeof data === 'string' ? new Date(data) : data;
  return d.toLocaleDateString('pt-BR');
}

/**
 * Formata data e hora no padrão brasileiro
 */
export function formatarDataHora(data: Date | string): string {
  const d = typeof data === 'string' ? new Date(data) : data;
  return d.toLocaleString('pt-BR');
}

/**
 * Formata valor monetário em Reais
 */
export function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}

/**
 * Calcula dias restantes até uma data
 */
export function diasRestantes(dataFutura: Date | string): number {
  const hoje = new Date();
  const futuro = typeof dataFutura === 'string' ? new Date(dataFutura) : dataFutura;
  const diff = futuro.getTime() - hoje.getTime();
  return Math.ceil(diff / (1000 * 3600 * 24));
}

/**
 * Verifica se uma data está próxima ao vencimento (30 dias)
 */
export function estaProximoVencimento(data: Date | string): boolean {
  const dias = diasRestantes(data);
  return dias > 0 && dias <= 30;
}

/**
 * Verifica se uma data está vencida
 */
export function estaVencido(data: Date | string): boolean {
  return diasRestantes(data) < 0;
}

/**
 * Retorna o status de uma certidão baseado na data de validade
 */
export function getStatusCertidao(validade: Date | string): 'Válida' | 'Próxima ao vencimento' | 'Vencida' {
  if (estaVencido(validade)) return 'Vencida';
  if (estaProximoVencimento(validade)) return 'Próxima ao vencimento';
  return 'Válida';
}

/**
 * Calcula porcentagem
 */
export function calcularPorcentagem(valor: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((valor / total) * 100);
}

/**
 * Gera número de protocolo fictício
 */
export function gerarProtocolo(): string {
  const ano = new Date().getFullYear();
  const numero = Math.floor(Math.random() * 9999999).toString().padStart(7, '0');
  return `${ano}/${numero}`;
}

/**
 * Valida CPF (simplificado)
 */
export function validarCPF(cpf: string): boolean {
  const cpfLimpo = cpf.replace(/\D/g, '');
  return cpfLimpo.length === 11;
}

/**
 * Valida e-mail
 */
export function validarEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Formata CPF
 */
export function formatarCPF(cpf: string): string {
  const cpfLimpo = cpf.replace(/\D/g, '');
  return cpfLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

/**
 * Formata telefone
 */
export function formatarTelefone(telefone: string): string {
  const tel = telefone.replace(/\D/g, '');
  if (tel.length === 11) {
    return tel.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  return tel.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
}

/**
 * Trunca texto com reticências
 */
export function truncarTexto(texto: string, limite: number): string {
  if (texto.length <= limite) return texto;
  return texto.substring(0, limite) + '...';
}

/**
 * Obtém iniciais de um nome
 */
export function obterIniciais(nome: string): string {
  return nome
    .split(' ')
    .map(palavra => palavra[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
}

/**
 * Valida senha forte
 */
export function validarSenhaForte(senha: string): boolean {
  // Mínimo 8 caracteres, pelo menos uma letra maiúscula, uma minúscula e um número
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(senha);
}

/**
 * Gera cor baseada em string (para avatares)
 */
export function gerarCorPorString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const cores = [
    '#1a4d2e', // verde militar
    '#4f7942', // verde escuro
    '#d4af37', // dourado
    '#2563eb', // azul
    '#7c3aed', // roxo
  ];
  return cores[Math.abs(hash) % cores.length];
}

/**
 * Delay assíncrono (útil para simulações)
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
