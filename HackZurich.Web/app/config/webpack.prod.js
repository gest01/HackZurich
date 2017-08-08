const webpack = require('webpack');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';


module.exports = {


    devtool: 'cheap-module-source-map',

    output: {

        path: __dirname + '/../dist',
        filename: '[name].[chunkhash].bundle.js',
        sourceMapFilename: '[name].[chunkhash].bundle.map',
        chunkFilename: '[id].[chunkhash].chunk.js'
    },

    entry: {

        'vendor': './app/vendor.ts',
        'polyfills': './app/polyfills.ts',
        'main': './app/main.ts'
    },

    /*
     * Options affecting the resolving of modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve
     */
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },

    /*
     * Options affecting the normal modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#module
     */
    module: {

        rules: [

            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader']
            },

            /*
             * Json loader support for *.json files.
             *
             * See: https://github.com/webpack/json-loader
             */
            {
                test: /\.json$/,
                use: 'json-loader'
            },

            /*
             * to string and css loader support for *.css files (from Angular components)
             * Returns file content as string
             *
             */
            //{
            //    test: /\.css$/,
            //    use: ['css-loader'],
            //    //  exclude: [helpers.root('src', 'styles')]
            //},
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },

            /*
             * to string and sass loader support for *.scss files (from Angular components)
             * Returns compiled css content as string
             *
             */
            {
                test: /\.scss$/,
                use: ['css-loader', 'sass-loader'],
                //  exclude: [helpers.root('src', 'styles')]
            },

            /* Raw loader support for *.html
             * Returns file content as string
             *
             * See: https://github.com/webpack/raw-loader
             */
            {
                test: /\.html$/,
                use: 'raw-loader',
                //use: 'html-loader'
                // exclude: [helpers.root('src/index.html')]
            },

            //{
            //    test: /\.(jpg|png|gif)$/,
            //    use: 'file-loader'
            //},

            //{
            //    test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
            //    use: 'file-loader'
            //},

            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]'
            },

        ],

    },

    /*
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        }),

        new ExtractTextPlugin('[name].[hash].css'),

        new CommonsChunkPlugin({
            name: 'polyfills',
            chunks: ['polyfills']
        }),

        // This enables tree shaking of the vendor modules
        new CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['main'],
            minChunks: module => /node_modules/.test(module.resource)
        }),

        // Specify the correct order the scripts will be injected in
        new CommonsChunkPlugin({
            name: ['polyfills', 'vendor'].reverse()
        }),


        new CopyWebpackPlugin([
            { from: "./web.config", to: "./" }
        ]),

        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
            hash: true,
        }),
    ],
};
