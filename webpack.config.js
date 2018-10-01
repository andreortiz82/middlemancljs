var path = require('path')
var webpack = require('webpack');

module.exports = {
  entry: {
    site: './source/javascripts/site.js',
  },
  output: {
    path: __dirname + '/.tmp/dist',
    filename: './javascripts/[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets:['react'] }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  resolve: {
  }
};

// var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var Clean = require('clean-webpack-plugin');

// console.log(process.env.DOCKER)

// module.exports = env => {
//   return {
//     entry: {
//       main: './assets/javascript/main.js'
//     },

//     resolve: {
//       modules: [
//         __dirname + '/assets/javascript',
//         __dirname + '/assets/stylesheets',
//         __dirname + '/node_modules',
//       ],
//       extensions: ['.js', '.css', '.scss']
//     },

//     output: {
//       path: __dirname + '/.tmp/dist',
//       filename: 'assets/javascript/[name].bundle.js',
//     },

//     module: {
//       loaders: [
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           loader: "babel-loader"
//         },
//         {
//           test: /\.css$/,
//           loader: ExtractTextPlugin.extract({
//             fallback: 'style-loader',
//             use: [
//               'css-loader',
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   plugins: function () {
//                     return [
//                       require('autoprefixer')
//                     ];
//                   }
//                 }
//               }
//             ]}),
//         },
//         {
//           test: /\.scss$|.sass$/,
//           loader: ExtractTextPlugin.extract({
//             fallback: 'style-loader',
//             use: [
//               'css-loader',
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   plugins: function () {
//                     return [
//                       require('autoprefixer')
//                     ];
//                   }
//                 }
//               },
//               'sass-loader'
//             ]
//           }),
//         }
//       ]
//     },

//     plugins: [
//       // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
//       // inside your code for any environment checks; UglifyJS will automatically
//       // drop any unreachable code.
//       new webpack.DefinePlugin({
//         'process.env': {
//           NODE_ENV: JSON.stringify(process.env.NODE_ENV),
//         },
//       }),
//       new Clean(['.tmp']),
//       new ExtractTextPlugin("assets/stylesheets/[name].bundle.css"),
//     ],
//   }
// };
