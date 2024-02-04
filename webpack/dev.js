const webpack = require("webpack");

{
    const { merge } = require("webpack-merge");
    const HtmlWebpackPlugin = require("html-webpack-plugin");
    const base = require("./base");

    module.exports = merge(base, {
        mode: "development",
        entry: {
            app: base.entry,
            hot: "webpack/hot/dev-server.js",
            client: "webpack-dev-server/client/index.js?hot=true&live-reload=true",
        },
        devServer: {
            static: "../dist",
            hot: false,
            client: {
                overlay: false,
                progress: true,
                reconnect: false,
            },
        },
        plugins: [
            ...base.plugins,
            new HtmlWebpackPlugin({
                template: "./index.html",
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],
    });
}
