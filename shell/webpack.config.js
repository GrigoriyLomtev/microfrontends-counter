require("dotenv").config();
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const isDev = process.env.NODE_ENV === "development";
const deps = require("./package.json").dependencies;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

module.exports = {
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  devtool: false,

  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        mf1: `mf1@${
          process.env.REACT_APP_MF1_REMOTE_ENTRY ||
          "https://microfrontends-counter-mf1.vercel.app/remoteEntry.js"
        }`,
        mf2: `mf2@${
          process.env.REACT_APP_MF2_REMOTE_ENTRY ||
          "https://microfrontends-counter-mf2.vercel.app/remoteEntry.js"
        }`,
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "react-redux": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-redux"],
        },
        "@reduxjs/toolkit": {
          singleton: true,
          eager: true,
          requiredVersion: deps["@reduxjs/toolkit"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
