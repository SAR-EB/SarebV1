import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { ArrowLeft, Search, ExternalLink, BookOpen } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';

export default function FundamentacaoLegalPage() {
  const legislacao = [
    {
      id: 1,
      title: 'Lei nº 14.133/2021',
      subtitle: 'Nova Lei de Licitações e Contratos',
      description: 'Lei que estabelece normas gerais de licitação e contratação para as Administrações Públicas',
      topics: [
        'Modalidades de licitação',
        'Critérios de julgamento',
        'Tipos de empenho',
        'Dispensa e inexigibilidade',
      ],
    },
    {
      id: 2,
      title: 'Decreto nº 11.462/2023',
      subtitle: 'Regulamentação da Lei 14.133/2021',
      description: 'Regulamenta a Lei de Licitações e Contratos Administrativos',
      topics: [
        'Procedimentos operacionais',
        'Documentação necessária',
        'Prazos e tramitação',
        'Sistema eletrônico',
      ],
    },
    {
      id: 3,
      title: 'Lei nº 4.320/1964',
      subtitle: 'Normas Gerais de Direito Financeiro',
      description: 'Estatui normas gerais de direito financeiro para elaboração e controle dos orçamentos',
      topics: [
        'Empenho da despesa',
        'Classificação orçamentária',
        'Estágios da despesa',
        'Controle financeiro',
      ],
    },
    {
      id: 4,
      title: 'IN SEGES nº 67/2021',
      subtitle: 'Instrução Normativa de Contratações',
      description: 'Dispõe sobre contratações no âmbito da Administração Pública Federal',
      topics: [
        'Estudos técnicos preliminares',
        'Termo de referência',
        'Gestão e fiscalização',
        'Critérios de sustentabilidade',
      ],
    },
  ];

  const links = [
    { title: 'Portal da Legislação', url: 'https://www.planalto.gov.br' },
    { title: 'Portal de Compras Governamentais', url: 'https://www.gov.br/compras' },
    { title: 'Tribunal de Contas da União', url: 'https://portal.tcu.gov.br' },
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
          <h1 className="text-3xl font-bold text-primary">Fundamentação Legal</h1>
          <p className="text-muted-foreground mt-1">Legislação aplicável a requisições e empenhos</p>
        </div>
      </div>

      {/* Busca */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Buscar legislação..."
              className="pl-10 bg-white"
            />
          </div>
        </CardContent>
      </Card>

      {/* Legislação */}
      <Card>
        <CardHeader>
          <CardTitle>Principais Normas</CardTitle>
          <CardDescription>Legislação relacionada a requisições e empenhos</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {legislacao.map((lei, index) => (
              <AccordionItem key={lei.id} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-3 text-left">
                    <BookOpen className="text-primary mt-1 shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold">{lei.title}</h4>
                      <p className="text-sm text-muted-foreground">{lei.subtitle}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-8 space-y-3">
                    <p className="text-sm text-muted-foreground">{lei.description}</p>
                    <div>
                      <p className="text-sm font-medium mb-2">Principais tópicos:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {lei.topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink size={16} className="mr-2" />
                      Acessar texto completo
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Links Úteis */}
      <Card>
        <CardHeader>
          <CardTitle>Links Úteis</CardTitle>
          <CardDescription>Acesse portais oficiais</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {links.map((link, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <ExternalLink className="text-primary" size={20} />
                  <span className="font-medium">{link.title}</span>
                </div>
                <Button variant="ghost" size="sm">
                  Acessar
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Observações */}
      <Card>
        <CardHeader>
          <CardTitle>Observações Importantes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>• Mantenha-se atualizado sobre alterações na legislação</p>
          <p>• Consulte sempre a versão mais recente das normas</p>
          <p>• Em caso de dúvidas, procure orientação do setor jurídico</p>
          <p>• As normas devem ser aplicadas conforme a hierarquia legal</p>
          <p>• Observe também regulamentações específicas do Exército Brasileiro</p>
        </CardContent>
      </Card>
    </div>
  );
}
