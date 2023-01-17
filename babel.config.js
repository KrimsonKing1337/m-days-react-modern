module.exports = function (api) {
  api.cache(false);

  const presets = [
    ['@babel/preset-typescript'],
    ['@babel/preset-react'],
    [
      '@babel/preset-env',
      {
        corejs: { version: 3 },
        useBuiltIns: 'usage',
        targets: {
          'edge': '17',
          'firefox': '60',
          'chrome': '67',
          'safari': '11.1',
        },
      },
    ],
  ];

  const plugins = [
    ['@babel/plugin-proposal-decorators', { legacy: true } ],
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-transform-object-assign'],
    ['@babel/transform-runtime', { useESModules: true, regenerator: true }],
  ];

  return {
    presets,
    plugins,
    ignore: [/\/node_modules\//],
  };
};
