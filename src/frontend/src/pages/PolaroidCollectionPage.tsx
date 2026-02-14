import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/Section';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Square, RectangleHorizontal, Maximize2 } from 'lucide-react';
import { getPolaroidBouquetImage } from '@/lib/catalogImageMap';

export default function PolaroidCollectionPage() {
  const polaroidSizes = [
    {
      name: 'Square',
      price: '₹9',
      icon: Square,
      description: 'Perfect square format',
    },
    {
      name: 'Rectangle',
      price: '₹9',
      icon: RectangleHorizontal,
      description: 'Classic rectangle shape',
    },
    {
      name: 'Large',
      price: '₹11',
      icon: Maximize2,
      description: 'Extra large prints',
    },
  ];

  const polaroidBouquets = [
    {
      name: 'Polaroid Bouquet',
      image: getPolaroidBouquetImage('standard'),
      price: 'Starting from ₹349',
      description: 'Creative bouquet made using polaroid memories.',
    },
    {
      name: 'Customized Polaroid Bouquet',
      image: getPolaroidBouquetImage('customized'),
      price: 'Starting from ₹549',
      description: 'Fully customized polaroid bouquet tailored to theme and memory selection.',
    },
  ];

  return (
    <div className="w-full">
      <Section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-950/20 dark:via-cyan-950/20 dark:to-teal-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Polaroid Collection"
            subtitle="Capture and preserve your precious memories"
          />
        </div>
      </Section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Polaroid Prints */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            <div className="text-center">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                Polaroid Prints
              </h3>
              <p className="text-muted-foreground">
                High-quality prints in multiple sizes
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {polaroidSizes.map((size, index) => {
                const Icon = size.icon;
                return (
                  <Card
                    key={size.name}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-500" />
                      </div>
                      <CardTitle className="text-lg font-serif">{size.name}</CardTitle>
                      <CardDescription>{size.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Badge variant="default" className="text-xl font-bold px-6 py-2">
                        {size.price}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="my-12">
            <Separator />
          </div>

          {/* Polaroid Bouquets */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                Polaroid Bouquets
              </h3>
              <p className="text-muted-foreground">
                Unique memory bouquets combining photos and flowers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {polaroidBouquets.map((bouquet, index) => (
                <Card
                  key={bouquet.name}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Product Image */}
                  <div className="aspect-square w-full overflow-hidden bg-muted/30">
                    <img
                      src={bouquet.image}
                      alt={bouquet.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-serif">{bouquet.name}</CardTitle>
                    <CardDescription>{bouquet.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="default" className="text-lg font-semibold px-6 py-2">
                      {bouquet.price}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
