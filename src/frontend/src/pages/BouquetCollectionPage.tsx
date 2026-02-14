import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/Section';
import { Badge } from '@/components/ui/badge';
import { getBouquetImage } from '@/lib/catalogImageMap';

export default function BouquetCollectionPage() {
  const bouquets = [
    {
      name: 'Ribbon Flower Bouquet',
      image: getBouquetImage('ribbon'),
      description: 'Handmade ribbon flower bouquet with elegant wrapping.',
      tiers: [
        { name: 'Normal', price: '₹89' },
        { name: 'Premium', price: '₹119' },
      ],
    },
    {
      name: 'Artificial Flower Bouquet',
      image: getBouquetImage('artificial'),
      description: 'Long-lasting artificial flower bouquet with premium finish.',
      tiers: [
        { name: 'Normal', price: '₹89' },
        { name: 'Premium', price: '₹119' },
      ],
    },
    {
      name: 'Natural Flower Bouquet',
      image: getBouquetImage('natural'),
      description: 'Fresh natural flower bouquet arranged beautifully.',
      tiers: [
        { name: 'Normal', price: '₹89' },
        { name: 'Premium', price: '₹119' },
      ],
    },
    {
      name: 'Pipe Cleaner Flower Bouquet',
      image: getBouquetImage('pipeCleaner'),
      description: 'Unique and creative designs.',
      tiers: [
        { name: 'Normal', price: '₹200' },
        { name: 'Premium', price: '₹250' },
        { name: 'Customized Premium', price: '₹300+' },
      ],
      note: 'Final price depends on customization.',
    },
    {
      name: 'Polaroid Bouquet',
      image: getBouquetImage('polaroid'),
      description: 'Creative bouquet designed using polaroid photo memories.',
      startingPrice: '₹350',
    },
    {
      name: 'Customized Bouquet',
      image: getBouquetImage('customized'),
      description: 'Fully customized bouquet designed according to theme and customer preferences.',
      startingPrice: '₹550',
    },
  ];

  return (
    <div className="w-full">
      <Section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Bouquet Collection"
            subtitle="Handcrafted floral arrangements for every occasion"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
            {bouquets.map((bouquet, index) => (
              <Card
                key={bouquet.name}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden bg-card"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Product Image */}
                <div className="aspect-square w-full overflow-hidden bg-secondary/20">
                  <img
                    src={bouquet.image}
                    alt={bouquet.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-serif">{bouquet.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {bouquet.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  {bouquet.startingPrice ? (
                    <div className="p-4 rounded-lg bg-accent/30 text-center">
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <div className="mt-1">
                        <Badge variant="secondary" className="text-lg font-semibold px-4 py-1">
                          {bouquet.startingPrice}
                        </Badge>
                      </div>
                    </div>
                  ) : (
                    <>
                      {bouquet.tiers?.map((tier) => (
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
                      
                      {bouquet.note && (
                        <div className="mt-4 bg-muted/50 border border-border/50 rounded-lg p-3 text-center">
                          <p className="text-xs text-muted-foreground italic">
                            {bouquet.note}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
