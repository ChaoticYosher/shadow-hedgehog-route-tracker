const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '..', 'src', 'game.ts'),
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.ts$/,
                include: path.resolve(__dirname, '..', 'src'),
                loader: 'ts-loader'
            },
            {
                test: [/\.vert$/, /\.frag$/],
                use: 'raw-loader',
            },
            {
                test: /\.(gif|png|jpe?g|svg|xml)$/i,
                include: path.resolve(__dirname, '..', 'assets', 'export'),
                use: 'file-loader',
            },
            {
                test: require.resolve('Phaser'),
                loader: 'expose-loader',
                options: { exposes: { globalName: 'Phaser', override: true, }, },
            },
            {
                test: require.resolve('Phaser'),
                loader: 'expose-loader',
                options: { exposes: { globalName: 'Phaser', override: true, }, },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            root: path.resolve(__dirname, 'dist'),
        }),
        new webpack.DefinePlugin({
            CANVAS_RENDERER: JSON.stringify(true),
            WEBGL_RENDERER: JSON.stringify(true),
        }),
        // GameSheet.plugin(sheet),
    ],
    resolve: {
        extensions: ['.js', '.ts'],
    }
};