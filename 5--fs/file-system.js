const fs = require('fs');
const path = require('path');
const filename = path.join(__dirname, '..', 'package.json');

fs.readFile(filename, (err, content) => {   
  if (err) {
    console.error("Erreur lors de la lecture du fichier:", err);
    return;
  }
  console.log(String(content));             
});