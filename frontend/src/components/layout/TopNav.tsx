import { useState } from 'react';
import { useNavigate, useLocation } from '@tanstack/react-router';
import { Menu, X, ShoppingBag } from 'lucide-react';

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: 'Shop Now', path: '/#catalog' },
    { label: 'Explore', path: '/#categories' },
    { label: 'Order Through This Link', path: '/order' },
  ];

  const handleNav = (path: string) => {
    setMobileOpen(false);
    if (path.startsWith('/#')) {
      navigate({ to: '/' });
      setTimeout(() => {
        const id = path.replace('/#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate({ to: path as any });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blush shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Brand */}
          <button
            onClick={() => navigate({ to: '/' })}
            className="flex items-center gap-3 group"
          >
            <img
              src="/assets/IMG_8099.jpeg"
              alt="DESVA Logo"
              className="h-14 w-auto object-contain rounded-full shadow-soft"
            />
            <div className="flex flex-col items-start">
              <span className="font-display text-2xl font-bold text-rosegold tracking-widest leading-none">
                DESVA
              </span>
              <span className="text-xs text-dusty-rose tracking-[0.2em] font-light uppercase mt-0.5">
                Personalized With Love
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.path)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border
                  ${link.label === 'Order Through This Link'
                    ? 'bg-rosegold text-white border-rosegold hover:bg-rosegold-dark shadow-soft'
                    : 'bg-blush/60 text-dusty-rose border-blush hover:bg-blush hover:text-rosegold'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-full text-dusty-rose hover:bg-blush transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-blush px-4 py-4 space-y-2 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.path)}
              className={`w-full text-left px-5 py-3 rounded-full text-sm font-medium transition-all duration-200 border
                ${link.label === 'Order Through This Link'
                  ? 'bg-rosegold text-white border-rosegold'
                  : 'bg-blush/60 text-dusty-rose border-blush'
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
