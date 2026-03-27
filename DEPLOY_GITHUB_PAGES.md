# 🚀 Deploy do SAR-EB no GitHub Pages

## ✅ Arquivos Criados para Funcionamento

Foram criados os seguintes arquivos essenciais:

1. **`/index.html`** - Página HTML principal
2. **`/src/main.tsx`** - Arquivo de entrada do React
3. **`.gitignore`** - Ignora arquivos desnecessários
4. **`.github/workflows/deploy.yml`** - Deploy automático no GitHub Pages
5. **`vite.config.ts`** - Configurado com `base: './'` para GitHub Pages

## 📋 Passos para Deploy

### 1️⃣ **Preparar o Repositório Local**

```bash
# Se ainda não inicializou o git
git init

# Adicione todos os arquivos
git add .

# Faça o commit
git commit -m "Configuração inicial do SAR-EB para GitHub Pages"
```

### 2️⃣ **Criar Repositório no GitHub**

1. Acesse: https://github.com/new
2. Crie um repositório (exemplo: `sar-eb-sistema`)
3. **NÃO** marque "Initialize with README"
4. Clique em "Create repository"

### 3️⃣ **Conectar e Enviar ao GitHub**

```bash
# Conecte ao repositório remoto (substitua SEU-USUARIO e SEU-REPO)
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git

# Envie para o GitHub
git branch -M main
git push -u origin main
```

### 4️⃣ **Configurar GitHub Pages**

1. Vá em **Settings** do repositório
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione: **GitHub Actions**
4. Salve

### 5️⃣ **Aguardar o Deploy Automático**

1. Vá na aba **Actions** do repositório
2. Aguarde o workflow "Deploy SAR-EB to GitHub Pages" completar (leva ~2-3 minutos)
3. Quando ficar verde ✅, seu site está online!

### 6️⃣ **Acessar o Sistema**

Seu sistema estará disponível em:
```
https://SEU-USUARIO.github.io/SEU-REPO/
```

## 🔧 Comandos Locais

### Instalar dependências
```bash
npm install
# ou
pnpm install
```

### Rodar localmente
```bash
npm run dev
# ou
pnpm dev
```

### Build local (para testar)
```bash
npm run build
# ou
pnpm build
```

### Testar build localmente
```bash
npm run preview
# ou
pnpm preview
```

## 🎯 Características Implementadas

✅ **HashRouter** - URLs com `#` funcionam sem configuração de servidor  
✅ **Build automático** - GitHub Actions faz deploy a cada push  
✅ **Base path relativo** - `base: './'` funciona em qualquer subdiretório  
✅ **Otimização** - Build minificado e otimizado  

## 📱 Acesso ao Sistema

Após o deploy, você poderá:

1. **Fazer Login** na página inicial
2. **Registrar** novos usuários
3. **Acessar Dashboard** com estatísticas
4. **Criar Requisições** com 4 tipos de empenho
5. **Gerenciar Checklists** de processos
6. **Consultar Certidões** oficiais
7. **Administrar Usuários** (perfil SALC)

## 🆘 Solução de Problemas

### Tela Branca?
- Verifique se o workflow completou com sucesso
- Aguarde 2-3 minutos após o deploy
- Limpe o cache do navegador (Ctrl+Shift+R)

### 404 ao navegar?
- Já resolvido! Usamos HashRouter (`#/dashboard`)
- URLs ficam: `seu-site.github.io/repo/#/dashboard`

### Erro de Build?
- Verifique os logs no GitHub Actions
- Certifique-se que `pnpm install` funcionou
- Verifique se todas as dependências estão no `package.json`

## 🔄 Atualizar o Site

Para fazer atualizações:

```bash
# Faça suas alterações nos arquivos
# Depois:
git add .
git commit -m "Descrição das mudanças"
git push

# O deploy é automático! ✨
```

## 🎨 Personalizar Base URL

Se seu repositório tiver nome diferente, o sistema já funciona automaticamente com `base: './'`.

Se precisar de URL específica:
```typescript
// vite.config.ts
base: '/nome-do-seu-repo/'
```

---

## ✨ Pronto!

Seu sistema SAR-EB está configurado e pronto para deploy no GitHub Pages! 🎉
