import{_ as i,D as s,C as a,am as n}from"./chunks/framework.BDOtvRbC.js";const y=JSON.parse('{"title":"细说 apply、call、bind","description":"","frontmatter":{},"headers":[],"relativePath":"blog/dev_lang/javascript/细说 apply、call、bind.md","filePath":"blog/dev_lang/javascript/细说 apply、call、bind.md"}'),l={name:"blog/dev_lang/javascript/细说 apply、call、bind.md"},t=n(`<h1 id="细说-apply、call、bind" tabindex="-1">细说 apply、call、bind <a class="header-anchor" href="#细说-apply、call、bind" aria-label="Permalink to &quot;细说 apply、call、bind&quot;">​</a></h1><h2 id="apply-和-call-的区别" tabindex="-1">apply 和 call 的区别 <a class="header-anchor" href="#apply-和-call-的区别" aria-label="Permalink to &quot;apply 和 call 的区别&quot;">​</a></h2><p><code>apply</code> 和 <code>call</code> 是 JS 提供的两个方法，用来显示绑定 this。这两个方法的作用是一样的，都是用来改变函数的 this 指向。它们的区别在于传参的方式不同。</p><p><code>apply</code> 和 <code>call</code> 的第一个参数都是要绑定的 this 值，第二个参数开始是函数的参数。<code>apply</code> 的第二个参数是一个数组，<code>call</code> 的第二个参数是一个参数列表。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">function</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> foo</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">a</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">, </span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">b</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) {</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    console.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">log</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;">this</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">, a, b);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> obj </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">foo.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">apply</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(obj, [</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">1</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">, </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">2</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">]); </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// obj 1 2</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">foo.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">call</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(obj, </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">1</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">, </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">2</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">); </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// obj 1 2</span></span></code></pre></div><h2 id="为什么要引入新的-bind" tabindex="-1">为什么要引入新的 bind <a class="header-anchor" href="#为什么要引入新的-bind" aria-label="Permalink to &quot;为什么要引入新的 bind&quot;">​</a></h2><p><code>bind</code> 方法和 <code>apply</code>、<code>call</code> 作用一样，都是用来改变函数的 this 指向。不同的是 <code>bind</code> 方法返回的是对函数的引用，即一个新的函数,称为绑定函数 (bound function, BF)，而 <code>apply</code> 和 <code>call</code> 是立即执行函数。正是这个特性，<code>bind</code> 方法可以用来延迟执行函数，弥补了前二者的不足。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">function</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> foo</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">() {</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    console.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">log</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;">this</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> obj </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> {};</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> bar </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> foo.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">bind</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(obj); </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// 还没有执行 foo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">bar</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(); </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// obj，执行 foo</span></span></code></pre></div><p>而且 <code>bind</code> 还简化了调用传参。<code>bind</code> 方法的第一个参数是要绑定的 this 值，后面的参数是函数的参数。<code>bind</code> 方法返回一个新的函数，这个函数的 this 值是绑定的值，参数是传入的参数。即便 <code>bar</code> 执行时看上去是独立函数调用，但其实已经绑定了 <code>obj</code> 的</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>ECMA 称 BF 为怪异函数对象 (exotic function object)，就是因为看起来是独立函数调用，但其实已经绑定了 this。</p></div><h3 id="bind-的实现" tabindex="-1">bind 的实现 <a class="header-anchor" href="#bind-的实现" aria-label="Permalink to &quot;bind 的实现&quot;">​</a></h3><p><code>bind</code> 方法的实现并不复杂，主要是利用了闭包的特性。<code>bind</code> 方法的第一个参数是要绑定的 this 值，后面的参数是函数的参数。<code>bind</code> 方法返回一个新的函数，这个函数的 this 值是绑定的值，参数是传入的参数。</p><ol><li>判断 this 是否是函数，如果不是则抛出异常。</li><li>保存 this 和参数。</li><li>返回一个新的函数，这个函数的 this 是绑定的值，参数是传入的参数。</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Function</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">.prototype.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">bind</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> =</span><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> function</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> (</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">thisArg</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) {</span></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">    //thisArg 指向 obj</span></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">    if</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> (</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">typeof</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;"> this</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> !==</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;function&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) {</span></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">        throw</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> new</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> TypeError</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">&quot;Bind must be called on a function&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    }</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> fn </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;"> this</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">; </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// this 指向 foo</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> args </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> Array</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">.prototype.slice.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">call</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;">arguments</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">, </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">1</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">    return</span><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> function</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> () {</span></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">        return</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> fn.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">apply</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">            thisArg, </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// 不能是 this，否则指向 window</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">            args.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">concat</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Array</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">.prototype.slice.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">call</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;">arguments</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">))</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">        );</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    };</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">function</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> foo</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">a</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">, </span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">b</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) {</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    console.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">log</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;">this</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">, a, b);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> obj </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> {};</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> bar </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> foo.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">bind</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(obj, </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">1</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">bar</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">2</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">); </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// obj 1 2</span></span></code></pre></div>`,14),F=[t];function h(k,p,e,d,r,o){return a(),s("div",null,F)}const g=i(l,[["render",h]]);export{y as __pageData,g as default};
