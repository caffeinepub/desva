import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ShoppingCart, ArrowLeft, Info } from 'lucide-react';

const mediumProducts = [
  { id: 'med-8', label: '8 Pages', price: '₹599', largePrice: '₹699' },
  { id: 'med-6', label: '6 Pages', price: '₹499', largePrice: '₹599' },
  { id: 'med-4', label: '4 Pages', price: '₹399', largePrice: '₹499' },
];

function MagazineMockup({ pages }: { pages: string }) {
  return (
    <div className="relative flex items-center justify-center h-36">
      {/* Back page */}
      <div className="absolute w-20 h-28 bg-blush/40 rounded-sm border border-blush/60 shadow-soft" style={{ transform: 'rotate(-4deg) translateX(-4px)' }} />
      {/* Front cover */}
      <div className="relative w-20 h-28 bg-gradient-to-br from-blush to-cream rounded-sm border border-blush/60 shadow-soft flex flex-col items-center justify-between p-2">
        <div className="w-full h-14 bg-white/60 rounded-sm flex items-center justify-center">
          <span className="text-rosegold/40 text-lg">♡</span>
        </div>
        <div className="text-center">
          <div className="text-xs text-rosegold font-display tracking-wider">DESVA</div>
          <div className="text-[9px] text-dusty-rose">{pages}</div>
        </div>
      </div>
    </div>
  );
}

export default function MagazineCollectionPage() {
  const navigate = useNavigate();
  const [size, setSize] = useState<'medium' | 'large'>('medium');
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
            <div className="text-5xl mb-4">📖</div>
            <h1 className="font-display text-4xl md:text-5xl text-rosegold tracking-wide mb-3">Magazines</h1>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Custom-designed magazines — a beautiful keepsake for every occasion.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Size Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-blush/40 rounded-full p-1 flex gap-1">
            <button
              onClick={() => setSize('medium')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${size === 'medium' ? 'bg-rosegold text-white shadow-soft' : 'text-dusty-rose hover:text-rosegold'}`}
            >
              Medium Size
            </button>
            <button
              onClick={() => setSize('large')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${size === 'large' ? 'bg-rosegold text-white shadow-soft' : 'text-dusty-rose hover:text-rosegold'}`}
            >
              Large Size (A4)
            </button>
          </div>
        </div>

        {/* Note */}
        {size === 'large' && (
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-3 mb-8 max-w-md mx-auto animate-fade-in">
            <Info size={16} className="text-amber-500 flex-shrink-0" />
            <p className="text-sm text-amber-700 font-medium">₹100 Extra For All Large Size Magazines</p>
          </div>
        )}

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {mediumProducts.map((product, i) => {
            const displayPrice = size === 'large' ? product.largePrice : product.price;
            const cardId = `${size}-${product.id}`;
            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 border border-blush/40 p-6 flex flex-col items-center animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <MagazineMockup pages={product.label} />
                <h3 className="font-display text-lg text-rosegold mt-4 mb-1 tracking-wide">{product.label}</h3>
                {size === 'large' && (
                  <p className="text-xs text-dusty-rose mb-1">A4 Size</p>
                )}
                <p className="text-2xl font-bold text-rosegold mb-4">{displayPrice}</p>
                <button
                  onClick={() => handleAddToCart(cardId)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 w-full justify-center
                    ${added === cardId
                      ? 'bg-green-100 text-green-600 border border-green-200'
                      : 'bg-rosegold text-white hover:bg-rosegold-dark shadow-soft'
                    }`}
                >
                  <ShoppingCart size={14} />
                  {added === cardId ? 'Added!' : 'Add to Cart'}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate({ to: '/order' })}
            className="px-10 py-4 bg-rosegold text-white rounded-full font-medium shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-0.5"
          >
            Order Your Magazine
          </button>
        </div>
      </div>
    </div>
  );
}
