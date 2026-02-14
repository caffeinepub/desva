import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/Section';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function BouquetCollectionPage() {
  const bouquetTypes = [
    {
      name: 'Natural Flower Bouquet',
      tiers: [
        { name: 'Basic', price: '₹89' },
        { name: 'Premium', price: '₹119' },
      ],
    },
    {
      name: 'Artificial Flower Bouquet',
      tiers: [
        { name: 'Basic', price: '₹89' },
        { name: 'Premium', price: '₹119' },
      ],
    },
    {
      name: 'Ribbon Flower Bouquet',
      tiers: [
        { name: 'Basic', price: '₹89' },
        { name: 'Premium', price: '₹119' },
      ],
    },
  ];

  const pipeCleanerTiers = [
    { name: 'Normal', price: '₹200' },
    { name: 'Medium / Premium', price: '₹250' },
    { name: 'Customized Premium', price: 'Starting ₹300+' },
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
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
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
          <div className="max-w-3xl mx-auto">
            <Card className="border-primary/20 shadow-lg">
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
              </CardContent>
            </Card>
          </div>

          {/* Pricing Note */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-muted/50 border border-border/50 rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground italic">
                Customized pricing may vary based on design complexity.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
