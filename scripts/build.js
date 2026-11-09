const fs = require('node:fs');

fs.mkdirSync('dist', { recursive: true });

fs.copyFileSync('src/server.js', 'dist/server.js');

console.log('Build completed successfully');
