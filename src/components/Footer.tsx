import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const t = useTranslations('Navigation');

  return (
    <footer className="bg-background border-t py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                L
              </div>
              <span className="text-xl font-display font-bold tracking-tighter">
                LE BON COIN
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Experience the pinnacle of luxury and comfort. Our hotel offers world-class amenities and personalized service to make your stay unforgettable.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">{t('home')}</Link></li>
              <li><Link href="/rooms" className="text-muted-foreground hover:text-primary transition-colors">{t('rooms')}</Link></li>
              <li><Link href="/reservation" className="text-muted-foreground hover:text-primary transition-colors">{t('reservation')}</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Spa & Wellness</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Fine Dining</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Event Spaces</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Airport Transfer</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Contact Us</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              123 Luxury Avenue<br />
              City Center, 10001<br />
              New York, USA
            </p>
            <p className="text-sm font-bold mt-4">+1 (234) 567-890</p>
            <p className="text-sm text-primary mt-1">contact@leboncoin.com</p>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Le Bon Coin Hotel. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
