const fs = require('fs');
const lines = fs.readFileSync('C:/Users/Lenovo/.gemini/antigravity/brain/07ea2f6b-6b60-47c1-92d1-6d4ee3ef7d08/.system_generated/logs/transcript.jsonl', 'utf8').split('\n');
console.log('--- 7660 ---');
console.log(JSON.parse(lines[7660]).content);
console.log('--- 7695 ---');
console.log(JSON.parse(lines[7695]).content);
