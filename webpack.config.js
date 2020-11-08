const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const entry = {
    polling: path.resolve(__dirname, './src/polling.js')
}

module.exports = [
  {
    entry,
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './dist'),
      libraryTarget: 'umd',
      library: 'pollingjs',
      globalObject: 'this'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
  }
]

