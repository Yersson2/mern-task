const path = require('path');
module.exports = {
  entry:'./src/app/index.js',
  target: 'node',
  output: {
    path: path.join(__dirname, '/src/public'),
    filename: 'bundle.js'
  }
};