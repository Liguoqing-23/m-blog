import{_ as F,c as h,J as s,w as n,al as t,E as i,o as k,a as d}from"./chunks/framework.tb-jXbfw.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"blog/algorithm/index.md","filePath":"blog/algorithm/index.md"}'),o={name:"blog/algorithm/index.md"},r=t(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// rollup.config.js</span></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">import</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> { fileURLToPath } </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">from</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;node:url&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">export</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> default</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> {</span></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">    //...,</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    external: [</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">        &quot;some-externally-required-library&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">        fileURLToPath</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">            new</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> URL</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">                &quot;src/some-local-file-that-should-not-be-bundled.js&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">                import</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">.meta.url</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">            )</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">        ),</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">        /node_modules/</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    ],</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">};</span></span></code></pre></div>`,1),c=t(`<div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-BseNn" id="tab-089wmjF" checked="checked"><label for="tab-089wmjF">config.js</label><input type="radio" name="group-BseNn" id="tab-Fo0IUVk"><label for="tab-Fo0IUVk">config.ts</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">/**</span></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;"> * </span><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">@type</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;"> {import(&#39;vitepress&#39;).UserConfig}</span></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;"> */</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> config </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> {</span></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">export</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> default</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> config;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">import</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> type</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> { UserConfig } </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">from</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;vitepress&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> config</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">:</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;"> UserConfig</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> =</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> {</span></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">export</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> default</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> config;</span></span></code></pre></div></div></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"># ComA 我是ComA \`\`\`vue</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&lt;</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">template</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    &lt;</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">div</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&gt;{{ msg }}&lt;/</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">div</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&lt;/</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">template</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&lt;</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">script</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> setup</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> msg </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;我是ComA组件&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&lt;/</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">script</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&gt;</span></span></code></pre></div>`,2);function g(y,a,m,u,_,E){const l=i("auto-dark"),p=i("q-btn"),e=i("q-card");return k(),h("div",null,[r,s(l),s(e,{class:"q-pa-md",bordered:"",flat:""},{default:n(()=>[s(p,{color:"primary",onClick:a[0]||(a[0]=()=>console.log(123))},{default:n(()=>[d("Hello Quasar")]),_:1})]),_:1}),c])}const b=F(o,[["render",g]]);export{f as __pageData,b as default};
