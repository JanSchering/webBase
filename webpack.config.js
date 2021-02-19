module.exports = function(entrypoint, outputpath, contentBase) {

  const docCss = require('rehype-decorate')
  const container = require('remark-container')
  return {
      entry: entrypoint,
      output: {
          publicPath: '/',
          jsonpScriptType: (string = 'text/javascript'),
          filename: 'app.js',
          path: outputpath,
      },
      module: {
          rules: [
          {
              test: /\.tsx?$/,
              loader: 'ts-loader',
              exclude: /node_modules/,
          },
          {
              test: /\.(gif|png|jpe?g|svg)$/i,
              use: [
              'file-loader',
              {
                  loader: 'image-webpack-loader',
                  options: {
                  modules: true,
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                  },
              },
              ],
          },
          {
              test: /\.css$/i,
              use: [
              'style-loader',
              {
                  loader: 'css-loader',
                  options: {
                  modules: false,
                  importLoaders: 1,
                  sourceMap: true,
                  },
              },
              ],
          },
          {
              test: /\.mdx?$/,
              use: [
              'babel-loader',
              {
                  loader:'@mdx-js/loader',
                  options:{
                  rehypePlugins: [docCss],
                  remarkPlugins: [container]
                  }
              }
              ],
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
              'file-loader',
              ],
          },
          ],
      },
      resolve: {
          extensions: ['.tsx', '.ts', '.js', '.css', 'png', 'jpg', '.mdx', '.woff', '.woff2', '.eot', '.ttf', '.otf'],
      },
      devServer: {
          contentBase: contentBase,
          compress: true,
          historyApiFallback: true,
          port: 10721,
      },
      node: {
          fs: "empty"
      }
  }
};