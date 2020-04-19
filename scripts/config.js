const path = require('path')
const buble = require('rollup-plugin-buble')
const alias = require('rollup-plugin-alias')
const replace = require('rollup-plugin-replace')
const flow = require('rollup-plugin-flow-no-whitespace')
const { name, author } = require('../package.json')
const version = process.env.VERSION || require('../package.json').version
const aliases = require('./alias')
const banner =
  '/*!\n' +
  ` * ${name}.js v${version}\n` +
  ` * (c) 2019-${new Date().getFullYear()} ${author}\n` +
  ' * Released under the MIT License.\n' +
  ' */'

const resolve = (p) => {
  const base = p.split('/')[0]
  if (aliases[base]) {
    return path.resolve(aliases[base], p.slice(base.length + 1))
  } else {
    return path.resolve(__dirname, '../', p)
  }
}

const config = {
  entry: resolve('src/cipher.js'),
  env: 'production',
  banner,
  external: Object.keys(require('../package.json').dependencies),
  globals: {
    'crypto-js': 'CryptoJS',
    'cipher': 'Cipher',
  },
}

const builds = {
  'cipher': {
    ...config,
    dest: resolve('dist/cipher.min.js'),
    format: 'umd',
  },
  'cipher-cjs': {
    ...config,
    dest: resolve('dist/cipher.cjs.min.js'),
    format: 'cjs',
  },
  'cipher-amd': {
    ...config,
    dest: resolve('dist/cipher.amd.min.js'),
    format: 'amd',
  },
  'cipher-es': {
    ...config,
    dest: resolve('dist/cipher.es.min.js'),
    format: 'es',
  },
}

function genConfig(key) {
  const opts = builds[key]
  const config = {
    input: opts.entry,
    external: opts.external,
    plugins: [flow(), alias(Object.assign({}, aliases, opts.alias))].concat(
      opts.plugins || []
    ),
    output: {
      file: opts.dest,
      format: opts.format,
      banner: opts.banner,
      name: opts.moduleName || name,
      globals: opts.globals,
    },
    onwarn: (msg, warn) => {
      if (!/Circular/.test(msg)) {
        warn(msg)
      }
    },
  }

  // built-in vars
  const vars = {
    __VERSION__: version,
  }

  // build-specific env
  if (opts.env) {
    vars['process.env.NODE_ENV'] = JSON.stringify(opts.env)
  }
  config.plugins.push(replace(vars))

  if (opts.transpile !== false) {
    config.plugins.push(buble())
  }

  Object.defineProperty(config, '_name', {
    enumerable: false,
    value: key,
  })

  return config
}

if (process.env.TARGET) {
  module.exports = genConfig(process.env.TARGET)
} else {
  exports.getBuild = genConfig
  exports.getAllBuilds = () => Object.keys(builds).map(genConfig)
}
