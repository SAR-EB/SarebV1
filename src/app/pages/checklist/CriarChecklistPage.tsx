import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Checkbox } from '../../components/ui/checkbox';
import { ArrowLeft, Save, Plus, X } from 'lucide-react';
import { useState } from 'react';

export default function CriarChecklistPage() {
  const [customItems, setCustomItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');

  const defaultItems = {
    ordinario: [
      'Verificar disponibilidade orçamentária',
      'Solicitar autorização do ordenador de despesas',
      'Elaborar termo de referência',
      'Consultar preços de mercado',
      'Verificar fornecedores cadastrados',
      'Elaborar justificativa técnica',
      'Anexar documentação comprobatória',
    ],
    global: [
      'Verificar disponibilidade orçamentária',
      'Solicitar autorização do ordenador de despesas',
      'Elaborar termo de referência detalhado',
      'Definir cronograma de entregas',
      'Consultar preços de mercado',
      'Verificar fornecedores cadastrados',
      'Elaborar justificativa técnica',
      'Definir critérios de medição',
      'Estabelecer condições de pagamento',
    ],
    estimativo: [
      'Verificar disponibilidade orçamentária',
      'Solicitar autorização do ordenador de despesas',
      'Elaborar termo de referência detalhado',
      'Definir estimativa de consumo',
      'Estabelecer período de vigência',
      'Consultar preços de mercado',
      'Verificar fornecedores cadastrados',
      'Elaborar justificativa técnica',
      'Definir critérios de medição',
      'Estabelecer limites de fornecimento',
    ],
  };

  const addCustomItem = () => {
    if (newItem.trim()) {
      setCustomItems([...customItems, newItem.trim()]);
      setNewItem('');
    }
  };

  const removeCustomItem = (index: number) => {
    setCustomItems(customItems.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/checklist">
          <Button variant="outline" size="icon">
            <ArrowLeft size={20} />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-primary">Criar Checklist</h1>
          <p className="text-muted-foreground mt-1">Configure um novo checklist</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tipo de Empenho</CardTitle>
              <CardDescription>Selecione o tipo para carregar itens padrão</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tipo-empenho">Tipo de Empenho</Label>
                <Select>
                  <SelectTrigger id="tipo-empenho" className="bg-white">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ordinario">Ordinário</SelectItem>
                    <SelectItem value="global">Global</SelectItem>
                    <SelectItem value="estimativo">Estimativo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="titulo">Título do Checklist</Label>
                <Input
                  id="titulo"
                  placeholder="Ex: Checklist - Empenho Ordinário"
                  className="bg-white"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Itens do Checklist</CardTitle>
              <CardDescription>Marque os itens que deseja incluir</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {defaultItems.ordinario.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-accent/5">
                    <Checkbox id={`item-${index}`} defaultChecked />
                    <label
                      htmlFor={`item-${index}`}
                      className="flex-1 text-sm cursor-pointer"
                    >
                      {item}
                    </label>
                  </div>
                ))}

                {customItems.map((item, index) => (
                  <div key={`custom-${index}`} className="flex items-center space-x-3 p-3 border border-border rounded-lg bg-accent/5">
                    <Checkbox id={`custom-${index}`} defaultChecked />
                    <label
                      htmlFor={`custom-${index}`}
                      className="flex-1 text-sm cursor-pointer"
                    >
                      {item}
                    </label>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeCustomItem(index)}
                    >
                      <X size={16} />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <Label htmlFor="novo-item">Adicionar Item Personalizado</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="novo-item"
                    placeholder="Digite o novo item..."
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addCustomItem()}
                    className="bg-white"
                  />
                  <Button onClick={addCustomItem} variant="outline">
                    <Plus size={20} />
                  </Button>
                </div>
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
              <Link to="/checklist">
                <Button className="w-full bg-primary hover:bg-secondary">
                  <Save size={20} className="mr-2" />
                  Criar Checklist
                </Button>
              </Link>
              <Link to="/checklist">
                <Button variant="outline" className="w-full">
                  Cancelar
                </Button>
              </Link>
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

          <Card>
            <CardHeader>
              <CardTitle>Dica</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Os itens padrão são carregados automaticamente com base no tipo de empenho selecionado. Você pode adicionar itens personalizados conforme necessário.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
