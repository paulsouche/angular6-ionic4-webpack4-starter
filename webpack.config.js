const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const WriteFilePlugin = require('write-file-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ENV = process.env.npm_lifecycle_event || '';
const isProd = ENV === 'build';
const isDevice = ENV === 'start-device';
const port = parseInt(process.env.PORT, 10) || 3000;
const host = process.env.HOST || 'localhost';
const proxy = process.env.PROXY || 'http://localhost:8000';
const secure = proxy.startsWith('https');
const endPoint = process.env.ENDPOINT || '';
const demoEndPoint = process.env.DEMO_ENDPOINT || '';
const wsEndPoint = process.env.WSENDPOINT || 'ws://localhost:8000';
const version = process.env.FULL_VERSION || require('./package.json').version;
const demoWsEndPoint = process.env.DEMO_WSENDPOINT || '';
const mode = isProd ? 'prod' : 'dev';
const target = (isProd || isDevice) ? 'cordova' : 'web';

// Helper functions
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [process.cwd()].concat(args));
}

const postcssOptions = {
  plugins: [
    autoprefixer({
      browsers: [
        'last 2 versions',
        'iOS >= 8',
        'Android >= 4.4',
        'Explorer >= 11',
        'ExplorerMobile >= 11',
      ],
      cascade: false,
    }),
  ],
};

const makeWebpackConfig = (entry, env = {}) => {
  const fontsQuery = '&limit=65000&publicPath=./&name=fonts/[name].[hash].[ext]?';

  const webpackConfig = {
    mode: isProd ? 'production' : 'development',
    entry,
    output: {
      path: root('www'),
      filename: '[name].[hash].js',
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: isProd
            ? [
              { loader: '@ngtools/webpack' },
            ]
            : [
              { loader: 'ng-router-loader' },
              { loader: 'angular2-template-loader' },
              { loader: 'ts-loader' },
            ],
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: true,
            removeAttributeQuotes: false,
            caseSensitive: true,
            customAttrSurround: [[/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/]],
            customAttrAssign: [/\)?\]?=/],
          },
        },
        {
          test: /\.md$/,
          include: root('src', 'app'),
          loader: 'file-loader?name=md/[name].[ext]?[hash]',
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          include: root('src'),
          exclude: root('src', 'icons'),
          loader: 'file-loader?name=images/[name].[ext]?[hash]',
        },
        {
          test: /\.svg/,
          exclude: root('src'),
          loader: 'url-loader?mimetype=image/svg+xml'.concat(fontsQuery),
        },
        {
          test: /\.woff/,
          loader: 'url-loader?mimetype=application/font-woff'.concat(fontsQuery),
        },
        {
          test: /\.woff2/,
          loader: 'url-loader?mimetype=application/font-woff2'.concat(fontsQuery),
        },
        {
          test: /\.ttf/,
          loader: 'url-loader?mimetype=application/octet-stream'.concat(fontsQuery),
        },
        {
          test: /\.otf/,
          loader: 'url-loader?mimetype=application/octet-stream'.concat(fontsQuery),
        },
        {
          test: /\.eot/,
          loader: 'url-loader?mimetype=application/vnd.ms-fontobject'.concat(fontsQuery),
        },
        {
          test: /\.css$/,
          include: root('src', 'app'),
          use: [
            { loader: 'raw-loader' },
            { loader: 'postcss-loader', options: postcssOptions },
          ],
        },
        {
          test: /\.scss$/,
          include: root('src', 'app'),
          use: [
            { loader: 'raw-loader' },
            { loader: 'postcss-loader', options: postcssOptions },
            { loader: 'sass-loader' },
          ],
        },
        {
          test: /\.css$/,
          exclude: root('src', 'app'),
          use: isProd
            ? ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                { loader: 'css-loader' },
                { loader: 'postcss-loader', options: postcssOptions },
              ],
            })
            : [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
              { loader: 'postcss-loader', options: postcssOptions },
            ],
        },
        {
          test: /\.scss$/,
          exclude: root('src', 'app'),
          use: isProd
            ? ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                { loader: 'css-loader' },
                { loader: 'postcss-loader', options: postcssOptions },
                { loader: 'sass-loader' },
              ],
            })
            : [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
              { loader: 'postcss-loader', options: postcssOptions },
              { loader: 'sass-loader' },
            ],
        },
        {
          test: /\.svg$/,
          include: root('src', 'icons'),
          loader: 'svg-sprite-loader',
          options: {
            spriteModule: 'svg-sprite-loader/runtime/browser-sprite.build',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js', '.html', '.scss', '.svg', '.md'],
    },
    plugins: [
      new webpack.ContextReplacementPlugin(
        /ionic-angular/, root('src')),
      new webpack.DefinePlugin({
        // Environment helpers
        build: JSON.stringify({
          ...{
            version,
            mode,
            target,
            endPoints: {
              endPoint,
              demoEndPoint,
              wsEndPoint,
              demoWsEndPoint,
            },
          },
          ...env
        }),
      }),
      new HtmlWebpackPlugin({
        inject: false,
        template: root('src', 'index.ejs'),
        version,
        target,
        isProd,
        chunksSortMode: (a, b) => {
          // app to the end
          if (a.names[0].includes('app')) {
            return 1;
          }
          // polyfills to the first
          if (b.names[0].includes('polyfills')) {
            return 1;
          }
          return 0;
        },
      }),
    ],
    devServer: {
      host,
      port,
      stats: 'errors-only',
      contentBase: [
        root('node_modules', '@ionic', 'core', 'dist', 'ionic'),
      ],
      proxy: [
        {
          context: ['**/api/**', '/publicapi/**'],
          target: proxy,
          secure,
          changeOrigin: secure,
        },
        {
          context: ['**/ws/**'],
          target: proxy,
          secure,
          changeOrigin: secure,
          ws: true,
        },
      ],
    },
  };

  if (isProd) {
    webpackConfig.plugins.push(
      new AngularCompilerPlugin({
        tsConfigPath: root('tsconfig-aot.json'),
        entryModule: root('src', 'app', 'modules', 'app.module#AppModule'),
      }),
      new ExtractTextPlugin({
        filename: '[name].[hash].css',
      }),
      new CopyWebpackPlugin([{
        from: root('node_modules', '@ionic', 'core', 'dist', 'ionic', 'svg'),
        to: 'svg',
      }]));
  } else {
    webpackConfig.plugins.push(
      new webpack.ContextReplacementPlugin(
        /(.+)?angular(\\|\/)core(.+)?/,
        root('src')));
  }

  if (isDevice) {
    webpackConfig.plugins.push(new WriteFilePlugin());
  }

  return webpackConfig;
};

module.exports = makeWebpackConfig({
  'app': './src/main.ts',
  'vendors': [
    './src/ionic.scss',
  ],
  'polyfills': [
    'core-js/es6',
    'core-js/es7',
    'ts-helpers',
    'zone.js/dist/zone',
    'whatwg-fetch',
  ],
});
