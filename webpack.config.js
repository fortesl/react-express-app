/* eslint-disable no-undef */
const path = require('path');

module.exports = (env) => {
    const isProduction = env === 'production';
    return {
        mode: env,
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
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        module: {
            rules: [ {
                test: /\.jsx?/,
                loader: 'babel-loader'
            }, {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }]
        }
    };
};
