# SAR-EB – Sistema de Apoio a Requisições do Exército Brasileiro

Sistema completo de gerenciamento de requisições, checklists e certidões para o Exército Brasileiro.

## 🎯 Funcionalidades

### 🔐 Autenticação
- **Login** - Acesso ao sistema com credenciais
- **Cadastro** - Registro de novos usuários
- **Recuperação de senha** - Sistema de recuperação por e-mail

### 📊 Dashboard
- Visão geral do sistema
- Estatísticas de requisições, checklists e certidões
- Atalhos rápidos para ações principais
- Requisições recentes
- Avisos importantes

### 📝 Módulo de Requisições
- **Listar requisições** - Visualização completa com filtros
- **Criar requisição** - Formulário em etapas por tipo de empenho
- **Detalhes da requisição** - Visualização completa com histórico
- **Validação administrativa** - Aprovar ou rejeitar requisições
- **Exportar PDF** - Download de requisições

**Tipos de Empenho:**
- Empenho Ordinário
- Empenho Global
- Empenho Estimativo

### ✅ Módulo de Checklist
- **Listar checklists** - Visualização com progresso
- **Criar checklist** - Geração automática de modelos por tipo
- **Modelos de processo** - Acesso a modelos de documentos
- **Fundamentação legal** - Consulta de leis e normativas

### 🏆 Módulo de Certidões
- **Listar certidões** - Visualização por tipo e status
- **Visualizar certidão** - Modal com detalhes completos
- **Download** - Baixar certidões em PDF
- **Alertas de validade** - Indicação de certidões próximas ao vencimento

**Tipos de Certidões:**
- Certidões Fiscais (Federal, Estadual, Municipal)
- Certidões Trabalhistas (FGTS, TST)
- Certidões Previdenciárias (INSS)

### 👤 Perfil do Usuário
- **Dados pessoais** - Atualização de informações
- **Segurança** - Alteração de senha

## 🎨 Design

### Identidade Visual
- **Cores principais:** Verde militar (#4A6741), Verde escuro (#2D4A2B), Dourado (#DAA520)
- **Fundo:** Branco predominante
- **Estilo:** Limpo, moderno e profissional

### Layout
- **Sidebar** - Navegação lateral fixa com menu colapsável em mobile
- **Topbar** - Barra superior com perfil e notificações
- **Responsivo** - Totalmente adaptável para desktop, tablet e mobile

## 🛠️ Tecnologias

- **React** - Framework principal
- **React Router** - Navegação e roteamento
- **Tailwind CSS v4** - Estilização
- **Lucide React** - Ícones
- **Radix UI** - Componentes acessíveis
- **Sonner** - Notificações toast

## 📂 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AuthLayout.tsx
│   │   │   ├── MainLayout.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Topbar.tsx
│   │   └── ui/
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   └── ForgotPasswordPage.tsx
│   │   ├── dashboard/
│   │   │   └── DashboardPage.tsx
│   │   ├── requisicoes/
│   │   │   ├── RequisicoesListPage.tsx
│   │   │   ├── CriarRequisicaoPage.tsx
│   │   │   └── DetalhesRequisicaoPage.tsx
│   │   ├── checklist/
│   │   │   ├── ChecklistListPage.tsx
│   │   │   ├── CriarChecklistPage.tsx
│   │   │   ├── ModelosProcessoPage.tsx
│   │   │   └── FundamentacaoLegalPage.tsx
│   │   ├── certidoes/
│   │   │   └── CertidoesPage.tsx
│   │   ├── perfil/
│   │   │   └── PerfilPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── App.tsx
│   └── routes.tsx
└── styles/
    └── theme.css
```

## 🚀 Como usar

1. Acesse a página de login
2. Use credenciais de teste ou faça cadastro
3. Navegue pelo sistema usando a sidebar
4. Crie requisições, checklists e consulte certidões

## 📱 Responsividade

O sistema é totalmente responsivo:
- **Desktop** - Layout completo com sidebar fixa
- **Tablet** - Layout adaptado
- **Mobile** - Sidebar colapsável com menu hambúrguer

## 🔒 Segurança

- Sistema de autenticação
- Validação de formulários
- Níveis de permissão (usuário comum e administrador)
- Logout seguro

## 📄 Licença

© 2026 Exército Brasileiro. Todos os direitos reservados.

---

Desenvolvido com ❤️ para o Exército Brasileiro
