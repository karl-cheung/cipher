const CipherJs = require('../dist/cipher-js.min.js')
const message = 'https://github.com/vincheung/cipher-js'
const key = 'cipher-js'

// DES
const cipherDES = CipherJs.encrypt(message, key, {
  cipher: 'DES',
})
const plainDES = CipherJs.decrypt(cipherDES, key, {
  cipher: 'DES',
})
console.log(cipherDES)
console.log(plainDES)

// TripleDES
const cipherTripleDES = CipherJs.encrypt(message, key, {
  cipher: 'TripleDES',
  mode: 'CBC',
  padding: 'ZeroPadding',
})
const plainTripleDES = CipherJs.decrypt(cipherTripleDES, key, {
  cipher: 'TripleDES',
  mode: 'CBC',
  padding: 'ZeroPadding',
})
console.log(cipherTripleDES)
console.log(plainTripleDES)

// AES
const cipherAES = CipherJs.encrypt(message, key, {
  cipher: 'AES',
})
const plainAES = CipherJs.decrypt(cipherAES, key, {
  cipher: 'AES',
})
console.log(cipherAES)
console.log(plainAES)
