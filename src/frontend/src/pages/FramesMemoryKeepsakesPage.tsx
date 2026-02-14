import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/Section';
import { Badge } from '@/components/ui/badge';
import { getFramesMemoryImage } from '@/lib/catalogImageMap';

export default function FramesMemoryKeepsakesPage() {
  const products = [
    {
      name: 'Polaroid Prints',
      image: getFramesMemoryImage('polaroidPrints'),
      options: [
        { name: 'Square', price: '₹9' },
        { name: 'Rectangle', price: '₹9' },
        { name: 'Large', price: '₹11' },
      ],
    },
    {
      name: 'Polaroid Book',
      image: getFramesMemoryImage('polaroidBook'),
      description: 'Compact memory book printed in premium quality.',
      options: [
        { name: '8 Photos', price: '₹99' },
        { name: '16 Photos', price: '₹199' },
      ],
    },
    {
      name: 'Magazine Style Memory Album',
      image: getFramesMemoryImage('magazineAlbum'),
      description: 'Customized magazine-style photo album with elegant layout.',
      options: [
        { name: '4 Pages', price: '₹499' },
        { name: '8 Pages', price: '₹599' },
      ],
    },
  ];

  return (
    <div className="w-full">
      <Section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-teal-950/20 dark:via-cyan-950/20 dark:to-blue-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frames & Memory Keepsakes"
            subtitle="Preserve your precious moments in style"
          />
        </div>
      </Section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.name}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Product Image */}
                <div className="aspect-square w-full overflow-hidden bg-muted/30">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-serif">{product.name}</CardTitle>
                  {product.description && (
                    <CardDescription className="text-sm leading-relaxed">
                      {product.description}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="space-y-3">
                  {product.options.map((option) => (
                    <div
                      key={option.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors"
                    >
                      <span className="font-medium text-foreground">{option.name}</span>
                      <Badge variant="secondary" className="text-base font-semibold">
                        {option.price}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
