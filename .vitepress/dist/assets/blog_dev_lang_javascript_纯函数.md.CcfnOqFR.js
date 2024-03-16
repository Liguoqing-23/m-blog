import{_ as i,D as s,C as a,am as t}from"./chunks/framework.BDOtvRbC.js";const g=JSON.parse('{"title":"纯函数","description":"","frontmatter":{},"headers":[],"relativePath":"blog/dev_lang/javascript/纯函数.md","filePath":"blog/dev_lang/javascript/纯函数.md"}'),n={name:"blog/dev_lang/javascript/纯函数.md"},l=t(`<h1 id="纯函数" tabindex="-1">纯函数 <a class="header-anchor" href="#纯函数" aria-label="Permalink to &quot;纯函数&quot;">​</a></h1><div class="note custom-block github-alert"><p class="custom-block-title">Chapter 03: Pure Happiness with Pure Functions</p><p><a href="https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch03" target="_blank" rel="noreferrer">https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch03</a></p></div><p>纯函数 (Pure Function) 是指一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用。</p><p>纯函数的好处是，对于相同的输入，总会得到相同的输出，有利于简化测试和调试。纯函数的特性决定它可以缓存结果，以提高性能。</p><p>副作用 (side effect) 表示在执行一个函数时，除了返回函数值之外，还对外部产生了可观察的变化。比如修改了全局变量，修改了参数，修改了某个 I/O 设备。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// impure</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">let</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> minimum </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;"> 21</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> checkAge</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> =</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> (</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">age</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) </span><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">=&gt;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> age </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">&gt;=</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> minimum;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// pure</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> checkAge</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> =</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> (</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">age</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) </span><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">=&gt;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> {</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> minimum </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;"> 21</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">    return</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> age </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">&gt;=</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> minimum;</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">};</span></span></code></pre></div><blockquote><p>In the impure portion, checkAge depends on the mutable variable minimum to determine the result. In other words, it depends on system state which is disappointing because it increases the cognitive load by introducing an external environment.</p></blockquote><p>在纯函数中，函数的返回结果只依赖于它的参数，不依赖于外部环境。这样的函数不会对外部环境产生影响，也不会受外部环境的影响，因此也不会产生副作用。</p><h2 id="splice-和-slice" tabindex="-1">splice 和 slice <a class="header-anchor" href="#splice-和-slice" aria-label="Permalink to &quot;splice 和 slice&quot;">​</a></h2><p><code>splice</code> 和 <code>slice</code> 都能截取数组，但 <code>splice</code> 返回新数组的同时也会修改原有数组，而 <code>slice</code> 只返回新数组，不会对原有数组做任何操作。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> arr </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> [</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">1</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">, </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">2</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">, </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">3</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">, </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">4</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">, </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">5</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> arr1 </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> arr.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">slice</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">1</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">, </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">3</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">); </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// [2, 3]</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">console.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">log</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(arr); </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// [1, 2, 3, 4, 5]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> arr2 </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> arr.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">splice</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">1</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">, </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">3</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">); </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// [2, 3, 4]</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">console.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">log</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(arr); </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// [1, 5]</span></span></code></pre></div>`,11),F=[l];function h(k,e,p,r,d,c){return a(),s("div",null,F)}const y=i(n,[["render",h]]);export{g as __pageData,y as default};
