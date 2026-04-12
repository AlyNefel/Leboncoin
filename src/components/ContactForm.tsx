'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export function ContactForm() {
  const t = useTranslations('Contact');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success(t('success'));
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error(t('error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">{t('name')}</Label>
          <Input id="name" name="name" required placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t('email')}</Label>
          <Input id="email" name="email" type="email" required placeholder="john@example.com" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">{t('subject')}</Label>
        <Input id="subject" name="subject" required placeholder="General Inquiry" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{t('message')}</Label>
        <Textarea id="message" name="message" required placeholder="How can we help you?" rows={5} />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {t('submit')}
      </Button>
    </form>
  );
}
