{
    const { merge } = require('webpack-merge');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const TerserPlugin = require('terser-webpack-plugin');
    const CopyPlugin = require('copy-webpack-plugin');
    const base = require('./base');

    module.exports = merge(base, {
        mode: 'production',
        watch: false,
        devtool: false,
        performance: {
            maxEntrypointSize: 90000,
            maxAssetSize: 90000,
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        output: {
                            comments: false,
                        },
                    },
                }),
            ],
        },
        plugins: [
            ...base.plugins,
            new CopyPlugin({
                patterns: [
                    { from: './assets/export', to: 'assets', },
                ]
            }),
            new HtmlWebpackPlugin({
                template: './index.html',
                inject: true,
            }),
        ]
        // plugins: [
        //     new CopyPlugin({
        //         patterns: [
        //             { from: './src/assets', to: 'src/assets', }
        //         ]
        //     })
        // ]
    });
}