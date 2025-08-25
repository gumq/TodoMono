/* eslint-disable prettier/prettier */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = path.resolve(__dirname, '..');
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: path.resolve(appDirectory, 'web/index.web.tsx'),
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(appDirectory, 'dist/web'),
    clean: true,
    publicPath: isProd ? '/TodoMono/' : '/',
  },
  resolve: {
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.web.js',
      '.tsx',
      '.ts',
      '.js',
      '.json',
    ],
    alias: {
      'react-native$': 'react-native-web',
      'react-native-reanimated': path.resolve(
        __dirname,
        'web/fake-reanimated.js',
      ),
      '@react-native-firebase/messaging': path.resolve(
        __dirname,
        'web/mocks/empty.js',
      ),
      'react-native-push-notification': path.resolve(
        __dirname,
        'web/mocks/empty.js',
      ),
      'react-dom/client': 'react-dom',
      'react-native-fs': path.resolve(__dirname, 'web/mocks/empty.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        include: [
          path.resolve(appDirectory, 'App.tsx'),
          path.resolve(appDirectory, 'src'),
          path.resolve(appDirectory, 'web'),
          path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
          // thêm các node_modules cần transpile nếu cần
        ],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              'module:metro-react-native-babel-preset',
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
    static: {
      directory: path.resolve(appDirectory, 'public'), // nếu có
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(appDirectory, 'web/index.html'),
    }),
  ],
};
