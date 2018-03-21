const path =  require('path')
const package = require('./package.json')

const name = package.name

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: name + '.js',
    library: toUpperCamel(name),
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
    extensions: ['.js'],
  },
}

function toUpperCamel(text){
  return text.split('-').map((string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }).join('')
}
