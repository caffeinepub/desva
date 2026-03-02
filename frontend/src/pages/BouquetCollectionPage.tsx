import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Flower, ShoppingCart, ArrowLeft, Sparkles } from 'lucide-react';

interface BouquetVariant {
  label: string;
  price: string;
}

interface BouquetType {
  name: string;
  icon: string;
  description: string;
  variants: BouquetVariant[];
  note?: string;
}

const bouquetTypes: BouquetType[] = [
  {
    name: 'Ribbon Flower Bouquet',
    icon: '🎀',
    description: 'Elegant ribbon flowers crafted with premium satin ribbons',
    variants: [
      { label: 'Classic Ribbon', price: '₹89' },
      { label: 'Premium Ribbon', price: '₹99' },
    ],
  },
  {
    name: 'Artificial Flower Bouquet',
    icon: '🌸',
    description: 'Beautiful artificial flowers that last forever',
    variants: [
      { label: 'Classic Ribbon', price: '₹89' },
      { label: 'Premium Ribbon', price: '₹99' },
    ],
  },
  {
    name: 'Natural Flower Bouquet',
    icon: '🌹',
    description: 'Fresh natural flowers for that perfect touch',
    variants: [
      { label: 'Classic Ribbon', price: '₹89' },
      { label: 'Premium Ribbon', price: '₹99' },
    ],
  },
  {
    name: 'Pipe Cleaner Bouquet',
    icon: '✨',
    description: 'Unique handcrafted pipe cleaner flowers — fully customizable',
    variants: [
      { label: 'Basic', price: '₹199' },
      { label: 'Moderate', price: '₹249' },
      { label: 'Premium (Fully Customized with Name & Design)', price: '₹299+' },
    ],
    note: 'Premium includes full name & design customization',
  },
];

export default function BouquetCollectionPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<string[]>([]);
  const [added, setAdded] = useState<string | null>(null);

  const handleAddToCart = (item: string) => {
    setCart((prev) => [...prev, item]);
    setAdded(item);
    setTimeout(() => setAdded(null), 1500);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-gradient-to-br from-blush via-cream to-blush/50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => navigate({ to: '/' })}
            className="flex items-center gap-2 text-dusty-rose hover:text-rosegold transition-colors mb-6 text-sm"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>
          <div className="text-center animate-fade-in">
            <div className="text-5xl mb-4">💐</div>
            <h1 className="font-display text-4xl md:text-5xl text-rosegold tracking-wide mb-3">Bouquets</h1>
            <p className="text-dusty-rose tracking-widest text-sm uppercase mb-2">All Single Flower Bouquets</p>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Handcrafted with love, each bouquet is made to order for your special someone.
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bouquetTypes.map((bouquet, i) => (
            <div
              key={bouquet.name}
              className="bg-white rounded-3xl shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-blush/40 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Illustration */}
              <div className="bg-gradient-to-br from-blush/60 to-cream h-40 flex items-center justify-center">
                <div className="text-7xl">{bouquet.icon}</div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl text-rosegold mb-2 tracking-wide">{bouquet.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{bouquet.description}</p>

                <div className="space-y-3">
                  {bouquet.variants.map((variant) => (
                    <div
                      key={variant.label}
                      className="flex items-center justify-between bg-blush/30 rounded-2xl px-4 py-3"
                    >
                      <span className="text-sm text-dusty-rose font-medium">{variant.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-rosegold font-bold text-base">{variant.price}</span>
                        <button
                          onClick={() => handleAddToCart(`${bouquet.name} - ${variant.label}`)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200
                            ${added === `${bouquet.name} - ${variant.label}`
                              ? 'bg-green-100 text-green-600 border border-green-200'
                              : 'bg-rosegold text-white hover:bg-rosegold-dark shadow-soft'
                            }`}
                        >
                          <ShoppingCart size={12} />
                          {added === `${bouquet.name} - ${variant.label}` ? 'Added!' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {bouquet.note && (
                  <p className="mt-3 text-xs text-dusty-rose/70 italic flex items-center gap-1">
                    <Sparkles size={12} /> {bouquet.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Order CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate({ to: '/order' })}
            className="px-10 py-4 bg-rosegold text-white rounded-full font-medium shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-0.5 text-base"
          >
            Order Your Bouquet
          </button>
        </div>
      </div>
    </div>
  );
}
