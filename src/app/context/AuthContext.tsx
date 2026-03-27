import { createContext, useContext, useState, ReactNode } from 'react';

interface Usuario {
  id: string;
  nome: string;
  email: string;
  posto: string;
  unidade: string;
  perfil: 'usuario' | 'aprovador' | 'administrador';
}

interface AuthContextType {
  usuario: Usuario | null;
  estaAutenticado: boolean;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => void;
  atualizarUsuario: (dados: Partial<Usuario>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>({
    id: '1',
    nome: 'Capitão João Silva',
    email: 'joao.silva@eb.mil.br',
    posto: 'Capitão',
    unidade: '1ª Brigada de Infantaria',
    perfil: 'administrador',
  });

  const estaAutenticado = usuario !== null;

  const login = async (email: string, senha: string) => {
    // Simulação de login
    // Em produção, fazer chamada à API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setUsuario({
      id: '1',
      nome: 'Capitão João Silva',
      email: email,
      posto: 'Capitão',
      unidade: '1ª Brigada de Infantaria',
      perfil: 'administrador',
    });
  };

  const logout = () => {
    setUsuario(null);
  };

  const atualizarUsuario = (dados: Partial<Usuario>) => {
    if (usuario) {
      setUsuario({ ...usuario, ...dados });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        estaAutenticado,
        login,
        logout,
        atualizarUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}

// Hook para verificar permissões
export function usePermissoes() {
  const { usuario } = useAuth();

  const podeAprovar = usuario?.perfil === 'aprovador' || usuario?.perfil === 'administrador';
  const ehAdmin = usuario?.perfil === 'administrador';

  return {
    podeAprovar,
    ehAdmin,
    podeCriarRequisicao: true,
    podeEditarRequisicao: true,
    podeExcluirRequisicao: ehAdmin,
    podeGerenciarCertidoes: podeAprovar,
  };
}
