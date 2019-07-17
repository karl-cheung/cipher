const babelPresetFlowVue = {
  plugins: [
    require('@babel/plugin-proposal-class-properties'),
    require('@babel/plugin-transform-flow-strip-types'),
  ]
}

module.exports = {
  presets: [
    require('@babel/preset-env'),
    babelPresetFlowVue,
  ],
  plugins: [
    require('@babel/plugin-syntax-dynamic-import'),
  ],
  ignore: [
    'dist/*.js',
    'packages/**/*.js',
  ]
}
