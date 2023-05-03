const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:{
      src:"./src/index.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: './dist',
        open:true,
        port:5000,  
    },
    devtool:"source-map",
    plugins: [
        new HtmlWebpackPlugin({title:"HTML plugin"}),
    ],
    module: {
        rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env']
              ]
            }
          }
        },
        {
          test: /\.css$/, 
          use: ["style-loader", "css-loader"] 
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-typescript']
              ]
            }
          }
        }
      ]
    }
}