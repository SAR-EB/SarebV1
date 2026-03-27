# SAR-EB - Sistema de Apoio a Requisições do Exército Brasileiro

## Visão Geral

O SAR-EB é um sistema completo de gestão de requisições desenvolvido especificamente para o Exército Brasileiro. O sistema possui design institucional moderno, responsivo e profissional, utilizando as cores oficiais: verde militar (#1a4d2e), verde escuro (#4f7942) e dourado (#d4af37).

## Estrutura do Sistema

### 1. Autenticação
- **Login** - Acesso ao sistema com usuário e senha
- **Cadastro** - Registro de novos usuários
- **Recuperação de Senha** - Recuperação de acesso

### 2. Dashboard
Painel principal com:
- Estatísticas gerais do sistema
- Atalhos rápidos para principais funcionalidades
- Requisições recentes
- Indicadores visuais de status

### 3. Módulo de Requisições
Gerenciamento completo de requisições:
- **Listar Requisições** - Visualização com filtros e busca
- **Criar Requisição** - Formulário completo baseado em tipo de empenho
- **Detalhes da Requisição** - Visualização completa com histórico
- **Tipos de Empenho**: Ordinário, Global, Estimativo
- **Validação Administrativa** - Aprovação/Rejeição de requisições
- **Geração Automática** de modelos

### 4. Módulo de Checklist
Sistema de checklist para processos:
- **Listar Checklists** - Visualização com progresso
- **Criar Checklist** - Baseado em tipo de empenho
- **Detalhes do Checklist** - Acompanhamento de itens
- **Modelos de Processo** - Documentos prontos (DOCX, XLSX)
- **Fundamentação Legal** - Legislação aplicável

### 5. Módulo de Certidões
Gerenciamento de certidões:
- Visualização de certidões disponíveis
- Status de validade (Válida, A Vencer, Vencida)
- Download de certidões
- Alertas de vencimento
- Tipos: Federal, Estadual, Municipal, Trabalhista

### 6. Perfil do Usuário
Gerenciamento de dados pessoais:
- Informações cadastrais
- Alteração de senha
- Estatísticas de uso
- Histórico de atividades
- Permissões do usuário

## Características Técnicas

### Design System
- **Cores Institucionais**:
  - Verde Militar: `#1a4d2e` (Primary)
  - Verde Escuro: `#4f7942` (Secondary)
  - Dourado: `#d4af37` (Accent)
  - Branco: `#ffffff` (Background)

### Layout
- **Sidebar Fixa**: Navegação principal à esquerda
- **Topbar**: Informações do usuário e notificações
- **Responsivo**: Adaptação completa para mobile
- **Menu Colapsável**: Em dispositivos móveis

### Componentes
- Cards para organização de conteúdo
- Badges para status e categorias
- Formulários completos com validação
- Tabelas e listas organizadas
- Modais e diálogos
- Progress bars
- Accordion para conteúdo expansível

### Funcionalidades
- Sistema de rotas com React Router
- Navegação contextual
- Busca e filtros
- Timeline de atividades
- Estatísticas visuais
- Download de documentos
- Sistema de notificações

## Estrutura de Arquivos

```
/src/app/
├── components/
│   ├── layout/
│   │   ├── AuthLayout.tsx
│   │   ├── MainLayout.tsx
│   │   ├── Sidebar.tsx
│   │   └── Topbar.tsx
│   ├── shared/
│   │   ├── StatCard.tsx
│   │   └── PageHeader.tsx
│   └── ui/ (componentes base)
├── pages/
│   ├── auth/
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   └── ForgotPasswordPage.tsx
│   ├── dashboard/
│   │   └── DashboardPage.tsx
│   ├── requisicoes/
│   │   ├── RequisicoesListPage.tsx
│   │   ├── CriarRequisicaoPage.tsx
│   │   └── DetalhesRequisicaoPage.tsx
│   ├── checklist/
│   │   ├── ChecklistListPage.tsx
│   │   ├── CriarChecklistPage.tsx
│   │   ├── DetalhesChecklistPage.tsx
│   │   ├── ModelosProcessoPage.tsx
│   │   └── FundamentacaoLegalPage.tsx
│   ├── certidoes/
│   │   └── CertidoesPage.tsx
│   ├── perfil/
│   │   └── PerfilPage.tsx
│   └── NotFoundPage.tsx
├── routes.tsx
└── App.tsx
```

## Fluxo de Trabalho

### Criar Requisição
1. Acessar módulo de Requisições
2. Clicar em "Nova Requisição"
3. Selecionar tipo de empenho
4. Preencher formulário
5. Modelo é gerado automaticamente
6. Enviar para análise

### Validar Requisição (Admin)
1. Acessar detalhes da requisição
2. Revisar informações
3. Aprovar ou Rejeitar
4. Atualizar status

### Criar Checklist
1. Acessar módulo de Checklist
2. Clicar em "Criar Checklist"
3. Selecionar tipo de empenho
4. Itens padrão são carregados
5. Adicionar itens personalizados
6. Salvar checklist

### Gerenciar Certidões
1. Acessar módulo de Certidões
2. Visualizar lista de certidões
3. Verificar status de validade
4. Baixar ou visualizar certidões

## Tipos de Usuários

### Usuário Padrão
- Criar requisições
- Criar checklists
- Visualizar certidões
- Gerenciar perfil

### Administrador
- Todas as funcionalidades do usuário padrão
- Validar requisições
- Aprovar/Rejeitar requisições
- Atualizar status de requisições
- Gerenciar certidões

## Responsividade

O sistema é totalmente responsivo:
- **Desktop**: Layout completo com sidebar fixa
- **Tablet**: Layout adaptado com sidebar colapsável
- **Mobile**: Menu hambúrguer, cards empilhados, navegação simplificada

## Acessibilidade

- Labels apropriados em formulários
- Navegação por teclado
- Contraste adequado de cores
- Feedback visual de ações
- Estados de hover e focus

## Segurança

- Autenticação de usuários
- Diferentes níveis de permissão
- Validação de formulários
- Proteção de rotas administrativas

## Integração Futura

O sistema está preparado para:
- Integração com banco de dados
- API REST para backend
- Sistema de autenticação robusto
- Upload de documentos
- Geração de PDFs
- Envio de notificações por e-mail
- Auditoria de ações

## Observações

Este é um protótipo de interface completo e funcional, pronto para:
- Apresentações
- Validação com usuários
- Base para desenvolvimento do backend
- Documentação de requisitos
- Testes de usabilidade

Desenvolvido com React, TypeScript, Tailwind CSS e componentes Radix UI.
