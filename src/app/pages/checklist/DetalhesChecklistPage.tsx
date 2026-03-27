import { Link, useParams } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Checkbox } from '../../components/ui/checkbox';
import { ArrowLeft, Download, Edit } from 'lucide-react';
import { useState } from 'react';

export default function DetalhesChecklistPage() {
  const { id } = useParams();

  const [items, setItems] = useState([
    { id: 1, text: 'Verificar disponibilidade orçamentária', completed: true },
    { id: 2, text: 'Solicitar autorização do ordenador de despesas', completed: true },
    { id: 3, text: 'Elaborar termo de referência', completed: true },
    { id: 4, text: 'Consultar preços de mercado', completed: true },
    { id: 5, text: 'Verificar fornecedores cadastrados', completed: false },
    { id: 6, text: 'Elaborar justificativa técnica', completed: false },
    { id: 7, text: 'Anexar documentação comprobatória', completed: false },
  ]);

  const checklist = {
    id: id,
    title: 'Checklist - Empenho Ordinário',
    type: 'Ordinário',
    date: '10/03/2026',
    creator: 'Cap. João Silva',
  };

  const toggleItem = (itemId: number) => {
    setItems(items.map(item =>
      item.id === itemId ? { ...item, completed: !item.completed } : item
    ));
  };

  const completedCount = items.filter(item => item.completed).length;
  const progress = Math.round((completedCount / items.length) * 100);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/checklist">
          <Button variant="outline" size="icon">
            <ArrowLeft size={20} />
          </Button>
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-primary">{checklist.title}</h1>
            <Badge className="bg-blue-100 text-blue-700" variant="outline">
              {checklist.type}
            </Badge>
          </div>
          <p className="text-muted-foreground mt-1">Criado em {checklist.date} por {checklist.creator}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Itens do Checklist</CardTitle>
                  <CardDescription className="mt-2">
                    {completedCount} de {items.length} itens concluídos ({progress}%)
                  </CardDescription>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center space-x-3 p-4 border border-border rounded-lg transition-all ${
                      item.completed ? 'bg-green-50 border-green-200' : 'hover:bg-accent/5'
                    }`}
                  >
                    <Checkbox
                      id={`item-${item.id}`}
                      checked={item.completed}
                      onCheckedChange={() => toggleItem(item.id)}
                    />
                    <label
                      htmlFor={`item-${item.id}`}
                      className={`flex-1 cursor-pointer ${
                        item.completed ? 'line-through text-muted-foreground' : ''
                      }`}
                    >
                      {item.text}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Ações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="outline">
                <Edit size={20} className="mr-2" />
                Editar Checklist
              </Button>
              <Button className="w-full" variant="outline">
                <Download size={20} className="mr-2" />
                Baixar PDF
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progresso</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-3">
                  <span className="text-3xl font-bold text-primary">{progress}%</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {completedCount} de {items.length} itens concluídos
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recursos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link to="/checklist/modelos">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  Modelos de Processo
                </Button>
              </Link>
              <Link to="/checklist/fundamentacao">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  Fundamentação Legal
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
