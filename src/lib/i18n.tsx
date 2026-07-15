import React, { createContext, useContext, useState } from 'react';
import { I18N_RAW, EN_DOM } from './content/dict';

export type Lang = 'en' | 'fr';
const EN: Record<string, string> = { ...EN_DOM, ...(I18N_RAW as any).en };
const FR: Record<string, string> = { ...EN, ...(I18N_RAW as any).fr };

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'en', setLang: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}
export function useLang() { return useContext(Ctx); }
export function useT() {
  const { lang } = useLang();
  return (k: string) => (lang === 'fr' ? FR : EN)[k] ?? k;
}
/** Renders a dictionary entry (may contain inline HTML) inside the given tag. */
export function T({ k, as = 'span', className, style }: { k: string; as?: any; className?: string; style?: React.CSSProperties }) {
  const t = useT();
  const Tag = as;
  return <Tag className={className} style={style} dangerouslySetInnerHTML={{ __html: t(k) }} />;
}
export function loc<X extends object>(base: X, fr: Partial<X> | undefined, lang: Lang): X {
  return lang === 'fr' && fr ? { ...base, ...fr } : base;
}
export const EDITION: 'owner' | 'public' = import.meta.env.VITE_EDITION === 'public' ? 'public' : 'owner';
