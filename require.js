// Import the built-in 'fs' module
const fs = require('fs');

// Read contents of a file asynchronously
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});
