/*
* @Author: RoyChen
* @Date:   2016-03-17 18:06:40
* @Last Modified by:   RoyChen
* @Last Modified time: 2016-03-22 16:10:13
*/

'use strict';


// let webpack            = require('webpack');
// let UglifyJsPlugin     = webpack.optimize.UglifyJsPlugin; 
// let commonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
// let ExtractTextPlugin  = require('extract-text-webpack-plugin');

let path               = require('path');
let nodeModulesPath    = path.resolve(process.cwd(), 'node_modules');
let getLoaders         = require('./loaders.js');

module.exports = (function (options) {

	
	options     = options || {};
	let isDebug = options.debug;
	let vendors = ["react", "react-dom"];
	let loaders = getLoaders(options);
	let Library = options.library ? options.library : undefined;
	let output = {
		path: path.resolve( isDebug ? 'build' : 'public' ),
		filename : isDebug ? '[name].js' : 'js/[hash:8].[name].min.js',
        publicPath: isDebug ? '/build/' : '/public/' 
	};
	if (Library){
		output = Object.assign(output,{
			library:        Library || [name],
            libraryTarget:  'umd',
            umdNamedDefine: true
		})
	}

	return {
		devtool: isDebug ? 'source-map' : 'eval',
		addVendors:function(alias_name, mPath){
			this.resolve.alias[alias_name] = mPath;
			this.module.noParse.push(new RegExp(mPath));
		},
		entry:  {
			index:   "./index.js"
		},
		output:  output,
		resolve: {
            root: [nodeModulesPath],
            alias: {}
        },
        module:{
        	noParse: [nodeModulesPath],
        	loaders:loaders

        },
        plugins:[]
	};

}())

