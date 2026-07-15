import { T, useT } from '@/lib/i18n';
export default function PrivacyPage() {
  const t = useT();
  return (
    <div className="wrap section" style={{ maxWidth: 820 }}>
      <div className="eyebrow">{t('pv_eb')}</div>
      <h2>{t('pv_h')}</h2>
      {[1, 2, 3, 4, 5].map((i) => <T key={i} k={'pv_' + i} as="p" style={{ marginTop: 18 }} />)}
    </div>
  );
}
