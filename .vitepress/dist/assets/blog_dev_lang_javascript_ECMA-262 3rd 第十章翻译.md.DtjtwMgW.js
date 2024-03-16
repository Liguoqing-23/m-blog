import{_ as i,D as e,C as a,am as s}from"./chunks/framework.BDOtvRbC.js";const u=JSON.parse('{"title":"ECMA-262 3rd 第十章翻译","description":"","frontmatter":{},"headers":[],"relativePath":"blog/dev_lang/javascript/ECMA-262 3rd 第十章翻译.md","filePath":"blog/dev_lang/javascript/ECMA-262 3rd 第十章翻译.md"}'),t={name:"blog/dev_lang/javascript/ECMA-262 3rd 第十章翻译.md"},n=s(`<h1 id="ecma-262-3rd-第十章翻译" tabindex="-1">ECMA-262 3rd 第十章翻译 <a class="header-anchor" href="#ecma-262-3rd-第十章翻译" aria-label="Permalink to &quot;ECMA-262 3rd 第十章翻译&quot;">​</a></h1><h2 id="execution-contexts-执行上下文" tabindex="-1">Execution Contexts 执行上下文 <a class="header-anchor" href="#execution-contexts-执行上下文" aria-label="Permalink to &quot;Execution Contexts 执行上下文&quot;">​</a></h2><p>When control is transferred to ECMAScript executable code, control is entering an execution context. Active execution contexts logically form a stack. The top execution context on this logical stack is the running execution context.</p><p>当控制器转换到 ECMAScript 可执行代码时，控制器进入了一个执行上下文 (EC)。活动执行上下文在逻辑上形成了一个栈。这个逻辑栈顶的执行上下文是正在运行的执行上下文。</p><h2 id="definitions-定义" tabindex="-1">Definitions 定义 <a class="header-anchor" href="#definitions-定义" aria-label="Permalink to &quot;Definitions 定义&quot;">​</a></h2><h3 id="function-objects-函数对象" tabindex="-1">Function Objects 函数对象 <a class="header-anchor" href="#function-objects-函数对象" aria-label="Permalink to &quot;Function Objects 函数对象&quot;">​</a></h3><p>There are two types of Function objects:</p><ul><li>Program functions are defined in source text by a <em>FunctionDeclaration</em> or created dynamically either by using a FunctionExpression or by using the built-in Function object as a constructor.</li><li>Internal functions are built-in objects of the language, such as parseInt and Math.exp. An implementation may also provide implementation-dependent internal functions that are not described in this specification. These functions do not contain executable code defined by the ECMAScript grammar, so they are excluded from this discussion of execution contexts.</li></ul><p>有两种类型的函数对象：</p><ul><li>程序中的函数是通过函数声明 FunctionDeclaration 在源代码中定义的，以及通过使用函数表达式 FunctionExpression 或使用内置的 Function 对象作为构造函数动态创建的。</li><li>内置函数是语言内置的对象，例如 <code>parseInt</code> 和 <code>Math.exp</code>。实现可能还提供了不在本规范中描述的依赖于实现的内置函数。这些函数不包含由 ECMAScript 语法定义的可执行代码，因此它们不在执行上下文的讨论范围内。</li></ul><h3 id="types-of-executable-code-可执行代码的类型" tabindex="-1">Types of Executable Code 可执行代码的类型 <a class="header-anchor" href="#types-of-executable-code-可执行代码的类型" aria-label="Permalink to &quot;Types of Executable Code 可执行代码的类型&quot;">​</a></h3><p>There are three types of ECMAScript executable code:</p><ul><li>Global code is source text that is treated as an ECMAScript Program. The global code of a particular Program does not include any source text that is parsed as part of a FunctionBody.</li><li>Eval code is the source text supplied to the built-in eval function. More precisely, if the parameter to the built-in eval function is a string, it is treated as an ECMAScript Program. The eval code for a particular invocation of eval is the global code portion of the string parameter.</li><li>Function code is source text that is parsed as part of a FunctionBody. The function code of a particular FunctionBody does not include any source text that is parsed as part of a nested FunctionBody. Function code also denotes the source text supplied when using the built-in Function object as a constructor. More precisely, the last parameter provided to the Function constructor is converted to a string and treated as the FunctionBody. If more than one parameter is provided to the Function constructor, all parameters except the last one are converted to strings and concatenated together, separated by commas. The resulting string is interpreted as the FormalParameterList for the FunctionBody defined by the last parameter. The function code for a particular instantiation of a Function does not include any source text that is parsed as part of a nested FunctionBody.</li></ul><p>有三种 ECMAScript 可执行代码：</p><ul><li>全局代码 Global code，被视为 ECMAScript 程序的源代码。一个特定程序的全局代码不包括任何可被解析为函数体 FunctionBody 的源代码。</li><li>求值代码 Eval code，是提供给内置的 eval 函数的源代码。更准确地说，如果内置的 eval 函数的参数是一个字符串，则它就被视为一个 ECMAScript 程序。一个特定 <code>eval</code> 调用的求值代码是字符串参数的全局代码部分。</li><li>函数代码 Function code，是作为函数体 FunctionBody 的一部分解析的源代码。一个特定函数体的函数代码不包括任何可被解析为嵌套函数体 FunctionBody 的源代码。函数代码还表示使用内置的 Function 对象作为构造函数时提供的源代码。更准确地说，提供给 Function 构造函数的最后一个参数被转换为字符串，并被视为 FunctionBody。如果 Function 构造函数提供了多个参数，除了最后一个参数外，所有参数都被转换为字符串并连接在一起，用逗号分隔。结果字符串被解释为由最后一个参数定义的 FunctionBody 的形参列表 FormalParameterList。一个特定 Function 实例化的函数代码不包括任何可被解析为嵌套函数体 FunctionBody 的源代码。</li></ul><div class="note custom-block github-alert"><p class="custom-block-title">解释</p><p></p><ol><li>在 JavaScript 中，全局代码指的是整个程序的顶层代码，不包括任何函数体内部的代码。换句话说，全局代码是作为 ECMAScript 程序（ECMAScript Program）处理的源代码，而函数体内的代码则不属于全局代码。</li><li>永远不要使用 eval！<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_direct_eval!" target="_blank" rel="noreferrer">查看为什么</a></li><li>函数代码是函数体的一部分，但不包括任何被解析为嵌套函数体的源代码。</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">var</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> outerFunction </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> new</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> Function</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;a&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;var innerFunction = function(b) { return a + b; };&quot;</span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;"> +</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">        &quot;return innerFunction;&quot;</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">var</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> innerFunction </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> outerFunction</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">10</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">console.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">log</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">innerFunction</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">20</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">)); </span><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// 输出 30</span></span></code></pre></div></div><h3 id="variable-instantiation-变量实例化" tabindex="-1">Variable Instantiation 变量实例化 <a class="header-anchor" href="#variable-instantiation-变量实例化" aria-label="Permalink to &quot;Variable Instantiation 变量实例化&quot;">​</a></h3><p>Every execution context has associated with it a variable object. Variables and functions declared in the source text are added as properties of the variable object. For function code, parameters are added as properties of the variable object.</p><p>Which object is used as the variable object and what attributes are used for the properties depends on the type of code, but the remainder of the behaviour is generic. On entering an execution context, the properties are bound to the variable object in the following order:</p><ul><li>For function code: for each formal parameter, as defined in the FormalParameterList, create a property of the variable object whose name is the Identifier and whose attributes are determined by the type of code. The values of the parameters are supplied by the caller as arguments to <code>[[Call]]</code>. If the caller supplies fewer parameter values than there are formal parameters, the extra formal parameters have value undefined. If two or more formal parameters share the same name, hence the same property, the corresponding property is given the value that was supplied for the last parameter with this name. If the value of this last parameter was not supplied by the caller, the value of the corresponding property is undefined.</li><li>For each FunctionDeclaration in the code, in source text order, create a property of the variable object whose name is the Identifier in the FunctionDeclaration, whose value is the result returned by creating a Function object as described in 13, and whose attributes are determined by the type of code. If the variable object already has a property with this name, replace its value and attributes. Semantically, this step must follow the creation of FormalParameterList properties.</li><li>For each VariableDeclaration or VariableDeclarationNoIn in the code, create a property of the variable object whose name is the Identifier in the VariableDeclaration or VariableDeclarationNoIn, whose value is undefined and whose attributes are determined by the type of code. If there is already a property of the variable object with the name of a declared variable, the value of the property and its attributes are not changed. Semantically, this step must follow the creation of the FormalParameterList and FunctionDeclaration properties. In particular, if a declared variable has the same name as a declared function or formal parameter, the variable declaration does not disturb the existing property.</li></ul><p>每个 EC 都有一个与之关联的变量对象 VO。在源代码中声明的变量和函数会被添加为 VO 的属性。对于函数代码，参数被添加为 VO 的属性。</p><p>使用哪个对象作为变量对象，以及属性使用时的特性取决于代码的类型，但是行为的其余部分是通用的。进入执行上下文时，属性按以下顺序绑定到变量对象：</p><ul><li>对于函数代码：对于每个形参，如在形参列表中定义的，则创建一个变量对象的属性，其名称是 Identifier，其属性的特性由代码的类型决定。形参的值由调用者作为参数传递给 <code>[[Call]]</code>。如果调用者提供的参数值少于形参的数量，则多余的形参值为 undefined。如果两个或更多的形参重名，因而具有相同的属性，相应的属性会被被赋予最后一个具有此名称的参数提供的值。如果最后一个参数的值未被调用者提供，则相应属性的值为 undefined。</li><li>对于代码中的每个 FunctionDeclaration，按源文本顺序，创建一个变量对象的属性，其名称是 FunctionDeclaration 中的 Identifier，其值是创建一个函数对象的结果，并且其属性由代码的类型决定。如果变量对象已经有一个具有此名称的属性，则替换其值和属性。语义上，此步骤必须紧随在创建 FormalParameterList 属性之后进行。</li><li>对于代码中的每个变量声明 VariableDeclaration 或没有在循环中使用的变量声明 VariableDeclarationNoIn，创建一个变量对象的属性，其名称是 VariableDeclaration 或 VariableDeclarationNoIn 中的 Identifier，其值为 undefined，其属性由代码的类型决定。如果变量对象已经有一个具有已声明变量名称的属性，则不更改属性的值和属性。语义上，此步骤必须紧随在创建 FormalParameterList 和 FunctionDeclaration 属性之后进行。特别是，如果已声明的变量与已声明的函数或形参具有相同的名称，则变量声明不会影响现有的属性。</li></ul><div class="note custom-block github-alert"><p class="custom-block-title">总结</p><p></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">FormalParameterList </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">-&gt;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> VO {</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;Identifier1&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: value1,</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;Identifier2&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: value2,</span></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">FunctionDeclaration </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">-&gt;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> VO {</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;Identifier1&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: FunctionObject1,</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;Identifier2&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: FunctionObject2,</span></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">VariableDeclaration </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">-&gt;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> VO {</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;Identifier1&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">undefined</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;Identifier2&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">undefined</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">VariableDeclarationNoIn </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">-&gt;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> VO {</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;Identifier1&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">undefined</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;Identifier2&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">undefined</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}</span></span></code></pre></div></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes monokai monokai vp-code"><code><span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">function</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> exampleFunc</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">param1</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">, </span><span style="--shiki-light:#FD971F;--shiki-dark:#FD971F;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">param2</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">) {</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> localVar1 </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;LocalVar1&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> localVar2 </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;LocalVar2&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    function</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> innerFunc</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">() {</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">        console.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">log</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">&quot;Inner Function&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    }</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    console.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">log</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">&quot;Function Body&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> globalVar </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;GlobalVar&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">exampleFunc</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">&quot;Param1Value&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">, </span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">&quot;Param2Value&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">function</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> anotherFunc</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">() {</span></span>
<span class="line"><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    const</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;"> localVar3 </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">=</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;"> &quot;LocalVar3&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    console.</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">log</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">&quot;Another Function&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;">anotherFunc</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// EC VO</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#88846F;--shiki-dark:#88846F;">// Global Execution Context</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">VO {</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;exampleFunc&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: &lt;</span><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">exampleFunc</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> reference</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&gt;,</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    &quot;globalVar&quot;: undefined,</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">    &quot;anotherFunc&quot;: &lt;</span><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">anotherFunc</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> reference</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">// exampleFunc Execution Context</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">VO </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">{</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;param1&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: </span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">&quot;Param1Value&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;param2&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: </span><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">&quot;Param2Value&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;localVar1&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">undefined</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;localVar2&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">undefined</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;innerFunc&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: &lt;</span><span style="--shiki-light:#66D9EF;--shiki-dark:#66D9EF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">innerFunc</span><span style="--shiki-light:#A6E22E;--shiki-dark:#A6E22E;"> reference</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">// anotherFunc Execution Context</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">VO </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">{</span></span>
<span class="line"><span style="--shiki-light:#E6DB74;--shiki-dark:#E6DB74;">    &quot;localVar3&quot;</span><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">: </span><span style="--shiki-light:#AE81FF;--shiki-dark:#AE81FF;">undefined</span></span>
<span class="line"><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">// innerFunc Execution Context</span></span>
<span class="line"><span style="--shiki-light:#F8F8F2;--shiki-dark:#F8F8F2;">VO </span><span style="--shiki-light:#F92672;--shiki-dark:#F92672;">{}</span></span></code></pre></div><h3 id="scope-chain-and-identifier-resolution-作用域链和标识符解析" tabindex="-1">Scope Chain and Identifier Resolution 作用域链和标识符解析 <a class="header-anchor" href="#scope-chain-and-identifier-resolution-作用域链和标识符解析" aria-label="Permalink to &quot;Scope Chain and Identifier Resolution 作用域链和标识符解析&quot;">​</a></h3><p>Every execution context has associated with it a scope chain. A scope chain is a list of objects that are searched when evaluating an Identifier. When control enters an execution context, a scope chain is created and populated with an initial set of objects, depending on the type of code. During execution within an execution context, the scope chain of the execution context is affected only by with statements (see 12.10) and catch clauses (see 12.14).</p><p>During execution, the syntactic production PrimaryExpression : Identifier is evaluated using the following algorithm:</p><ol><li>Get the next object in the scope chain. If there isn&#39;t one, go to step 5.</li><li>Call the <code>[[HasProperty]]</code> method of Result(1), passing the Identifier as the property name.</li><li>If Result(2) is true, return a value of type Reference whose base object is Result(1) and whose property name is the Identifier.</li><li>Go to step 1.</li><li>Return a value of type Reference whose base object is null and whose property name is the Identifier.</li></ol><p>The result of evaluating an identifier is always a value of type Reference with its member name component equal to the identifier string.</p><h3 id="global-object" tabindex="-1">Global Object <a class="header-anchor" href="#global-object" aria-label="Permalink to &quot;Global Object&quot;">​</a></h3><p>There is a unique global object (15.1), which is created before control enters any execution context. Initially the global object has the following properties:</p><ul><li>Built-in objects such as Math, String, Date, parseInt, etc. These have attributes <code>{ DontEnum }</code>.</li><li>Additional host defined properties. This may include a property whose value is the global object itself; for example, in the HTML document object model the window property of the global object is the global object itself. As control enters execution contexts, and as ECMAScript code is executed, additional properties may be added to the global object and the initial properties may be changed.</li></ul><h3 id="activation-object" tabindex="-1">Activation Object <a class="header-anchor" href="#activation-object" aria-label="Permalink to &quot;Activation Object&quot;">​</a></h3><p>When control enters an execution context for function code, an object called the activation object is created and associated with the execution context. The activation object is initialised with a property with name arguments and attributes <code>{ DontDelete }</code>. The initial value of this property is the arguments object described below.</p><p>The activation object is then used as the variable object for the purposes of variable instantiation.</p><p>The activation object is purely a specification mechanism. It is impossible for an ECMAScript program to access the activation object. It can access members of the activation object, but not the activation object itself. When the call operation is applied to a Reference value whose base object is an activation object, null is used as the this value of the call.</p><h3 id="this" tabindex="-1">This <a class="header-anchor" href="#this" aria-label="Permalink to &quot;This&quot;">​</a></h3><p>There is a this value associated with every active execution context. The this value depends on the caller and the type of code being executed and is determined when control enters the execution context. The this value associated with an execution context is immutable.</p><h3 id="arguments-object" tabindex="-1">Arguments Object <a class="header-anchor" href="#arguments-object" aria-label="Permalink to &quot;Arguments Object&quot;">​</a></h3><p>When control enters an execution context for function code, an arguments object is created and initialised as follows:</p><ul><li>The value of the internal <code>[[Prototype]]</code> property of the arguments object is the original Object prototype object, the one that is the initial value of Object.prototype (see 15.2.3.1).</li><li>A property is created with name callee and property attributes <code>{ DontEnum }</code>. The initial value of this property is the Function object being executed. This allows anonymous functions to be recursive.</li><li>A property is created with name length and property attributes <code>{ DontEnum }</code>. The initial value of this property is the number of actual parameter values supplied by the caller.</li><li>For each non-negative integer, arg, less than the value of the length property, a property is created with name ToString(arg) and property attributes <code>{ DontEnum }</code>. The initial value of this property is the value of the corresponding actual parameter supplied by the caller. The first actual parameter value corresponds to arg = 0, the second to arg = 1, and so on. In the case when arg is less than the number of formal parameters for the Function object, this property shares its value with the corresponding property of the activation object. This means that changing this property changes the corresponding property of the activation object and vice versa.</li></ul><h2 id="entering-an-execution-context" tabindex="-1">Entering An Execution Context <a class="header-anchor" href="#entering-an-execution-context" aria-label="Permalink to &quot;Entering An Execution Context&quot;">​</a></h2><p>Every function and constructor call enters a new execution context, even if a function is calling itself recursively. Every return exits an execution context. A thrown exception, if not caught, may also exit one or more execution contexts.</p><p>When control enters an execution context, the scope chain is created and initialised, variable instantiation is performed, and the this value is determined.</p><p>The initialisation of the scope chain, variable instantiation, and the determination of the this value depend on the type of code being entered.</p><h3 id="global-code" tabindex="-1">Global Code <a class="header-anchor" href="#global-code" aria-label="Permalink to &quot;Global Code&quot;">​</a></h3><ul><li>The scope chain is created and initialised to contain the global object and no others.</li><li>Variable instantiation is performed using the global object as the variable object and using property attributes <code>{ DontDelete }</code>.</li><li>The this value is the global object.</li></ul><h3 id="eval-code" tabindex="-1">Eval Code <a class="header-anchor" href="#eval-code" aria-label="Permalink to &quot;Eval Code&quot;">​</a></h3><p>When control enters an execution context for eval code, the previous active execution context, referred to as the calling context, is used to determine the scope chain, the variable object, and the this value. If there is no calling context, then initialising the scope chain, variable instantiation, and determination of the this value are performed just as for global code.</p><ul><li>The scope chain is initialised to contain the same objects, in the same order, as the calling context&#39;s scope chain. This includes objects added to the calling context&#39;s scope chain by with statements and catch clauses.</li><li>Variable instantiation is performed using the calling context&#39;s variable object and using empty property attributes.</li><li>The this value is the same as the this value of the calling context.</li></ul><h3 id="function-code" tabindex="-1">Function Code <a class="header-anchor" href="#function-code" aria-label="Permalink to &quot;Function Code&quot;">​</a></h3><ul><li>The scope chain is initialised to contain the activation object followed by the objects in the scope chain stored in the <code>[[Scope]]</code> property of the Function object.</li><li>Variable instantiation is performed using the activation object as the variable object and using property attributes <code>{ DontDelete }</code>.</li><li>The caller provides the this value. If the this value provided by the caller is not an object (note that null is not an object), then the this value is the global object.</li></ul>`,53),l=[n];function o(h,r,p,c,F,d){return a(),e("div",null,l)}const g=i(t,[["render",o]]);export{u as __pageData,g as default};
