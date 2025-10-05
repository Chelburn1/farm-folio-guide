import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

interface CultureCardProps {
  id: string;
  nom: string;
}

export const CultureCard = ({ id, nom }: CultureCardProps) => {
  return (
    <Link to={`/culture/${id}`}>
      <Card className="hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] hover:scale-105 cursor-pointer h-full bg-[var(--gradient-card)]">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-primary/10">
              <Sprout className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-lg">{nom}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Cliquez pour découvrir les techniques de culture
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
