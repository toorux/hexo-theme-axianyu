# hexo-theme-axianyu

一个极简风格的Hexo主题, 基于[adoubi](https://github.com/shinux/hexo-theme-adoubi)主题, 修改了首页排版和少部分文章样式, 兼容手机端处理, 修改TOC为HEXO自带TOC, 请勿安装 `hexo-toc`; 并且`确保Hexo版本 > 3.0`

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
  hide_about_in_index: true #是否在首页文章列表中隐藏about页面
  about_url: '/about页面的相对路径'
```

## 扩展 Front-matter 字段

```yml
rp: 1 | 2 | 3 | 4 # 1: 禁止转载; 2: 需要授权转载; 3: 需要注明来源转载; 4: 可随意转载
toc: true | false #是否显示目录, 不填默认不显示
```  
    默认为4, 可在全局配置中修改  

  
  
## Copyright

resources usage:

- SF Pro Text font
- normalize.css
- heti.css
- hexo-theme-adoubi

Keep `Theme By Axianyu , Powered By Hexo.` in footer and do whatever you want.
