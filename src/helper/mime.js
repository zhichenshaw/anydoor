const path = require('path');

const mimeTypes = {
  'css': 'text/css',
  'html': 'text/html',
  'txt': 'text/plain',
  'js': 'text/javascript',
  'json': 'text/json'
};

module.exports = (filePath) => {
  let ext = path.extname(filePath).split('.').pop().toLowerCase();

  if (!ext) {
    ext = filePath;
  }

  return mimeTypes[ext] || mimeTypes['txt'];
}
