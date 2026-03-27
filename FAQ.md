# ❓ Perguntas Frequentes (FAQ) - SAR-EB

## 🚀 Deploy e Instalação

### P: O site não funciona no GitHub Pages, mostra tela branca. O que fazer?

**R:** Siga estas etapas na ordem:

1. **Aguarde 3 minutos** após o deploy completo
2. **Limpe o cache do navegador:**
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`
3. **Verifique o GitHub Actions:**
   - Vá na aba "Actions" do seu repositório
   - Veja se o workflow está verde ✅
   - Se estiver vermelho ❌, clique para ver os logs
4. **Abra o console do navegador:**
   - Pressione `F12`
   - Vá na aba "Console"
   - Veja se há erros em vermelho

### P: Como faço para colocar o sistema online?

**R:** Temos 4 guias detalhados:

- **Rápido (3 passos):** Veja `QUICK_START.md`
- **Completo com imagens:** Veja `PASSO_A_PASSO.md`
- **Técnico detalhado:** Veja `DEPLOY_GITHUB_PAGES.md`
- **Checklist:** Veja `CHECKLIST_DEPLOY.md`

Resumo:
```bash
git init
git add .
git commit -m "Deploy inicial"
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
# Depois: Settings > Pages > Source: GitHub Actions
```

### P: Preciso pagar para usar GitHub Pages?

**R:** Não! GitHub Pages é **100% gratuito** para repositórios públicos. Se seu repo for privado, você precisa do GitHub Pro.

### P: Quanto tempo demora o deploy?

**R:** Normalmente 2-3 minutos. Você pode acompanhar na aba "Actions" do GitHub.

### P: Posso usar meu próprio domínio?

**R:** Sim! No GitHub Pages, vá em Settings > Pages > Custom domain e adicione seu domínio (ex: sar-eb.com.br).

---

## 💻 Desenvolvimento Local

### P: Como rodo o projeto no meu computador?

**R:**
```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:5173
```

### P: Erro "command not found: npm". O que fazer?

**R:** Você precisa instalar o Node.js:
1. Acesse: https://nodejs.org/
2. Baixe a versão LTS (recomendada)
3. Instale e reinicie o terminal
4. Verifique: `node --version`

### P: Erro ao instalar dependências. Como resolver?

**R:** Tente estas soluções:

```bash
# Solução 1: Limpar e reinstalar
rm -rf node_modules package-lock.json
npm install

# Solução 2: Usar pnpm
npm install -g pnpm
pnpm install

# Solução 3: Usar npm com flag legacy
npm install --legacy-peer-deps
```

### P: Como faço build para produção?

**R:**
```bash
npm run build
# Arquivos gerados na pasta /dist
```

---

## 🔐 Autenticação e Usuários

### P: Qual usuário e senha para fazer login?

**R:** No sistema atual (frontend only), você pode usar:
- **Email:** qualquer@email.com (qualquer email válido)
- **Senha:** qualquer senha (qualquer senha)
- Sistema aceita qualquer credencial para testes

### P: Como altero os perfis de usuário?

**R:** 
1. Faça login como Admin
2. Vá em "Usuários" no menu lateral
3. Clique em um usuário
4. Selecione o perfil desejado:
   - **Requisitante** - Pode criar requisições
   - **SALC** - Pode aprovar requisições
   - **Fiscal Administrativo** - Admin completo

### P: Esqueci minha senha. Como recupero?

**R:** No sistema atual (frontend), a recuperação é simulada. Em produção com backend, será enviado email real.

---

## 🎨 Interface e Navegação

### P: Por que as URLs têm "#" (ex: /#/dashboard)?

**R:** Usamos **HashRouter** para funcionar no GitHub Pages sem configuração de servidor. Isso é normal e funciona perfeitamente!

URLs corretas:
- ✅ `/#/dashboard`
- ✅ `/#/requisicoes`
- ✅ `/#/certidoes`

### P: O menu não aparece no celular. É bug?

**R:** Não é bug! No mobile, clique no ícone ☰ (hambúrguer) no canto superior esquerdo para abrir o menu.

### P: Como volto para a página anterior?

**R:** Use o breadcrumb no topo da página ou o botão "Voltar" do navegador.

---

## 📝 Requisições

### P: Como crio uma requisição?

**R:**
1. Clique em "Requisições" no menu
2. Clique em "Nova Requisição"
3. Escolha o tipo de empenho:
   - Dispensa de Licitação
   - Pregão Próprio
   - Adesão à Ata
   - Contrato
4. Preencha os campos (mudam por tipo)
5. Clique em "Criar Requisição"

### P: No Pregão Próprio, como funciona o preenchimento automático?

**R:** Ao selecionar um item, o sistema preenche automaticamente:
- Nome do item
- Unidade de medida
- Quantidade máxima disponível

Você só precisa informar a quantidade desejada (validada contra o máximo).

### P: Posso editar uma requisição após criar?

**R:** No sistema atual, não. Em produção, apenas requisições em status "Rascunho" podem ser editadas.

### P: Como aprovo ou recuso uma requisição?

**R:**
1. Faça login com perfil SALC ou Admin
2. Vá em "Requisições"
3. Clique em uma requisição com status "Pendente"
4. Clique em "Aprovar" ou "Recusar"
5. Adicione uma justificativa (obrigatório para recusa)

---

## ✅ Checklists

### P: Quais tipos de checklist existem?

**R:** 6 tipos de processos:
1. Dispensa de Licitação (Art. 24)
2. Pregão Eletrônico
3. Inexigibilidade (Art. 25)
4. Adesão à Ata de Registro de Preços
5. Credenciamento
6. Chamamento Público

### P: Como funciona o progresso do checklist?

**R:** O sistema calcula automaticamente:
- Total de itens
- Itens concluídos
- % de conclusão
- Barra de progresso visual

### P: Posso adicionar itens personalizados?

**R:** No sistema atual, usa modelos pré-definidos. Em produção, permitirá customização.

---

## 🏆 Certidões

### P: Quais certidões o sistema gerencia?

**R:** 8 certidões oficiais:
1. Certidão Negativa de Débitos Federais (Receita Federal)
2. Certidão de Regularidade do FGTS (CEF)
3. Certidão Negativa de Débitos Trabalhistas (TST)
4. Certidão Conjunta PGFN/RFB
5. Certidão Municipal de Tributos
6. Certidão Estadual de Tributos
7. Certidão de Regularidade do INSS
8. Certidão de Quitação Eleitoral (TSE)

### P: Como consulto uma certidão?

**R:**
1. Vá em "Certidões"
2. Selecione o tipo de certidão
3. Digite CPF ou CNPJ
4. Clique em "Consultar"
5. Veja a certidão emitida (simulada)

### P: Posso fazer download das certidões?

**R:** Sim! Clique em "Baixar PDF" (atualmente simulado, em produção gerará PDF real).

### P: Como sei se uma certidão está vencida?

**R:** O sistema mostra badges coloridos:
- 🟢 **Verde** - Válida
- 🟡 **Amarelo** - Vence em breve (<30 dias)
- 🔴 **Vermelho** - Vencida

---

## 👥 Gerenciamento de Usuários

### P: Quem pode gerenciar usuários?

**R:** Apenas usuários com perfil **Fiscal Administrativo (Admin)**.

### P: Como adiciono um novo usuário?

**R:**
1. Login como Admin
2. Vá em "Usuários"
3. Clique em "Novo Usuário"
4. Preencha todos os campos:
   - Nome completo
   - Email
   - CPF
   - Posto/Graduação
   - Unidade
   - Função
   - Perfil de acesso
5. Clique em "Cadastrar"

### P: Posso desativar um usuário?

**R:** Sim! Na lista de usuários, clique no switch "Status" para ativar/desativar.

---

## 🐛 Erros e Problemas

### P: Erro 404 ao acessar uma página

**R:** Verifique se você está usando o `#` nas URLs:
- ✅ Correto: `https://seu-site.github.io/repo/#/dashboard`
- ❌ Errado: `https://seu-site.github.io/repo/dashboard`

### P: Botões não funcionam / Não consigo clicar

**R:**
1. Limpe o cache do navegador
2. Desative extensões do navegador (AdBlock, etc)
3. Teste em modo anônimo
4. Tente outro navegador

### P: Imagens não carregam

**R:**
1. Verifique sua conexão com internet
2. Limpe o cache
3. Aguarde alguns segundos (Unsplash pode demorar)

### P: GitHub Actions falha com erro de build

**R:** Verifique:
1. Arquivo `.github/workflows/deploy.yml` existe
2. `package.json` tem script `"build": "vite build"`
3. Node.js versão 20 no workflow
4. Veja logs detalhados no Actions

---

## 📱 Mobile e Responsividade

### P: Funciona no celular?

**R:** Sim! 100% responsivo. Testado em:
- iPhone (Safari)
- Android (Chrome)
- Tablets
- Desktop

### P: Como acesso o menu no celular?

**R:** Clique no ícone ☰ (três linhas) no canto superior esquerdo.

### P: Tabelas ficam cortadas no mobile

**R:** Deslize para o lado (scroll horizontal) nas tabelas grandes.

---

## 🔄 Atualizações

### P: Como atualizo o sistema após fazer mudanças?

**R:**
```bash
git add .
git commit -m "Descrição da mudança"
git push
# Deploy automático em 2-3 minutos! ✨
```

### P: Atualizei mas não vejo as mudanças

**R:**
1. Aguarde o workflow completar (aba Actions)
2. Limpe o cache: `Ctrl+Shift+R`
3. Tente modo anônimo

### P: Como volto para uma versão anterior?

**R:**
```bash
# Ver histórico
git log

# Voltar para commit específico
git revert HASH_DO_COMMIT
git push
```

---

## 🎓 Recursos e Documentação

### P: Onde encontro mais informações?

**R:** Temos documentação completa:
- 📘 `QUICK_START.md` - Início rápido
- 📗 `PASSO_A_PASSO.md` - Tutorial visual
- 📙 `DEPLOY_GITHUB_PAGES.md` - Guia técnico
- 📕 `CHECKLIST_DEPLOY.md` - Checklist
- 📔 `GUIA_DE_USO.md` - Manual do usuário
- 📓 `SISTEMA_SAR-EB.md` - Specs técnicas
- 📋 `README.md` - Visão geral

### P: Quais tecnologias foram usadas?

**R:**
- React 18.3.1
- TypeScript
- Vite 6.3.5
- Tailwind CSS v4
- React Router 7.13.0 (HashRouter)
- Radix UI
- Lucide Icons
- Recharts

### P: Posso usar este código em outro projeto?

**R:** Este sistema é propriedade do Exército Brasileiro. Para uso em outros projetos, consulte a licença.

---

## 🚀 Próximos Passos

### P: Quando terá backend real?

**R:** O backend (API + Banco de dados) está planejado para a próxima fase do projeto.

### P: Vai ter integração com sistemas reais?

**R:** Sim! Planejado:
- Integração com certidões oficiais (Receita, TST, etc)
- API do SIAFI
- Sistema de assinatura digital
- Notificações por email

### P: Posso sugerir melhorias?

**R:** Sim! Abra uma issue no GitHub ou entre em contato com a equipe de desenvolvimento.

---

## 📞 Suporte

### P: Encontrei um bug. Como reporto?

**R:**
1. Abra uma issue no GitHub
2. Descreva o problema
3. Inclua prints de tela
4. Informe navegador e sistema operacional
5. Copie mensagens de erro do console (F12)

### P: Preciso de ajuda técnica. Onde busco?

**R:**
- Consulte a documentação em `/docs`
- Veja o console do navegador (F12)
- Verifique os logs do GitHub Actions
- Entre em contato com a equipe técnica

---

## ✅ Checklist Rápido

### Antes de Fazer Deploy
- [ ] `package.json` tem script `build`
- [ ] Arquivo `index.html` existe
- [ ] `vite.config.ts` tem `base: './'`
- [ ] `.github/workflows/deploy.yml` configurado
- [ ] Todas as dependências instaladas

### Após o Deploy
- [ ] GitHub Actions completou com sucesso
- [ ] Site abre sem tela branca
- [ ] Login funciona
- [ ] Navegação entre páginas OK
- [ ] Formulários funcionam
- [ ] Mobile responsivo

---

## 🎉 Conclusão

Esperamos que este FAQ responda suas dúvidas! Se precisar de mais ajuda, consulte a documentação completa ou entre em contato.

**SAR-EB** - Tecnologia a serviço da eficiência administrativa militar! 🎖️
