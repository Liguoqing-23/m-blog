# src 和 href 有何区别

src 是 source 的缩写，通常用于引入资源，比如图片、音频、视频等。通过 src 属性引入的资源，会被浏览器解析并加载到页面中。

这种资源的引入是需要等待的，即页面会等待资源加载完成后再继续渲染。所以，如果资源加载速度很慢，会导致页面渲染速度变慢。因此，通常建议将引入 js 的 script 标签放在 body 标签的末尾，以便在页面渲染完成后再加载 js 资源。

```html
<!DOCTYPE html>
<html>
    <head>
        <title>src 和 href 有何区别</title>
    </head>
    <body>
        <img src="example.jpg" alt="example" />
    </body>

    <script src="example.js"></script>
</html>
```

href 是 hypertext reference 的缩写，通常用于指定超链接的目标。通过 href 属性指定的目标，可以是一个网页、一个图片、一个样式表等。

href 是并行加载的，即页面不会等待 href 指定的资源加载完成后再继续渲染。所以，通常建议将 href 属性放在 head 标签中，以便在页面渲染时，能够尽早加载所需的样式表。

```html
<!DOCTYPE html>
<html>
    <head>
        <title>src 和 href 有何区别</title>
        <link href="example.css" rel="stylesheet" />
    </head>
    <body>
        <a href="example.html">example</a>
    </body>
</html>
```
