import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ShoppingCart, ArrowLeft, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { useActor } from '../hooks/useActor';

const defaultProducts = [
  {
    key: 'Earrings',
    name: 'Earrings',
    defaultPrice: 149,
    emoji: '💎',
    label: 'Starting From',
    trending: false,
  },
  {
    key: 'Pipe Cleaner Framework',
    name: 'Pipe Cleaner Framework',
    defaultPrice: 249,
    emoji: '🌸',
    label: '',
    trending: false,
  },
  {
    key: 'Double Side Photo Printed Keychain',
    name: 'Double Side Photo Printed Keychain',
    defaultPrice: 199,
    emoji: '🔑',
    label: 'Starting From',
    trending: false,
  },
  {
    key: 'Premium Customized Scrunchies',
    name: 'Premium Customized Scrunchies',
    defaultPrice: 199,
    emoji: '🎀',
    label: '',
    trending: false,
  },
  {
    key: 'Pipe Cleaner Framework Bag',
    name: 'Pipe Cleaner Framework Bag (Trending Model)',
    defaultPrice: 349,
    emoji: '👜',
    label: '',
    trending: true,
  },
];

function useGetAllProducts() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ['allProducts'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProducts();
    },
    enabled: !!actor && !isFetching,
  });
}

export default function CuteAccessoriesPage() {
  const navigate = useNavigate();
  const { data: backendProducts, isLoading } = useGetAllProducts();
  const [added, setAdded] = useState<string | null>(null);

  const handleAddToCart = (key: string) => {
    setAdded(key);
    setTimeout(() => setAdded(null), 1500);
  };

  const getPrice = (key: string, defaultPrice: number): number => {
    if (!backendProducts) return defaultPrice;
    const found = backendProducts.find(([k]) => k === key);
    return found ? Number(found[1].price) : defaultPrice;
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
            <div className="text-5xl mb-4">🎀</div>
            <h1 className="font-display text-4xl md:text-5xl text-rosegold tracking-wide mb-3">Cute Accessories</h1>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Premium handcrafted accessories — adorable, unique, and made with love.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {isLoading ? (
          <div className="flex justify-center py-16">
            <Loader2 size={32} className="animate-spin text-rosegold" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {defaultProducts.map((product, i) => {
              const price = getPrice(product.key, product.defaultPrice);

              return (
                <div
                  key={product.key}
                  className="bg-white rounded-3xl shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 border border-blush/40 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-3xl">{product.emoji}</span>
                      {product.trending && (
                        <span className="bg-rosegold text-white text-xs px-3 py-1 rounded-full font-medium shadow-soft">
                          Trending ✨
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-base text-rosegold mb-2 tracking-wide leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xl font-bold text-rosegold mb-5">
                      {product.label ? `${product.label} ₹${price}` : `₹${price}`}
                    </p>
                    <button
                      onClick={() => handleAddToCart(product.key)}
                      className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 w-full justify-center
                        ${added === product.key
                          ? 'bg-green-100 text-green-600 border border-green-200'
                          : 'bg-rosegold text-white hover:bg-rosegold-dark shadow-soft'
                        }`}
                    >
                      <ShoppingCart size={14} />
                      {added === product.key ? 'Added!' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate({ to: '/order' })}
            className="px-10 py-4 bg-rosegold text-white rounded-full font-medium shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-0.5"
          >
            Order Your Accessories
          </button>
        </div>
      </div>
    </div>
  );
}
