import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import { Search, UserPlus, Edit, Trash2, Shield, Mail, Phone } from 'lucide-react';

interface Usuario {
  id: number;
  nome: string;
  posto: string;
  email: string;
  telefone: string;
  perfil: 'requisitante' | 'salc' | 'fiscal';
  unidade: string;
  status: 'ativo' | 'inativo';
}

export default function UsuariosPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const usuarios: Usuario[] = [
    {
      id: 1,
      nome: 'Capitão João Silva',
      posto: 'Capitão',
      email: 'joao.silva@eb.mil.br',
      telefone: '(61) 98765-4321',
      perfil: 'requisitante',
      unidade: '1ª Brigada de Infantaria',
      status: 'ativo',
    },
    {
      id: 2,
      nome: 'Major Carlos Santos',
      posto: 'Major',
      email: 'carlos.santos@eb.mil.br',
      telefone: '(61) 98765-1234',
      perfil: 'salc',
      unidade: 'Comando Militar do Sul',
      status: 'ativo',
    },
    {
      id: 3,
      nome: 'Tenente Ana Costa',
      posto: '1º Tenente',
      email: 'ana.costa@eb.mil.br',
      telefone: '(61) 98765-5678',
      perfil: 'fiscal',
      unidade: '2ª Brigada de Infantaria',
      status: 'ativo',
    },
    {
      id: 4,
      nome: '1º Sargento Pedro Lima',
      posto: '1º Sargento',
      email: 'pedro.lima@eb.mil.br',
      telefone: '(61) 98765-9012',
      perfil: 'requisitante',
      unidade: '3ª Brigada de Infantaria',
      status: 'ativo',
    },
    {
      id: 5,
      nome: 'Coronel Ricardo Alves',
      posto: 'Coronel',
      email: 'ricardo.alves@eb.mil.br',
      telefone: '(61) 98765-3456',
      perfil: 'salc',
      unidade: 'Comando Militar do Sudeste',
      status: 'inativo',
    },
  ];

  const getPerfilLabel = (perfil: string) => {
    const perfis: Record<string, string> = {
      requisitante: 'Requisitante',
      salc: 'SALC',
      fiscal: 'Fiscal Administrativo',
    };
    return perfis[perfil] || perfil;
  };

  const getPerfilColor = (perfil: string) => {
    const colors: Record<string, string> = {
      requisitante: 'bg-blue-100 text-blue-700',
      salc: 'bg-green-100 text-green-700',
      fiscal: 'bg-purple-100 text-purple-700',
    };
    return colors[perfil] || 'bg-gray-100 text-gray-700';
  };

  const filteredUsuarios = usuarios.filter((usuario) =>
    usuario.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.posto.toLowerCase().includes(searchTerm.toLowerCase()) ||
    getPerfilLabel(usuario.perfil).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { label: 'Total de Usuários', value: usuarios.length.toString(), color: 'text-primary' },
    { label: 'Requisitantes', value: usuarios.filter(u => u.perfil === 'requisitante').length.toString(), color: 'text-blue-600' },
    { label: 'SALC', value: usuarios.filter(u => u.perfil === 'salc').length.toString(), color: 'text-green-600' },
    { label: 'Fiscais', value: usuarios.filter(u => u.perfil === 'fiscal').length.toString(), color: 'text-purple-600' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Usuários</h1>
          <p className="text-muted-foreground mt-1">Gerencie os usuários do sistema</p>
        </div>
        <Button className="bg-primary hover:bg-secondary">
          <UserPlus size={20} className="mr-2" />
          Novo Usuário
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <span className={`text-3xl font-bold ${stat.color} mt-2`}>{stat.value}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Usuários</CardTitle>
          <CardDescription>Visualize e gerencie todos os usuários cadastrados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Buscar por nome, email, posto ou perfil..."
                className="pl-10 bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Posto</TableHead>
                  <TableHead>Perfil</TableHead>
                  <TableHead>Contato</TableHead>
                  <TableHead>Unidade</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsuarios.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      Nenhum usuário encontrado
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsuarios.map((usuario) => (
                    <TableRow key={usuario.id}>
                      <TableCell className="font-medium">{usuario.nome}</TableCell>
                      <TableCell>{usuario.posto}</TableCell>
                      <TableCell>
                        <Badge className={getPerfilColor(usuario.perfil)}>
                          <Shield size={12} className="mr-1" />
                          {getPerfilLabel(usuario.perfil)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Mail size={12} />
                            <span>{usuario.email}</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Phone size={12} />
                            <span>{usuario.telefone}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{usuario.unidade}</TableCell>
                      <TableCell>
                        <Badge
                          variant={usuario.status === 'ativo' ? 'default' : 'outline'}
                          className={
                            usuario.status === 'ativo'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }
                        >
                          {usuario.status === 'ativo' ? 'Ativo' : 'Inativo'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {filteredUsuarios.length > 0 && (
            <div className="mt-4 text-sm text-muted-foreground">
              Mostrando {filteredUsuarios.length} de {usuarios.length} usuários
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Permissões por Perfil</CardTitle>
          <CardDescription>Entenda as permissões de cada perfil de usuário</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-blue-100 text-blue-700">
                  <Shield size={12} className="mr-1" />
                  Requisitante
                </Badge>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span>Criar requisições</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span>Selecionar tipo de empenho</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span>Gerar checklist automático</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span>Acompanhar status</span>
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-green-100 text-green-700">
                  <Shield size={12} className="mr-1" />
                  SALC
                </Badge>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span>Visualizar todas requisições</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span>Aprovar requisições</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span>Recusar requisições</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span>Adicionar observações</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span>Alterar status</span>
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-purple-100 text-purple-700">
                  <Shield size={12} className="mr-1" />
                  Fiscal Administrativo
                </Badge>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  <span>Visualizar todas requisições</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  <span>Visualizar todos checklists</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  <span>Ver status e histórico</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  <span>Acompanhar execução</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
