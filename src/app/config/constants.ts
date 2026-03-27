// Constantes do sistema SAR-EB

export const SISTEMA = {
  nome: 'SAR-EB',
  nomeCompleto: 'Sistema de Apoio a Requisições do Exército Brasileiro',
  versao: '1.0.0',
  orgao: 'Exército Brasileiro',
};

export const CORES = {
  primary: '#1a4d2e', // Verde Militar
  secondary: '#4f7942', // Verde Escuro
  accent: '#d4af37', // Dourado
  background: '#ffffff', // Branco
};

export const TIPOS_EMPENHO = {
  ORDINARIO: 'ordinario',
  GLOBAL: 'global',
  ESTIMATIVO: 'estimativo',
} as const;

export const STATUS_REQUISICAO = {
  PENDENTE: 'pendente',
  EM_ANALISE: 'analise',
  APROVADA: 'aprovada',
  REJEITADA: 'rejeitada',
} as const;

export const STATUS_CERTIDAO = {
  VALIDA: 'valida',
  A_VENCER: 'avencer',
  VENCIDA: 'vencida',
} as const;

export const PERFIS_USUARIO = {
  USUARIO: 'usuario',
  APROVADOR: 'aprovador',
  ADMINISTRADOR: 'administrador',
} as const;

export const ROTAS = {
  // Autenticação
  LOGIN: '/',
  CADASTRO: '/cadastro',
  ESQUECI_SENHA: '/esqueci-senha',
  
  // Principais
  DASHBOARD: '/dashboard',
  
  // Requisições
  REQUISICOES: '/requisicoes',
  REQUISICOES_CRIAR: '/requisicoes/criar',
  REQUISICOES_DETALHES: (id: string | number) => `/requisicoes/${id}`,
  
  // Checklist
  CHECKLIST: '/checklist',
  CHECKLIST_CRIAR: '/checklist/criar',
  CHECKLIST_DETALHES: (id: string | number) => `/checklist/${id}`,
  CHECKLIST_MODELOS: '/checklist/modelos',
  CHECKLIST_FUNDAMENTACAO: '/checklist/fundamentacao',
  
  // Certidões
  CERTIDOES: '/certidoes',
  
  // Perfil
  PERFIL: '/perfil',
} as const;

export const FORMATOS_DOCUMENTO = {
  DOCX: 'DOCX',
  XLSX: 'XLSX',
  PDF: 'PDF',
} as const;

export const MENSAGENS = {
  SUCESSO: {
    REQUISICAO_CRIADA: 'Requisição criada com sucesso!',
    REQUISICAO_ATUALIZADA: 'Requisição atualizada com sucesso!',
    REQUISICAO_APROVADA: 'Requisição aprovada com sucesso!',
    REQUISICAO_REJEITADA: 'Requisição rejeitada!',
    CHECKLIST_CRIADO: 'Checklist criado com sucesso!',
    CHECKLIST_ATUALIZADO: 'Checklist atualizado com sucesso!',
    PERFIL_ATUALIZADO: 'Perfil atualizado com sucesso!',
    SENHA_ALTERADA: 'Senha alterada com sucesso!',
    LOGIN_SUCESSO: 'Login realizado com sucesso!',
    CADASTRO_SUCESSO: 'Cadastro realizado com sucesso!',
  },
  ERRO: {
    CAMPOS_OBRIGATORIOS: 'Preencha todos os campos obrigatórios',
    SENHA_INVALIDA: 'Senha deve ter no mínimo 8 caracteres',
    EMAIL_INVALIDO: 'E-mail inválido',
    SENHAS_NAO_CONFEREM: 'As senhas não conferem',
    ERRO_GENERICO: 'Ocorreu um erro. Tente novamente.',
    SEM_PERMISSAO: 'Você não tem permissão para esta ação',
  },
  CONFIRMACAO: {
    APROVAR_REQUISICAO: 'Deseja realmente aprovar esta requisição?',
    REJEITAR_REQUISICAO: 'Deseja realmente rejeitar esta requisição?',
    EXCLUIR_REQUISICAO: 'Deseja realmente excluir esta requisição?',
    EXCLUIR_CHECKLIST: 'Deseja realmente excluir este checklist?',
    SAIR_SISTEMA: 'Deseja realmente sair do sistema?',
  },
} as const;

export const LIMITES = {
  REQUISICOES_POR_PAGINA: 10,
  CHECKLISTS_POR_PAGINA: 12,
  CERTIDOES_POR_PAGINA: 10,
  DIAS_ALERTA_VENCIMENTO: 30,
  MAX_UPLOAD_SIZE_MB: 10,
} as const;

export const REGEX = {
  CPF: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  TELEFONE: /^\(\d{2}\) \d{4,5}-\d{4}$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  SENHA_FORTE: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
} as const;

export const MENU_ITEMS = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    descricao: 'Visão geral do sistema',
  },
  {
    path: '/requisicoes',
    label: 'Requisições',
    descricao: 'Gerencie requisições',
  },
  {
    path: '/checklist',
    label: 'Checklist',
    descricao: 'Gerencie checklists',
  },
  {
    path: '/certidoes',
    label: 'Certidões',
    descricao: 'Visualize certidões',
  },
  {
    path: '/perfil',
    label: 'Perfil',
    descricao: 'Seus dados pessoais',
  },
] as const;
