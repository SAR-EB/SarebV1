import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Search, Download, ExternalLink, FileCheck, Shield, Building2, AlertTriangle } from 'lucide-react';
import { certidoesOficiais } from '../../data/mockData';
import { useState } from 'react';

export default function CertidoesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const certidoesFiltradas = certidoesOficiais.filter(certidao =>
    certidao.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    certidao.descricao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoriaIcon = (categoria: string) => {
    const icons: Record<string, any> = {
      'Cadastral': Building2,
      'Federal': FileCheck,
      'Sanções': Shield,
    };
    return icons[categoria] || FileCheck;
  };

  const getCategoriaBadge = (categoria: string) => {
    const colors: Record<string, string> = {
      'Cadastral': 'bg-blue-100 text-blue-700',
      'Federal': 'bg-green-100 text-green-700',
      'Sanções': 'bg-orange-100 text-orange-700',
    };
    return (
      <Badge className={`${colors[categoria] || 'bg-gray-100 text-gray-700'}`} variant="outline">
        {categoria}
      </Badge>
    );
  };

  const handleAbrirCertidao = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const totalCertidoes = certidoesOficiais.length;
  const certidoesObrigatorias = certidoesOficiais.filter(c => c.obrigatoria).length;
  const certidoesCadastrais = certidoesOficiais.filter(c => c.categoria === 'Cadastral').length;
  const certidoesSancoes = certidoesOficiais.filter(c => c.categoria === 'Sanções').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Certidões</h1>
        <p className="text-muted-foreground mt-1">Links para download de certidões obrigatórias</p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Certidões</p>
                <p className="text-2xl font-bold mt-1">{totalCertidoes}</p>
              </div>
              <FileCheck className="text-primary" size={32} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Obrigatórias</p>
                <p className="text-2xl font-bold mt-1 text-red-600">{certidoesObrigatorias}</p>
              </div>
              <AlertTriangle className="text-red-600" size={32} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Cadastrais</p>
                <p className="text-2xl font-bold mt-1 text-blue-600">{certidoesCadastrais}</p>
              </div>
              <Building2 className="text-blue-600" size={32} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Sanções</p>
                <p className="text-2xl font-bold mt-1 text-orange-600">{certidoesSancoes}</p>
              </div>
              <Shield className="text-orange-600" size={32} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Busca */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Buscar certidões por nome ou descrição..."
              className="pl-10 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Lista de Certidões */}
      <div className="grid grid-cols-1 gap-4">
        {certidoesFiltradas.map((certidao) => {
          const Icon = getCategoriaIcon(certidao.categoria);
          return (
            <Card key={certidao.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
                  <div className="flex gap-4 flex-1 w-full">
                    <div className="bg-primary/10 p-3 rounded-lg h-fit">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{certidao.nome}</h3>
                        {certidao.obrigatoria && (
                          <Badge className="bg-red-100 text-red-700" variant="outline">
                            Obrigatória
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{certidao.descricao}</p>
                      <div className="flex flex-wrap gap-2">
                        {getCategoriaBadge(certidao.categoria)}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full md:w-auto">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleAbrirCertidao(certidao.link)}
                      className="flex-1 md:flex-none"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Abrir Certidão
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-secondary flex-1 md:flex-none"
                      onClick={() => handleAbrirCertidao(certidao.link)}
                    >
                      <Download size={16} className="mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {certidoesFiltradas.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <FileCheck className="mx-auto text-muted-foreground mb-4" size={48} />
            <p className="text-muted-foreground">Nenhuma certidão encontrada com o termo "{searchTerm}"</p>
          </CardContent>
        </Card>
      )}

      {/* Informações */}
      <Card>
        <CardHeader>
          <CardTitle>Informações Importantes</CardTitle>
          <CardDescription>Sobre o download e uso das certidões</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>• Todas as certidões marcadas como "Obrigatórias" devem ser obtidas para dar andamento às requisições</p>
          <p>• Clique em "Abrir Certidão" para acessar o site oficial onde a certidão pode ser emitida</p>
          <p>• É necessário ter os dados do CNPJ da empresa/fornecedor para emitir as certidões</p>
          <p>• Verifique sempre a validade das certidões antes de anexá-las às requisições</p>
          <p>• Certidões do tipo "Sanções" verificam se há pendências ou punições registradas</p>
          <p>• Guarde cópias digitais de todas as certidões obtidas para futuras consultas</p>
        </CardContent>
      </Card>
    </div>
  );
}