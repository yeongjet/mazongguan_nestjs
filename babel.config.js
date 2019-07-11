module.exports = {
    presets: ["@babel/env", "@babel/preset-typescript"],
    sourceMaps: "inline",
    plugins: [
        "@babel/plugin-proposal-decorators",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-proposal-class-properties"
    ],
    ignore: ["./node_modules"]
};
