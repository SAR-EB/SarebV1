Atualize o protótipo do sistema SAR-EB (Sistema Automatizado de Requisições do Exército Brasileiro) considerando os dados de uma planilha que define regras e conteúdos do sistema.

O sistema possui módulos de Requisições, Checklist e Certidões. O objetivo é que o protótipo represente corretamente o fluxo administrativo e utilize as informações da planilha como base para funcionamento das telas.

1. Tipos de empenho

Os seguintes itens devem ser tratados como tipos de empenho dentro do sistema:

- Dispensa de licitação
- Pregão próprio
- Adesão à ata
- Contrato

Esses tipos de empenho devem aparecer como opções obrigatórias quando o usuário criar uma requisição ou um checklist.

Fluxo correto do sistema:
Criar requisição → selecionar tipo de empenho → gerar checklist automaticamente baseado no tipo de empenho.

2. Integração do Checklist com o tipo de empenho

A primeira aba da planilha contém os itens de checklist.

Cada linha representa um item do checklist (observação ou requisito obrigatório) e cada coluna representa um tipo de empenho.

Quando o usuário selecionar o tipo de empenho ao criar uma requisição, o sistema deve gerar automaticamente um checklist contendo todos os itens obrigatórios para aquele tipo de empenho.

Criar telas com:

- lista de itens do checklist
- número do item
- descrição da observação
- status do item (pendente ou concluído)
- checkbox para marcar como concluído

O usuário deve conseguir acompanhar o progresso do checklist.

3. Fluxo atualizado do módulo de requisições

O módulo de requisições deve seguir o fluxo abaixo:

Criar requisição
↓
Selecionar tipo de empenho
↓
Gerar modelo de requisição
↓
Gerar checklist automático baseado no tipo de empenho
↓
Enviar requisição
↓
Acompanhar status da requisição

Usuários administradores devem possuir função adicional:

- Validar requisição
- Atualizar status da requisição

4. Módulo de Certidões

A terceira aba da planilha contém uma lista de certidões com dois campos:

- Nome da certidão
- Link da certidão

O módulo de certidões deve exibir essas certidões em uma lista.

Cada item da lista deve conter:

- Nome da certidão
- Botão "Abrir certidão"
- Botão "Download"

Ao clicar nesses botões o sistema deve abrir o link correspondente da certidão.

5. Interface e identidade visual

O sistema deve possuir design institucional inspirado no Exército Brasileiro.

Características visuais:

- fundo branco predominante
- cores institucionais como verde militar, verde escuro e detalhes em dourado
- interface limpa e profissional
- uso de ícones administrativos
- layout organizado

6. Estrutura da interface

O sistema deve utilizar uma barra lateral (sidebar) fixa para navegação.

Itens da sidebar:

Dashboard
Requisições
Checklist
Certidões
Perfil
Sair

Também deve existir uma barra superior (topbar) com:

- nome do sistema
- perfil do usuário
- botão de logout

7. Telas necessárias no protótipo

Tela inicial
Tela de login
Tela de cadastro
Tela de recuperação de senha
Dashboard principal
Lista de requisições
Criar requisição
Detalhes da requisição
Tela de checklist automático
Tela de acompanhamento de checklist
Lista de certidões
Visualização de certidão
Perfil do usuário

8. Responsividade

O layout deve ser responsivo.

Em telas menores a sidebar deve colapsar em menu.

9. Estrutura visual

Utilizar:

- cards para organização de informações
- tabelas para requisições e certidões
- checkboxes para checklist
- botões claros para ações principais

O sistema deve parecer um sistema administrativo institucional utilizado dentro do Exército Brasileiro.