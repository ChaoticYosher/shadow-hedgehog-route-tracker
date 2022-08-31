const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const localDirectory = path.resolve(__dirname, '..');

module.exports = {
    entry: path.resolve(localDirectory, 'src', 'game.ts'),
    output: {
        path: path.resolve(localDirectory, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            include: path.resolve(localDirectory, 'src'),
            loader: 'ts-loader'
        },
        {
            test: [/\.vert$/, /\.frag$/],
            use: 'raw-loader',
        },
        {
            test: /\.(gif|png|jpe?g|svg|xml)$/i,
            include: path.resolve(localDirectory, 'assets', 'export'),
            use: 'file-loader',
        },
        {
            test: /\.(txt|lss)$/i,
            include: path.resolve(localDirectory, 'data'),
            use: 'file-loader',
        },
        {
            test: /\.(csv)$/i,
            include: path.resolve(localDirectory, 'data'),
            use: 'csv-loader',
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
    },
};