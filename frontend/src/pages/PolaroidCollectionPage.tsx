import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

const polaroids = [
  {
    id: 'large-square',
    label: 'Large Square',
    price: '₹11',
    unit: 'per piece',
    width: 120,
    height: 120,
    photoH: 90,
  },
  {
    id: 'medium-square',
    label: 'Medium Square',
    price: '₹9',
    unit: 'per piece',
    width: 100,
    height: 100,
    photoH: 74,
  },
  {
    id: 'rectangle',
    label: 'Rectangle',
    price: '₹9',
    unit: 'per piece',
    width: 90,
    height: 120,
    photoH: 90,
  },
];

function PolaroidFrame({ width, height, photoH }: { width: number; height: number; photoH: number }) {
  return (
    <svg
      width={width + 32}
      height={height + 48}
      viewBox={`0 0 ${width + 32} ${height + 48}`}
      className="drop-shadow-md"
    >
      {/* Frame background */}
      <rect x="0" y="0" width={width + 32} height={height + 48} rx="4" fill="#fff9f5" stroke="#f0d9d0" strokeWidth="1.5" />
      {/* Photo area */}
      <rect x="12" y="12" width={width + 8} height={photoH} rx="2" fill="#fce8e8" stroke="#f0c8c8" strokeWidth="1" />
      {/* Subtle inner decoration */}
      <rect x="18" y="18" width={width - 4} height={photoH - 12} rx="1" fill="#fdf0f0" />
      {/* Heart decoration */}
      <text x={(width + 32) / 2} y={photoH / 2 + 18} textAnchor="middle" fontSize="18" fill="#e8a0a0" opacity="0.5">♡</text>
      {/* Bottom white strip */}
      <rect x="0" y={photoH + 12} width={width + 32} height={height + 48 - photoH - 12} rx="0" fill="#fff9f5" />
    </svg>
  );
}

export default function PolaroidCollectionPage() {
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
            <div className="text-5xl mb-4">📸</div>
            <h1 className="font-display text-4xl md:text-5xl text-rosegold tracking-wide mb-3">Polaroids</h1>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Beautiful aesthetic polaroid frames — printed with your cherished memories.
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {polaroids.map((p, i) => (
            <div
              key={p.id}
              className="bg-white rounded-3xl shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 border border-blush/40 p-6 flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-6 flex items-center justify-center">
                <PolaroidFrame width={p.width} height={p.height} photoH={p.photoH} />
              </div>
              <h3 className="font-display text-lg text-rosegold mb-1 tracking-wide">{p.label}</h3>
              <p className="text-2xl font-bold text-rosegold mb-1">{p.price}</p>
              <p className="text-xs text-dusty-rose mb-4">{p.unit}</p>
              <button
                onClick={() => handleAddToCart(p.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 w-full justify-center
                  ${added === p.id
                    ? 'bg-green-100 text-green-600 border border-green-200'
                    : 'bg-rosegold text-white hover:bg-rosegold-dark shadow-soft'
                  }`}
              >
                <ShoppingCart size={14} />
                {added === p.id ? 'Added!' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate({ to: '/order' })}
            className="px-10 py-4 bg-rosegold text-white rounded-full font-medium shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-0.5"
          >
            Order Your Polaroids
          </button>
        </div>
      </div>
    </div>
  );
}
