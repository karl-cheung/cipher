# tdes

> DES 加密算法与三重数据加密算法（Triple DES）的简易封装。

## 说明

- DES 加密算法

  DES 全称为 Data Encryption Standard，即数据加密标准，是一种使用密钥加密的块算法

- 三重数据加密算法

  三重数据加密算法（Triple Data Encryption Algorithm，缩写为 TDEA，Triple DEA），或称 3DES（Triple DES），是一种对称密钥加密块密码，相当于是对每个数据块应用三次资料加密标准（DES）算法

## 使用

Install:

```shell
npm install tdes -S
```

Import:

```shell
<script src="../dist/tdes.min.js"></script>
```

## API

> tdes.js 的默认模式为 ECB，默认填充方式为 PKCS7

- des

  - desEncrypt

  - desDecrypt

```js
const tdes = require('../dist/tdes.min.js')
const message = 'https://github.com/vincheung'
const key = 'vincheng'

const ciphertext = tdes.desEncrypt(message, key)
const plaintext = tdes.desDecrypt(ciphertext, key)
console.log('\x1B[31m%s\x1B[0m', ciphertext)
console.log('\x1B[35m%s\x1B[0m', plaintext)

const ciphertext2 = tdes.desEncrypt(message, key, {
  mode: 'CBC',
  iv: 123
})
const plaintext2 = tdes.desDecrypt(ciphertext2, key, {
  mode: 'CBC',
  iv: 123
})
console.log('\x1B[36m%s\x1B[0m', ciphertext2)
console.log('\x1B[34m%s\x1B[0m', plaintext2)
```

- tdes

  - tdesEncrypt

  - tdesDecrypt

```js
const tdes = require('../dist/tdes.min.js')
const message = 'https://github.com/vincheung'
const key = 'vincheng'

const ciphertext = tdes.tdesEncrypt(message, key)
const plaintext = tdes.tdesDecrypt(ciphertext, key)
console.log('\x1B[31m%s\x1B[0m', ciphertext)
console.log('\x1B[35m%s\x1B[0m', plaintext)

const ciphertext2 = tdes.tdesEncrypt(message, key, {
  mode: 'CBC',
  iv: 123
})
const plaintext2 = tdes.tdesDecrypt(ciphertext2, key, {
  mode: 'CBC',
  iv: 123
})
console.log('\x1B[36m%s\x1B[0m', ciphertext2)
console.log('\x1B[34m%s\x1B[0m', plaintext2)
```

## 附注

- CBC 需要初始化向量 iv，来加密第一块 C0

- PKCS5 只能用来填充 64bit 的数据块

- 所有需要填充的地方都以 0 填充

- 在不填充的情况下，加密内容不是 8bit 整数倍加密会报错

- Java 的默认模式为 ECB，key 的 size 必须为 24。默认填充方式为 PKCS5，没有 PKCS7

- C# 的默认模式为 CBC，默认填充方式为 PKCS7

- JavaScript 填充方式 PKCS7 对应 Java 填充方式 PKCS5

## License

The MIT License.
