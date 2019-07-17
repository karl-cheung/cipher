import CryptoJS from 'crypto-js'

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

function encryptDes(data, key, config = {}) {
  return CryptoJS.DES.encrypt(...init(data, key, config)).toString()
}

function decryptDes(data, key, config = {}) {
  return CryptoJS.DES.decrypt(...init(data, key, config)).toString(CryptoJS.enc.Utf8)
}

function encryptTripleDes(data, key, config = {}) {
  return CryptoJS.TripleDES.encrypt(...init(data, key, config)).toString()
}

function decryptTripleDes(data, key, config = {}) {
  return CryptoJS.TripleDES.decrypt(...init(data, key, config)).toString(CryptoJS.enc.Utf8)
}

const tdes = {
  encryptDes,
  decryptDes,
  encryptTripleDes,
  decryptTripleDes,
}

export default tdes