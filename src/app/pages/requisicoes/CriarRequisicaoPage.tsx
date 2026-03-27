import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Badge } from '../../components/ui/badge';
import { ArrowLeft, Save, Send, FileText, CheckSquare, Building2, DollarSign, Package, AlertCircle } from 'lucide-react';
import { tiposEmpenho, mockPregoes, mockContratos, unidadesMilitares, setores } from '../../data/mockData';

interface ItemPregao {
  numero: string;
  descricao: string;
  valorUnitario: number;
  quantidadeMaxima: number;
  unidade: string;
  cnpjFornecedor: string;
  nomeFornecedor: string;
}

export default function CriarRequisicaoPage() {
  const [tipoEmpenho, setTipoEmpenho] = useState<string>('');
  const [numeroContrato, setNumeroContrato] = useState<string>('');
  const [parcela, setParcela] = useState<string>('');
  const [numeroPregao, setNumeroPregao] = useState<string>('');
  const [numeroItem, setNumeroItem] = useState<string>('');
  const [itemSelecionado, setItemSelecionado] = useState<ItemPregao | null>(null);
  const [quantidadeSolicitada, setQuantidadeSolicitada] = useState<string>('');
  const [numeroAdesao, setNumeroAdesao] = useState<string>('');
  
  // Campos gerais
  const [titulo, setTitulo] = useState<string>('');
  const [unidade, setUnidade] = useState<string>('');
  const [setor, setSetor] = useState<string>('');
  const [justificativa, setJustificativa] = useState<string>('');
  const [observacoes, setObservacoes] = useState<string>('');

  // Buscar item do pregão quando número do item for informado
  useEffect(() => {
    if (tipoEmpenho === 'pregao' && numeroPregao && numeroItem) {
      const pregao = mockPregoes[numeroPregao as keyof typeof mockPregoes];
      if (pregao) {
        const item = pregao.itens.find(i => i.numero === numeroItem);
        if (item) {
          setItemSelecionado(item);
        } else {
          setItemSelecionado(null);
        }
      } else {
        setItemSelecionado(null);
      }
    } else {
      setItemSelecionado(null);
    }
  }, [tipoEmpenho, numeroPregao, numeroItem]);

  const calcularValorTotal = () => {
    if (itemSelecionado && quantidadeSolicitada) {
      const quantidade = parseInt(quantidadeSolicitada);
      if (!isNaN(quantidade)) {
        return (itemSelecionado.valorUnitario * quantidade).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }
    }
    return '0,00';
  };

  const handleTipoEmpenhoChange = (value: string) => {
    setTipoEmpenho(value);
    // Limpar campos específicos ao trocar tipo
    setNumeroContrato('');
    setParcela('');
    setNumeroPregao('');
    setNumeroItem('');
    setItemSelecionado(null);
    setQuantidadeSolicitada('');
    setNumeroAdesao('');
  };

  const renderCamposEspecificos = () => {
    switch (tipoEmpenho) {
      case 'contrato':
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="text-primary" size={20} />
                Dados do Contrato
              </CardTitle>
              <CardDescription>Informações específicas do contrato</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="numero-contrato">
                    Número do Contrato <span className="text-red-500">*</span>
                  </Label>
                  <Select value={numeroContrato} onValueChange={setNumeroContrato}>
                    <SelectTrigger id="numero-contrato" className="bg-white">
                      <SelectValue placeholder="Selecione o contrato" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockContratos.map((contrato) => (
                        <SelectItem key={contrato.numero} value={contrato.numero}>
                          {contrato.numero} - {contrato.objeto}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parcela">
                    Parcela da Requisição <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="parcela"
                    type="number"
                    min="1"
                    placeholder="Ex: 1"
                    className="bg-white"
                    value={parcela}
                    onChange={(e) => setParcela(e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground">
                    Informe o número da parcela (1, 2, 3...)
                  </p>
                </div>
              </div>

              {numeroContrato && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Building2 size={16} />
                    Informações do Contrato Selecionado
                  </h4>
                  {mockContratos
                    .filter((c) => c.numero === numeroContrato)
                    .map((contrato) => (
                      <div key={contrato.numero} className="space-y-1 text-sm">
                        <p><strong>Objeto:</strong> {contrato.objeto}</p>
                        <p><strong>Fornecedor:</strong> {contrato.fornecedor}</p>
                        <p><strong>CNPJ:</strong> {contrato.cnpj}</p>
                        <p><strong>Vigência:</strong> {contrato.vigencia}</p>
                        <p><strong>Valor Total:</strong> R$ {contrato.valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                      </div>
                    ))}
                </div>
              )}
            </CardContent>
          </Card>
        );

      case 'pregao':
        return (
          <>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="text-primary" size={20} />
                  Dados do Pregão
                </CardTitle>
                <CardDescription>Informações do pregão e item</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="numero-pregao">
                      Número do Pregão <span className="text-red-500">*</span>
                    </Label>
                    <Select value={numeroPregao} onValueChange={setNumeroPregao}>
                      <SelectTrigger id="numero-pregao" className="bg-white">
                        <SelectValue placeholder="Selecione o pregão" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(mockPregoes).map((numero) => (
                          <SelectItem key={numero} value={numero}>
                            Pregão {numero} - {mockPregoes[numero as keyof typeof mockPregoes].objeto}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="numero-item">
                      Número do Item <span className="text-red-500">*</span>
                    </Label>
                    <Select 
                      value={numeroItem} 
                      onValueChange={setNumeroItem}
                      disabled={!numeroPregao}
                    >
                      <SelectTrigger id="numero-item" className="bg-white">
                        <SelectValue placeholder="Selecione o item" />
                      </SelectTrigger>
                      <SelectContent>
                        {numeroPregao && mockPregoes[numeroPregao as keyof typeof mockPregoes]?.itens.map((item) => (
                          <SelectItem key={item.numero} value={item.numero}>
                            Item {item.numero} - {item.descricao}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {itemSelecionado && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="text-primary" size={20} />
                      Informações do Item
                    </CardTitle>
                    <CardDescription>Dados preenchidos automaticamente</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Descrição do Item</Label>
                      <Input
                        value={itemSelecionado.descricao}
                        disabled
                        className="bg-gray-50"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Valor Unitário</Label>
                        <Input
                          value={`R$ ${itemSelecionado.valorUnitario.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                          disabled
                          className="bg-gray-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Unidade</Label>
                        <Input
                          value={itemSelecionado.unidade}
                          disabled
                          className="bg-gray-50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>CNPJ da Empresa Fornecedora</Label>
                        <Input
                          value={itemSelecionado.cnpjFornecedor}
                          disabled
                          className="bg-gray-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Nome da Empresa Fornecedora</Label>
                        <Input
                          value={itemSelecionado.nomeFornecedor}
                          disabled
                          className="bg-gray-50"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="text-primary" size={20} />
                      Quantidade Solicitada
                    </CardTitle>
                    <CardDescription>Informe a quantidade desejada</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="quantidade">
                        Quantidade Solicitada <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="quantidade"
                        type="number"
                        min="1"
                        max={itemSelecionado.quantidadeMaxima}
                        placeholder="Digite a quantidade"
                        className="bg-white"
                        value={quantidadeSolicitada}
                        onChange={(e) => setQuantidadeSolicitada(e.target.value)}
                      />
                      <div className="flex items-center gap-2 text-sm">
                        <AlertCircle size={16} className="text-amber-600" />
                        <span className="text-muted-foreground">
                          Quantidade máxima disponível: <strong className="text-amber-600">{itemSelecionado.quantidadeMaxima} {itemSelecionado.unidade}</strong>
                        </span>
                      </div>
                    </div>

                    {quantidadeSolicitada && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-900 mb-2">Valor Total da Requisição</h4>
                        <p className="text-2xl font-bold text-green-700">
                          R$ {calcularValorTotal()}
                        </p>
                        <p className="text-sm text-green-700 mt-1">
                          {quantidadeSolicitada} {itemSelecionado.unidade} × R$ {itemSelecionado.valorUnitario.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </>
            )}
          </>
        );

      case 'adesao':
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="text-primary" size={20} />
                Dados da Adesão à Ata
              </CardTitle>
              <CardDescription>Informações da ata de registro de preços</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="numero-adesao">
                  Número da Ata de Registro de Preços <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="numero-adesao"
                  placeholder="Ex: 001/2026"
                  className="bg-white"
                  value={numeroAdesao}
                  onChange={(e) => setNumeroAdesao(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  Informe o número da ata vigente para adesão
                </p>
              </div>
            </CardContent>
          </Card>
        );

      case 'dispensa':
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="text-primary" size={20} />
                Dados da Dispensa de Licitação
              </CardTitle>
              <CardDescription>Informações específicas da dispensa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="text-amber-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Atenção</h4>
                    <p className="text-sm text-amber-700">
                      A dispensa de licitação requer justificativa detalhada e enquadramento legal conforme Lei 14.133/2021.
                      Será necessário anexar cotações de preços e documentação comprobatória.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/requisicoes">
          <Button variant="outline" size="icon">
            <ArrowLeft size={20} />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-primary">Nova Requisição</h1>
          <p className="text-muted-foreground mt-1">Preencha os dados para criar uma requisição</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Tipo de Empenho */}
          <Card>
            <CardHeader>
              <CardTitle>Tipo de Empenho</CardTitle>
              <CardDescription>Selecione o tipo de empenho para sua requisição</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tipo-empenho">
                  Tipo de Empenho <span className="text-red-500">*</span>
                </Label>
                <Select value={tipoEmpenho} onValueChange={handleTipoEmpenhoChange}>
                  <SelectTrigger id="tipo-empenho" className="bg-white">
                    <SelectValue placeholder="Selecione o tipo de empenho" />
                  </SelectTrigger>
                  <SelectContent>
                    {tiposEmpenho.map((tipo) => (
                      <SelectItem key={tipo.value} value={tipo.value}>
                        {tipo.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  O checklist será gerado automaticamente com base no tipo selecionado
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Campos específicos por tipo de empenho */}
          {tipoEmpenho && renderCamposEspecificos()}

          {/* Informações Gerais da Requisição */}
          {tipoEmpenho && (
            <Card>
              <CardHeader>
                <CardTitle>Informações Gerais</CardTitle>
                <CardDescription>Dados complementares da requisição</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="titulo">
                    Título da Requisição <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="titulo"
                    placeholder="Ex: Aquisição de Material de Escritório"
                    className="bg-white"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="unidade">
                      Unidade Requisitante <span className="text-red-500">*</span>
                    </Label>
                    <Select value={unidade} onValueChange={setUnidade}>
                      <SelectTrigger id="unidade" className="bg-white">
                        <SelectValue placeholder="Selecione a unidade" />
                      </SelectTrigger>
                      <SelectContent>
                        {unidadesMilitares.map((un) => (
                          <SelectItem key={un} value={un}>
                            {un}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="setor">
                      Setor <span className="text-red-500">*</span>
                    </Label>
                    <Select value={setor} onValueChange={setSetor}>
                      <SelectTrigger id="setor" className="bg-white">
                        <SelectValue placeholder="Selecione o setor" />
                      </SelectTrigger>
                      <SelectContent>
                        {setores.map((st) => (
                          <SelectItem key={st} value={st}>
                            {st}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="justificativa">
                    Justificativa <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="justificativa"
                    placeholder="Justifique a necessidade da requisição..."
                    rows={5}
                    className="bg-white resize-none"
                    value={justificativa}
                    onChange={(e) => setJustificativa(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="observacoes">Observações</Label>
                  <Textarea
                    id="observacoes"
                    placeholder="Informações adicionais (opcional)..."
                    rows={3}
                    className="bg-white resize-none"
                    value={observacoes}
                    onChange={(e) => setObservacoes(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Ações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                className="w-full bg-primary hover:bg-secondary"
                disabled={!tipoEmpenho}
              >
                <Send size={20} className="mr-2" />
                Enviar Requisição
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                disabled={!tipoEmpenho}
              >
                <Save size={20} className="mr-2" />
                Salvar Rascunho
              </Button>
              <Link to="/requisicoes">
                <Button variant="ghost" className="w-full">
                  Cancelar
                </Button>
              </Link>
            </CardContent>
          </Card>

          {tipoEmpenho && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckSquare className="text-primary" size={20} />
                  Checklist Automático
                </CardTitle>
                <CardDescription>Será gerado após salvar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm space-y-2">
                  <p className="text-blue-900 font-medium">
                    Tipo selecionado: <Badge className="ml-2">{tiposEmpenho.find(t => t.value === tipoEmpenho)?.label}</Badge>
                  </p>
                  <p className="text-blue-700">
                    Um checklist personalizado será gerado automaticamente com todos os itens necessários para este tipo de empenho.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Orientações</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>• Selecione o tipo de empenho primeiro</p>
              <p>• Preencha todos os campos obrigatórios (*)</p>
              <p>• Seja claro e objetivo nas descrições</p>
              <p>• Justifique adequadamente a necessidade</p>
              <p>• Revise todos os dados antes de enviar</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}