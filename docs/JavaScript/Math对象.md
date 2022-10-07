# JavaScript Math 对象

JavaScript 默认提供的 Math 对象提供一些辅助数学运算的属性和方法。无需声明，直接调用即可。

```js
Math.max(1,2); // 2
```

使用 Math 对象已有的运算方法，要比自行编写代码实现要高效，这是因为该对象的计算方法基于 JavaScript 引擎做了更底层的优化。

### Math 对象属性

Math 对象属性主要是一些数学运算中的特殊值，比如 π 。

| 属性             | 说明                                                      |
| ---------------- | --------------------------------------------------------- |
| Math.E           | 自然对数的基数 e 的值                                     |
| Math.LN10        | $ \ln 10 $，10 为底的自然对数                             |
| Math.LN2         | $ \ln 2 $，2 为底的自然对数                               |
| Math.LOG2E       | $ \log_2e $，以 2 为底 e 的对数                           |
| Math.LOG10E      | $ \lg e $，以 10 为底 e 的对数                            |
| Math.PI          | π 的值                                                    |
| Math.SQRT1_2     | $ \frac{1}{\sqrt{2}} $，1/2 的平方根                      |
| Math.SQRT2       | $ \sqrt{2} $，2 的平方根                                  |
| Math.DEG_PER_RAD | chrome 提供，$ \frac{π}{180} $，值为 0.017453292519943295 |
| Math.RAD_PER_DEG | chrome 提供，$ \frac{180}{π} $，值为 57.29577951308232    |

### Math 对象方法

Math 对象提供的一些辅助数学计算的方法。简单介绍一些比较常用的方法。

#### max 和 min

max 方法和 min 方法用于找到一组数据中的最大值和最小值，可以接受任意多个参数，如下所示：

```js
Math.max(3, 54, 32, 16); // 54
Math.min(3, 54, 32, 16); // 3
```

如果传入的参数中有不能转化为数字类型的值，则会返回 NaN。

```js
Math.max('abc', undefined, {}); // 只要有一个不能转成数字类型，就返回 NaN
Math.max(null, -1, -2); // 0，null 可以转成数字0，如 Number(null) 得到0。
```

结合扩展运算符，能够方便找到数组中的最大/最小值。

```js
let values = [1,2,3,4,5,6,7];
Math.max(...values); // 7
```

#### 舍入方法

将小数转为整数，Math 提供了 5 个方法供使用：ceil，floor，round，fround，trunc。

- Math.ceil 方法，对小数进行向上舍入。
- Math.floor 方法，对小数进行向下舍入。
- Math.round 方法，执行四舍五入。
- Math.fround 方法，返回数值最接近的单精度（32位）浮点值表示。
- Math.trunc 方法，取整数部分，删去小数部分。

如下所示：

```js
Math.ceil(25.9) // 26
Math.ceil(25.1) // 26

Math.floor(25.9) // 25
Math.floor(25.1) // 25

Math.round(25.9) // 26
Math.round(25.5) // 26
Math.round(25.4) // 25

Math.fround(0.4) // 0.4000000059604645
Math.fround(0.5) // 0.5
Math.fround(25.9) // 25.899999618530273


Math.trunc(25.9) // 25
Math.trunc(25.5) // 25
Math.trunc(25.1) // 25
```

#### 随机数

Math.random 方法返回一个 0~1 范围的随机小数，包含 0 不包含 1。

如果想得到 1~10 范围的随机数，代码如下：

```js
let num = Math.floor(Math.random() * 10 + 1); // 共 10 个数字，最小值为 1
```

如果想得到 2~10 范围的随机数，代码如下：

```js
let num = Math.floor(Math.random() * 9 + 2); // 共 9 个数字，最小值为 2
```

#### 其它方法

| 方法                | 说明                                                         |
| :------------------ | :----------------------------------------------------------- |
| Math.abs(x)         | 返回 x 的绝对值                                              |
| Math.exp(x)         | 返回 e 的 x 次幂                                             |
| Math.expm1(x)       | 等于 Math.exp(x) - 1                                         |
| Math.log(x)         | 返回数的自然对数（底为e）                                    |
| Math.log1p(x)       | 等于 1 + Math.log(x)                                         |
| Math.pow(x,y)       | 返回 x 的 y 次幂。                                           |
| Math.hypot(...nums) | 返回 nums 中每个数平方和的平方根                             |
| Math.clz32(x)       | 返回 32 位整数 x 的前置 0 的数量                             |
| Math.sign(x)        | 返回表示 x 符号的 1，0，-0 或 -1                             |
| Math.sqrt(x)        | 返回 x 的平方根                                              |
| Math.cbrt(x)        | 返回 x 的立方根                                              |
| Math.acos(x)        | 返回 x 的反余弦值                                            |
| Math.acosh(x)       | 返回 x 的反双曲余弦值                                        |
| Math.asin(x)        | 返回 x 的反正弦值                                            |
| Math.asinh(x)       | 返回 x 的反双曲正弦值                                        |
| Math.atan(x)        | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。     |
| Math.atanh(x)       | 返回 x 的反双曲正切值。                                      |
| Math.atan2(y,x)     | 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。 |
| Math.sin(x)         | 返回 x 的正弦。                                              |
| Math.cos(x)         | 返回 x 的余弦。                                              |
| Math.tan(x)         | 返回 x 的正切。                                              |

