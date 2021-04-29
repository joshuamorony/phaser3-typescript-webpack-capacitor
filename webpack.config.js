var path = require('path');
var pathToPhaser = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(pathToPhaser, 'dist/phaser.js');

module.exports = {
  entry: './src/game.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'www/build')
  },
  devServer: {
    contentBase: path.resolve(__dirname, './www'),
    publicPath: '/www/',
    host: '127.0.0.1',
    port: 8080,
    open: true,
    hot: true
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      phaser: phaser
    }
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules/' },
      { test: /phaser\.js$/, loader: 'expose-loader', options: {
          exposes: "Phaser"
        }
      }
    ]
  }
};
