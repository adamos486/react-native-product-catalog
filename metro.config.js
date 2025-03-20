// metro.config.js
const {
    wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.extraNodeModules = {
    // Alias the placeholder to the correct AssetRegistry module.
    'missing-asset-registry-path': require.resolve('react-native/Libraries/Image/AssetRegistry'),
};

module.exports = wrapWithReanimatedMetroConfig(defaultConfig);
