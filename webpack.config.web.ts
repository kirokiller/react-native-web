import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { title as appTitle } from './app.json';

const env = process.env.NODE_ENV || 'development';
const cwd = process.cwd();
const isDev = env == 'development';

module.exports = {
  mode: env,
  entry: './index.web.ts',
  output: {
    path: path.join(cwd, './dist-H5'),
    chunkFilename: '[name].[chunkhash:8].js',
    filename: 'bundle.js',
  },
  devtool: isDev ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: false,
              presets: [
                'module:metro-react-native-babel-preset',
                '@babel/preset-typescript',
              ],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(cwd, 'web', 'index.html'),
      filename: 'index.html',
      title: appTitle,
      favicon: path.join(
        cwd,
        './android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png',
      ),
    }),
  ],
  resolve: {
    extensions: ['.web.ts', '.web.tsx', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
};
