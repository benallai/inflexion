import { T, useT } from '@/lib/i18n';
export default function LegalPage() {
  const t = useT();
  return (
    <div className="wrap section" style={{ maxWidth: 820 }}>
      <div className="eyebrow">{t('lg_eb')}</div>
      <h2>{t('lg_h')}</h2>
      {[1, 2, 3, 4].map((i) => <T key={i} k={'lg_' + i} as="p" style={{ marginTop: 18 }} />)}
    </div>
  );
}
