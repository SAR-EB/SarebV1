import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Plus, Search, CheckSquare, BookOpen, Scale } from 'lucide-react';

export default function ChecklistListPage() {
  const checklists = [
    { id: 1, title: 'Checklist - Empenho Ordinário', type: 'Ordinário', items: 12, completedItems: 8, date: '10/03/2026' },
    { id: 2, title: 'Checklist - Empenho Global', type: 'Global', items: 15, completedItems: 15, date: '09/03/2026' },
    { id: 3, title: 'Checklist - Empenho Estimativo', type: 'Estimativo', items: 18, completedItems: 10, date: '08/03/2026' },
    { id: 4, title: 'Checklist - Serviços Terceirizados', type: 'Global', items: 10, completedItems: 5, date: '07/03/2026' },
  ];

  const getProgressPercentage = (completed: number, total: number) => {
    return Math.round((completed / total) * 100);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary">Checklist</h1>
          <p className="text-muted-foreground mt-1">Gerencie os checklists de requisições</p>
        </div>
        <Link to="/checklist/criar">
          <Button className="bg-primary hover:bg-secondary">
            <Plus size={20} className="mr-2" />
            Criar Checklist
          </Button>
        </Link>
      </div>

      {/* Recursos Adicionais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/checklist/modelos">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <BookOpen className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Modelos de Processo</h3>
                  <p className="text-sm text-muted-foreground">Acesse modelos prontos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/checklist/fundamentacao">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Scale className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Fundamentação Legal</h3>
                  <p className="text-sm text-muted-foreground">Consulte a legislação</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Busca */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Buscar checklists..."
              className="pl-10 bg-white"
            />
          </div>
        </CardContent>
      </Card>

      {/* Lista de Checklists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {checklists.map((checklist) => {
          const progress = getProgressPercentage(checklist.completedItems, checklist.items);
          return (
            <Card key={checklist.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg h-fit">
                      <CheckSquare className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{checklist.title}</h3>
                      <p className="text-sm text-muted-foreground">{checklist.date}</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700" variant="outline">
                    {checklist.type}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progresso</span>
                    <span className="font-medium">{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {checklist.completedItems} de {checklist.items} itens concluídos
                  </p>
                </div>

                <Link to={`/checklist/${checklist.id}`}>
                  <Button variant="outline" className="w-full mt-4">
                    Ver Checklist
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
