const path = require("path")
const common = require("./webpack.common");
const merge = require("webpack-merge");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
            mode: "production",
            output: {
                filename: "[name].[contenthash].bundle.js",
                path: path.resolve(__dirname, "public"),
            },
            devtool: "inline-source-map",
            optimization: {
                minimize: true,
                minimizer : [
                    new CssMinimizerPlugin(),
                    new HtmlWebpackPlugin({
                        template: "./src/template.html",
                        minify: {
                     removeAttributeQuotes: true,
                     collapseWhitespace: true,
                     removeComments: true
                            }
                        }),
                        new TerserPlugin(), 
                    
                ]
            },
            plugins: [
                new MiniCssExtractPlugin({
                    filename: "[name].[contenthash].css"
                }),
                new CleanWebpackPlugin()
            ],
            module: {
                rules: [{
                        test: /\.scss$/,
                        use: [
                            MiniCssExtractPlugin.loader, //3. Extract css into files
                            "css-loader", //2. Turns css into commonjs
                            "sass-loader" //1. Turns sass into css

                        ]
                    }
                ]}
            })