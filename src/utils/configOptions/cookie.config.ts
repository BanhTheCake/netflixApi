import { CookieOptions } from 'express';

export const cookieConfig: CookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: 'none',
  maxAge: 1000 * 60 * 60 * 24, // 1 days
  domain: 'https://banhthenetflix.vercel.app',
  path: '/',
};
