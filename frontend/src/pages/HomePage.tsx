import { useNavigate } from '@tanstack/react-router';
import { Sparkles, Heart, Star, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'bouquets',
    title: 'Bouquets',
    emoji: '💐',
    description: 'Ribbon, Artificial, Natural & Pipe Cleaner bouquets',
    path: '/bouquets',
    color: 'from-pink-50 to-rose-50',
    accent: 'text-rose-400',
    price: 'From ₹89',
  },
  {
    id: 'polaroids',
    title: 'Polaroids',
    emoji: '📸',
    description: 'Large Square, Medium Square & Rectangle frames',
    path: '/polaroids',
    color: 'from-purple-50 to-pink-50',
    accent: 'text-purple-400',
    price: 'From ₹9/piece',
  },
  {
    id: 'polaroid-collections',
    title: 'Polaroid Collections',
    emoji: '🎞️',
    description: '8-piece bouquet sets & 16-piece collections',
    path: '/polaroid-collections',
    color: 'from-fuchsia-50 to-pink-50',
    accent: 'text-fuchsia-400',
    price: 'From ₹99',
  },
  {
    id: 'magazines',
    title: 'Magazines',
    emoji: '📖',
    description: 'Custom magazines in Medium & Large (A4) sizes',
    path: '/magazines',
    color: 'from-amber-50 to-rose-50',
    accent: 'text-amber-500',
    price: 'From ₹399',
  },
  {
    id: 'bookmarks',
    title: 'Bookmarks',
    emoji: '🔖',
    description: 'Fully customized bookmarks for every occasion',
    path: '/bookmarks',
    color: 'from-teal-50 to-pink-50',
    accent: 'text-teal-500',
    price: 'From ₹49',
  },
  {
    id: 'cards',
    title: 'Customized Cards',
    emoji: '💌',
    description: '2-page (4-side) fully customized greeting cards',
    path: '/cards',
    color: 'from-rose-50 to-pink-50',
    accent: 'text-rose-500',
    price: 'From ₹249',
  },
  {
    id: 'accessories',
    title: 'Cute Accessories',
    emoji: '🎀',
    description: 'Earrings, keychains, scrunchies & more',
    path: '/accessories',
    color: 'from-pink-50 to-fuchsia-50',
    accent: 'text-pink-500',
    price: 'From ₹149',
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Premium Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blush via-cream to-blush/50 py-16 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-8 left-8 w-32 h-32 rounded-full bg-rosegold/5 blur-2xl" />
          <div className="absolute bottom-8 right-8 w-48 h-48 rounded-full bg-pink-200/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blush/30 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <img
              src="/assets/IMG_8099.jpeg"
              alt="DESVA"
              className="h-28 w-auto object-contain rounded-full shadow-luxury"
            />
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-rosegold tracking-widest mb-3 leading-tight">
            DESVA
          </h1>
          <p className="text-sm md:text-base tracking-[0.35em] text-dusty-rose uppercase mb-6 font-light">
            Personalized With Love
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
            Premium handmade customized gifts crafted with love — for every special moment.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-rosegold text-white rounded-full font-medium shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Sparkles size={16} />
              Shop Now
            </button>
            <button
              onClick={() => navigate({ to: '/order' })}
              className="px-8 py-3 bg-white text-rosegold border border-rosegold/30 rounded-full font-medium shadow-soft hover:bg-blush transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Heart size={16} />
              Order Through This Link
            </button>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="catalog" className="py-16 px-4 max-w-7xl mx-auto">
        <div id="categories" className="text-center mb-12 animate-slide-up">
          <h2 className="font-display text-3xl md:text-4xl text-rosegold mb-3 tracking-wide">
            Explore Our Collections
          </h2>
          <p className="text-dusty-rose text-sm tracking-widest uppercase">
            Handcrafted with love, made for you
          </p>
          <div className="flex justify-center mt-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-rosegold to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => navigate({ to: cat.path as any })}
              className={`group bg-gradient-to-br ${cat.color} rounded-3xl p-6 text-left shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 border border-blush/50 animate-fade-in`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="text-4xl mb-4">{cat.emoji}</div>
              <h3 className="font-display text-xl text-rosegold mb-2 tracking-wide">{cat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cat.description}</p>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-semibold ${cat.accent}`}>{cat.price}</span>
                <ArrowRight size={16} className={`${cat.accent} group-hover:translate-x-1 transition-transform`} />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blush/40 via-cream to-blush/20">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-rosegold fill-rosegold" />
              ))}
            </div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-rosegold mb-6 tracking-wide">About DESVA</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            DESVA is a premium handmade customized gift brand creating cute and memorable gifts crafted with love.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => navigate({ to: '/order' })}
              className="px-8 py-3 bg-rosegold text-white rounded-full font-medium shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Heart size={16} />
              Order Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
