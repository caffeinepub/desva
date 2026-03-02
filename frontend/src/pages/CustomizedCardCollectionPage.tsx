import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

function CardMockup() {
  return (
    <div className="relative flex items-center justify-center h-44 w-56">
      {/* Back card */}
      <div
        className="absolute w-36 h-28 bg-blush/30 rounded-xl border border-blush/50 shadow-soft"
        style={{ transform: 'rotate(-6deg) translateX(-8px) translateY(4px)' }}
      />
      {/* Front card */}
      <div className="relative w-36 h-28 bg-gradient-to-br from-white to-blush/20 rounded-xl border border-blush/60 shadow-soft flex flex-col items-center justify-center gap-2 p-4">
        <div className="text-2xl">💌</div>
        <div className="text-center">
          <div className="text-xs font-display text-rosegold tracking-wider">DESVA</div>
          <div className="text-[9px] text-dusty-rose mt-0.5">Customized Card</div>
        </div>
        {/* Decorative lines */}
        <div className="absolute bottom-3 left-4 right-4 space-y-1">
          <div className="h-px bg-blush/60 rounded" />
          <div className="h-px bg-blush/40 rounded w-3/4 mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default function CustomizedCardCollectionPage() {
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

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
            <div className="text-5xl mb-4">💌</div>
            <h1 className="font-display text-4xl md:text-5xl text-rosegold tracking-wide mb-3">Customized Cards</h1>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Fully customized greeting cards — say it beautifully, say it personally.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-soft hover:shadow-luxury transition-all duration-300 border border-blush/40 p-8 flex flex-col md:flex-row items-center gap-8 animate-fade-in">
          {/* Mockup */}
          <div className="flex-shrink-0">
            <CardMockup />
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-2xl text-rosegold mb-2 tracking-wide">2 Pages (4 Sides)</h3>
            <p className="text-sm text-dusty-rose font-medium mb-3 tracking-wide">Fully Customized</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A beautifully designed 2-page card with 4 customizable sides. Perfect for birthdays, farewells, bridal events, and special occasions.
            </p>
            <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
              {['Birthdays', 'Farewell', 'Bridal', 'Special Events'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blush/50 text-dusty-rose text-xs rounded-full border border-blush">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-3xl font-bold text-rosegold mb-6">Starts From ₹249</p>
            <button
              onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1500); }}
              className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 mx-auto md:mx-0
                ${added
                  ? 'bg-green-100 text-green-600 border border-green-200'
                  : 'bg-rosegold text-white hover:bg-rosegold-dark shadow-soft'
                }`}
            >
              <ShoppingCart size={16} />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate({ to: '/order' })}
            className="px-10 py-4 bg-rosegold text-white rounded-full font-medium shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-0.5"
          >
            Order Your Card
          </button>
        </div>
      </div>
    </div>
  );
}
