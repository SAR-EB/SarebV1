# Notas de Desenvolvimento - SAR-EB

## Visão Técnica do Projeto

### Stack Tecnológica
- **Framework**: React 18.3.1
- **Linguagem**: TypeScript
- **Roteamento**: React Router 7.13.0
- **Estilização**: Tailwind CSS 4.1.12
- **Componentes UI**: Radix UI
- **Ícones**: Lucide React
- **Build**: Vite 6.3.5

### Estrutura de Arquivos

```
/src/
├── app/
│   ├── components/         # Componentes React
│   │   ├── layout/        # Layouts (Sidebar, Topbar, etc)
│   │   ├── shared/        # Componentes compartilhados
│   │   └── ui/            # Componentes base (Radix UI)
│   ├── pages/             # Páginas do sistema
│   │   ├── auth/          # Autenticação
│   │   ├── dashboard/     # Dashboard
│   │   ├── requisicoes/   # Módulo de Requisições
│   │   ├── checklist/     # Módulo de Checklist
│   │   ├── certidoes/     # Módulo de Certidões
│   │   └── perfil/        # Perfil do Usuário
│   ├── config/            # Configurações e constantes
│   ├── context/           # Context API (AuthContext)
│   ├── data/              # Dados mock
│   ├── utils/             # Funções utilitárias
│   ├── routes.tsx         # Configuração de rotas
│   └── App.tsx            # Componente raiz
└── styles/                # Estilos globais
    ├── fonts.css
    ├── index.css
    ├── tailwind.css
    └── theme.css          # Tema customizado (cores EB)
```

## Cores Institucionais

### Paleta do Exército Brasileiro
```css
:root {
  --primary: #1a4d2e;      /* Verde Militar */
  --secondary: #4f7942;    /* Verde Escuro */
  --accent: #d4af37;       /* Dourado */
  --background: #ffffff;   /* Branco */
}
```

### Uso das Cores
- **Primary (Verde Militar)**: Botões principais, sidebar, títulos importantes
- **Secondary (Verde Escuro)**: Hover states, elementos secundários
- **Accent (Dourado)**: Destaques, badges especiais, elementos de ênfase
- **Background (Branco)**: Fundo predominante, cards, inputs

## Componentes Principais

### Layout Components

#### Sidebar
- Navegação principal fixa à esquerda
- Responsiva: colapsável em mobile
- Menu hambúrguer para dispositivos móveis
- Overlay/backdrop em mobile

#### Topbar
- Informações do sistema
- Perfil do usuário logado
- Notificações (badge com contador)

#### MainLayout
- Container principal
- Sidebar + Topbar + Conteúdo
- Responsivo com margens adaptativas

#### AuthLayout
- Layout para páginas de autenticação
- Fundo gradiente com cores institucionais
- Centralizado com logo do sistema

### Shared Components

#### StatCard
Cartão de estatística reutilizável
```tsx
<StatCard 
  label="Requisições Ativas" 
  value="12" 
  icon={FileText} 
  color="bg-blue-500" 
/>
```

#### PageHeader
Cabeçalho padrão de páginas
```tsx
<PageHeader 
  title="Requisições" 
  description="Gerencie todas as requisições" 
  action={<Button>Nova Requisição</Button>}
/>
```

#### BreadcrumbNav
Navegação breadcrumb
```tsx
<BreadcrumbNav 
  items={[
    { label: 'Requisições', href: '/requisicoes' },
    { label: 'Detalhes' }
  ]} 
/>
```

#### Loading
Estados de carregamento
```tsx
<Loading size="lg" text="Carregando..." fullScreen />
<LoadingCard />
<LoadingTable rows={5} />
```

#### EmptyState
Estado vazio
```tsx
<EmptyState
  icon={FileText}
  title="Nenhuma requisição"
  description="Crie sua primeira requisição"
  actionLabel="Nova Requisição"
  onAction={() => navigate('/requisicoes/criar')}
/>
```

## Rotas

### Estrutura de Rotas
- **Públicas** (AuthLayout): Login, Cadastro, Esqueci Senha
- **Privadas** (MainLayout): Dashboard, Requisições, Checklist, Certidões, Perfil
- **404**: Página não encontrada

### Navegação Programática
```tsx
import { useNavigate } from 'react-router';
const navigate = useNavigate();
navigate('/dashboard');
```

### Parâmetros de Rota
```tsx
// Definição
{ path: 'requisicoes/:id', element: <DetalhesRequisicaoPage /> }

// Uso
import { useParams } from 'react-router';
const { id } = useParams();
```

## Estado e Context

### AuthContext
Gerenciamento de autenticação e usuário logado

```tsx
import { useAuth } from './context/AuthContext';

const { usuario, estaAutenticado, login, logout } = useAuth();
```

### Permissões
```tsx
import { usePermissoes } from './context/AuthContext';

const { podeAprovar, ehAdmin } = usePermissoes();
```

## Dados Mock

### Localização
`/src/app/data/mockData.ts`

### Conteúdo
- Tipos de empenho
- Status de requisição
- Status de certidão
- Unidades militares
- Setores
- Postos e graduações
- Checklist items por tipo
- Legislação de referência
- Modelos de documentos
- Perfis de usuário

## Utilitários

### Helpers (`/src/app/utils/helpers.ts`)

Funções disponíveis:
- `formatarData(data)` - Formata data DD/MM/AAAA
- `formatarDataHora(data)` - Formata data e hora
- `formatarMoeda(valor)` - Formata em R$
- `diasRestantes(data)` - Calcula dias até data
- `estaProximoVencimento(data)` - Verifica se está próximo de vencer
- `estaVencido(data)` - Verifica se está vencido
- `getStatusCertidao(data)` - Retorna status da certidão
- `calcularPorcentagem(valor, total)` - Calcula %
- `gerarProtocolo()` - Gera número de protocolo
- `validarCPF(cpf)` - Valida CPF
- `validarEmail(email)` - Valida e-mail
- `formatarCPF(cpf)` - Formata CPF
- `formatarTelefone(tel)` - Formata telefone
- `truncarTexto(texto, limite)` - Trunca texto
- `obterIniciais(nome)` - Obtém iniciais
- `validarSenhaForte(senha)` - Valida senha
- `gerarCorPorString(str)` - Gera cor aleatória
- `delay(ms)` - Delay assíncrono

## Responsividade

### Breakpoints (Tailwind)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Estratégia Mobile-First
```tsx
// Mobile por padrão
<div className="flex flex-col gap-4 lg:flex-row">
  
// Desktop: sidebar fixa
<div className="hidden lg:block">
  
// Mobile: menu hambúrguer
<div className="lg:hidden">
```

### Sidebar Responsiva
- Desktop: Fixa, sempre visível
- Mobile: Colapsável, menu hambúrguer, overlay

### Grid Responsivo
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

## Estilização

### Tailwind Classes Comuns
- Containers: `container mx-auto px-4`
- Spacing: `space-y-6`, `gap-4`
- Flex: `flex items-center justify-between`
- Grid: `grid grid-cols-1 md:grid-cols-2`
- Text: `text-primary`, `text-muted-foreground`
- Hover: `hover:bg-accent/5`, `hover:shadow-md`
- Transitions: `transition-colors`, `transition-shadow`

### Custom Classes
Definidas em `/src/styles/theme.css`

## Badges e Status

### Status de Requisição
- Pendente: Outline, cinza
- Em análise: Secondary, azul
- Aprovada: Default, verde
- Rejeitada: Destructive, vermelho

### Status de Certidão
- Válida: Verde
- Próxima ao vencimento: Amarelo
- Vencida: Vermelho

### Tipos de Empenho
- Ordinário: Azul
- Global: Roxo
- Estimativo: Amarelo

## Próximos Passos (Integração Backend)

### API Endpoints Sugeridos
```
POST   /api/auth/login
POST   /api/auth/register
POST   /api/auth/forgot-password

GET    /api/requisicoes
POST   /api/requisicoes
GET    /api/requisicoes/:id
PUT    /api/requisicoes/:id
DELETE /api/requisicoes/:id
PATCH  /api/requisicoes/:id/status

GET    /api/checklists
POST   /api/checklists
GET    /api/checklists/:id
PUT    /api/checklists/:id
PATCH  /api/checklists/:id/items/:itemId

GET    /api/certidoes
GET    /api/certidoes/:id/download

GET    /api/modelos
GET    /api/modelos/:id/download

GET    /api/legislacao

GET    /api/usuario/perfil
PUT    /api/usuario/perfil
PUT    /api/usuario/senha
```

### State Management
Considerar adicionar:
- React Query / TanStack Query para cache de dados
- Zustand ou Redux para estado global mais complexo

### Validação de Formulários
Implementar com:
- React Hook Form (já instalado)
- Zod para schema validation

### Upload de Arquivos
- Implementar upload de documentos
- Preview de PDFs
- Validação de tipo e tamanho

### Notificações
- Toast notifications (Sonner já instalado)
- Notificações em tempo real
- E-mail notifications

### Relatórios e Exportação
- Gerar PDFs de requisições
- Exportar dados para Excel
- Dashboards com gráficos (Recharts já instalado)

### Auditoria
- Log de todas as ações
- Histórico detalhado
- Rastreabilidade

### Segurança
- JWT para autenticação
- Refresh tokens
- RBAC (Role-Based Access Control)
- HTTPS obrigatório
- Rate limiting
- CORS configurado

## Testes

### Testes Recomendados
- Testes unitários: Jest + React Testing Library
- Testes E2E: Cypress ou Playwright
- Testes de acessibilidade: axe-core

### Coverage Mínimo
- 80% de cobertura em utils
- 70% em components
- 60% em pages

## Performance

### Otimizações Implementadas
- Code splitting por rota (React Router)
- Lazy loading de componentes
- Memoização quando necessário

### Otimizações Futuras
- React.memo em componentes pesados
- useMemo/useCallback onde apropriado
- Virtual scrolling em listas grandes
- Image optimization
- PWA (Progressive Web App)

## Acessibilidade

### Implementado
- Labels em todos os inputs
- Estrutura semântica HTML
- Contraste adequado
- Focus states visíveis

### A Implementar
- Navegação completa por teclado
- Screen reader support
- ARIA labels
- Skip links

## Documentação

### Arquivos de Documentação
- `/SISTEMA_SAR-EB.md` - Visão geral do sistema
- `/GUIA_DE_USO.md` - Manual do usuário
- `/NOTAS_DESENVOLVIMENTO.md` - Este arquivo

## Ambiente de Desenvolvimento

### Comandos
```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Build para produção
pnpm build
```

### Variáveis de Ambiente
Criar arquivo `.env` se necessário:
```env
VITE_API_URL=https://api.exemplo.com
VITE_APP_VERSION=1.0.0
```

## Convenções de Código

### Nomenclatura
- Components: PascalCase (`DashboardPage.tsx`)
- Utils/Helpers: camelCase (`formatarData`)
- Constants: UPPER_SNAKE_CASE (`TIPOS_EMPENHO`)
- CSS Classes: kebab-case (Tailwind padrão)

### Organização de Imports
```tsx
// 1. React e hooks
import { useState, useEffect } from 'react';

// 2. Third-party
import { Link } from 'react-router';

// 3. UI Components
import { Button } from '../components/ui/button';

// 4. Custom components
import { Sidebar } from '../components/layout/Sidebar';

// 5. Utils e helpers
import { formatarData } from '../utils/helpers';

// 6. Types
import type { Usuario } from '../types';
```

## Licença e Créditos

Este sistema foi desenvolvido para o Exército Brasileiro.

**Desenvolvedor**: Sistema de prototipagem Figma Make  
**Data**: Março 2026  
**Versão**: 1.0.0

---

Desenvolvido com ❤️ para o Exército Brasileiro
