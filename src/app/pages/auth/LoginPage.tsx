import { Link } from 'react-router';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';

export default function LoginPage() {
  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle>Acesso ao Sistema</CardTitle>
        <CardDescription>Entre com suas credenciais</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="usuario">Usuário</Label>
            <Input
              id="usuario"
              type="text"
              placeholder="Digite seu usuário"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="senha">Senha</Label>
            <Input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              className="bg-white"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <Link
              to="/esqueci-senha"
              className="text-primary hover:text-secondary hover:underline"
            >
              Esqueceu sua senha?
            </Link>
          </div>

          <Link to="/dashboard">
            <Button type="button" className="w-full bg-primary hover:bg-secondary">
              Entrar
            </Button>
          </Link>
        </form>

        <div className="text-center text-sm">
          <span className="text-muted-foreground">Não tem uma conta? </span>
          <Link
            to="/cadastro"
            className="text-primary hover:text-secondary hover:underline font-medium"
          >
            Cadastre-se
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
