import { Button } from '@/components/ui/button';
import { CultureCard } from '@/components/CultureCard';
import { cultures, categoriesNoms } from '@/data/cultures';
import { Leaf, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-agriculture.jpg';

const Index = () => {
  const culturesByCategory = {
    vivrieres: cultures.filter(c => c.categorie === 'vivrieres'),
    maraicheres: cultures.filter(c => c.categorie === 'maraicheres'),
    fruitieres: cultures.filter(c => c.categorie === 'fruitieres')
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-background/90 rounded-full">
              <Leaf className="w-16 h-16 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
            Guide Agricole Africain
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/95">
            Maîtrisez les techniques de culture adaptées à votre région
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.getElementById('cultures')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Découvrir les cultures
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Cultures Section */}
      <section id="cultures" className="py-20 px-4 max-w-7xl mx-auto">
        {Object.entries(culturesByCategory).map(([key, culturesInCategory]) => (
          <div key={key} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {categoriesNoms[key as keyof typeof categoriesNoms]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {culturesInCategory.map((culture) => (
                <CultureCard 
                  key={culture.id}
                  id={culture.id}
                  nom={culture.nom}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 text-center">
        <p className="text-sm">
          © 2025 Guide Agricole Africain - Cultivons ensemble l'avenir
        </p>
      </footer>
    </div>
  );
};

export default Index;
