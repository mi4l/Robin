const fs = require('fs');
const path = require('path');
const process = require('process');

const cloneTemplateHTML = () => {
  const cwd = process.cwd();
  
  if (!fs.existsSync(cwd + '/.generated')) {
    fs.mkdirSync(cwd + '/.generated');
  }

  if (!fs.existsSync(cwd + '/.generated/index.html')) {
    fs.copyFileSync(
      path.resolve(cwd + '/../templates/index.html'),
      path.resolve(cwd + '/.generated/index.html')
    );
  }
};

cloneTemplateHTML();