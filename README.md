# SAR-EB – Sistema Automatizado de Requisições do Exército Brasileiro

[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-success)](https://github.com)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)

Sistema completo de gerenciamento de requisições, checklists e certidões para o Exército Brasileiro com design institucional e interface totalmente responsiva.

## 🚀 Deploy Rápido

```bash
# 1. Clonar/preparar o projeto
git init && git add . && git commit -m "Deploy inicial"

# 2. Enviar para GitHub
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main

# 3. Configurar GitHub Pages
# Settings > Pages > Source: GitHub Actions

# 4. Aguardar 2-3 minutos ✨
# Seu site estará em: https://SEU-USUARIO.github.io/SEU-REPO/
```

📖 **Guias Detalhados:**
- 📘 [QUICK_START.md](QUICK_START.md) - Início rápido em 3 passos
- 📗 [PASSO_A_PASSO.md](PASSO_A_PASSO.md) - Guia visual completo
- 📙 [DEPLOY_GITHUB_PAGES.md](DEPLOY_GITHUB_PAGES.md) - Documentação técnica
- 📕 [CHECKLIST_DEPLOY.md](CHECKLIST_DEPLOY.md) - Checklist de verificação

## 🎯 Funcionalidades Principais

### 🔐 Autenticação Completa
- ✅ Login com validação de credenciais
- ✅ Cadastro de novos usuários com seleção de perfil
- ✅ Recuperação de senha por e-mail
- ✅ 3 perfis: Requisitante, SALC (Aprovador), Fiscal Administrativo

### 📊 Dashboard Inteligente
- Visão geral com estatísticas em tempo real
- Cards informativos (requisições, checklists, certidões, usuários)
- Gráficos de status e desempenho
- Requisições recentes com ações rápidas
- Avisos importantes do sistema

### 📝 Módulo de Requisições
- **Criar requisição** - Formulário dinâmico com 4 tipos de empenho:
  - 🔹 **Dispensa de Licitação** - Campos específicos
  - 🔹 **Pregão Próprio** - Preenchimento automático de itens
  - 🔹 **Adesão à Ata** - Dados de ata existente
  - 🔹 **Contrato** - Informações contratuais
- **Listar requisições** - Filtros avançados e busca
- **Detalhes completos** - Visualização com histórico de aprovações
- **Sistema de aprovação** - SALC pode aprovar/recusar com justificativa
- **Exportar PDF** - Download de requisições

### ✅ Módulo de Checklist
- **Criar checklist** - Geração com modelos pré-definidos
- **Acompanhamento** - Progresso visual de cada checklist
- **Modelos de processo** - 6 tipos de processos administrativos
- **Fundamentação legal** - Consulta de leis e normativas (LGL, IN, LC)
- **Anexar documentos** - Upload simulado

### 🏆 Módulo de Certidões
**8 Certidões Oficiais Implementadas:**
1. Certidão Negativa de Débitos Federais (Receita Federal)
2. Certidão de Regularidade do FGTS (CEF)
3. Certidão Negativa de Débitos Trabalhistas (TST)
4. Certidão Conjunta PGFN/RFB
5. Certidão Municipal de Tributos
6. Certidão Estadual de Tributos
7. Certidão de Regularidade do INSS
8. Certidão de Quitação Eleitoral (TSE)

- Consulta por CPF/CNPJ
- Emissão simulada de certidões
- Alertas de validade
- Download em PDF

### 👥 Gerenciamento de Usuários
- **Listar usuários** - Visualização completa com filtros
- **Criar/Editar** - Formulário com todos os campos
- **Perfis e permissões** - 3 níveis de acesso
- **Status** - Ativar/Desativar usuários
- **Busca** - Filtrar por nome, email ou perfil

### 👤 Perfil do Usuário
- **Dados pessoais** - Edição completa
- **Informações militares** - Posto, unidade, função
- **Segurança** - Alteração de senha
- **Foto de perfil** - Upload simulado

## 🎨 Design Institucional

### Identidade Visual Militar
- **Verde Militar:** `#1B4D3E` - Cor principal
- **Verde Escuro:** `#0F3A2C` - Contraste
- **Dourado:** `#FFD700` - Destaques
- **Branco:** Fundo predominante
- **Cinza:** `#F3F4F6` - Backgrounds secundários

### Layout Profissional
- ✅ Sidebar fixa com logo do Exército
- ✅ Topbar com perfil e notificações
- ✅ Breadcrumbs para navegação
- ✅ Cards com sombra suave
- ✅ Tabelas responsivas
- ✅ Modals e dialogs consistentes

## 📱 100% Responsivo

- **Desktop (1920px+)** - Layout completo com sidebar fixa
- **Laptop (1366px)** - Layout otimizado
- **Tablet (768px)** - Sidebar colapsável
- **Mobile (375px)** - Menu hambúrguer, design mobile-first

## 🛠️ Tecnologias Utilizadas

### Core
- **React 18.3.1** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite 6.3.5** - Build tool ultrarrápido
- **React Router 7.13.0** - Navegação com HashRouter

### UI/UX
- **Tailwind CSS v4** - Framework CSS moderno
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones consistentes
- **Sonner** - Notificações toast elegantes

### Formulários e Validação
- **React Hook Form 7.55.0** - Gerenciamento de forms
- **Date-fns** - Manipulação de datas

### Visualização de Dados
- **Recharts** - Gráficos interativos

### Outros
- **Motion (Framer Motion)** - Animações suaves
- **Canvas Confetti** - Efeitos visuais

## 📂 Estrutura do Projeto

```
/
├── index.html                      # Entrada HTML
├── src/
│   ├── main.tsx                    # Entrada React com AuthProvider
│   ├── app/
│   │   ├── App.tsx                 # Componente principal
│   │   ├── routes.tsx              # Configuração de rotas (HashRouter)
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── AuthLayout.tsx  # Layout de autenticação
│   │   │   │   ├── MainLayout.tsx  # Layout principal
│   │   │   │   ├── Sidebar.tsx     # Menu lateral
│   │   │   │   └── Topbar.tsx      # Barra superior
│   │   │   ├── shared/             # Componentes compartilhados
│   │   │   └── ui/                 # Componentes UI (Radix/shadcn)
│   │   ├── pages/
│   │   │   ├── auth/               # Páginas de autenticação
│   │   │   ├── dashboard/          # Dashboard principal
│   │   │   ├── requisicoes/        # Módulo de requisições
│   │   │   ├── checklist/          # Módulo de checklists
│   │   │   ├── certidoes/          # Módulo de certidões
│   │   │   ├── usuarios/           # Gerenciamento de usuários
│   │   │   ├── perfil/             # Perfil do usuário
│   │   │   └── NotFoundPage.tsx    # 404
│   │   ├── context/
│   │   │   └── AuthContext.tsx     # Contexto de autenticação
│   │   ├── config/
│   │   │   └── constants.ts        # Constantes do sistema
│   │   ├── data/
│   │   │   └── mockData.ts         # Dados mockados
│   │   └── utils/
│   │       └── helpers.ts          # Funções auxiliares
│   └── styles/
│       ├── index.css               # CSS global
│       ├── theme.css               # Tema Tailwind
│       ├── tailwind.css            # Config Tailwind
│       └── fonts.css               # Fontes
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD GitHub Actions
├── vite.config.ts                  # Configuração Vite
├── package.json                    # Dependências
└── README.md                       # Este arquivo
```

## 🚀 Como Usar Localmente

### Instalação
```bash
# Instalar dependências
npm install
# ou
pnpm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

### Acesso Local
Após rodar `npm run dev`, acesse: `http://localhost:5173`

## 🔐 Credenciais de Teste

- **Email:** qualquer@email.com
- **Senha:** qualquer senha
- **Perfil:** Administrador

## 📄 Licença

© 2026 Exército Brasileiro. Todos os direitos reservados.

---

Desenvolvido com ❤️ para o Exército Brasileiro