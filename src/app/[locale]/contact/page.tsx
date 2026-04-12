'use client';

import { useTranslations } from 'next-intl';
import { ContactForm } from '@/components/ContactForm';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('Contact');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">{t('title')}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('subtitle')}</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Email Us</h3>
                <p className="text-muted-foreground">contact@leboncoin.com</p>
                <p className="text-muted-foreground">support@leboncoin.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Call Us</h3>
                <p className="text-muted-foreground">+1 (234) 567-890</p>
                <p className="text-muted-foreground">+1 (234) 567-891</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Visit Us</h3>
                <p className="text-muted-foreground">123 Luxury Avenue</p>
                <p className="text-muted-foreground">City Center, 10001</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-muted/50 rounded-3xl border border-border">
            <h4 className="text-lg font-bold mb-4">Business Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span className="font-medium">24 Hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saturday - Sunday</span>
                <span className="font-medium">24 Hours</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-background p-8 md:p-12 rounded-3xl border border-border shadow-2xl shadow-primary/5"
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}
