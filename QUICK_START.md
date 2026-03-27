# 🚀 Guia Rápido - Deploy no GitHub Pages

## ⚡ 3 Passos Simples

### 1. Prepare o código
```bash
git init
git add .
git commit -m "Sistema SAR-EB pronto para deploy"
```

### 2. Envie para o GitHub
```bash
# Substitua SEU-USUARIO e SEU-REPO pelo seu usuário e nome do repositório
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git branch -M main
git push -u origin main
```

### 3. Configure GitHub Pages
1. Vá em **Settings** do repositório no GitHub
2. Clique em **Pages** no menu lateral
3. Em **Source**, selecione: **GitHub Actions**
4. Aguarde 2-3 minutos

## ✅ Pronto!

Seu site estará em: `https://SEU-USUARIO.github.io/SEU-REPO/`

---

## 🔧 Testar Localmente Antes

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Abrir http://localhost:5173
```

## 📝 Usuário de Teste

- **Email**: qualquer@email.com
- **Senha**: qualquer senha
- **Perfil**: Administrador (pode fazer tudo)

## 🎯 Funcionalidades Principais

✅ **Dashboard** - Visão geral do sistema  
✅ **Requisições** - 4 tipos de empenho dinâmicos  
✅ **Checklists** - Gerenciamento de processos  
✅ **Certidões** - 8 certidões oficiais  
✅ **Usuários** - Administração completa  
✅ **Perfil** - Dados editáveis  

## 📱 URLs do Sistema

Após deploy:
- `/#/` - Login
- `/#/dashboard` - Dashboard
- `/#/requisicoes` - Lista de requisições
- `/#/requisicoes/criar` - Criar nova requisição
- `/#/checklist` - Checklists
- `/#/certidoes` - Certidões
- `/#/usuarios` - Gerenciar usuários
- `/#/perfil` - Perfil do usuário

---

## 🆘 Problemas?

### Tela branca após deploy?
- Aguarde 3 minutos completos
- Limpe o cache: Ctrl+Shift+R (Windows) ou Cmd+Shift+R (Mac)
- Verifique se o workflow completou (aba Actions no GitHub)

### Erro ao instalar?
```bash
# Se estiver usando pnpm
pnpm install

# Se estiver usando npm
npm install --legacy-peer-deps
```

### Não funciona localmente?
```bash
# Limpe e reinstale
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

**Documentação completa**: Veja `DEPLOY_GITHUB_PAGES.md`
