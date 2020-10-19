const {resolve} = require('path');

module.exports = {
    context: resolve(__dirname, './src'),
    mode: "production",
    entry: {
        index: './index.tsx',
        apply: './apply.tsx',
        vendor: ['react', 'react-dom']
    },
    output: {
        path: resolve(__dirname, '../static/js'),
        filename: '[name].bundle.js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: 'source-map-loader',
                enforce: "pre"
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
        ]
    },
}