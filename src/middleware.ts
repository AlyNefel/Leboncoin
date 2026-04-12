import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en|fr)/:path*']
};
