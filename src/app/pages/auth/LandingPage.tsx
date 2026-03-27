import { Link } from 'react-router';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { FileText, CheckSquare, FileCheck, Shield, Users, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: FileText,
      title: 'Gestão de Requisições',
      description: 'Crie e gerencie requisições de forma simples e organizada',
    },
    {
      icon: CheckSquare,
      title: 'Checklists Inteligentes',
      description: 'Checklists automáticos baseados no tipo de empenho',
    },
    {
      icon: FileCheck,
      title: 'Controle de Certidões',
      description: 'Gerenciamento completo de certidões com alertas de validade',
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Sistema seguro com controle de acesso e permissões',
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalhe em equipe com fluxo de aprovação',
    },
    {
      icon: TrendingUp,
      title: 'Acompanhamento',
      description: 'Dashboards e relatórios para acompanhamento em tempo real',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block bg-white p-6 rounded-full shadow-2xl mb-6">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-accent">EB</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">SAR-EB</h1>
          <p className="text-2xl text-white/90 mb-2">Sistema Automatizado de Requisições</p>
          <p className="text-xl text-white/80 mb-8">Exército Brasileiro</p>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Simplifique o processo de criação, gestão e acompanhamento de requisições
            com um sistema moderno, eficiente e seguro.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                Acessar Sistema
              </Button>
            </Link>
            <Link to="/cadastro">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8"
              >
                Cadastrar-se
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-2">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-white mb-2">100%</p>
            <p className="text-white/90">Digital</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-white mb-2">24/7</p>
            <p className="text-white/90">Disponível</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-white mb-2">Seguro</p>
            <p className="text-white/90">Confiável</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-white/80">
            © 2026 Exército Brasileiro - Todos os direitos reservados
          </p>
        </div>
      </div>
    </div>
  );
}