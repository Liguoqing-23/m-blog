import{_ as d,c,m as e,J as s,w as i,al as n,E as a,o as F,a as t}from"./chunks/framework.tb-jXbfw.js";const x=JSON.parse('{"title":"VitePress 集成 Quasar","description":"","frontmatter":{},"headers":[],"relativePath":"blog/static_site_generator/vitepress/index.md","filePath":"blog/static_site_generator/vitepress/index.md"}'),u={name:"blog/static_site_generator/vitepress/index.md"},g=n('<h1 id="vitepress-集成-quasar" tabindex="-1">VitePress 集成 Quasar <a class="header-anchor" href="#vitepress-集成-quasar" aria-label="Permalink to &quot;VitePress 集成 Quasar&quot;">​</a></h1><h2 id="安装-vitepress" tabindex="-1">安装 VitePress <a class="header-anchor" href="#安装-vitepress" aria-label="Permalink to &quot;安装 VitePress&quot;">​</a></h2><p>前置准备</p><ul><li><a href="https://nodejs.org/en" target="_blank" rel="noreferrer">Node.js</a> 18 及以上版本。</li></ul><p>VitePress 可以单独使用，也可以安装到现有项目中。在这两种情况下，都可以使用以下方式安装它：</p>',5),m={class:"vp-code-group vp-adaptive-theme"},_=n('<div class="tabs"><input type="radio" name="group-86g6A" id="tab-5qxpueK" checked="checked"><label for="tab-5qxpueK">npm</label><input type="radio" name="group-86g6A" id="tab-F1Jwtw8"><label for="tab-F1Jwtw8">yarn</label></div>',1),y={class:"blocks"},v=n('<div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">npm</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> install</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;"> -D</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> vitepress</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">yarn</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> add</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;"> -D</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> vitepress</span></span></code></pre></div>',2),E=n(`<h2 id="执行-vitepress-安装向导" tabindex="-1">执行 VitePress 安装向导 <a class="header-anchor" href="#执行-vitepress-安装向导" aria-label="Permalink to &quot;执行 VitePress 安装向导&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">npx</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> vitepress</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> init</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span>┌  Welcome to VitePress!</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Where should VitePress initialize the config?</span></span>
<span class="line"><span>│  ./src</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Site title:</span></span>
<span class="line"><span>│  My Awesome Project</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Site description:</span></span>
<span class="line"><span>│  A VitePress Site</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◆  Theme:</span></span>
<span class="line"><span>│  ● Default Theme (Out of the box, good-looking docs)</span></span>
<span class="line"><span>│  ○ Default Theme + Customization</span></span>
<span class="line"><span>│  ○ Custom Theme</span></span>
<span class="line"><span>└</span></span></code></pre></div><h2 id="组织文件结构" tabindex="-1">组织文件结构 <a class="header-anchor" href="#组织文件结构" aria-label="Permalink to &quot;组织文件结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ src</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  ├─ theme</span></span>
<span class="line"><span>│  │  │  ├─ custom.css</span></span>
<span class="line"><span>│  │  │  └─ index.ts</span></span>
<span class="line"><span>│  │  └─ config.js</span></span>
<span class="line"><span>│  ├─ HelloQuasar.md</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div><h2 id="集成-quasar" tabindex="-1">集成 Quasar <a class="header-anchor" href="#集成-quasar" aria-label="Permalink to &quot;集成 Quasar&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">npm</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> install</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;"> -D</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> vue</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> quasar</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> @quasar/extras</span></span></code></pre></div><h2 id="配置-quasar" tabindex="-1">配置 Quasar <a class="header-anchor" href="#配置-quasar" aria-label="Permalink to &quot;配置 Quasar&quot;">​</a></h2><ul><li>Quasar 文档 <a href="https://quasar.dev/start/vite-plugin#installation" target="_blank" rel="noreferrer">https://quasar.dev/start/vite-plugin#installation</a></li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group--_AS2" id="tab-T36ynli" checked="checked"><label for="tab-T36ynli">.vitepress / theme / index.ts</label><input type="radio" name="group--_AS2" id="tab-b-erLm7"><label for="tab-b-erLm7">.vitepress / theme / custom.css</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes monokai monokai has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">import</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> type</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> { Theme } </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">from</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;vitepress&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">import</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> DefaultTheme </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">from</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;vitepress/theme&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line has-focus"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">import</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> { Quasar } </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">from</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;quasar&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">; </span></span>
<span class="line has-focus"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">import</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;./custom.css&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">; </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">export</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> default</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> {</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    extends: DefaultTheme,</span></span>
<span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">    enhanceApp</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">({ </span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">app</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">        // @ts-ignore</span></span>
<span class="line has-focus"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">        app.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">use</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(Quasar, {}, { req: { headers: {} } }); </span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    },</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">} </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">satisfies</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;"> Theme</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes monokai monokai has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">/* Import Quasar css */</span></span>
<span class="line has-focus"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">@import</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;quasar/dist/quasar.css&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">; </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">/* Import icon libraries */</span></span>
<span class="line has-focus"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">@import</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;@quasar/extras/material-icons/material-icons.css&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">; </span></span></code></pre></div></div></div><h2 id="使用-quasar-组件" tabindex="-1">使用 Quasar 组件 <a class="header-anchor" href="#使用-quasar-组件" aria-label="Permalink to &quot;使用 Quasar 组件&quot;">​</a></h2><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Hello Quasar</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&lt;</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">q-btn</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> color</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">=</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">&quot;primary&quot;</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> label</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">=</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">&quot;Hello Quasar&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> /&gt;</span></span></code></pre></div><h2 id="最终效果" tabindex="-1">最终效果 <a class="header-anchor" href="#最终效果" aria-label="Permalink to &quot;最终效果&quot;">​</a></h2>`,13);function b(q,f,D,A,B,T){const p=a("auto-dark"),l=a("q-card-title"),h=a("q-card-main"),o=a("q-card-section"),r=a("q-card"),k=a("q-btn");return F(),c("div",null,[g,e("div",m,[_,e("div",y,[v,s(p),s(r,{class:"mb-shadow"},{default:i(()=>[s(o,null,{default:i(()=>[s(l,null,{default:i(()=>[t("提示")]),_:1}),s(h,null,{default:i(()=>[t(" 如果你的项目使用了 Vite，你可以使用 VitePress 的 Vite 插件。 ")]),_:1})]),_:1})]),_:1})])]),E,s(k,{color:"primary",label:"Hello Quasar"})])}const C=d(u,[["render",b]]);export{x as __pageData,C as default};