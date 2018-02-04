/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var debug = true;
var webpack = require('webpack');
var path = require('path');
var visualizer = require('webpack-visualizer-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public/dist');
var APP_DIR = path.resolve(__dirname, 'public');

var config = {
    entry: {
        core: APP_DIR + '/js/core/index.jsx',
        cryptoChart: APP_DIR + '/js/modules/cryptoChart/index.jsx',
        fndtnUserAccount: APP_DIR + '/js/modules/fndtnUserAccount/index.jsx',
        fndtnUserAccountManager: APP_DIR + '/js/modules/fndtnUserAccountManager/index.jsx',
        fndtnResourceManager: APP_DIR + '/js/modules/fndtnResourceManager/index.jsx',
        fndtnRoleManager: APP_DIR + '/js/modules/fndtnRoleManager/index.jsx',
        fndtnMenuManager: APP_DIR + '/js/modules/fndtnMenuManager/index.jsx',
        fndtnAccessControlManager: APP_DIR + '/js/modules/fndtnAccessControlManager/index.jsx',
        fndtnUserRegistration: APP_DIR + '/js/modules/fndtnUserRegistration/index.jsx',
        nodeModules: [ 'react',
                       'react-dom',
                       'material-ui',
                       'react-redux',
                       'react-router',
                       'react-google-recaptcha',
                       'react-tap-event-plugin',
                       'axios',
                       'history',
                       'redux',
                       'react-router-dom',
                       'redux-logger',
                       'redux-promise-middleware',
                       'redux-thunk',
                       'chart.js',
                       'react-chartjs-2']
    },
    output: {
        path: BUILD_DIR,
        filename: './[name]/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: debug ? 
    [
        new webpack.optimize.CommonsChunkPlugin({names: ['core', 'nodeModules'], minChunks: 2}),
        new visualizer({filename: './webpackStats.html'})
    ] : 
    [
        new webpack.optimize.CommonsChunkPlugin({name: 'nodeModules'}),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
};

module.exports = config;