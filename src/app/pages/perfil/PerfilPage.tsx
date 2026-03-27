import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { User, Mail, Phone, MapPin, Building, Shield, Edit, Save } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Separator } from '../../components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { perfisUsuario } from '../../data/mockData';

export default function PerfilPage() {
  const userData = {
    nome: 'Capitão João Silva',
    posto: 'Capitão',
    email: 'joao.silva@eb.mil.br',
    telefone: '(61) 98765-4321',
    unidade: '1ª Brigada de Infantaria',
    setor: 'Seção de Suprimento',
    endereco: 'Brasília - DF',
    cargo: 'Chefe da Seção de Suprimento',
    perfil: 'requisitante',
  };

  const stats = [
    { label: 'Requisições Criadas', value: '28' },
    { label: 'Checklists', value: '15' },
    { label: 'Aprovações', value: '42' },
  ];

  const activities = [
    { date: '13/03/2026 09:30', action: 'Criou requisição #12', type: 'create' },
    { date: '12/03/2026 14:20', action: 'Aprovou requisição #11', type: 'approve' },
    { date: '11/03/2026 16:45', action: 'Criou checklist #8', type: 'create' },
    { date: '10/03/2026 10:15', action: 'Baixou certidão #5', type: 'download' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Perfil do Usuário</h1>
        <p className="text-muted-foreground mt-1">Gerencie suas informações pessoais</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
              <CardDescription>Seus dados cadastrais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-6 mb-6">
                <Avatar className="w-24 h-24">
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                    <User size={40} />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{userData.nome}</h3>
                  <p className="text-muted-foreground">{userData.posto}</p>
                  <Badge className="mt-2 bg-accent text-accent-foreground">
                    <Shield size={12} className="mr-1" />
                    {userData.perfil}
                  </Badge>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                    <Input
                      id="nome"
                      defaultValue={userData.nome}
                      className="pl-10 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="posto">Posto/Graduação</Label>
                  <Input
                    id="posto"
                    defaultValue={userData.posto}
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="perfil">
                    Perfil do Usuário <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground z-10" size={16} />
                    <Select defaultValue={userData.perfil}>
                      <SelectTrigger id="perfil" className="bg-white pl-10">
                        <SelectValue placeholder="Selecione o perfil" />
                      </SelectTrigger>
                      <SelectContent>
                        {perfisUsuario.map((perfil) => (
                          <SelectItem key={perfil.value} value={perfil.value}>
                            {perfil.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Altere o perfil de acordo com sua função no sistema
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                    <Input
                      id="email"
                      type="email"
                      defaultValue={userData.email}
                      className="pl-10 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                    <Input
                      id="telefone"
                      defaultValue={userData.telefone}
                      className="pl-10 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="unidade">Unidade</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                    <Input
                      id="unidade"
                      defaultValue={userData.unidade}
                      className="pl-10 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="setor">Setor</Label>
                  <Input
                    id="setor"
                    defaultValue={userData.setor}
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cargo">Cargo</Label>
                  <Input
                    id="cargo"
                    defaultValue={userData.cargo}
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endereco">Localização</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                    <Input
                      id="endereco"
                      defaultValue={userData.endereco}
                      className="pl-10 bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="bg-primary hover:bg-secondary">
                  <Save size={20} className="mr-2" />
                  Salvar Alterações
                </Button>
                <Button variant="outline">
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Segurança</CardTitle>
              <CardDescription>Altere sua senha de acesso</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="senha-atual">Senha Atual</Label>
                <Input
                  id="senha-atual"
                  type="password"
                  placeholder="Digite sua senha atual"
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nova-senha">Nova Senha</Label>
                <Input
                  id="nova-senha"
                  type="password"
                  placeholder="Digite a nova senha"
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmar-senha">Confirmar Nova Senha</Label>
                <Input
                  id="confirmar-senha"
                  type="password"
                  placeholder="Digite a nova senha novamente"
                  className="bg-white"
                />
              </div>

              <Button className="bg-primary hover:bg-secondary">
                Alterar Senha
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Estatísticas</CardTitle>
              <CardDescription>Suas atividades no sistema</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <span className="text-2xl font-bold text-primary">{stat.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Atividades Recentes</CardTitle>
              <CardDescription>Suas últimas ações</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      {index < activities.length - 1 && (
                        <div className="w-0.5 h-full bg-border"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Permissões</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>Criar requisições</span>
                <Badge variant="outline" className="bg-green-100 text-green-700">Sim</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Aprovar requisições</span>
                <Badge variant="outline" className="bg-green-100 text-green-700">Sim</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Gerenciar certidões</span>
                <Badge variant="outline" className="bg-green-100 text-green-700">Sim</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Acesso administrativo</span>
                <Badge variant="outline" className="bg-green-100 text-green-700">Sim</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}