import { Outlet } from 'react-router';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block bg-white p-4 rounded-full shadow-lg mb-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-accent">EB</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">SAR-EB</h1>
          <p className="text-white/90">Sistema Automatizado de Requisições</p>
          <p className="text-white/80 text-sm">Exército Brasileiro</p>
        </div>
        
        <Outlet />
      </div>
    </div>
  );
}