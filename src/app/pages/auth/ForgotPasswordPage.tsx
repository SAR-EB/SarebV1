import { Link } from 'react-router';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle>Recuperar Senha</CardTitle>
        <CardDescription>
          Digite seu e-mail para receber instruções de recuperação
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu.email@eb.mil.br"
              className="bg-white"
            />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-secondary">
            Enviar Instruções
          </Button>
        </form>

        <Link to="/">
          <Button variant="ghost" className="w-full">
            <ArrowLeft size={16} className="mr-2" />
            Voltar para o login
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
