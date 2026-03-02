import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ShoppingCart, ArrowLeft, Images } from 'lucide-react';

const collections = [
  {
    id: 'bouquet-set',
    label: '8 Polaroid Bouquet Set',
    price: '₹99',
    description: 'A beautiful set of 8 polaroids arranged as a bouquet — perfect gift',
    count: 8,
    icon: '💐',
  },
  {
    id: 'set-16',
    label: '16 Polaroid Set',
    price: '₹199',
    description: 'A complete collection of 16 polaroids to cherish your memories',
    count: 16,
    icon: '🎞️',
  },
];

function PolaroidStackIcon({ count }: { count: number }) {
  const positions = count === 8
    ? [[-8, 4, -6], [-4, 2, -3], [0, 0, 0], [4, 2, 3], [8, 4, 6]]
    : [[-12, 6, -8], [-8, 4, -5], [-4, 2, -2], [0, 0, 0], [4, 2, 2], [8, 4, 5], [12, 6, 8]];

  return (
    <div className="relative flex items-center justify-center h-32 w-40">
      {positions.map(([x, y, rot], i) => (
        <div
          key={i}
          className="absolute w-16 h-20 bg-white border border-blush/60 rounded-sm shadow-soft"
          style={{
            transform: `translateX(${x}px) translateY(${y}px) rotate(${rot}deg)`,
            zIndex: i,
          }}
        >
          <div className="m-1.5 h-12 bg-blush/40 rounded-sm flex items-center justify-center">
            <span className="text-xs text-rosegold/40">♡</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PolaroidCollectionsPage() {
  const navigate = useNavigate();
  const [added, setAdded] = useState<string | null>(null);

  const handleAddToCart = (id: string) => {
    setAdded(id);
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
            <div className="text-5xl mb-4">🎞️</div>
            <h1 className="font-display text-4xl md:text-5xl text-rosegold tracking-wide mb-3">Polaroid Collections</h1>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Curated sets of polaroids — perfect for gifting and memory-keeping.
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {collections.map((col, i) => (
            <div
              key={col.id}
              className="bg-white rounded-3xl shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 border border-blush/40 p-8 flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <PolaroidStackIcon count={col.count} />
              <div className="mt-4 text-3xl">{col.icon}</div>
              <h3 className="font-display text-xl text-rosegold mt-3 mb-2 tracking-wide text-center">{col.label}</h3>
              <p className="text-sm text-muted-foreground text-center mb-4 leading-relaxed">{col.description}</p>
              <p className="text-3xl font-bold text-rosegold mb-5">{col.price}</p>
              <button
                onClick={() => handleAddToCart(col.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 w-full justify-center
                  ${added === col.id
                    ? 'bg-green-100 text-green-600 border border-green-200'
                    : 'bg-rosegold text-white hover:bg-rosegold-dark shadow-soft'
                  }`}
              >
                <ShoppingCart size={14} />
                {added === col.id ? 'Added!' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate({ to: '/order' })}
            className="px-10 py-4 bg-rosegold text-white rounded-full font-medium shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-0.5"
          >
            Order Your Collection
          </button>
        </div>
      </div>
    </div>
  );
}
