const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ArrayBufferConverter',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  mode: 'production'
};
