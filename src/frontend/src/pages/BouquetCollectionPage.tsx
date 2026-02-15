import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/Section';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getBouquetImage } from '@/lib/catalogImageMap';

export default function BouquetCollectionPage() {
  const bouquetTypes = [
    {
      name: 'Ribbon Flower Bouquet',
      image: getBouquetImage('ribbon'),
      tiers: [
        { name: 'Normal', price: '₹89' },
        { name: 'Premium', price: '₹119' },
      ],
    },
    {
      name: 'Artificial Flower Bouquet',
      image: getBouquetImage('artificial'),
      tiers: [
        { name: 'Normal', price: '₹89' },
        { name: 'Premium', price: '₹119' },
      ],
    },
    {
      name: 'Natural Flower Bouquet',
      image: getBouquetImage('natural'),
      tiers: [
        { name: 'Normal', price: '₹89' },
        { name: 'Premium', price: '₹119' },
      ],
    },
  ];

  const pipeCleanerTiers = [
    { name: 'Normal', price: '₹199' },
    { name: 'Premium', price: '₹249' },
    { name: 'Customized Premium', price: '₹299+' },
  ];

  return (
    <div className="w-full">
      <Section className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-rose-950/20 dark:via-pink-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Bouquet Collection"
            subtitle="Handcrafted floral arrangements for every occasion"
          />
        </div>
      </Section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {bouquetTypes.map((bouquet, index) => (
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
                  <CardDescription>Choose your preferred tier</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {bouquet.tiers.map((tier) => (
                    <div
                      key={tier.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors"
                    >
                      <span className="font-medium text-foreground">{tier.name}</span>
                      <Badge variant="secondary" className="text-base font-semibold">
                        {tier.price}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-12" />

          {/* Pipe Cleaner Flower Bouquet */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 shadow-lg overflow-hidden">
              {/* Product Image */}
              <div className="aspect-video w-full overflow-hidden bg-muted/30">
                <img
                  src={getBouquetImage('pipeCleaner')}
                  alt="Pipe Cleaner Flower Bouquet"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif text-primary">
                  Pipe Cleaner Flower Bouquet
                </CardTitle>
                <CardDescription>Unique and creative designs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pipeCleanerTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="flex items-center justify-between p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors"
                  >
                    <span className="font-medium text-foreground text-lg">{tier.name}</span>
                    <Badge variant="default" className="text-base font-semibold px-4 py-1">
                      {tier.price}
                    </Badge>
                  </div>
                ))}
                
                {/* Pricing Note */}
                <div className="mt-6 bg-muted/50 border border-border/50 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground italic">
                    Final pricing depends on customization.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
