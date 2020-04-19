import CryptoJS from 'crypto-js'

const { Utf8 } = CryptoJS.enc

function init(data, key, config) {
  const { mode, padding } = config
  const defaultConfig = {
    mode: mode ? CryptoJS.mode[mode] : CryptoJS.mode.ECB,
    padding: padding ? CryptoJS.pad[padding] : CryptoJS.pad.Pkcs7,
  }
  Object.assign(config, defaultConfig)
  return [data, key, defaultConfig]
}

function encrypt(data, key, config = {}) {
  const { cipher } = config
  if (!cipher) return
  const opt = init(data, key, config)
  return CryptoJS[cipher].encrypt(...opt).toString()
}

function decrypt(data, key, config = { compile: true }) {
  const { cipher, compile } = Object.assign({ compile: true }, config)
  if (!cipher) return
  const opt = init(data, key, config)
  const bytes = CryptoJS[cipher].decrypt(...opt)
  return !compile ? bytes.toString() : bytes.toString(Utf8)
}

const Cipher = {
  CryptoJS,
  encrypt,
  decrypt,
}

export default Cipher
