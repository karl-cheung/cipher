import CryptoJS from 'crypto-js'

const Utf8 = CryptoJS.enc.Utf8

function init(data, key, config) {
  const keyHex = CryptoJS.enc.Utf8.parse(key)
  const defaultConfig = {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }
  if (config.mode) {
    config.mode = CryptoJS.mode[config.mode]
  }
  if (config.iv) {
    config.iv = CryptoJS.enc.Utf8.parse(config.iv)
  }
  Object.assign(defaultConfig, config)
  return [data, keyHex, defaultConfig]
}

function desEncrypt(data, key, config = {}) {
  return CryptoJS.DES.encrypt(...init(data, key, config)).toString()
}

function desDecrypt(data, key, config = {}) {
  return CryptoJS.DES.decrypt(...init(data, key, config)).toString(Utf8)
}

function tdesEncrypt(data, key, config = {}) {
  return CryptoJS.TripleDES.encrypt(...init(data, key, config)).toString()
}

function tdesDecrypt(data, key, config = {}) {
  return CryptoJS.TripleDES.decrypt(...init(data, key, config)).toString(Utf8)
}

const tdes = {
  desEncrypt,
  desDecrypt,
  tdesEncrypt,
  tdesDecrypt,
}

export default tdes