const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    output: {
        assetModuleFilename: 'assets/[name].[ext]'
    },
    module: {
        rules: [
           {
            test: /\.css$/,
            use: ['style-loader','css-loader']
           },
           {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
           },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/template.html'
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
}

