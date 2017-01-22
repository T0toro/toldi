const webpack = require('webpack'),
      path    = require('path');

module.exports = {
    entry: {
        app: "./public/ts/app.tsx",
    },
    output: {
        path: `${__dirname}/public/js/`,
        filename: "[name].js",
    },

    // Enable sourcemaps for debugging webpack's output.
    // devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "babel-loader?presets[]=es2015!ts-loader" },
            // { test: require.resolve("jquery"), loader: "expose-loader?$!expose-loader?jQuery" }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
        }),
        // new webpack.ProvidePlugin({
        //     '$': 'jquery',
        //     'jQuery': 'jquery',
        // }),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          cacheFolder: path.resolve(__dirname, 'public/cached_uglify/'),
          minimize: true,
          sourceMap: false,
          output: {
            comments: false
          },
          compressor: {
            warnings: false
          }
        })
    ]
};
