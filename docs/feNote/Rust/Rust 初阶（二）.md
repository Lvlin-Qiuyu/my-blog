# Rust 初阶（二）
## 使用包、Crate 和模块管理不断增长的项目

模块系统包括：

- **包**（*Packages*）：Cargo 的一个功能，它允许你构建、测试和分享 crate。
- **Crates** ：一个模块的树形结构，它形成了库或二进制项目。
- **模块**（*Modules*）和 **use**：允许你控制作用域和路径的私有性。
- **路径**（*path*）：一个命名例如结构体、函数或模块等项的方式

### 包和 Crate

crate 有两种形式：二进制项和库。*二进制项* 可以被编译为可执行程序，比如一个命令行程序或者一个服务器。它们必须有一个 `main` 函数来定义当程序被执行的时候所需要做的事情。

二进制项的入口是 `src/main.rs`，库的入口是`src/lib.rs`。库没有 main 函数，也不会被编译成可执行程序。大多数时候 Rustaceans 说的 crate 都是指库。

*包*（*package*）是提供一系列功能的一个或者多个 crate。一个包会包含一个 *Cargo.toml* 文件，阐述如何去构建这些 crate。包中可以包含至多一个库 crate(library crate)。包中可以包含任意多个二进制 crate(binary crate)，但是必须至少包含一个 crate（无论是库的还是二进制的）。

一个包可以拥有多个二进制 crate：每个 *src/bin* 下的文件都会被编译成一个独立的二进制 crate。

**公共库的公有API 考量**   =>   [The Rust API Guidelines](https://rust-lang.github.io/api-guidelines/)

#### 创建模块

模块的寻找逻辑：

- **crate 根节点**开始：src/lib.rs 或者 src/main.rs
- **声明模块**：用`mod garden`声明了一个叫做`garden`的模块。编译器会在下列路径中寻找模块代码：
  - 内联，在大括号中，当`mod garden`后方不是一个分号而是一个大括号
  - 在文件 *src/garden.rs*
  - 在文件 *src/garden/mod.rs*（淘汰）
- **声明子模块**：在 `src/garden.rs` 中定义了`mod vegetables;`，编译器会在以父模块命名的目录中寻找子模块代码：
  - 内联，在大括号中，当`mod vegetables`后方不是一个分号而是一个大括号
  - 在文件 *src/garden/vegetables.rs*
  - 在文件 *src/garden/vegetables/mod.rs*（淘汰）

执行 `cargo new --lib restaurant` 创建一个名为 `restaurant` 的库。

使用 mod 声明一个 模块：

```rust
// src/lib.rs
mod front_of_house {
    mod hosting {
        fn add_to_waitlist() {}

        fn seat_at_table() {}
    }

    mod serving {
        fn take_order() {}

        fn serve_order() {}

        fn take_payment() {}
    }
}
```

### 路径

#### 绝对路径与相对路径

首先需要将模块置为 公有，才能进行引入，否则编译报错。

引入路径 可以是 create 开始的绝对路径，也可以是当前作用域开始的相对路径，也可以使用 super 引入父模块的路径：

```rust
mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {}
    }
}

pub fn eat_at_restaurant() {
    // 绝对路径
    crate::front_of_house::hosting::add_to_waitlist();

    // 相对路径
    front_of_house::hosting::add_to_waitlist();

    mod new_mod {
        fn _drink() {
            // super 相对路径
            super::front_of_house::hosting::add_to_waitlist();
        }
    }
}
```

#### 创建公有的结构体和枚举

如果我们在一个结构体定义的前面使用了 `pub` ，这个结构体会变成公有的，但是这个结构体的字段仍然是私有的。

```rust
mod back_of_house {
    pub struct Breakfast {
        pub toast: String,
        seasonal_fruit: String,
    }

    impl Breakfast {
        pub fn summer(toast: &str) -> Breakfast {
            Breakfast {
                toast: String::from(toast),
                seasonal_fruit: String::from("peaches"),
            }
        }
    }
}

pub fn eat_at_restaurant() {
    // 在夏天订购一个黑麦土司作为早餐
    let mut meal = back_of_house::Breakfast::summer("Rye");
    // 改变主意更换想要面包的类型
    meal.toast = String::from("Wheat");
    println!("I'd like {} toast please", meal.toast);

    // 如果取消下一行的注释代码不能编译；
    // 不允许查看或修改早餐附带的季节水果
    // meal.seasonal_fruit = String::from("blueberries");
}
```

因为 `back_of_house::Breakfast` 具有私有字段，所以这个结构体需要提供一个公共的关联函数来构造 `Breakfast` 的实例 (这里我们命名为 `summer`)。如果 `Breakfast` 没有这样的函数，我们将无法在 `eat_at_restaurant` 中创建 `Breakfast` 实例，因为我们不能在 `eat_at_restaurant` 中设置私有字段 `seasonal_fruit` 的值。



与之相反的是，如果我们将枚举设为公有，则它的所有成员都将变为公有。

```rust
mod back_of_house {
    pub enum Appetizer {
        Soup,
        Salad,
    }
}

pub fn eat_at_restaurant() {
    let order1 = back_of_house::Appetizer::Soup;
    let order2 = back_of_house::Appetizer::Salad;
}
```



### 使用 use 关键字

可以使用 `use` 关键字创建一个短路径，然后就可以在作用域中的任何地方使用这个更短的名字。

```rust
mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {}
    }
}

use crate::front_of_house::hosting;

pub fn eat_at_restaurant() {
    hosting::add_to_waitlist();
}
```



在作用域中增加 `use` 和路径类似于在文件系统中创建软连接（符号连接，symbolic link）。通过在 crate 根增加 `use crate::front_of_house::hosting`，现在 `hosting` 在作用域中就是有效的名称了，如同 `hosting` 模块被定义于 crate 根一样。通过 `use` 引入作用域的路径也会检查私有性，同其它路径一样。

`use` 只能创建 `use` 所在的特定作用域内的短路径，下列这种情况，eat_at_restaurant 移动到了一个新的模块，不同于 use 的作用域，所以不能编译：

```rust
mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {}
    }
}

use crate::front_of_house::hosting;

mod customer {
    pub fn eat_at_restaurant() {
        hosting::add_to_waitlist(); // 无法编译
        // super::hosting::add_to_waitlist(); 
       	// 或者在模块内使用 use create::front_of_house::hosting
    }
}
```

我们必须在调用函数时指定父模块，这样可以清晰地表明函数不是在本地定义的，同时使完整路径的重复度最小化。

另一方面，使用 `use` 引入结构体、枚举和其他项时，习惯是指定它们的完整路径。

在同名的时候，需要将父模块也引入进来。

#### 使用 as 重命名

使用 as 重命名可以解决两个库有同名结构体的问题：

```rust
use std::fmt::Result;
use std::io::Result as IoResult;

fn function1() -> Result {
    // --snip--
}

fn function2() -> IoResult<()> {
    // --snip--
}
```

#### 使用 pub use 重导出

将一个模块引入到当前作用域后，可以使用 pub use 将其当成当前模块的内容进行重导出：

```rust
mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {}
    }
}

pub use crate::front_of_house::hosting;

pub fn eat_at_restaurant() {
    hosting::add_to_waitlist();
}

// 现在可以直接 restaurant::hosting::add_to_waitlist 调用了。
```

#### 使用外部包

在 *Cargo.toml* 中加入 `rand` 依赖告诉了 Cargo 要从 [crates.io](https://crates.io/) 下载 `rand` 和其依赖，并使其可在项目代码中使用。

```rust
use rand::Rng;

fn main() {
    let secret_number = rand::thread_rng().gen_range(1..=100);
}
```

std 标准库也是外部 crate，随 Rust 语言一同分发。

#### 嵌套路径语法

```rust
use std::cmp::Ordering;
use std::io;
// 可以写成
use std::{cmp::Ordering, io};

use std::io;
use std::io::Write;
// 可以写成
use std::io::{self, Write};
```

#### 通过 glob 运算符将所有公有定义引入作用域

将一个路径下 **所有** 公有项引入作用域，可以指定路径后跟 `*`，glob 运算符：

```rust
use std::collections::*;
```

glob 会使得我们难以推导作用域中有什么名称和它们是在何处定义的。

glob 运算符经常用于测试模块 `tests` 中，这时会将所有内容引入作用域；glob 运算符有时也用于 prelude 模式；查看 [标准库中的文档](https://doc.rust-lang.org/std/prelude/index.html#other-preludes) 了解这个模式的更多细节。

#### 最终示例

```rust
mod front_of_house {
    // 在模块内，还可以定义其他的模块
    pub mod hosting {
        pub fn add_to_waitlist() {}
        fn seat_at_table() {}
    }

    mod serving {
        fn take_order() {}

        fn serve_order() {}

        fn take_payment() {}
    }
}

use crate::front_of_house::hosting;

pub fn eat_at_restaurant() {
    // 绝对路径
    crate::front_of_house::hosting::add_to_waitlist();

    // 相对路径, 与 front_of_house 同级，所以可以调用。
    front_of_house::hosting::add_to_waitlist();

    // 使用 use 进行路径优化
    hosting::add_to_waitlist();

    // 在夏天订购一个黑麦吐司作为早餐
    let mut meal = back_of_house::Breakfast::summer("Rye");
    // 改变主意更换想要的面包类型
    meal.toast = String::from("Wheat");
    println!("I'd like {} toast please", meal.toast);

    // 如果取消下一行的注释代码不能编译；
    // 不允许查看或修改早餐附带的季节水果
    // meal.seasonal_fruit = String::from("blueberries");

    let order1 = back_of_house::Appetizer::Soup;
    let order2 = back_of_house::Appetizer::Salad;
}

fn deliver_order() {}

mod back_of_house {
    pub struct Breakfast {
        pub toast: String,
        seasonal_fruit: String,  // 私有属性不允许访问及修改
    }
    impl Breakfast {
        pub fn summer(toast: &str) -> Breakfast {
            Breakfast {
                toast: String::from(toast),
                seasonal_fruit: String::from("peaches"),
            }
        }
    }

    pub enum Appetizer {
        Soup,
        Salad,
    }

    fn fix_incorrect_order() {
        cook_order();
        super::deliver_order(); // 从父模块开始的相对路径
    }

    fn cook_order() {}
}

mod customer {
    use crate::front_of_house::hosting;
    pub fn eat_at_restaurant() {
        hosting::add_to_waitlist();
    }
}
```

### 将模块拆分成多个文件

`mod` 关键字声明模块，而 Rust 会在与模块同名的文件中查找模块的代码。

在 src 下的文件就是 crate 下的模块，需要使用 mod 关键字声明。举例如下：

```rust
// src/lib.rs
mod front_of_house; // 声明模块

pub use crate::front_of_house::hosting;

pub fn eat_at_restaurant() {
    hosting::add_to_waitlist();
}

// src/front_of_house.rs
mod hosting;

// src/front_of_house/hosting.rs
pub fn add_to_waitlist() {}
```

