import{_ as l,c as t,J as s,al as a,E as i,o as h}from"./chunks/framework.tb-jXbfw.js";const u=JSON.parse('{"title":"二叉树基础","description":"","frontmatter":{},"headers":[],"relativePath":"blog/algorithm/binary_tree/二叉树基础.md","filePath":"blog/algorithm/binary_tree/二叉树基础.md"}'),k={name:"blog/algorithm/binary_tree/二叉树基础.md"},p=a(`<h1 id="二叉树基础" tabindex="-1">二叉树基础 <a class="header-anchor" href="#二叉树基础" aria-label="Permalink to &quot;二叉树基础&quot;">​</a></h1><p>树，是一种非线性的数据结构，能很好地描述数据的层次关系。</p><p>在现实中有很多树形结构的例子，比如公司的组织架构、文件系统、网页的 DOM 树、数据库的索引等。</p><p>二叉树是其中最常用的一种树形结构。一般遇到别的什么三叉树、四叉树的，也会转化为二叉树后再进行操作，因为二叉树的特性适合算法的设计。</p><h2 id="二叉树的性质" tabindex="-1">二叉树的性质 <a class="header-anchor" href="#二叉树的性质" aria-label="Permalink to &quot;二叉树的性质&quot;">​</a></h2><p>二叉树的每个节点最多有两个子节点，分别为左子节点和右子节点。左子节点和右子节点为根，分别成树，称为左子树和右子树。二叉树的第 i 层最多有 2^(i-1) 个节点。</p><h2 id="二叉树的类型" tabindex="-1">二叉树的类型 <a class="header-anchor" href="#二叉树的类型" aria-label="Permalink to &quot;二叉树的类型&quot;">​</a></h2><ul><li>满二叉树：每个节点都有 0 或 2 个子节点。</li><li>完全二叉树：除了最后一层，其他层的节点数都达到最大，且最后一层的节点<strong>都靠左排列</strong>。</li><li>平衡二叉树：左右子树的高度差不超过 1。</li><li>二叉搜索树：左子树上的所有节点的值都小于根节点的值，右子树上的所有节点的值都大于根节点的值。</li><li>二叉平衡搜索树：既是二叉搜索树，又是平衡二叉树。</li></ul><h2 id="二叉树的存储" tabindex="-1">二叉树的存储 <a class="header-anchor" href="#二叉树的存储" aria-label="Permalink to &quot;二叉树的存储&quot;">​</a></h2><p>二叉树的存储方式有两种：链式存储和顺序存储。</p><p>链式存储：每个节点有三个字段，分别为左子节点、右子节点和数据域。这种存储方式比较灵活，但是比较耗费内存。</p><p>顺序存储：用数组存储二叉树，根节点存储在下标为 1 的位置，左子节点存储在下标为 2i 的位置，右子节点存储在下标为 2i+1 的位置。这种存储方式比较节省内存，但是不够灵活。</p><h2 id="二叉树的遍历" tabindex="-1">二叉树的遍历 <a class="header-anchor" href="#二叉树的遍历" aria-label="Permalink to &quot;二叉树的遍历&quot;">​</a></h2><p>二叉树的遍历有两种方式：深度优先遍历和广度优先遍历。</p><ul><li>深度优先遍历 <ul><li>前序遍历：根节点 -&gt; 左子树 -&gt; 右子树</li><li>中序遍历：左子树 -&gt; 根节点 -&gt; 右子树</li><li>后序遍历：左子树 -&gt; 右子树 -&gt; 根节点</li></ul></li><li>广度优先遍历 <ul><li>层次遍历：从上到下，从左到右</li></ul></li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">class</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;"> TreeNode</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> {</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    constructor</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">value</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) {</span></span>
<span class="line"><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;">        this</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">.value </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> value;</span></span>
<span class="line"><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;">        this</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">.left </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;"> null</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;">        this</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">.right </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;"> null</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    }</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> root </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> new</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> TreeNode</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">1</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">root.left </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> new</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> TreeNode</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">2</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">root.right </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> new</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> TreeNode</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">3</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">root.left.left </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> new</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> TreeNode</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">4</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">root.left.right </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> new</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> TreeNode</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">5</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">root.right.left </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> new</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> TreeNode</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">6</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">root.right.right </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> new</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> TreeNode</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">7</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">);</span></span></code></pre></div>`,16),e=a(`<p>前序遍历</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">function</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> preOrder</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">root</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) {</span></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">    if</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> (root </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">===</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;"> null</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">return</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    console.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">log</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(root.value);</span></span>
<span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">    preOrder</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(root.left);</span></span>
<span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">    preOrder</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(root.right);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">preOrder</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(root); </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// 1 2 4 5 3 6 7</span></span></code></pre></div><p>中序遍历</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">function</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> inOrder</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">root</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) {</span></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">    if</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> (root </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">===</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;"> null</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">return</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">    inOrder</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(root.left);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    console.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">log</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(root.value);</span></span>
<span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">    inOrder</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(root.right);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">inOrder</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(root); </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// 4 2 5 1 6 3 7</span></span></code></pre></div><p>后序遍历</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">function</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> postOrder</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">root</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) {</span></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">    if</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> (root </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">===</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;"> null</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">return</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">    postOrder</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(root.left);</span></span>
<span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">    postOrder</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(root.right);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    console.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">log</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(root.value);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">postOrder</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(root); </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// 4 5 2 6 7 3 1</span></span></code></pre></div><p>层次遍历</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">function</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> levelOrder</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">root</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) {</span></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">    if</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> (root </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">===</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;"> null</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">return</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> queue </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> [root];</span></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">    while</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> (queue.length) {</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> node </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> queue.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">shift</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">();</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">        console.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">log</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(node.value);</span></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">        if</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> (node.left) queue.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">push</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(node.left);</span></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">        if</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> (node.right) queue.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">push</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(node.right);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    }</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">levelOrder</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(root); </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// 1 2 3 4 5 6 7</span></span></code></pre></div>`,8);function r(d,o,g,y,c,E){const n=i("auto-dark"),F=i("show-image");return h(),t("div",null,[s(n),p,s(F,{src:"/img/二叉树基础-1.png"}),e])}const f=l(k,[["render",r]]);export{u as __pageData,f as default};
