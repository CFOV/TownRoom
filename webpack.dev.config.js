var path = require('path');
var webpack = require('webpack');

var entry = [
    'babel-polyfill',
    './app/index.js'
]
var output = {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
};

var loaders = [
    {
        test: /\.js(x?)$/,
        exclude: '/node_modules',
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['babel-preset-env','babel-preset-react']
            }
        }
    }
];
var plugins = [
    new webpack.NoEmitOnErrorsPlugin()
];
module.exports = {
    entry: entry,
    output: output,
    module: {
        rules: loaders
    },
    plugins: plugins,
    devtool: 'source-map',
}