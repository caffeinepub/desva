import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

function BookmarkIllustration() {
  return (
    <svg width="80" height="140" viewBox="0 0 80 140" className="drop-shadow-md">
      {/* Bookmark shape */}
      <path
        d="M10 0 H70 Q78 0 78 8 V130 L40 110 L2 130 V8 Q2 0 10 0 Z"
        fill="#fce8e8"
        stroke="#f0c8c8"
        strokeWidth="1.5"
      />
      {/* Decorative ribbon */}
      <path
        d="M10 0 H70 Q78 0 78 8 V20 H2 V8 Q2 0 10 0 Z"
        fill="#f0c8c8"
        opacity="0.6"
      />
      {/* Heart */}
      <text x="40" y="70" textAnchor="middle" fontSize="22" fill="#e8a0a0">♡</text>
      {/* Stars */}
      <text x="25" y="50" textAnchor="middle" fontSize="10" fill="#e8a0a0" opacity="0.7">✦</text>
      <text x="55" y="90" textAnchor="middle" fontSize="8" fill="#e8a0a0" opacity="0.5">✦</text>
      {/* Name line */}
      <rect x="20" y="80" width="40" height="2" rx="1" fill="#f0c8c8" opacity="0.5" />
      <rect x="25" y="88" width="30" height="2" rx="1" fill="#f0c8c8" opacity="0.3" />
    </svg>
  );
}

export default function BookmarkCollectionPage() {
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
            <div className="text-5xl mb-4">🔖</div>
            <h1 className="font-display text-4xl md:text-5xl text-rosegold tracking-wide mb-3">Bookmarks</h1>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Fully customized bookmarks — a thoughtful gift for every reader.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-soft hover:shadow-luxury transition-all duration-300 border border-blush/40 p-8 flex flex-col md:flex-row items-center gap-8 animate-fade-in">
          {/* Illustration */}
          <div className="flex items-center justify-center gap-4">
            <BookmarkIllustration />
            <BookmarkIllustration />
            <BookmarkIllustration />
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-2xl text-rosegold mb-3 tracking-wide">Fully Customized Bookmark</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Personalized bookmarks crafted with your name, design, and message. Perfect for students, farewell gifts, and return gifts.
            </p>
            <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
              {['Students', 'Farewell Gifts', 'Return Gifts', 'Birthdays'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blush/50 text-dusty-rose text-xs rounded-full border border-blush">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-3xl font-bold text-rosegold mb-6">Starting From ₹49</p>
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
            Order Your Bookmark
          </button>
        </div>
      </div>
    </div>
  );
}
