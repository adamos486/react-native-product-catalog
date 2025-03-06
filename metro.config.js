// metro.config.js
const {
    wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
    const config = await getDefaultConfig(__dirname);
    // Ensure asset extensions include 'png' (and any other needed types)
    config.resolver.assetExts = [...config.resolver.assetExts, 'png'];
    return wrapWithReanimatedMetroConfig(config);
})();
