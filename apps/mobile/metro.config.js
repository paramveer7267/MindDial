const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Watch shared packages
// config.watchFolders = [path.resolve(__dirname, "../../packages")];

// Make sure React is resolved from root
config.resolver = {
  ...config.resolver,
  nodeModulesPaths: [
    path.resolve(__dirname, "../../node_modules"),
    path.resolve(__dirname, "node_modules"),
  ],
};

module.exports = config;
