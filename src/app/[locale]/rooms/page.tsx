'use client';

import { useTranslations } from 'next-intl';
import { RoomCard } from '@/components/RoomCard';
import { ROOMS } from '@/lib/constants';
import { motion } from 'motion/react';

export default function RoomsPage() {
  const t = useTranslations('Rooms');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

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
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {ROOMS.map((room) => (
          <motion.div key={room._id} variants={itemVariants}>
            <RoomCard room={room} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
