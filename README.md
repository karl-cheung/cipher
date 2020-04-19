# cipher

> JavaScript 加密库 [crypto-js] 的封装。

## 使用

Install:

```shell
npm install @vincheung/cipher -S
```

Import:

```html
<script src="../dist/cipher.min.js"></script>
```

## API

- `cipher` 依赖 `crypto-js` 实现，暴露全局对象 Cipher

- `cipher` 的默认加密模式为 ECB，填充方式为 PKCS7

- Cipher 暴露加密方法 encrypt，解密方法 decrypt

- encrypt：入参

  - data：明文

  - key：密钥

  - {}：配置

    - cipher：算法的名称

    - mode：模式

    - padding：填充

    - iv：向量

- decrypt：入参

  - data：密文

  - key：密钥

  - {}：配置

    - cipher：算法的名称

    - mode：模式

    - padding：填充

    - iv：向量

    - compile：CryptoJS.enc.Utf8 转译，默认值 `true`（解密结果默认会使用 CryptoJS.enc.Utf8 转译，你可以使用 compile: false 来关闭转译）

- Cipher 对象下的 CryptoJS 属性对象完整继承来源于 `crypto-js`，你仍可以通过 Cipher.CryptoJS 来使用 `crypto-js` 的所有功能

## 示例

```js
import Cipher from 'cipher'

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
```

```js
// 假设密钥 key 的处理使用
import Cipher from 'cipher'

const { CryptoJS } = Cipher

const message = 'https://github.com/vincheung/cipher'
const key = 'cipher'

const keyHex = CryptoJS.enc.Utf8.parse(key)
const cipherDES = Cipher.encrypt(message, keyHex, {
  cipher: 'DES',
})
```

## 拓展

- CBC 需要初始化向量 iv，来加密第一块 C0

- PKCS5 只能用来填充 64bit 的数据块

- 所有需要填充的地方都以 0 填充

- 在不填充的情况下，加密内容不是 8bit 整数倍加密会报错

- Java 的默认模式为 ECB，key 的 size 必须为 24默认填充方式为 PKCS5，没有 PKCS7

- C# 的默认模式为 CBC，默认填充方式为 PKCS7

- JavaScript 填充方式 PKCS7 对应 Java 填充方式 PKCS5，没有 PKCS5

## 兼容

`cipher` 使用广泛支持的 ES6 Object.assign，如果你的环境较为老旧，可以使用垫片 polyfill。

## License

The [MIT License].

[crypto-js]: https://github.com/brix/crypto-js

[mit license]: ./LICENSE
