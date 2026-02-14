import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/Section';
import { Badge } from '@/components/ui/badge';
import { PartyPopper, Heart, Cake, Users } from 'lucide-react';
import { customizedCardsImage } from '@/lib/catalogImageMap';

export default function CustomizedCardCollectionPage() {
  const occasions = [
    {
      icon: Users,
      title: 'Farewell',
      description: 'Heartfelt goodbye cards',
    },
    {
      icon: Heart,
      title: 'Bridal',
      description: 'Wedding celebration cards',
    },
    {
      icon: Cake,
      title: 'Birthdays',
      description: 'Personalized birthday wishes',
    },
    {
      icon: PartyPopper,
      title: 'Special Occasions',
      description: 'Any celebration you need',
    },
  ];

  return (
    <div className="w-full">
      <Section className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-rose-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Customized Card Collection"
            subtitle="Personalized cards for life's special moments"
          />
        </div>
      </Section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Product Image & Pricing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square w-full overflow-hidden rounded-2xl shadow-lg bg-muted/30">
                <img
                  src={customizedCardsImage}
                  alt="Customized Cards"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-6">
                <Card className="border-primary/20 shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-serif text-primary">Price</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="default" className="text-2xl font-bold px-8 py-3">
                      Starting from ₹249
                    </Badge>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Personalized event cards for farewell, bridal, birthday, and special occasions.
                  </p>
                </div>
              </div>
            </div>

            {/* Occasions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {occasions.map((occasion, index) => {
                const Icon = occasion.icon;
                return (
                  <div
                    key={occasion.title}
                    className="text-center space-y-4 p-6 rounded-2xl hover:bg-accent/30 transition-colors duration-300"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="w-14 h-14 mx-auto rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-purple-500" />
                    </div>
                    <h3 className="font-semibold text-base text-foreground">{occasion.title}</h3>
                    <p className="text-sm text-muted-foreground">{occasion.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
