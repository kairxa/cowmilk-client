/**
 * Created by kairxa on 4/26/16.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'test/**/*.js'
        ],

        preprocessors: {
            'test/**/*.js': ['webpack', 'sourcemap']
        },

        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel',
                        exclude: path.resolve(__dirname, 'node_modules'),
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
            externals: {
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            }
        },

        webpackServer: {
            noInfo: true
        },

        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-sourcemap-loader',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],

        babelPreprocessor: {
            options: {
                presets: [ 'airbnb', 'react', 'es2015' ]
            }
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};