/* AUTO-EXTRACTED from the vanilla build. */
// @ts-nocheck
export const ASK_SYSTEM = `You are Ask Inflexion, the assistant of the Inflexion change management platform (tagline: where trajectories bend). You answer questions about change management using ONLY the context passages provided, which come from the platform's own original content: its six frameworks (Kotter, ADKAR, Lewin, Bridges, McKinsey 7-S, the Change Curve), its Problem-First Change Method, its situations index, diagnostic, glossary, research library annotations and illustrative cases.
Rules:
- Ground every answer in the provided passages. If the context does not cover the question, say so honestly and suggest which platform section might help or that the topic is outside the platform's scope.
- Cite the platform section your answer draws from (for example: "from the Situations index" or "see the Bridges framework page").
- Never reproduce copyrighted third-party content. You may reference books and studies as the library annotations do, and point to the Library section for sources.
- The illustrative cases (Lambda, S/4HANA, the bank) are fictional composites; if you use them, say so.
- Answer in the language of the question (English or French).
- Be concise and practical: a strong paragraph or two, not an essay. Plain prose, no bullet lists unless asked.
- Never use the em dash character.
- Do not give legal, medical or financial advice; for engagement-specific decisions, recommend the consulting services.`;

function askRender(){
  const el = document.getElementById('ask-app');
  el.innerHTML = `
  <div class="diag-card" style="max-width:760px;margin:0 auto;padding:0;overflow:hidden">
    <div style="background:var(--ink);color:#fff;padding:16px 22px;display:flex;justify-content:space-between;align-items:center">
      <div><b style="font-family:var(--font-display)">Ask Inflexion</b>
      <span style="font-size:12px;color:#9AA19E;margin-left:10px">answers from this platform's content, with sources</span></div>
      <button class="rel-chip" style="margin:0" onclick="askHistory=[];askRender()">Reset</button>
    </div>
    <div id="ask-msgs" style="padding:22px;min-height:220px;max-height:440px;overflow-y:auto">
      ${askHistory.length===0?`
        <p style="font-size:14px;color:var(--ink-2)">Ask anything covered by the platform: which framework fits a situation, how a method phase works, what a term means, what the research says.</p>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">
          ${["Which framework for a post-merger culture clash?","How do I handle a weak sponsor?","What is the difference between change and transition?","Quelle approche pour la fatigue du changement ?"].map(q=>`<button class="rel-chip" style="margin:0" onclick="document.getElementById('ask-input').value='${q.replace(/'/g,"\\'")}';askSend()">${q}</button>`).join('')}
        </div>`:''}
      ${askHistory.map(m=>m.role==='user'
        ?`<div style="display:flex;justify-content:flex-end;margin:10px 0"><div style="background:var(--orange-soft);border-radius:12px 12px 2px 12px;padding:10px 14px;max-width:80%;font-size:14px">${m.html}</div></div>`
        :`<div style="display:flex;margin:10px 0"><div style="background:var(--paper);border:1px solid var(--line);border-radius:12px 12px 12px 2px;padding:10px 14px;max-width:85%;font-size:14px">${m.html}${m.src?`<div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">${m.src.map(s=>`<span class="chip gray" style="margin:0;font-size:10px">${s}</span>`).join('')}</div>`:''}</div></div>`).join('')}
      <div id="ask-typing"></div>
    </div>
    ${ASK_KEY?'':`<div style="background:var(--orange-soft);padding:14px 22px;border-top:1px solid var(--line)">
      <b style="font-size:13px">Connect the answer engine</b>
      <p style="font-size:12.5px;color:var(--ink-2);margin:4px 0 10px">Paste your Anthropic API key (starts with sk-ant-). It stays in this browser session only: it is never stored in the code, never sent anywhere except to Anthropic. Get one at console.anthropic.com. For a public deployment, use a server-side relay instead; never ship a key in a public page.</p>
      <div style="display:flex;gap:8px">
        <input id="ask-key-input" type="password" placeholder="sk-ant-..." onkeydown="if(event.key==='Enter')askSetKey()" style="flex:1;border:1.5px solid var(--line);border-radius:8px;padding:9px 12px;font-size:13px;font-family:var(--font-body)">
        <button class="btn btn-dark" style="padding:9px 16px;font-size:13px" onclick="askSetKey()">Connect</button>
      </div>
    </div>`}
    ${ASK_KEY?`<div style="display:flex;justify-content:flex-end;padding:6px 22px 0"><button class="rel-chip" style="margin:0;font-size:11px" onclick="askClearKey()">Disconnect key</button></div>`:''}
    <div style="display:flex;gap:10px;padding:14px 22px;border-top:1px solid var(--line)">
      <input id="ask-input" type="text" placeholder="Your question, in English or French..." onkeydown="if(event.key==='Enter')askSend()"
        style="flex:1;border:1.5px solid var(--line);border-radius:10px;padding:11px 14px;font-family:var(--font-body);font-size:14.5px">
      <button class="btn btn-primary" style="padding:11px 20px" onclick="askSend()">Ask</button>
    </div>
  </div>
  <p style="font-size:11.5px;color:var(--gray);max-width:760px;margin:14px auto 0;text-align:center">Ask Inflexion answers from the platform's original content only. It does not replace a diagnosis: for your specific situation, run the readiness diagnostic or book a call.</p>`;
  const box=document.getElementById('ask-msgs'); box.scrollTop=box.scrollHeight;
};
