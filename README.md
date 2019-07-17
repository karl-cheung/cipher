# tdes

> 三重数据加密算法（Triple DES）的简易封装。

## 说明

三重数据加密算法（Triple Data Encryption Algorithm，缩写为 TDEA，Triple DEA），或称 3DES（Triple DES），是一种对称密钥加密块密码，相当于是对每个数据块应用三次资料加密标准（DES）算法。

## 使用

Install:

```shell
npm install tdes -S
```

Import:

```shell
<script src="../dist/tdes.min.js"></script>
```

## 附注

+ CBC 需要初始化向量 iv，来加密第一块 C0

+ PKCS5 只能用来填充 64bit 的数据块

+ 所有需要填充的地方都以 0 填充

+ 在不填充的情况下，加密内容不是 8bit 整数倍加密会报错

+ Java 的默认模式为 ECB，key 的 size 必须为24。默认填充方式为 PKCS5，没有 PKCS7

+ C# 的默认模式为 CBC，默认填充方式为 PKCS7

+ JavaScript 填充方式 PKCS7 对应 Java 填充方式 PKCS5

## License

The MIT License.
