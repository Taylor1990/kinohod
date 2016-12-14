var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true
    },
    entry: {
        bundle: path.resolve(__dirname, 'main.js'),
        styles: path.resolve(__dirname, 'main.scss')
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader?sourceMap', 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]', 'resolve-url-loader','postcss-loader', 'sass-loader?sourceMap']
            }
        ]
    },
    postcss: function(){
        return [require('autoprefixer'), require('precss')];
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public/index.html')}),
    ]
};
