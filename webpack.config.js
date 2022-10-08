const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports={
    entry:'./src/index.js',
    module:{
        rules:[
            {
                test: /\.m?(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
                }
              },
              {
                  test: /\.html$/,
                  use:[
                      {
                          loader : 'html-loader',
                          options:{
                              minimize:true,
                          }
                      }
                  ]
              }
        ],
    },
    plugins:[
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template : 'public/index.html',
        })
    ]
}