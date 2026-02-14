import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/Section';
import { Badge } from '@/components/ui/badge';
import { Square, RectangleHorizontal, Maximize2 } from 'lucide-react';

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
      description: 'Extra large size',
    },
  ];

  return (
    <div className="w-full">
      <Section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-950/20 dark:via-cyan-950/20 dark:to-teal-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Polaroid Collection"
            subtitle="Capture your memories in style"
          />
        </div>
      </Section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Description */}
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-lg text-foreground/90 leading-relaxed">
                High-quality printed polaroid-style photo keepsakes. Perfect for memories, events,
                and gifts.
              </p>
            </div>

            {/* Sizes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {polaroidSizes.map((size, index) => {
                const Icon = size.icon;
                return (
                  <Card
                    key={size.name}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 text-center"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <CardHeader className="space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-blue-500" />
                      </div>
                      <CardTitle className="text-xl font-serif">{size.name}</CardTitle>
                      <CardDescription>{size.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="default" className="text-lg font-semibold px-6 py-2">
                        {size.price}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
