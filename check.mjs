// Uptime check — pinguje strony z sites.json. Timeout 15s, 1 retry po 5s.
// Exit 1 jesli ktakolwiek strona padla (workflow otworzy/zaktualizuje Issue).
import { readFileSync } from 'node:fs';

const { sites } = JSON.parse(readFileSync('sites.json', 'utf8'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function ping(site) {
  const want = site.expect_status || 200;
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 15000);
      const res = await fetch(site.url, {
        signal: ctrl.signal,
        redirect: 'follow',
        headers: { 'User-Agent': 'MAS-Uptime/1.0' },
      });
      clearTimeout(t);
      if (res.status === want || (want === 200 && res.ok)) {
        return { ...site, ok: true, status: res.status };
      }
      if (attempt === 2) return { ...site, ok: false, status: res.status, reason: `HTTP ${res.status}` };
    } catch (e) {
      if (attempt === 2) return { ...site, ok: false, status: 0, reason: String(e.name || e) };
    }
    await sleep(5000);
  }
}

const results = await Promise.all(sites.map(ping));
const down = results.filter((r) => !r.ok);

for (const r of results) {
  console.log(`${r.ok ? 'UP  ' : 'DOWN'}  ${r.name} (${r.url})${r.ok ? '' : ' -> ' + r.reason}`);
}

if (down.length) {
  const body = down.map((r) => `- **${r.name}** ${r.url} — ${r.reason}`).join('\n');
  // Zapis do pliku, ktory workflow wczyta do Issue
  const fs = await import('node:fs');
  fs.writeFileSync('down.md', `Wykryto niedostepnosc (${new Date().toISOString()}):\n\n${body}`);
  process.exit(1);
}
console.log('\nWszystkie strony UP.');
