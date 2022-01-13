# hexo-theme-axianyu

一个极简风格的Hexo主题, 基于[adoubi](https://github.com/shinux/hexo-theme-adoubi)主题, 修改了首页排版和少部分文章样式, 兼容手机端处理, 修改TOC为HEXO自带TOC, 请勿安装 `hexo-toc`; 并且`确保Hexo版本 > 3.0`

    1. Installation
    2. 在文章中显示图片:
    3. 显示文章目录:
    4. 配置
    5. 扩展 Front-matter 字段
    6. 关于版权保护
        6.1. 直接声明
        6.2. CC 4.0 许可协议
    7. 创建About页面
    8. Copyright


## Installation

hexo-theme-adoubi developed with hexo 3.2  
hexo-theme-axianyu developed with hexo 6.0  

*需要的插件(dependencies)*:

- hexo-renderer-pug
- hexo-generator-feed

clone 主题到themes文件夹中, 改名为axianyu

    git clone https://github.com/kgysf/hexo-theme-axianyu.git themes/axianyu

修改站点配置文件:

    theme: axianyu

替换 `themes/axianyu/sources/images/favicon.ico` 为你自己的网站图标

更新

    cd themes/axianyu
    git pull origin master


## 在文章中显示图片:

如果图片文件在站点的 `source/images` 中可使用 `/images/yout-image.png` 来访问

## 显示文章目录:

在文章的 `Front-matter` 部分增加 `toc: true` 即可显示目录. 更多关于 `Front-matter` 参考 [Hexo doc: Front-matter](https://hexo.io/zh-cn/docs/front-matter)

## 配置
全局配置文件 `_config.yml` 中的配置

```yml
email: '你的邮箱地址'
email_placeholder: '邮件模板占位符, 默认为 "请在此处书写您的邮件内容", 具体效果可在任意文章页面点击顶部email查看'
axianyu:
  show_rss: false #是否显示RSS
  show_about: true #是否显示about页面(hexo new about)
  show_email: true #是否显示email
  def_rp: 4 #默认转载授权类型, 具体查看转载授权配置部分
  use_cc: true #是否使用CC协议, 具体可以查看CC协议介绍部分, 如果使用CC协议, 将禁用rp授权类型显示 (如果你实在搞不懂就设置false, 然后使用rp就行了)
  def_cc: 6 #默认CC类型, 具体查看 扩展Front-matter字段 部分 
  cc_author: '' #CC协议中显示的作者名称, 优先使用Front-matter中的author, 其次为此配置
  hide_about_in_index: true #是否在首页文章列表中隐藏about页面
  about_url: '/about页面的相对路径'
```

## 扩展 Front-matter 字段

``` yml
rp: 4 # 1: 禁止转载; 2: 需要授权转载; 3: 需要注明来源转载; 4: 可随意转载
toc: true #是否显示目录, 不填默认不显示
cc: 6 # 0: CC0, 1: CC BY, 2: CC BY-NC, 3: CC BY-ND, 4: CC BY-NC-ND, 5: CC BY-SA, 6: CC BY-NC-SA
author: '' # 本文作者, 将会显示在CC许可协议中, 如果不填写此字段, 将使用全局配置中的cc_author
```  
    rp默认为4 (可随意转载), cc默认为6 (CC BY-NC-SA), 可在全局配置中修改, rp与cc不可同时使用, 开启`use_cc配置后将不再显示rp`  



## 关于版权保护

主题采用两套版权声明方式:
 1. 直接声明
 2. CC 4.0 许可协议

### 直接声明
本方式包含 `禁止转载/需授权转载/需注明来源转载/可任意转载` 四种类型授权, 使用此方式如果是可任意转载, 将不会在文章页面显示, 其余类型将在文章标题下方日期的右侧显示对应文字. 

通过在文章的 `Front-matter` 部分设置 `rp: value` 来指定文章的授权类型, 其中value可以为1-4的数字, 分别代表 `1: 禁止转载; 2: 需要授权转载; 3: 需要注明来源转载; 4: 可随意转载`; 如果没有在文章的 `Front-matter` 部分设置rp字段, 将默认使用 `可任意转载` 授权类型; 在全局配置中可以修改 `def_rp` 字段来设置默认授权类型, 配置方式可查看配置部分说明.

### CC 4.0 许可协议
本方式将使用 CC 4.0 许可协议授权, 建议使用此方式; 主题默认使用直接声明授权方式, 如果要使用CC许可协议, 请在全局配置中设置 `use_cc: true`, 具体设置方式请看全局配置部分; 此方式有七种授权类型, 分别如下:

| value | 字母代号 | 中文代号 |
| ----- | ----- | ----- |
| 0 | CC0 | 公共领域 |
| 1 | BY | 署名 |
| 2 | BY-NC | 署名-禁止商业用途 |
| 3 | BY-ND | 署名-禁止演绎 |
| 4 | BY-NC-ND | 署名-禁止商业用途-禁止演绎 |
| 5 | BY-SA | 署名-相同方式共享 |
| 6 | BY-NC-SA | 署名-禁止商业用途-相同方式共享 |

> ND(禁止演绎)简单来说, 就是他人只能全文转载或部分摘抄本创作中的内容，而不允许作出任何改动; 其余的都是字面意思, 应该很好理解.

通过在文章的 `Front-matter` 部分设置 `cc: value` 来指定文章的授权类型, value取值如上表格所示; 如果没有在文章的 `Front-matter` 部分设置cc字段, 将默认使用 `BY-NC-SA` 协议; 在全局配置中可以修改 `def_cc` 字段来设置默认授权类型, 配置方式可查看配置部分说明.

另外你还可以在 `Front-matter` 中设置 `author` 来指定文章作者, 也可以在全局配置中设置, 作者会在文章底部的CC许可协议信息中展示, 也会在复制文章内容时添加到剪切板末尾, 展示时会优先使用文章 `Front-matter` 中设置的 `author` 字段, 如果没有设置, 则会默认使用全局设置中的 `cc_author`, 具体请看全局配置部分文档.

如果文章的许可协议使用CC许可协议, 并且授权类型不是CC0的话, 在他人复制文章内容时, 会自动向剪切板追加版权信息; 效果类似如下:

    本方式将使用 CC 4.0 许可协议授权, 建议使用此方式; 主题默认使用直接声明授权方式
    ----------------------
    来源: 测试用的文章标题
    作者: 咸鱼
    链接: http://localhost:4000/test/
    本文使用 CC BY-NC-SA 4.0 许可协议, 著作权归作者 咸鱼 所有, 请遵守相关许可协议, 禁止商业转载/引用, 非商业转载/引用请注明出处。

> 注意: 如果所选的协议不包含NC(禁止商用), 那么复制时最后一句话中的 `禁止商业转载/引用, 非商业转载/引用请注明出处` 将会被替换为 `引用请注明出处`   
> **另外, 只有当复制的文本长度大于20的时候, 才会追加以上版权信息, 防止他人只是复制一些配置文件的字段时每次都要删除版权信息.**

如果你选择使用`CC0`授权, 代表着你自愿放弃文章所有版权, 文章立即进入公共领域, 他人可任意使用. 

> 但根据有关说法, CC0协议在中国法律范围无效, 中国法律不认可作者主动放弃所有权; 以上信息未经过验证, 只是作为提示写出; 并且即便如此, 使用CC0也可以等同于你默认允许他人任意使用你的内容.

在以下几种情况, 复制内容时不会追加版权信息:
 - 复制长度不超过200的超链接
 - 复制github仓库地址 (如 `git@github.com:用户名/仓库名称.git`)
 - 复制 `git clone` 命令
 - 复制的文本长度不超过20 (使用场景例如: 简单的复制一些配置的字段名或者值)
 - 文章使用的CC0协议
 - 没有开启CC许可协议, 使用的rp授权


## 创建About页面

直接执行 `hexo new about` 即可, 模版使用默认post模版即可, 主题会进行相应处理

需要在文章列表中隐藏about页面的话, 参考全局配置部分

  
## Copyright

resources usage:

- SF Pro Text font
- normalize.css
- heti.css
- hexo-theme-adoubi

Keep `Theme By Axianyu , Powered By Hexo.` in footer and do whatever you want.
