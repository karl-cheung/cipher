const Cipher = require('../dist/cipher.min.js')
const message = 'https://github.com/vincheung/cipher'
const key = 'cipher'

// DES
const cipherDES = Cipher.encrypt(message, key, {
  cipher: 'DES',
})
const plainDES = Cipher.decrypt(cipherDES, key, {
  cipher: 'DES',
})
console.log(cipherDES)
console.log(plainDES)

// TripleDES
const cipherTripleDES = Cipher.encrypt(message, key, {
  cipher: 'TripleDES',
  mode: 'CBC',
  padding: 'ZeroPadding',
})
const plainTripleDES = Cipher.decrypt(cipherTripleDES, key, {
  cipher: 'TripleDES',
  mode: 'CBC',
  padding: 'ZeroPadding',
})
console.log(cipherTripleDES)
console.log(plainTripleDES)

// AES
const cipherAES = Cipher.encrypt(message, key, {
  cipher: 'AES',
})
const plainAES = Cipher.decrypt(cipherAES, key, {
  cipher: 'AES',
})
console.log(cipherAES)
console.log(plainAES)
