import { useQuery } from '@tanstack/react-query';
import { useActor } from '../../hooks/useActor';
import { SiInstagram } from 'react-icons/si';
import { Heart, Mail } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

function useGetContactInfo() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ['contactInfo'],
    queryFn: async () => {
      if (!actor) return { instagramHandle: '_the.desva_', email: 'thedesvaofficial.com' };
      return actor.getContactInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export default function SiteFooter() {
  const { data: contact } = useGetContactInfo();
  const navigate = useNavigate();
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'desva-app');

  const instagramHandle = contact?.instagramHandle || '_the.desva_';
  const email = contact?.email || 'thedesvaofficial.com';

  const categories = [
    { label: 'Bouquets', path: '/bouquets' },
    { label: 'Polaroids', path: '/polaroids' },
    { label: 'Polaroid Collections', path: '/polaroid-collections' },
    { label: 'Magazines', path: '/magazines' },
    { label: 'Bookmarks', path: '/bookmarks' },
    { label: 'Customized Cards', path: '/cards' },
    { label: 'Cute Accessories', path: '/accessories' },
  ];

  return (
    <footer className="bg-gradient-to-b from-blush/30 to-cream border-t border-blush mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src="/assets/IMG_8099.jpeg" alt="DESVA" className="h-16 w-auto object-contain rounded-full shadow-soft" />
            <h3 className="font-display text-2xl text-rosegold tracking-widest">DESVA</h3>
            <p className="text-xs text-dusty-rose tracking-[0.2em] uppercase">Personalized With Love</p>
            <p className="text-sm text-muted-foreground text-center md:text-left mt-2 leading-relaxed">
              DESVA is a premium handmade customized gift brand creating cute and memorable gifts crafted with love.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg text-rosegold mb-4 tracking-wide">Shop</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <button
                    onClick={() => navigate({ to: cat.path as any })}
                    className="text-sm text-dusty-rose hover:text-rosegold transition-colors"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-rosegold mb-4 tracking-wide">Contact Us</h4>
            <p className="text-sm text-muted-foreground mb-4">
              For any help, feel free to DM us on Instagram.
            </p>
            <div className="space-y-3">
              <a
                href={`https://instagram.com/${instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-dusty-rose hover:text-rosegold transition-colors group"
              >
                <SiInstagram size={18} className="text-rosegold" />
                <span>@{instagramHandle}</span>
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm text-dusty-rose hover:text-rosegold transition-colors"
              >
                <Mail size={16} className="text-rosegold" />
                <span>{email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blush flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} DESVA. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={12} className="text-rosegold fill-rosegold" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rosegold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
