'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Languages, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'fr' : locale === 'fr' ? 'ar' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/rooms', label: t('rooms') },
    { href: '/reservation', label: t('reservation') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="group flex items-center gap-2">
              <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-6 transition-transform">
                L
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter">
                LE BON COIN
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="ghost" size="icon" onClick={toggleLocale}>
              <Languages className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2"
                onClick={toggleLocale}
              >
                <Languages className="h-5 w-5 mr-2" />
                {locale.toUpperCase()}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
