const path = require('path');
module.exports = {
  entry:'./src/app/index.js',
  target: 'node',
  output: {
    path: path.join(__dirname, '/src/public'),
    filename: 'bundle.js'
  },
  module: {
  	rules: [
  		{
  			use:'babel-loader',
  			test:/\.(js|jsx)$/,
        exclude: /node_modules/
  		}

  	]
  }
};