/* Public edition builder for the Vite SPA: physically swaps owner-only pages
   for stubs before bundling, restores them after, then scans dist/ for leaks. */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { execSync } from 'child_process';
import { join } from 'path';

const PAGES = ['src/pages/Playbook.tsx', 'src/pages/Ask.tsx'];
const STUB = (title, msg) => `export default function Page() {
  return (
    <div className="wrap section" style={{ textAlign: 'center' }}>
      <h2>${title}</h2>
      <p className="lede" style={{ margin: '10px auto 0', maxWidth: 560 }}>${msg}</p>
    </div>
  );
}
`;
const STUBS = [STUB('Playbook', 'This section is not available in the public edition.'), STUB('Ask Inflexion', 'This feature is not available in the public edition.')];
const backups = PAGES.map((p) => readFileSync(p, 'utf8'));
try {
  PAGES.forEach((p, i) => writeFileSync(p, STUBS[i]));
  execSync('vite build', { stdio: 'inherit', env: { ...process.env, VITE_EDITION: 'public' } });
} finally {
  PAGES.forEach((p, i) => writeFileSync(p, backups[i]));
}
const MARKERS = ['PB_HASH', 'Qualification Scorecard', 'pricing posture', 'sk-ant-', 'Owner access', 'ASK_SYSTEM'];
let hits = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(html|js|css|txt)$/.test(f)) {
      const s = readFileSync(p, 'utf8');
      MARKERS.forEach((m) => { if (s.includes(m)) hits.push(m + ' in ' + p); });
    }
  }
})('dist');
if (hits.length) { console.error('PUBLIC BUILD LEAK:\n' + hits.join('\n')); process.exit(1); }
console.log('verify_public: clean. No owner material anywhere in dist/.');
