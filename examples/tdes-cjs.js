const tdes = require('../dist/tdes.min.js')
const message = 'https://github.com/vincheung'
const key = 'vincheng'

const ciphertext = tdes.encryptDes(message, key)
const plaintext = tdes.decryptDes(ciphertext, key)
console.log('\x1B[31m%s\x1B[0m', ciphertext)
console.log('\x1B[35m%s\x1B[0m', plaintext)

const ciphertext2 = tdes.encryptTripleDes(message, key, {
  mode: 'CBC',
  iv: 123
})
const plaintext2 = tdes.decryptTripleDes(ciphertext2, key, {
  mode: 'CBC',
  iv: 123
})
console.log('\x1B[36m%s\x1B[0m', ciphertext2)
console.log('\x1B[34m%s\x1B[0m', plaintext2)
