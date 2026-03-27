import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { FileText, CheckSquare, FileCheck, Plus, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Badge } from '../../components/ui/badge';

export default function DashboardPage() {
  const stats = [
    { label: 'Requisições Ativas', value: '12', icon: FileText, color: 'bg-blue-500' },
    { label: 'Checklists Criados', value: '8', icon: CheckSquare, color: 'bg-green-500' },
    { label: 'Certidões Disponíveis', value: '24', icon: FileCheck, color: 'bg-amber-500' },
    { label: 'Aguardando Validação', value: '5', icon: Clock, color: 'bg-orange-500' },
  ];

  const recentRequests = [
    { id: 1, title: 'Requisição de Material de Expediente', status: 'Em análise', date: '10/03/2026', type: 'Ordinário' },
    { id: 2, title: 'Requisição de Equipamentos de TI', status: 'Aprovada', date: '09/03/2026', type: 'Global' },
    { id: 3, title: 'Requisição de Serviços de Manutenção', status: 'Pendente', date: '08/03/2026', type: 'Estimativo' },
    { id: 4, title: 'Requisição de Material de Limpeza', status: 'Em análise', date: '07/03/2026', type: 'Ordinário' },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: any; icon: any }> = {
      'Aprovada': { variant: 'default', icon: CheckCircle },
      'Em análise': { variant: 'secondary', icon: Clock },
      'Pendente': { variant: 'destructive', icon: AlertCircle },
    };
    const { variant, icon: Icon } = variants[status] || variants['Pendente'];
    return (
      <Badge variant={variant} className="flex items-center gap-1">
        <Icon size={12} />
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Bem-vindo ao Sistema Automatizado de Requisições</p>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Atalhos Rápidos */}
      <Card>
        <CardHeader>
          <CardTitle>Atalhos Rápidos</CardTitle>
          <CardDescription>Acesse rapidamente as principais funcionalidades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/requisicoes/criar">
              <Button className="w-full h-24 flex flex-col gap-2 bg-primary hover:bg-secondary">
                <Plus size={24} />
                <span>Nova Requisição</span>
              </Button>
            </Link>
            <Link to="/checklist/criar">
              <Button className="w-full h-24 flex flex-col gap-2 bg-primary hover:bg-secondary">
                <CheckSquare size={24} />
                <span>Criar Checklist</span>
              </Button>
            </Link>
            <Link to="/certidoes">
              <Button className="w-full h-24 flex flex-col gap-2 bg-primary hover:bg-secondary">
                <FileCheck size={24} />
                <span>Ver Certidões</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Requisições Recentes */}
      <Card>
        <CardHeader>
          <CardTitle>Requisições Recentes</CardTitle>
          <CardDescription>Últimas requisições criadas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentRequests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/10 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-medium">{request.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Tipo: {request.type} • {request.date}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  {getStatusBadge(request.status)}
                  <Link to={`/requisicoes/${request.id}`}>
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <Link to="/requisicoes">
              <Button variant="outline">Ver Todas as Requisições</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}