import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center p-4">
      <div className="text-center">
        <div className="inline-block bg-white p-8 rounded-full shadow-lg mb-6">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
            <span className="text-5xl font-bold text-accent">404</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Página Não Encontrada</h1>
        <p className="text-white/90 mb-8 max-w-md">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/dashboard">
          <Button className="bg-white text-primary hover:bg-white/90">
            <Home size={20} className="mr-2" />
            Voltar ao Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
