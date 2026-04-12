'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

export default function IndexPage() {
  const t = useTranslations('Index');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
            alt="Hotel Hero"
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center text-white px-4 max-w-4xl"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-6 leading-tight"
          >
            {t('title')}
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl font-light mb-10 opacity-90 max-w-2xl mx-auto"
          >
            {t('welcome')} — {t('description')}
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="text-lg px-10 py-7 rounded-full bg-primary hover:bg-primary/90 transition-all hover:scale-105">
              <Link href="/reservation">
                {t('bookStay')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-10 py-7 rounded-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all hover:scale-105">
              <Link href="/rooms">{t('exploreRooms')}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16"
          >
            <div className="flex flex-col items-center text-center group">
              <div className="h-20 w-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:bg-primary/10 group-hover:rotate-12">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{t('luxuryTitle')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('luxuryDesc')}
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="h-20 w-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:bg-primary/10 group-hover:rotate-12">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{t('secureTitle')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('secureDesc')}
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="h-20 w-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:bg-primary/10 group-hover:rotate-12">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{t('supportTitle')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('supportDesc')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 tracking-tight">
              {t('ctaTitle')}
            </h2>
            <Button asChild size="lg" variant="default" className="rounded-full px-16 py-8 text-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <Link href="/reservation">{t('reserveNow')}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
