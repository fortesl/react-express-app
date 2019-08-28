/* eslint-disable no-undef */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports =  {
    mode: 'production',
    entry: './src/app/playground/app.js', //path.resolve(__dirname, 'src', 'app'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],    
    module: {
        rules: [ {
            test: /\.jsx?/,
            loader: 'babel-loader'
        }, 
        {
            test: /\.(s*)css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                'css-loader', 
                'sass-loader'
            ]
        }]
    }
};
