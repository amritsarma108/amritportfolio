const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.homepage = 'https://amritsarma108.github.io/amritportfolio';
pkg.scripts.predeploy = 'npm run build';
pkg.scripts.deploy = 'gh-pages -d dist';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
console.log('package.json updated successfully');
