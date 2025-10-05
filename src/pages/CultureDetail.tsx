import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cultures } from '@/data/cultures';
import { ArrowLeft, Sprout, Cloud, Shovel, Droplets, Bug, Wheat, TrendingUp } from 'lucide-react';

const CultureDetail = () => {
  const { id } = useParams();
  const culture = cultures.find(c => c.id === id);

  if (!culture) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Culture non trouvée</h1>
          <Link to="/">
            <Button variant="default">
              <ArrowLeft className="mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const sections = [
    { 
      title: 'Conditions de culture', 
      content: culture.conditions, 
      icon: Cloud,
      color: 'text-blue-600 dark:text-blue-400'
    },
    { 
      title: 'Mise en place', 
      content: culture.miseEnPlace, 
      icon: Shovel,
      color: 'text-amber-600 dark:text-amber-400'
    },
    { 
      title: 'Entretiens', 
      content: culture.entretiens, 
      icon: Droplets,
      color: 'text-cyan-600 dark:text-cyan-400'
    },
    { 
      title: 'Maladies', 
      content: culture.maladies, 
      icon: Bug,
      color: 'text-red-600 dark:text-red-400'
    },
    { 
      title: 'Récolte', 
      content: culture.recolte, 
      icon: Wheat,
      color: 'text-secondary'
    },
    { 
      title: 'Valorisation', 
      content: culture.valorisation, 
      icon: TrendingUp,
      color: 'text-primary'
    }
  ];

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="bg-[var(--gradient-hero)] text-primary-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="outline" className="mb-6 bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
              <ArrowLeft className="mr-2" />
              Retour aux cultures
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-background/20 rounded-full">
              <Sprout className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{culture.nom}</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 -mt-8">
        <div className="grid gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card key={index} className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-muted ${section.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default CultureDetail;
