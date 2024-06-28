const {tmpdir} = require('os');
const {join} = require('path');
const fs = require('fs');

const dest_dir = join(tmpdir(), 'test');          

fs.mkdir(dest_dir, (error) => {                   
  const dest = join(dest_dir, 'example-copy.js');

  fs.copyFile(__filename, dest, (error) => {      
    if (error === null) {
      console.log(`La copie vers ${dest} s'est bien passée.`);
    }
  });
});