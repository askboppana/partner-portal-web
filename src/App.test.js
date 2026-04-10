var App = require('./App');
var result = App();
if (result.indexOf('ForgeOps') >= 0) { console.log('PASS: App renders'); }
else { console.log('FAIL'); process.exit(1); }
