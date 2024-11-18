const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const path = require('path');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  const isDevServer = process.env.WEBPACK_SERVE;

  const config = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-source-map' : false,
    entry: {
      ui: './src/ui.tsx',
      ...(isDevServer ? {} : { code: './code.ts' }),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/ui.html',
        filename: isDevServer ? 'index.html' : 'ui.html',
        chunks: ['ui'],
        cache: false,
        inject: 'body',
      }),
      ...(isDevServer ? [] : [new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/ui/])]),
    ],
  };

  if (isDevServer) {
    config.devServer = {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      port: 3000,
      hot: true,
      compress: true,
      open: true,
    };
  }

  return config;
};
