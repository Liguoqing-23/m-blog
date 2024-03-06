import{_ as i,c as s,o as a,al as t}from"./chunks/framework.tb-jXbfw.js";const g=JSON.parse('{"title":"Vite 篇介绍","description":"","frontmatter":{},"headers":[],"relativePath":"blog/build_tools/vite/index.md","filePath":"blog/build_tools/vite/index.md"}'),l={name:"blog/build_tools/vite/index.md"},e=t(`<h1 id="vite-篇介绍" tabindex="-1">Vite 篇介绍 <a class="header-anchor" href="#vite-篇介绍" aria-label="Permalink to &quot;Vite 篇介绍&quot;">​</a></h1><h2 id="_1-什么是构建工具" tabindex="-1">1. 什么是构建工具 <a class="header-anchor" href="#_1-什么是构建工具" aria-label="Permalink to &quot;1. 什么是构建工具&quot;">​</a></h2><p>成熟的构建工具可以帮助我们完成以下工作：</p><ul><li>优化开发体验： <ul><li>模块热替换 [HMR] Hot Module Replacement：在不刷新浏览器的情况下替换、添加或删除模块。</li><li>跨域代理：解决开发环境下的跨域问题。</li><li>本地服务：提供一个本地服务，方便开发调试。</li></ul></li><li>模块化开发： <ul><li>node_modules：支持引入第三方模块。</li></ul></li><li>处理语法兼容性： <ul><li>代码转换：TypeScript 编译成 JavaScript、SCSS 编译成 CSS、Babel 编译 ES6+ 语法 为 ES5 语法等。</li><li>代码校验：在代码提交前校验代码是否符合规范。</li></ul></li><li>提高性能： <ul><li>文件优化：压缩 JavaScript、CSS、HTML 代码、压缩图片等。</li><li>代码分割：将代码分割成小块，以便按需加载。</li><li>代码合并：将多个文件合并成一个文件，减少网络请求。</li><li>代码压缩：压缩代码体积，加快加载速度。</li></ul></li><li>提高安全性： <ul><li>代码混淆：将代码混淆，增加代码安全性。</li></ul></li></ul><p>有了<strong>自动化</strong>的构建工具，我们可以专注于业务逻辑的开发，不用关心代码如何在不同浏览器上运行，只需首次将集成配置好，后续的开发只需执行相对应的命令即可。</p><h3 id="_1-1-常见的构建工具" tabindex="-1">1.1. 常见的构建工具 <a class="header-anchor" href="#_1-1-常见的构建工具" aria-label="Permalink to &quot;1.1. 常见的构建工具&quot;">​</a></h3><ul><li>Gulp</li><li>Grunt</li><li>Parcel</li><li>Rollup</li><li>Brunch</li><li>ESBuild</li><li>Webpack</li><li>Vite</li></ul><h2 id="_2-vite-的优势" tabindex="-1">2. Vite 的优势 <a class="header-anchor" href="#_2-vite-的优势" aria-label="Permalink to &quot;2. Vite 的优势&quot;">​</a></h2><blockquote><p>现实问题：<a href="https://cn.vitejs.dev/guide/why.html#the-problems" target="_blank" rel="noreferrer">https://cn.vitejs.dev/guide/why.html#the-problems</a></p><ul><li>在浏览器支持 ES 模块之前，JavaScript 并没有提供原生机制让开发者以模块化的方式进行开发。这也正是我们对 “打包” 这个概念熟悉的原因：使用工具抓取、处理并将我们的源码模块串联成可以在浏览器中运行的文件。</li><li>时过境迁，我们见证了诸如 webpack、Rollup 和 Parcel 等工具的变迁，它们极大地改善了前端开发者的开发体验。</li><li><strong>然而，当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍。基于 JavaScript 开发的工具就会开始遇到性能瓶颈：通常需要很长时间（甚至是几分钟！）才能启动开发服务器，即使使用模块热替换（HMR），文件修改后的效果也需要几秒钟才能在浏览器中反映出来。如此循环往复，迟钝的反馈会极大地影响开发者的开发效率和幸福感。</strong></li><li>Vite 旨在利用生态系统中的新进展解决上述问题：浏览器开始原生支持 ES 模块，且越来越多 JavaScript 工具使用编译型语言编写。</li></ul></blockquote><p>webpack 的构建过程导致 webpack 的冷启动时间较长，js 的代码越多，构建的时间越长。而且 webpack 也无法修改造成这样结果的构建逻辑。</p><p>webpack 允许如下代码：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">import</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> { vue } </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">from</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;vue&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">; </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// es6 模块</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> lodash </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> require</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">&quot;lodash&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">); </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// commonjs 模块</span></span></code></pre></div><p>webpack 通过 ast 分析出所有 js 的 import 和 export 操作，最终 webpack 会编译为：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">((</span><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">function</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> (</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">modules</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) {</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    var</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> __webpack_require__</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> =</span><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> function</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> () {</span></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">        // ...</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    };</span></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">    // 读取配置</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    modules[entry](webpack_require);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}),</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">{</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;index.js&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: </span><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">function</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> (</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">webpack_require</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) {</span></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">        // ...</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    },</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">})();</span></span></code></pre></div><p>所以 webpack 支持多种模块化规范，所以在一开始需要统一模块化，因此要将所有依赖都处理一遍。</p><p>webpack 更关注的是<strong>兼容性</strong>。</p><p>而 Vite 则是先启动服务，再载入从 entry 开始所依赖到的模块，然后再编译，所以 Vite 的启动速度会比 webpack 快很多。</p><p>Vite 更关注的是浏览器端的<strong>开发体验</strong>。</p><h2 id="_3-vite-做了什么" tabindex="-1">3. Vite 做了什么？ <a class="header-anchor" href="#_3-vite-做了什么" aria-label="Permalink to &quot;3. Vite 做了什么？&quot;">​</a></h2><blockquote><p>创建一个项目</p></blockquote><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-qkpSe" id="tab-_cJWJI5" checked="checked"><label for="tab-_cJWJI5">index.html</label><input type="radio" name="group-qkpSe" id="tab-_578Fxb"><label for="tab-_578Fxb">index.js</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes monokai monokai has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">// ...</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&lt;</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">body</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&gt;</span></span>
<span class="line has-focus"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    &lt;</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">script</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> type</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">=</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">&quot;module&quot;</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> src</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">=</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">&quot;./index.js&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&gt;&lt;/</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">script</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&lt;/</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">body</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">// ...</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">import</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> lodash </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">from</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;lodash&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">console.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">log</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(lodash);</span></span></code></pre></div></div></div><p>打开浏览器就可以看到控制台报的错误：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes monokai monokai has-highlighted vp-code"><code><span class="line highlighted error"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">Uncaught TypeError: Failed to resolve </span><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">module</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;"> specifier</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;lodash&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">. </span></span>
<span class="line highlighted error"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Relative</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;"> references</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;"> must</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;"> start</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;"> with</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;"> either</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;/&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">, </span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">&quot;./&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">, </span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">or</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;../&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">. </span></span></code></pre></div><p>这个错误是说，不可导入非绝对路径和非相对路径。这是因为 ES 不知道 node_modules 路径，事实上 node_modules 中的依赖有可能成千上万，可能实际开发只引用了一个 vue 或 lodash， 但这些依赖可能还有更多子依赖，如果 ES 处理了一个 <code>import</code>，就将有可能发送成千上万的网络请求。</p><blockquote><p>使用 Vite</p></blockquote><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-2xbDi" id="tab-Cq4tEXz" checked="checked"><label for="tab-Cq4tEXz">bash</label><input type="radio" name="group-2xbDi" id="tab-OQG61CQ"><label for="tab-OQG61CQ">package.json</label><input type="radio" name="group-2xbDi" id="tab-6PApvXg"><label for="tab-6PApvXg">bash</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">npm</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> install</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> vite</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;"> -D</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes monokai monokai has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">{</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    &quot;scripts&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: {</span></span>
<span class="line has-focus"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        &quot;dev&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: </span><span style="--shiki-light:#CFCFC2;--shiki-dark:#CFCFC2;">&quot;vite&quot;</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    }</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">npm</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> run</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> dev</span></span></code></pre></div></div></div><p>打开浏览器，可以看到依赖正确载入了。可以看到，我没有配置任何东西，就可以直接使用了，因为 Vite 是开箱即用 (out of box) 的。</p>`,27),n=[e];function h(p,k,o,F,d,r){return a(),s("div",null,n)}const u=i(l,[["render",h]]);export{g as __pageData,u as default};
