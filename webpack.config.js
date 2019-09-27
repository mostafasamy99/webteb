const path = require('path');

module.exports = {
    entry: './js/test1.js'
};




module.exports = {
    entry: './js/test2.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'my-first-webpack.bundle.js'
    }
  };

