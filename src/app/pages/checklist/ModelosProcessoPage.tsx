import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { ArrowLeft, Search, Download, FileText, Eye } from 'lucide-react';
import { Badge } from '../../components/ui/badge';

export default function ModelosProcessoPage() {
  const modelos = [
    {
      id: 1,
      title: 'Modelo - Termo de Referência',
      description: 'Modelo padrão para elaboração de termo de referência',
      type: 'Ordinário',
      format: 'DOCX',
    },
    {
      id: 2,
      title: 'Modelo - Justificativa Técnica',
      description: 'Modelo para justificativa de aquisição ou contratação',
      type: 'Global',
      format: 'DOCX',
    },
    {
      id: 3,
      title: 'Modelo - Pesquisa de Preços',
      description: 'Planilha para registro de pesquisa de preços de mercado',
      type: 'Estimativo',
      format: 'XLSX',
    },
    {
      id: 4,
      title: 'Modelo - Declaração de Dispensa',
      description: 'Modelo de declaração para processos de dispensa de licitação',
      type: 'Ordinário',
      format: 'DOCX',
    },
    {
      id: 5,
      title: 'Modelo - Cronograma de Entregas',
      description: 'Planilha para controle de cronograma de entregas parceladas',
      type: 'Global',
      format: 'XLSX',
    },
    {
      id: 6,
      title: 'Modelo - Estimativa de Consumo',
      description: 'Planilha para cálculo de estimativa de consumo',
      type: 'Estimativo',
      format: 'XLSX',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/checklist">
          <Button variant="outline" size="icon">
            <ArrowLeft size={20} />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-primary">Modelos de Processo</h1>
          <p className="text-muted-foreground mt-1">Modelos prontos para uso em requisições</p>
        </div>
      </div>

      {/* Busca */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Buscar modelos..."
              className="pl-10 bg-white"
            />
          </div>
        </CardContent>
      </Card>

      {/* Lista de Modelos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modelos.map((modelo) => (
          <Card key={modelo.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <FileText className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold">{modelo.title}</h3>
                    <Badge variant="outline" className="shrink-0">
                      {modelo.format}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{modelo.description}</p>
                  <Badge className="bg-blue-100 text-blue-700" variant="outline">
                    {modelo.type}
                  </Badge>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye size={16} className="mr-2" />
                      Visualizar
                    </Button>
                    <Button size="sm" className="flex-1 bg-primary hover:bg-secondary">
                      <Download size={16} className="mr-2" />
                      Baixar
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sobre os Modelos</CardTitle>
          <CardDescription>Informações importantes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>• Os modelos são documentos prontos para facilitar a elaboração de processos</p>
          <p>• Adapte os modelos conforme a necessidade específica de cada requisição</p>
          <p>• Mantenha a conformidade com as normas e regulamentos vigentes</p>
          <p>• Em caso de dúvidas, consulte o setor jurídico ou administrativo</p>
        </CardContent>
      </Card>
    </div>
  );
}
