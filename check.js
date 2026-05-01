const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const scripts = html.match(/<script>(.*?)<\/script>/gs);
if (scripts) {
  scripts.forEach((s, i) => {
    const code = s.replace(/<\/?script>/g, '');
    try {
      new Function(code);
      console.log('Script ' + i + ' OK');
    } catch (e) {
      console.error('Script ' + i + ' ERROR:', e);
    }
  });
}
