'use client';

import { useTranslations } from 'next-intl';
import { ReservationForm } from '@/components/ReservationForm';
import { motion } from 'motion/react';
import { CalendarDays, CreditCard, CheckCircle2 } from 'lucide-react';

export default function ReservationPage() {
  const t = useTranslations('Reservation');

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-background p-8 md:p-12 rounded-3xl border border-border shadow-2xl shadow-primary/5"
        >
          <ReservationForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-primary h-6 w-6" />
              Booking Benefits
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">1</span>
                </div>
                <p className="text-sm">Best Price Guaranteed</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">2</span>
                </div>
                <p className="text-sm">Free Cancellation up to 24h</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">3</span>
                </div>
                <p className="text-sm">Complimentary Breakfast</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">4</span>
                </div>
                <p className="text-sm">Late Check-out (subject to availability)</p>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-muted/50 rounded-3xl border border-border">
            <h4 className="text-lg font-bold mb-4">Payment Methods</h4>
            <div className="flex gap-4 opacity-60">
              <CreditCard className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="text-xs font-medium uppercase tracking-wider">Secure Payment</span>
                <span className="text-xs text-muted-foreground">All major cards accepted</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
