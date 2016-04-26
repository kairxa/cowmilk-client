var path = require('path');
var webpack = require('webpack');
var nodeDir = path.resolve(__dirname, 'node_modules');

var config = {
    entry: {
        end_user: path.resolve(__dirname, 'build/jsx/end_user.prod.js'),
        admin_page: path.resolve(__dirname, 'build/jsx/admin_page.prod.js'),
        vendors: [
            'react',
            'react-dom',
            'react-router',
            'react-redux',
            'react-redux-router',
            'redux',
            'redux-thunk',
            'superagent',
            'showdown'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/javascript'),
        filename: '[name].prod.js',
        publicPath: '/javascript/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [nodeDir],
                loader: 'babel-loader',
                query: { stage: 0 }
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, 'build')
                ],
                exclude: [/submodules/],
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader'
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
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.prod.js')
    ],
    resolve: {
        modulesDirectories: ['web_modules', 'node_modules', 'jsx', 'common_layouts_components', 'assets']
    }
};

module.exports = config;