import { User, Bell } from 'lucide-react';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';

export function Topbar() {
  return (
    <header className="bg-white border-b border-border px-6 py-4 flex items-center justify-between">
      <div>
        <h2 className="text-lg text-primary">Exército Brasileiro</h2>
        <p className="text-sm text-muted-foreground">Sistema Automatizado de Requisições</p>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
        </Button>

        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="text-right">
            <p className="text-sm font-medium">Cap. João Silva</p>
            <p className="text-xs text-muted-foreground">Administrador</p>
          </div>
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              <User size={20} />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}