import { SiInstagram } from 'react-icons/si';
import { Heart, Mail } from 'lucide-react';

export default function SiteFooter() {
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'desva-app'
  );
  const caffeineUrl = `https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`;

  return (
    <footer className="border-t border-border/40 bg-muted/30 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-primary">DESVA</h3>
            <p className="text-sm text-muted-foreground">Personalized With Love</p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Get in Touch</h4>
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <a
                href="https://instagram.com/_the.desva_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <SiInstagram className="h-4 w-4" />
                <span>@_the.desva_</span>
              </a>
              <a
                href="mailto:thedesvaofficial@gmail.com"
                className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>thedesvaofficial@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Made with Love */}
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Made with Love by DESVA</p>
            <p className="text-xs text-muted-foreground">
              Built with{' '}
              <Heart className="inline h-3 w-3 text-rose-400 fill-rose-400" /> using{' '}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DESVA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
