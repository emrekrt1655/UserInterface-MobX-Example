module.exports = {
    entry : {
        main: "./src/index.tsx",
    },
    target: "web",
    resolve: {
        extensions: ['.ts', '.json', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.html&/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath:"assets"
                    }
                }
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}