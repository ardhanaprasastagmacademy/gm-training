const fs = require('fs');
const lines = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity/brain/07ea2f6b-6b60-47c1-92d1-6d4ee3ef7d08/.system_generated/logs/transcript.jsonl', 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('magang-mahasiswa-sistem-informasi-malang.md') && lines[i].includes('edit_file')) {
    console.log(`[${i}]`, lines[i].slice(0, 200));
  }
}
