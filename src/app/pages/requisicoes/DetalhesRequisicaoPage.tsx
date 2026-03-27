import { Link, useParams } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { ArrowLeft, Download, Edit, CheckCircle, XCircle, FileText, User, Calendar, DollarSign } from 'lucide-react';
import { Separator } from '../../components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

export default function DetalhesRequisicaoPage() {
  const { id } = useParams();

  const requisicao = {
    id: id,
    titulo: 'Requisição de Material de Expediente',
    tipo: 'Ordinário',
    status: 'Em análise',
    criador: 'Cap. João Silva',
    unidade: '1ª Brigada de Infantaria',
    setor: 'Seção de Suprimento',
    dataCriacao: '10/03/2026',
    prazo: '20/03/2026',
    valorEstimado: 'R$ 5.280,00',
    descricao: 'Requisição de materiais de expediente para reposição do estoque da unidade, incluindo papéis, canetas, pastas, grampeadores e outros itens de escritório necessários para o funcionamento regular das atividades administrativas.',
    justificativa: 'O estoque atual de material de expediente está em níveis críticos, comprometendo as atividades administrativas da unidade. A reposição é necessária para manter a operacionalidade do setor.',
    observacoes: 'Priorizar itens de marca nacional. Verificar disponibilidade em estoque antes da aquisição.',
  };

  const timeline = [
    { date: '10/03/2026 09:30', event: 'Requisição criada', user: 'Cap. João Silva' },
    { date: '10/03/2026 10:15', event: 'Enviada para análise', user: 'Cap. João Silva' },
    { date: '11/03/2026 14:20', event: 'Em análise pelo setor financeiro', user: 'Maj. Carlos Mendes' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/requisicoes">
          <Button variant="outline" size="icon">
            <ArrowLeft size={20} />
          </Button>
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-primary">Requisição #{requisicao.id}</h1>
            <Badge className="bg-blue-100 text-blue-700" variant="outline">
              {requisicao.tipo}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              {requisicao.status}
            </Badge>
          </div>
          <p className="text-muted-foreground mt-1">{requisicao.titulo}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Gerais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <User className="text-primary mt-1" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Criado por</p>
                    <p className="font-medium">{requisicao.criador}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="text-primary mt-1" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Data de Criação</p>
                    <p className="font-medium">{requisicao.dataCriacao}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="text-primary mt-1" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Unidade</p>
                    <p className="font-medium">{requisicao.unidade}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="text-primary mt-1" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Setor</p>
                    <p className="font-medium">{requisicao.setor}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="text-primary mt-1" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Prazo de Entrega</p>
                    <p className="font-medium">{requisicao.prazo}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="text-primary mt-1" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Valor Estimado</p>
                    <p className="font-medium">{requisicao.valorEstimado}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Descrição</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{requisicao.descricao}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Justificativa</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{requisicao.justificativa}</p>
            </CardContent>
          </Card>

          {requisicao.observacoes && (
            <Card>
              <CardHeader>
                <CardTitle>Observações</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{requisicao.observacoes}</p>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Histórico</CardTitle>
              <CardDescription>Linha do tempo da requisição</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-12 bg-border"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="font-medium">{item.event}</p>
                      <p className="text-sm text-muted-foreground">{item.user}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                    </div>
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
                Editar
              </Button>
              <Button className="w-full" variant="outline">
                <Download size={20} className="mr-2" />
                Baixar PDF
              </Button>
              <Separator />
              <p className="text-sm font-medium">Alterar Status</p>
              <Select defaultValue="analise">
                <SelectTrigger className="bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="analise">Em análise</SelectItem>
                  <SelectItem value="aprovada">Aprovada</SelectItem>
                  <SelectItem value="rejeitada">Rejeitada</SelectItem>
                  <SelectItem value="pendente">Pendente</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full bg-primary hover:bg-secondary">
                <CheckCircle size={20} className="mr-2" />
                Atualizar Status
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Validação</CardTitle>
              <CardDescription>Área administrativa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                <CheckCircle size={20} className="mr-2" />
                Aprovar
              </Button>
              <Button className="w-full bg-destructive hover:bg-destructive/90 text-white">
                <XCircle size={20} className="mr-2" />
                Rejeitar
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Documentos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start" size="sm">
                <FileText size={16} className="mr-2" />
                Modelo de Requisição
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <FileText size={16} className="mr-2" />
                Checklist Relacionado
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
