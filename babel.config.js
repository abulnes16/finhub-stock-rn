module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "@components": "./src/components",
          "@hooks": "./src/common/hooks",
          "@constants": "./src/common/constants",
          "@helpers": "./src/common/helpers",
          "@navigation": "./src/navigation",
          "@res": "./src/res",
          "@screens": "./src/screens",
          "types": "./src/types",
          "@store": "./src/store",
          "@localization": "./src/common/localization",
          "@theme": "./src/theme",
          "@store": "./src/store",
          "@api": "./src/api",
          "@modules": "./src/common/modules"
        },
      },
    ],
  ]
};
