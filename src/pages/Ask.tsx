import { useLang, EDITION } from '@/lib/i18n';
import AskChat from '@/components/AskChat';
export default function AskPage() {
  const { lang } = useLang();
  const FRL = lang === 'fr';
  if (EDITION === 'public') return (
    <div className="wrap section" style={{ textAlign: 'center' }}><h2>Ask Inflexion</h2><p className="lede" style={{ margin: '10px auto 0', maxWidth: 560 }}>{FRL ? "Cette fonctionnalité n'est pas disponible dans l'édition publique." : 'This feature is not available in the public edition.'}</p></div>
  );
  return (
    <div className="wrap section">
      <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 34px' }}>
        <div className="eyebrow">{FRL ? 'Ask Inflexion ✳ RAG sur le contenu de la plateforme' : 'Ask Inflexion ✳ RAG over the platform content'}</div>
        <h2>{FRL ? 'Interrogez la plateforme' : 'Question the platform'}</h2>
        <p className="lede" style={{ margin: '10px auto 0' }}>{FRL ? "Un assistant qui répond à partir du contenu original d'Inflexion : les six frameworks, la méthode, les situations, le glossaire et la bibliothèque. Chaque réponse cite ses sections sources." : "An assistant that answers from Inflexion's original content: the six frameworks, the method, the situations, the glossary and the library. Every answer cites its source sections."}</p>
      </div>
      <AskChat />
    </div>
  );
}
