var passed = 0, failed = 0;
var fs = require('fs');
var pkg = JSON.parse(fs.readFileSync('package.json','utf8'));
if (pkg.version) { passed++; console.log('PASS: version defined'); } else { failed++; }
if (fs.existsSync('server.js')) { passed++; console.log('PASS: server.js exists'); } else { failed++; }
if (fs.existsSync('src/App.js')) { passed++; console.log('PASS: App.js exists'); } else { failed++; }
console.log(passed + ' passed, ' + failed + ' failed');
if (failed > 0) process.exit(1);
