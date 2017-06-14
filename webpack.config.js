var path = require('path');

var SRC_DIR = path.resolve(__dirname, 'src');
var DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    entry: path.resolve(SRC_DIR, 'app/main.jsx'),
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
        publicPath: '/app/',
        sourceMapFilename: 'bundle.map'
    },
    module: { 
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'es2015', 'react' ]
                }
            }
        ]
    },
    devtool: 'source-map'
};
