import { createBrowserRouter } from 'react-router';
import { AuthLayout } from './components/layout/AuthLayout';
import { MainLayout } from './components/layout/MainLayout';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

// Main Pages
import DashboardPage from './pages/dashboard/DashboardPage';
import RequisicoesListPage from './pages/requisicoes/RequisicoesListPage';
import CriarRequisicaoPage from './pages/requisicoes/CriarRequisicaoPage';
import DetalhesRequisicaoPage from './pages/requisicoes/DetalhesRequisicaoPage';
import ChecklistListPage from './pages/checklist/ChecklistListPage';
import CriarChecklistPage from './pages/checklist/CriarChecklistPage';
import DetalhesChecklistPage from './pages/checklist/DetalhesChecklistPage';
import ModelosProcessoPage from './pages/checklist/ModelosProcessoPage';
import FundamentacaoLegalPage from './pages/checklist/FundamentacaoLegalPage';
import CertidoesPage from './pages/certidoes/CertidoesPage';
import UsuariosPage from './pages/usuarios/UsuariosPage';
import PerfilPage from './pages/perfil/PerfilPage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
  // Auth Routes
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: 'cadastro', element: <RegisterPage /> },
      { path: 'esqueci-senha', element: <ForgotPasswordPage /> },
    ],
  },
  // Main Routes
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'requisicoes', element: <RequisicoesListPage /> },
      { path: 'requisicoes/criar', element: <CriarRequisicaoPage /> },
      { path: 'requisicoes/:id', element: <DetalhesRequisicaoPage /> },
      { path: 'checklist', element: <ChecklistListPage /> },
      { path: 'checklist/criar', element: <CriarChecklistPage /> },
      { path: 'checklist/modelos', element: <ModelosProcessoPage /> },
      { path: 'checklist/fundamentacao', element: <FundamentacaoLegalPage /> },
      { path: 'checklist/:id', element: <DetalhesChecklistPage /> },
      { path: 'certidoes', element: <CertidoesPage /> },
      { path: 'usuarios', element: <UsuariosPage /> },
      { path: 'perfil', element: <PerfilPage /> },
    ],
  },
  // 404
  { path: '*', element: <NotFoundPage /> },
]);