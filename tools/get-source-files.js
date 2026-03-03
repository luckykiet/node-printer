// List files in a directory filtered by extension (replaces getSourceFiles.py)
// Usage: node get-source-files.js <path> <ext>
// Example: node get-source-files.js src cc
const fs = require('fs');
const path = require('path');

if (process.argv.length < 4) {
    process.stderr.write(`use: ${process.argv[1]} <path> <ext>. e.g.: node get-source-files.js src cc\n`);
    process.exit(1);
}

const folder = process.argv[2];
const ext = `.${process.argv[3]}`;

fs.readdirSync(path.join(__dirname, '..', folder))
    .filter((f) => f.endsWith(ext))
    .forEach((f) => console.log(`${folder}/${f}`));
