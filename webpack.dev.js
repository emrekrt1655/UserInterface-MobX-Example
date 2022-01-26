const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public"),
        //publicPath: "/"
    },
    devtool: "inline-source-map",
    // devServer:{
    //     historyApiFallback: true,
    // },
    optimization: {
        chunkIds: "total-size",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
                       }
        })
    ],
    module: {
        rules : [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
})