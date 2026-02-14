import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/Section';
import { Badge } from '@/components/ui/badge';
import { BookOpen, GraduationCap, Gift, Heart } from 'lucide-react';

export default function BookmarkCollectionPage() {
  const features = [
    {
      icon: BookOpen,
      title: 'For Students',
      description: 'Perfect study companion',
    },
    {
      icon: GraduationCap,
      title: 'Farewell Gifts',
      description: 'Memorable keepsakes',
    },
    {
      icon: Gift,
      title: 'Return Gifts',
      description: 'Thoughtful party favors',
    },
    {
      icon: Heart,
      title: 'Personalized',
      description: 'Custom designs available',
    },
  ];

  return (
    <div className="w-full">
      <Section className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/20 dark:via-yellow-950/20 dark:to-orange-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Bookmark Collection"
            subtitle="Aesthetic bookmarks for every reader"
          />
        </div>
      </Section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Pricing Card */}
            <Card className="border-primary/20 shadow-lg max-w-md mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif text-primary">
                  Starting Price
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Badge variant="default" className="text-2xl font-bold px-8 py-3">
                  ₹49
                </Badge>
              </CardContent>
            </Card>

            {/* Description */}
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Aesthetic and personalized bookmarks perfect for students, farewell gifts, and
                return gifts.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="text-center space-y-4 p-6 rounded-2xl hover:bg-accent/30 transition-colors duration-300"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="w-14 h-14 mx-auto rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-amber-500" />
                    </div>
                    <h3 className="font-semibold text-base text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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
