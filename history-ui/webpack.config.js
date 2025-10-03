const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "pramata",
    projectName: "history-ui",
    webpackConfigEnv,
    argv,
    outputSystemJS: true,
  });

  return mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(defaultConfig, {
    target: ["web", "es5"],
    externals: ["react", "react-dom"],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { useBuiltIns: "entry", corejs: 3 }],
                "@babel/preset-react",
              ],
              plugins: ["@babel/plugin-proposal-class-properties",
                "@babel/plugin-transform-arrow-functions",
                "@babel/plugin-transform-runtime"],
            },
          },
        },
      ],
    },
  });
};
