Corrigir e atualizar o protótipo do sistema SAR-EB (Sistema Automatizado de Requisições do Exército Brasileiro).

Existem três correções obrigatórias que precisam ser implementadas no protótipo:

--------------------------------------------------
1. Perfis de usuário do sistema
--------------------------------------------------

O sistema deve possuir três tipos de usuários:

Requisitante
SALC
Fiscal Administrativo

Esses perfis devem existir no sistema e alterar as permissões e funcionalidades.

Requisitante:
- Criar requisições
- Selecionar tipo de empenho
- Preencher dados da requisição
- Gerar checklist automático
- Acompanhar status da requisição

SALC:
- Visualizar todas as requisições enviadas
- Aprovar requisição
- Recusar requisição
- Adicionar observações na análise
- Alterar status da requisição

Fiscal Administrativo:
- Visualizar todas as requisições
- Visualizar todos os checklists
- Visualizar status e histórico
- Acompanhar execução administrativa

--------------------------------------------------
2. Cadastro de usuário com seleção de perfil
--------------------------------------------------

Na tela de cadastro de usuário deve existir um campo obrigatório:

Perfil do usuário

Esse campo deve ser um dropdown com as opções:

- Requisitante
- SALC
- Fiscal Administrativo

O usuário deve escolher seu perfil no momento do cadastro.

--------------------------------------------------
3. Alteração de perfil na página de perfil
--------------------------------------------------

Na tela "Perfil do usuário" deve existir a opção de alterar o perfil.

Campos da tela perfil:

Nome
Email
Senha
Perfil do usuário (dropdown)

O usuário administrador pode alterar o perfil.

--------------------------------------------------
4. Tipos de empenho obrigatórios
--------------------------------------------------

Na tela "Nova Requisição" deve existir um dropdown chamado:

Tipo de Empenho

Com as opções:

Dispensa de Licitação
Pregão Próprio
Adesão à Ata
Contrato

--------------------------------------------------
5. Campos dinâmicos dependendo do tipo de empenho
--------------------------------------------------

Se selecionar CONTRATO:

Mostrar campos:
Número do contrato
Parcela da requisição

--------------------------------------------------

Se selecionar PREGÃO PRÓPRIO:

Mostrar campos:
Número do pregão
Número do item

Após informar o número do item o sistema deve preencher automaticamente:

Descrição do item
Valor unitário
CNPJ da empresa fornecedora
Nome da empresa fornecedora

Depois deve aparecer o campo:

Quantidade solicitada

Ao lado mostrar:

Quantidade máxima disponível do item.

--------------------------------------------------
6. Correção do erro React
--------------------------------------------------

Corrigir o erro:

"React does not recognize the _fgT / _fgS / _fgB prop on a DOM element".

Essas propriedades internas não devem ser passadas para elementos HTML ou SVG.

Remover qualquer prop inválida (_fgT, _fgS, _fgB ou similares) dos componentes que utilizam:

lucide-react
radix-ui select

--------------------------------------------------
7. Estrutura visual do sistema
--------------------------------------------------

Manter o design institucional:

fundo branco
cores verde militar
layout administrativo
sidebar lateral com menu:

Dashboard
Requisições
Checklist
Certidões
Usuários
Perfil
Sair

O layout deve ser responsivo e organizado em cards e tabelas.