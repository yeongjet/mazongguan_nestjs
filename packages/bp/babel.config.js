module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-typescript"],
    sourceMaps: "inline",
    plugins: [
        "@babel/plugin-proposal-optional-chaining",
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose" : true }]
    ],
    ignore: ["./node_modules"]
};
