import { EDITION } from '@/lib/i18n';
import PlaybookClient from '@/components/PlaybookClient';
export default function PlaybookPage() {
  if (EDITION === 'public') return (
    <div className="wrap section" style={{ textAlign: 'center' }}><h2>Playbook</h2><p className="lede" style={{ margin: '10px auto 0', maxWidth: 560 }}>This section is not available in the public edition.</p></div>
  );
  return (
    <div className="wrap section">
      <div className="eyebrow">Owner playbook 🔒</div>
      <h2>The delivery craft, written down</h2>
      <p className="lede">How the engagements actually run: qualification, pricing posture, phase-by-phase delivery moves, and the twelve working templates.</p>
      <PlaybookClient />
    </div>
  );
}
