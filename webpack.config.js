const path = require('path');
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

//19.2.4 - entry property, the root of the bundle and beginning of dependency graph
//output - where the bundled code will be sent 
//mode - the mode in which we want to webpack to run, default is production


module.exports = {
    entry: {
      app: "./assets/js/script.js",
      events: "./assets/js/events.js",
      schedule: "./assets/js/schedule.js",
      tickets: "./assets/js/tickets.js"
    },
    output: {
      filename: "[name].bundle.js",
      path: __dirname + "/dist",
    },
    module: {
      rules: [
        {
          test: /\.jpg$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name(file) {
                  return '[path][name].[ext]';
                },
                publicPath: function(url) {
                  return url.replace('../', '/assets/');
                }
              }
            },
            {
              loader: 'image-webpack-loader'
            }
          ]
        }
      ]
    },
    plugins:[
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
          analyzerMode: "static", // the report outputs to an HTML file in the dist folder
        })
      ],
    mode: 'development'
};
