// Mock data para o sistema SAR-EB (Sistema Automatizado de Requisições do Exército Brasileiro)

// Perfis de usuário do sistema
export const perfisUsuario = [
  { value: 'requisitante', label: 'Requisitante' },
  { value: 'salc', label: 'SALC' },
  { value: 'fiscal', label: 'Fiscal Administrativo' },
];

export const tiposEmpenho = [
  { value: 'dispensa', label: 'Dispensa de Licitação' },
  { value: 'pregao', label: 'Pregão Próprio' },
  { value: 'adesao', label: 'Adesão à Ata' },
  { value: 'contrato', label: 'Contrato' },
];

export const statusRequisicao = [
  { value: 'pendente', label: 'Pendente', color: 'bg-gray-100 text-gray-700' },
  { value: 'analise', label: 'Em análise', color: 'bg-blue-100 text-blue-700' },
  { value: 'aprovada', label: 'Aprovada', color: 'bg-green-100 text-green-700' },
  { value: 'rejeitada', label: 'Rejeitada', color: 'bg-red-100 text-red-700' },
];

export const statusCertidao = [
  { value: 'valida', label: 'Válida', color: 'bg-green-100 text-green-700' },
  { value: 'avencer', label: 'Próxima ao vencimento', color: 'bg-amber-100 text-amber-700' },
  { value: 'vencida', label: 'Vencida', color: 'bg-red-100 text-red-700' },
];

export const tiposCertidao = [
  { value: 'federal', label: 'Federal' },
  { value: 'estadual', label: 'Estadual' },
  { value: 'municipal', label: 'Municipal' },
  { value: 'trabalhista', label: 'Trabalhista' },
];

export const unidadesMilitares = [
  '1ª Brigada de Infantaria',
  '2ª Brigada de Infantaria',
  '3ª Brigada de Infantaria',
  'Comando Militar do Sul',
  'Comando Militar do Sudeste',
  'Comando Militar do Nordeste',
  'Comando Militar do Norte',
  'Comando Militar do Oeste',
  'Comando Militar do Planalto',
];

export const setores = [
  'Seção de Suprimento',
  'Seção de Pessoal',
  'Seção de Operações',
  'Seção de Inteligência',
  'Seção Administrativa',
  'Seção de Tecnologia da Informação',
  'Seção de Logística',
  'Seção de Saúde',
];

export const postosGraduacoes = [
  'General de Exército',
  'General de Divisão',
  'General de Brigada',
  'Coronel',
  'Tenente-Coronel',
  'Major',
  'Capitão',
  '1º Tenente',
  '2º Tenente',
  'Subtenente',
  '1º Sargento',
  '2º Sargento',
  '3º Sargento',
  'Cabo',
  'Soldado',
];

export const checklistItemsPorTipo = {
  dispensa: [
    'Verificar disponibilidade orçamentária',
    'Solicitar autorização do ordenador de despesas',
    'Elaborar justificativa para dispensa de licitação',
    'Consultar preços de mercado (mínimo 3 cotações)',
    'Verificar enquadramento legal da dispensa',
    'Elaborar termo de referência',
    'Anexar documentação comprobatória',
    'Verificar classificação orçamentária',
    'Confirmar dotação orçamentária',
    'Solicitar parecer jurídico',
  ],
  pregao: [
    'Verificar disponibilidade orçamentária',
    'Solicitar autorização do ordenador de despesas',
    'Elaborar termo de referência detalhado',
    'Definir critérios de aceitação',
    'Consultar preços de mercado',
    'Estabelecer condições de habilitação',
    'Elaborar edital de licitação',
    'Definir critérios de julgamento',
    'Nomear pregoeiro e equipe de apoio',
    'Verificar publicação do edital',
    'Solicitar parecer jurídico',
  ],
  adesao: [
    'Verificar disponibilidade orçamentária',
    'Solicitar autorização do ordenador de despesas',
    'Localizar ata de registro de preços vigente',
    'Verificar compatibilidade do objeto',
    'Consultar órgão gerenciador da ata',
    'Verificar quantitativos disponíveis',
    'Elaborar justificativa de adesão',
    'Anexar ata de registro de preços',
    'Verificar validade da ata',
    'Confirmar dotação orçamentária',
    'Solicitar autorização do órgão gerenciador',
  ],
  contrato: [
    'Verificar disponibilidade orçamentária',
    'Solicitar autorização do ordenador de despesas',
    'Elaborar minuta de contrato',
    'Definir cláusulas contratuais',
    'Estabelecer prazo de vigência',
    'Definir critérios de medição e pagamento',
    'Nomear fiscal de contrato',
    'Elaborar planilha orçamentária',
    'Definir garantias contratuais',
    'Estabelecer sanções e penalidades',
    'Anexar documentação do contratado',
    'Solicitar parecer jurídico',
  ],
};

export const legislacaoReferencia = [
  {
    codigo: 'Lei nº 14.133/2021',
    titulo: 'Nova Lei de Licitações e Contratos',
    descricao: 'Lei que estabelece normas gerais de licitação e contratação',
  },
  {
    codigo: 'Decreto nº 11.462/2023',
    titulo: 'Regulamentação da Lei 14.133/2021',
    descricao: 'Regulamenta a Lei de Licitações',
  },
  {
    codigo: 'Lei nº 4.320/1964',
    titulo: 'Normas Gerais de Direito Financeiro',
    descricao: 'Estatui normas gerais de direito financeiro',
  },
  {
    codigo: 'IN SEGES nº 67/2021',
    titulo: 'Instrução Normativa de Contratações',
    descricao: 'Dispõe sobre contratações no âmbito da APF',
  },
];

export const modelosDocumentos = [
  {
    nome: 'Termo de Referência',
    tipo: 'ordinario',
    formato: 'DOCX',
    descricao: 'Modelo padrão para elaboração de termo de referência',
  },
  {
    nome: 'Justificativa Técnica',
    tipo: 'global',
    formato: 'DOCX',
    descricao: 'Modelo para justificativa de aquisição ou contratação',
  },
  {
    nome: 'Pesquisa de Preços',
    tipo: 'estimativo',
    formato: 'XLSX',
    descricao: 'Planilha para registro de pesquisa de preços',
  },
  {
    nome: 'Declaração de Dispensa',
    tipo: 'ordinario',
    formato: 'DOCX',
    descricao: 'Modelo de declaração para dispensa de licitação',
  },
  {
    nome: 'Cronograma de Entregas',
    tipo: 'global',
    formato: 'XLSX',
    descricao: 'Planilha para controle de cronograma',
  },
  {
    nome: 'Estimativa de Consumo',
    tipo: 'estimativo',
    formato: 'XLSX',
    descricao: 'Planilha para cálculo de estimativa',
  },
];

// Certidões oficiais necessárias para requisições
export const certidoesOficiais = [
  {
    id: 1,
    nome: 'SICAF',
    descricao: 'Sistema de Cadastramento Unificado de Fornecedores',
    categoria: 'Cadastral',
    link: 'https://comprasnet.gov.br/seguro/loginPortalUASG.asp',
    obrigatoria: true,
  },
  {
    id: 2,
    nome: 'CADIN',
    descricao: 'Cadastro Informativo de Créditos não Quitados do Setor Público Federal',
    categoria: 'Federal',
    link: 'https://cadin.pgfn.gov.br/#/home',
    obrigatoria: true,
  },
  {
    id: 3,
    nome: 'CONJUNTA',
    descricao: 'Certidão Conjunta de Débitos relativos a Tributos Federais e à Dívida Ativa da União',
    categoria: 'Federal',
    link: 'https://certidoes-apf.apps.tcu.gov.br',
    obrigatoria: true,
  },
  {
    id: 4,
    nome: 'SIMPLES NACIONAL',
    descricao: 'Certidão de Regularidade com o Simples Nacional',
    categoria: 'Federal',
    link: 'https://www8.receita.fazenda.gov.br/simplesnacional/aplicacoes.aspx?id=21',
    obrigatoria: false,
  },
  {
    id: 5,
    nome: 'CNEP',
    descricao: 'Cadastro Nacional de Empresas Punidas',
    categoria: 'Sanções',
    link: 'https://portaldatransparencia.gov.br/sancoes/consulta?cadastro=2&ordenarPor=nomeSancionado&direcao=asc',
    obrigatoria: true,
  },
  {
    id: 6,
    nome: 'CNJ',
    descricao: 'Cadastro Nacional de Condenações Cíveis por Ato de Improbidade Administrativa',
    categoria: 'Sanções',
    link: 'https://www.cnj.jus.br/improbidade_adm/consultar_requerido.php',
    obrigatoria: true,
  },
  {
    id: 7,
    nome: 'TCU',
    descricao: 'Lista de Inabilitados e Inidôneos do TCU',
    categoria: 'Sanções',
    link: 'https://contasirregulares.tcu.gov.br/ordsext/f?p=105:21:10832869589510::::P21_TIPO:CNPJ',
    obrigatoria: true,
  },
  {
    id: 8,
    nome: 'CNAE',
    descricao: 'Comprovante de Inscrição e de Situação Cadastral (CNPJ)',
    categoria: 'Cadastral',
    link: 'https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp',
    obrigatoria: true,
  },
];

// Mock de dados de pregões para demonstração
export const mockPregoes = {
  '001/2026': {
    numero: '001/2026',
    objeto: 'Aquisição de Material de Escritório',
    itens: [
      {
        numero: '1',
        descricao: 'Papel A4 - Resma com 500 folhas',
        valorUnitario: 25.50,
        quantidadeMaxima: 500,
        unidade: 'resmas',
        cnpjFornecedor: '12.345.678/0001-90',
        nomeFornecedor: 'Papelaria Express Ltda',
      },
      {
        numero: '2',
        descricao: 'Caneta esferográfica azul',
        valorUnitario: 1.20,
        quantidadeMaxima: 1000,
        unidade: 'unidades',
        cnpjFornecedor: '12.345.678/0001-90',
        nomeFornecedor: 'Papelaria Express Ltda',
      },
      {
        numero: '3',
        descricao: 'Grampeador de mesa',
        valorUnitario: 15.80,
        quantidadeMaxima: 50,
        unidade: 'unidades',
        cnpjFornecedor: '12.345.678/0001-90',
        nomeFornecedor: 'Papelaria Express Ltda',
      },
    ],
  },
  '002/2026': {
    numero: '002/2026',
    objeto: 'Aquisição de Equipamentos de Informática',
    itens: [
      {
        numero: '1',
        descricao: 'Notebook Core i5, 8GB RAM, 256GB SSD',
        valorUnitario: 3200.00,
        quantidadeMaxima: 20,
        unidade: 'unidades',
        cnpjFornecedor: '98.765.432/0001-10',
        nomeFornecedor: 'TechInfo Soluções Ltda',
      },
      {
        numero: '2',
        descricao: 'Mouse óptico USB',
        valorUnitario: 25.00,
        quantidadeMaxima: 50,
        unidade: 'unidades',
        cnpjFornecedor: '98.765.432/0001-10',
        nomeFornecedor: 'TechInfo Soluções Ltda',
      },
      {
        numero: '3',
        descricao: 'Teclado USB ABNT2',
        valorUnitario: 45.00,
        quantidadeMaxima: 50,
        unidade: 'unidades',
        cnpjFornecedor: '98.765.432/0001-10',
        nomeFornecedor: 'TechInfo Soluções Ltda',
      },
    ],
  },
  '003/2026': {
    numero: '003/2026',
    objeto: 'Aquisição de Material de Limpeza',
    itens: [
      {
        numero: '1',
        descricao: 'Detergente líquido neutro - 500ml',
        valorUnitario: 4.50,
        quantidadeMaxima: 200,
        unidade: 'unidades',
        cnpjFornecedor: '45.678.901/0001-23',
        nomeFornecedor: 'Clean Master Produtos de Limpeza',
      },
      {
        numero: '2',
        descricao: 'Papel higiênico folha dupla - pacote com 4 rolos',
        valorUnitario: 8.90,
        quantidadeMaxima: 300,
        unidade: 'pacotes',
        cnpjFornecedor: '45.678.901/0001-23',
        nomeFornecedor: 'Clean Master Produtos de Limpeza',
      },
    ],
  },
};

// Mock de contratos para demonstração
export const mockContratos = [
  {
    numero: '015/2025',
    objeto: 'Prestação de serviços de manutenção predial',
    fornecedor: 'Construtora e Manutenções ABC Ltda',
    cnpj: '11.222.333/0001-44',
    vigencia: '01/01/2025 a 31/12/2025',
    valorTotal: 120000.00,
  },
  {
    numero: '022/2025',
    objeto: 'Fornecimento de combustíveis',
    fornecedor: 'Posto Premium Ltda',
    cnpj: '55.666.777/0001-88',
    vigencia: '01/02/2025 a 31/01/2026',
    valorTotal: 250000.00,
  },
  {
    numero: '008/2026',
    objeto: 'Prestação de serviços de limpeza e conservação',
    fornecedor: 'ServiClean Terceirização Ltda',
    cnpj: '33.444.555/0001-66',
    vigencia: '01/01/2026 a 31/12/2026',
    valorTotal: 180000.00,
  },
];