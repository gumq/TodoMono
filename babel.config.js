module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
    'module:metro-react-native-babel-preset', // nếu dùng RN
  ],
  plugins: ['react-native-reanimated/plugin', 'react-native-web'],
};
