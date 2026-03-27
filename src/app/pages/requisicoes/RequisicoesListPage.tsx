import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Plus, Search, Filter, FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

export default function RequisicoesListPage() {
  const requisitions = [
    { id: 1, title: 'Requisição de Material de Expediente', type: 'Ordinário', status: 'Em análise', date: '10/03/2026', user: 'Cap. João Silva' },
    { id: 2, title: 'Requisição de Equipamentos de TI', type: 'Global', status: 'Aprovada', date: '09/03/2026', user: 'Ten. Maria Santos' },
    { id: 3, title: 'Requisição de Serviços de Manutenção', type: 'Estimativo', status: 'Pendente', date: '08/03/2026', user: '1º Sgt. Pedro Oliveira' },
    { id: 4, title: 'Requisição de Material de Limpeza', type: 'Ordinário', status: 'Em análise', date: '07/03/2026', user: 'Cap. João Silva' },
    { id: 5, title: 'Requisição de Combustível', type: 'Global', status: 'Aprovada', date: '06/03/2026', user: '2º Ten. Ana Costa' },
    { id: 6, title: 'Requisição de Serviços de Telecomunicações', type: 'Estimativo', status: 'Rejeitada', date: '05/03/2026', user: 'Maj. Carlos Mendes' },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: any; icon: any }> = {
      'Aprovada': { variant: 'default', icon: CheckCircle },
      'Em análise': { variant: 'secondary', icon: Clock },
      'Pendente': { variant: 'outline', icon: AlertCircle },
      'Rejeitada': { variant: 'destructive', icon: AlertCircle },
    };
    const { variant, icon: Icon } = variants[status] || variants['Pendente'];
    return (
      <Badge variant={variant} className="flex items-center gap-1 w-fit">
        <Icon size={12} />
        {status}
      </Badge>
    );
  };

  const getTypeBadge = (type: string) => {
    const colors: Record<string, string> = {
      'Ordinário': 'bg-blue-100 text-blue-700',
      'Global': 'bg-purple-100 text-purple-700',
      'Estimativo': 'bg-amber-100 text-amber-700',
    };
    return (
      <Badge className={`${colors[type] || 'bg-gray-100 text-gray-700'}`} variant="outline">
        {type}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary">Requisições</h1>
          <p className="text-muted-foreground mt-1">Gerencie todas as requisições do sistema</p>
        </div>
        <Link to="/requisicoes/criar">
          <Button className="bg-primary hover:bg-secondary">
            <Plus size={20} className="mr-2" />
            Nova Requisição
          </Button>
        </Link>
      </div>

      {/* Filtros */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Buscar requisições..."
                className="pl-10 bg-white"
              />
            </div>
            <Select defaultValue="todos">
              <SelectTrigger className="w-full md:w-48 bg-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os status</SelectItem>
                <SelectItem value="aprovada">Aprovada</SelectItem>
                <SelectItem value="analise">Em análise</SelectItem>
                <SelectItem value="pendente">Pendente</SelectItem>
                <SelectItem value="rejeitada">Rejeitada</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="todos">
              <SelectTrigger className="w-full md:w-48 bg-white">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os tipos</SelectItem>
                <SelectItem value="ordinario">Ordinário</SelectItem>
                <SelectItem value="global">Global</SelectItem>
                <SelectItem value="estimativo">Estimativo</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter size={20} className="mr-2" />
              Filtrar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Requisições */}
      <div className="grid grid-cols-1 gap-4">
        {requisitions.map((req) => (
          <Card key={req.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4 flex-1">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <FileText className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{req.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span>Criado por: {req.user}</span>
                      <span>•</span>
                      <span>{req.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {getTypeBadge(req.type)}
                      {getStatusBadge(req.status)}
                    </div>
                  </div>
                </div>
                <Link to={`/requisicoes/${req.id}`}>
                  <Button variant="outline">
                    Ver Detalhes
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
