const fs = require('fs');

const lines = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity/brain/07ea2f6b-6b60-47c1-92d1-6d4ee3ef7d08/.system_generated/logs/transcript.jsonl', 'utf8').split('\n');

for (let i = 6500; i < 7520; i++) {
  if (!lines[i]) continue;
  try {
    const obj = JSON.parse(lines[i]);
    if (obj.source === 'USER_EXPLICIT' || obj.role === 'user' || (obj.message && obj.message.role === 'user')) {
      const content = obj.content || (obj.message && obj.message.content) || '';
      console.log(`=== [${i}] ===`);
      const linesContent = content.split('\n').filter(l => l.trim().length > 0);
      for (const lc of linesContent.slice(0, 10)) {
        console.log('   ', lc.slice(0, 100));
      }
    }
  } catch (e) {}
}
