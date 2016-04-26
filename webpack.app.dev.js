var path = require('path');
var webpack = require('webpack');
var nodeDir = path.resolve(__dirname, 'node_modules');

var config = {
    devtool: 'inline-source-map',
    entry: {
        cowmilk: path.resolve(__dirname, 'build/jsx/cowmilk.js'),
        vendors: [
            'react',
            'react-dom',
            'react-router',
            'react-redux',
            'react-router-redux',
            'redux',
            'redux-thunk',
            'superagent'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/javascript'),
        filename: '[name].js',
        publicPath: '/assets/javascript/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [nodeDir],
                loader: 'babel-loader',
                query: {
                    presets: [ 'es2015', 'react', 'airbnb' ]
                }
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, 'build')
                ],
                exclude: [/submodules/],
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]__[local]___[hash:base64:5]!postcss-loader'
            },
            {
                test: /\.css$/,
                include: [/submodules/],
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[local]!postcss-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.svg$/,
                loader: 'babel!svg-react'
            }
        ],
        noParse: /node_modules\/quill\/dist/
    },
    postcss: [
        require('autoprefixer'),
        require('precss'),
        require('cssnano')
    ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
    resolve: {
        modulesDirectories: ['web_modules', 'node_modules', 'jsx', 'common_layouts_components', 'assets']
    }
};

module.exports = config;