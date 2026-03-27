import { Link } from 'react-router';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { perfisUsuario } from '../../data/mockData';

export default function RegisterPage() {
  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle>Criar Conta</CardTitle>
        <CardDescription>Preencha os dados para se cadastrar</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome Completo</Label>
            <Input
              id="nome"
              type="text"
              placeholder="Digite seu nome completo"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="posto">Posto/Graduação</Label>
            <Input
              id="posto"
              type="text"
              placeholder="Ex: Capitão, Tenente, Sargento"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="perfil">
              Perfil do Usuário <span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger id="perfil" className="bg-white">
                <SelectValue placeholder="Selecione seu perfil" />
              </SelectTrigger>
              <SelectContent>
                {perfisUsuario.map((perfil) => (
                  <SelectItem key={perfil.value} value={perfil.value}>
                    {perfil.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              Escolha o perfil de acordo com sua função no sistema
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu.email@eb.mil.br"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="usuario">Usuário</Label>
            <Input
              id="usuario"
              type="text"
              placeholder="Escolha um usuário"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="senha">Senha</Label>
            <Input
              id="senha"
              type="password"
              placeholder="Crie uma senha segura"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmar-senha">Confirmar Senha</Label>
            <Input
              id="confirmar-senha"
              type="password"
              placeholder="Digite a senha novamente"
              className="bg-white"
            />
          </div>

          <Link to="/dashboard">
            <Button type="button" className="w-full bg-primary hover:bg-secondary">
              Cadastrar
            </Button>
          </Link>
        </form>

        <div className="text-center text-sm">
          <span className="text-muted-foreground">Já tem uma conta? </span>
          <Link
            to="/"
            className="text-primary hover:text-secondary hover:underline font-medium"
          >
            Fazer login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}