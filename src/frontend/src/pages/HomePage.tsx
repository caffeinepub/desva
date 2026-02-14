import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/Section';
import { Flower2, Image, Bookmark, Mail, Heart, Sparkles, DollarSign, Palette } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  const categories = [
    {
      title: 'Bouquets',
      description: 'Handmade floral arrangements',
      icon: Flower2,
      path: '/bouquets',
      color: 'text-rose-400',
    },
    {
      title: 'Polaroids',
      description: 'Photo keepsakes & memories',
      icon: Image,
      path: '/polaroids',
      color: 'text-blue-400',
    },
    {
      title: 'Bookmarks',
      description: 'Aesthetic personalized bookmarks',
      icon: Bookmark,
      path: '/bookmarks',
      color: 'text-amber-400',
    },
    {
      title: 'Customized Cards',
      description: 'Event cards for special occasions',
      icon: Mail,
      path: '/customized-cards',
      color: 'text-purple-400',
    },
  ];

  const whyChoose = [
    {
      icon: Heart,
      title: 'Handmade with care',
      description: 'Every piece crafted with attention to detail',
    },
    {
      icon: DollarSign,
      title: 'Affordable pricing',
      description: 'Premium quality at accessible prices',
    },
    {
      icon: Palette,
      title: 'Customizable options',
      description: 'Personalize to match your vision',
    },
    {
      icon: Sparkles,
      title: 'Trend-based designs',
      description: 'Contemporary styles that stand out',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-rose-950/20 dark:via-pink-950/20 dark:to-purple-950/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTIwIDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Logo */}
            <div className="w-48 sm:w-64 lg:w-80 animate-in zoom-in duration-700 delay-150">
              <img
                src="/assets/IMG_5343.jpeg"
                alt="DESVA Logo"
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </div>

            {/* Brand Name */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-primary tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              DESVA
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              personalized With Love
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => navigate({ to: '/bouquets' })}
              >
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                onClick={() => {
                  document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Collections
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
              DESVA creates affordable yet premium handmade bouquets, bookmarks, polaroids, and
              customized gifts for special occasions.
            </p>
          </div>
        </div>
      </Section>

      {/* Featured Categories */}
      <Section id="categories" className="bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Collections"
            subtitle="Explore our handcrafted products designed with love"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.path}
                  className="group cursor-pointer border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur"
                  onClick={() => navigate({ to: category.path })}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <CardHeader className="space-y-4">
                    <div className={`w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${category.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-serif">{category.title}</CardTitle>
                    <CardDescription className="text-sm">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="ghost"
                      className="w-full rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      View Collection
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Why Choose DESVA */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Why Choose DESVA" subtitle="What makes us special" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="text-center space-y-4 p-6 rounded-2xl hover:bg-accent/30 transition-colors duration-300"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
