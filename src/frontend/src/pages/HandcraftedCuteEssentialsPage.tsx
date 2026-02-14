import { Section, SectionHeader } from '@/components/Section';
import { Card } from '@/components/ui/card';
import { cuteEssentialsImages } from '@/lib/catalogImageMap';

export default function HandcraftedCuteEssentialsPage() {
  return (
    <div className="w-full">
      <Section className="bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-pink-950/20 dark:via-rose-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Handcrafted Cute Essentials"
            subtitle="Adorable handmade accessories for every style"
          />
        </div>
      </Section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {cuteEssentialsImages.map((image, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-card"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="aspect-square w-full overflow-hidden bg-white">
                  <img
                    src={image}
                    alt={`Cute Essential ${index + 1}`}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    style={{
                      filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.05))',
                    }}
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Description */}
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each piece is carefully handcrafted with love and attention to detail. Perfect for
              personal use or as thoughtful gifts.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
