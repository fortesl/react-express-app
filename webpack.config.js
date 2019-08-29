/* eslint-disable no-undef */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app/playground/app.js', //path.resolve(__dirname, 'src', 'app'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    module: {
        rules: [ {
            'enforce': 'pre',
            'test': /\.(js|jsx)$/,
            'exclude': /node_modules/,
            'use': 'eslint-loader'
        }, {
            'test': /\.(js|jsx)$/,
            'exclude': /node_modules/,
            'use': {
                'loader': 'babel-loader',
                'options': {
                    'presets': [
                        '@babel/env',
                        '@babel/react'
                    ]
                }
            }
        }, {
            test: /\.(s*)css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: true
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                { 
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }]
    }
};
