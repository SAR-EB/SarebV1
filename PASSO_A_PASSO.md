# 🎯 Passo a Passo - Deploy GitHub Pages

## 📋 Pré-requisitos

Você precisa ter instalado:
- ✅ Git ([baixar aqui](https://git-scm.com/))
- ✅ Node.js 18+ ([baixar aqui](https://nodejs.org/))
- ✅ Conta no GitHub ([criar aqui](https://github.com/signup))

---

## 🚀 Passo 1: Preparar o Projeto

Abra o terminal na pasta do projeto e execute:

```bash
# Verificar se Git está instalado
git --version

# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Sistema SAR-EB - Deploy inicial"
```

**✅ Resultado esperado:**
```
[main (root-commit) abc1234] Sistema SAR-EB - Deploy inicial
 150 files changed, 25000 insertions(+)
```

---

## 🌐 Passo 2: Criar Repositório no GitHub

### 2.1 Acessar GitHub
1. Abra seu navegador
2. Acesse: https://github.com/new
3. Faça login se necessário

### 2.2 Configurar Repositório
1. **Nome do repositório**: `sar-eb-sistema` (ou outro nome)
2. **Descrição** (opcional): "Sistema SAR-EB - Requisições do Exército Brasileiro"
3. **Visibilidade**: 
   - ✅ Public (para GitHub Pages grátis)
   - ⚠️ Private (requer GitHub Pro)
4. **NÃO** marque nenhuma opção em "Initialize this repository"
5. Clique em **"Create repository"**

**✅ Você verá uma tela com comandos**

---

## 🔗 Passo 3: Conectar ao GitHub

Copie o link do seu repositório (algo como):
```
https://github.com/SEU-USUARIO/sar-eb-sistema.git
```

No terminal, execute (substituindo pelo seu link):

```bash
# Adicionar repositório remoto
git remote add origin https://github.com/SEU-USUARIO/sar-eb-sistema.git

# Renomear branch para main
git branch -M main

# Enviar código para GitHub
git push -u origin main
```

**✅ Digite seu usuário e senha do GitHub quando solicitado**

**💡 Dica:** Se pedir token em vez de senha:
1. Vá em GitHub > Settings > Developer settings > Personal access tokens
2. Gere um novo token com permissão "repo"
3. Use esse token como senha

---

## ⚙️ Passo 4: Configurar GitHub Pages

### 4.1 Acessar Configurações
1. No navegador, vá para seu repositório: `https://github.com/SEU-USUARIO/sar-eb-sistema`
2. Clique na aba **"Settings"** (⚙️)

### 4.2 Configurar Pages
1. No menu lateral esquerdo, role até encontrar **"Pages"**
2. Clique em **"Pages"**
3. Na seção **"Build and deployment"**:
   - **Source**: Selecione **"GitHub Actions"**
4. A página salva automaticamente

**✅ Você verá:** 
```
GitHub Actions
Use a suggested workflow, or create your own.
```

---

## 🎬 Passo 5: Aguardar Deploy

### 5.1 Verificar Build
1. Vá para a aba **"Actions"** (▶️) no seu repositório
2. Você verá um workflow rodando: **"Deploy SAR-EB to GitHub Pages"**
3. Status:
   - 🟡 **Amarelo (running)**: Build em andamento (~2-3 min)
   - ✅ **Verde (completed)**: Sucesso!
   - ❌ **Vermelho (failed)**: Erro (veja os logs)

### 5.2 Clique no workflow para ver progresso
Você verá 2 jobs:
1. **build** - Compilando o projeto
2. **deploy** - Publicando no GitHub Pages

**⏱️ Aguarde 2-3 minutos até ficar verde ✅**

---

## 🎉 Passo 6: Acessar o Sistema

### 6.1 Encontrar a URL

Volte em **Settings > Pages**, você verá:
```
Your site is live at https://SEU-USUARIO.github.io/sar-eb-sistema/
```

### 6.2 Abrir o Sistema
1. Clique no link ou copie e cole no navegador
2. Aguarde a página carregar
3. Você verá a **tela de login do SAR-EB**! 🎯

### 6.3 Fazer Login
- **Email**: qualquer@email.com (qualquer email)
- **Senha**: qualquer senha (qualquer senha)
- Clique em **"Entrar"**

**✅ Você será redirecionado para o Dashboard!**

---

## 🧪 Passo 7: Testar o Sistema

### URLs para testar:

Adicione `#/rota` após a URL base:

```
https://SEU-USUARIO.github.io/sar-eb-sistema/#/dashboard
https://SEU-USUARIO.github.io/sar-eb-sistema/#/requisicoes
https://SEU-USUARIO.github.io/sar-eb-sistema/#/requisicoes/criar
https://SEU-USUARIO.github.io/sar-eb-sistema/#/checklist
https://SEU-USUARIO.github.io/sar-eb-sistema/#/certidoes
https://SEU-USUARIO.github.io/sar-eb-sistema/#/usuarios
https://SEU-USUARIO.github.io/sar-eb-sistema/#/perfil
```

### Funcionalidades para testar:

1. **Dashboard**: Veja estatísticas e cards
2. **Criar Requisição**: 
   - Clique em "Requisições" > "Nova Requisição"
   - Escolha um tipo de empenho
   - Veja os campos mudarem dinamicamente
3. **Checklists**: Gerencie processos
4. **Certidões**: Consulte 8 certidões oficiais
5. **Usuários**: Gerencie usuários (perfil Admin)
6. **Perfil**: Edite suas informações

---

## 🔄 Passo 8: Fazer Atualizações

Sempre que quiser atualizar o sistema:

```bash
# 1. Faça suas alterações nos arquivos
# 2. Adicione as mudanças
git add .

# 3. Faça commit com mensagem descritiva
git commit -m "Descrição da mudança"

# 4. Envie para GitHub
git push

# 5. O deploy é AUTOMÁTICO! ✨
# Aguarde 2-3 minutos e atualize o navegador
```

---

## 🐛 Solução de Problemas

### ❌ Tela Branca

**Causas possíveis:**
1. Deploy ainda não completou
2. Cache do navegador
3. Erro no build

**Soluções:**
```bash
# 1. Aguarde 3 minutos completos após o push

# 2. Limpe o cache:
# Windows/Linux: Ctrl + Shift + R
# Mac: Cmd + Shift + R

# 3. Verifique GitHub Actions
# Vá em Actions e veja se está verde ✅

# 4. Abra o console do navegador (F12)
# Veja se há erros
```

### ❌ Erro: "git: command not found"

**Solução:**
1. Baixe Git: https://git-scm.com/downloads
2. Instale e reinicie o terminal
3. Tente novamente

### ❌ Erro: "failed to push"

**Solução:**
```bash
# Verifique se o remote está correto
git remote -v

# Se estiver errado, remova e adicione novamente
git remote remove origin
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

### ❌ GitHub pede token em vez de senha

**Solução:**
1. Vá em: https://github.com/settings/tokens
2. Clique em "Generate new token (classic)"
3. Dê um nome e marque "repo"
4. Gere o token
5. Copie e use como senha

---

## 📱 Acessar de Qualquer Lugar

Agora seu sistema está online! Você pode:

✅ Acessar de qualquer navegador  
✅ Compartilhar a URL com colegas  
✅ Usar no celular, tablet ou desktop  
✅ Funciona 24/7 gratuitamente  

---

## 🎓 Resumo dos Comandos

```bash
# Setup inicial
git init
git add .
git commit -m "Deploy inicial"

# Conectar ao GitHub
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git branch -M main
git push -u origin main

# Atualizações futuras
git add .
git commit -m "Descrição"
git push
```

---

## 📚 Documentação Adicional

- 📘 **QUICK_START.md** - Guia rápido
- 📗 **DEPLOY_GITHUB_PAGES.md** - Detalhes técnicos
- 📙 **CHECKLIST_DEPLOY.md** - Checklist completo
- 📕 **GUIA_DE_USO.md** - Como usar o sistema

---

## ✅ Concluído!

Parabéns! 🎉 Seu sistema SAR-EB está no ar!

**URL do sistema:** https://SEU-USUARIO.github.io/SEU-REPO/

Caso tenha dúvidas, consulte a documentação ou verifique os logs no GitHub Actions.
