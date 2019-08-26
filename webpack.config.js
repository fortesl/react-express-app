const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app/playground/app.js', //path.resolve(__dirname, 'src', 'app'),
    output: {
        //eslint-disable-next-line no-undef
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
