/* Template export engine: port of the vanilla templates.js/tkExportAll.
   Editable HTML files re-save themselves via the embedded button. */
export const esc = (s: string) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const STYLE = `body{font-family:Arial,Helvetica,sans-serif;color:#23282A;max-width:820px;margin:40px auto;padding:0 20px}h1{color:#D6430F;margin-top:40px}h2{color:#F95B22;border-bottom:1px solid #E9E6E1;padding-bottom:4px;margin-top:24px;font-size:17px}label{display:block;font-weight:bold;font-size:13px;margin:14px 0 4px}.hint{font-size:12px;color:#8C9491;margin-bottom:5px}textarea{width:100%;border:1px solid #C6CBC9;border-radius:6px;padding:9px;font-family:inherit;font-size:14px;box-sizing:border-box}.bar{background:#FEEDE5;padding:12px 16px;border-radius:8px;font-size:13px;margin:16px 0}button{background:#F95B22;color:#fff;border:none;border-radius:6px;padding:9px 16px;font-weight:bold;cursor:pointer}`;
const SAVE_BTN = `<div class="bar">Editable working copy. Fill it, then click <b>Save my work</b> to download an updated copy with your entries preserved.<br><button onclick="(function(){document.querySelectorAll('textarea').forEach(function(t){t.textContent=t.value});var b=new Blob(['<!DOCTYPE html>'+document.documentElement.outerHTML],{type:'text/html'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=document.title.toLowerCase().replace(/[^a-z0-9]+/g,'-')+'.html';a.click()})()" style="margin-top:8px">Save my work</button></div>`;
const FOOT = `<p style="color:#8C9491;font-size:12px;margin-top:40px">Original Inflexion material by Imad Benallai. Free to use and share in your practice; attribution appreciated. Frameworks referenced belong to their authors.</p>`;

function tplBody(t: any, values: Record<string, string>) {
  let body = '<h1 style="margin-top:0">' + esc(t.name) + '</h1><p style="color:#8C9491">' + esc(t.phase || '') + '</p>' + (t.intro ? '<p><i>' + esc(t.intro) + '</i></p>' : '') + (t.src ? '<p style="font-size:12px;color:#8C9491">' + esc(t.src) + '</p>' : '');
  (t.sections || []).forEach((s: any, si: number) => {
    body += '<h2>' + esc(s.h) + '</h2>';
    (s.fields || []).forEach((f: any, fi: number) => {
      const v = values[si + ':' + fi] || '';
      body += '<label>' + esc(f.l) + '</label>' + (f.hint ? '<div class="hint">' + esc(f.hint) + '</div>' : '') + '<textarea rows="' + Math.max(2, f.r || 2) + '">' + esc(v) + '</textarea>';
    });
  });
  return body;
}
function download(name: string, html: string, mime = 'text/html') {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([html], { type: mime }));
  a.download = name;
  a.click();
}
export function exportEditable(t: any, values: Record<string, string>) {
  const html = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' + esc(t.name) + '</title><style>' + STYLE + '</style></head><body>' + SAVE_BTN + tplBody(t, values) + FOOT + '</body></html>';
  download(t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.html', html);
}
export function exportDoc(t: any, values: Record<string, string>) {
  const html = '<html><head><meta charset="utf-8"><style>' + STYLE + '</style></head><body>' + tplBody(t, values).replace(/<textarea[^>]*>/g, '<div style="border:1px solid #C6CBC9;border-radius:6px;padding:9px;min-height:34px;font-size:14px">').replace(/<\/textarea>/g, '</div>') + FOOT + '</body></html>';
  download(t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.doc', html, 'application/msword');
}
export function printTpl(t: any, values: Record<string, string>) {
  const w = window.open('', '_blank');
  if (!w) return;
  w.document.write('<html><head><title>' + esc(t.name) + '</title><style>' + STYLE + '</style></head><body>' + tplBody(t, values) + FOOT + '</body></html>');
  w.document.close();
  w.print();
}
export function exportAll(list: any[], kitTitle: string) {
  let body = '';
  list.forEach((t) => { body += tplBody(t, {}).replace('<h1 style="margin-top:0">', '<h1 style="page-break-before:always">'); });
  const html = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' + esc(kitTitle) + '</title><style>' + STYLE + '</style></head><body><h1 style="margin-top:0">' + esc(kitTitle) + '</h1><p style="color:#8C9491">inflexion.nhancit.com</p>' + SAVE_BTN + body + FOOT + '</body></html>';
  download(kitTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.html', html);
}
