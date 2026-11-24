const fs = require('fs');
const lines = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity/brain/07ea2f6b-6b60-47c1-92d1-6d4ee3ef7d08/.system_generated/logs/transcript.jsonl', 'utf8').split('\n');

lines.forEach((l, idx) => {
  try {
    const o = JSON.parse(l);
    if (o.source === 'USER_EXPLICIT') {
      const text = o.content.replace(/\n/g, ' ');
      if (text.includes('artikel') || text.includes('tanggal') || text.includes('november')) {
        console.log(`[${idx}] ${text.slice(0, 160)}`);
      }
    }
  } catch(e) {}
});
