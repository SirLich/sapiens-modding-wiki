import{_ as s,c as n,o as e,a}from"./app.60e89118.js";const m=JSON.parse('{"title":"Common Issues","description":"","frontmatter":{},"headers":[{"level":2,"title":"Confusing module.function with module:function","slug":"confusing-module-function-with-module-function"}],"relativePath":"guide/common-issues.md","lastUpdated":1655905998000}'),o={name:"guide/common-issues.md"},l=a(`<h1 id="common-issues" tabindex="-1">Common Issues <a class="header-anchor" href="#common-issues" aria-hidden="true">#</a></h1><p>This page covers a few common issues that you may face, when developing mods for Sapiens.</p><h2 id="confusing-module-function-with-module-function" tabindex="-1">Confusing module.function with module:function <a class="header-anchor" href="#confusing-module-function-with-module-function" aria-hidden="true">#</a></h2><p>In lua, you define a module like <code>local foo = {}</code>. Functions can then be defined like:</p><div class="language-lua"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">foo</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">bar</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arg1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"></span></code></pre></div><p>This is a shorthand for the longer form (don&#39;t use this except for shadows)</p><div class="language-lua"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">foo.bar </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arg1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"></span></code></pre></div><p>As you can see, there is a mysterious &#39;self&#39; argument getting passed around when using the <code>:</code> syntax. This roughly represents the current object (?).</p><p>Now imagine that you&#39;ve defined a function as in the first example, and then attempted to call it like this:</p><p><code>local value = foo.bar(&#39;baz&#39;)</code></p><p>This would be incorrect, since you&#39;ve essentially put &#39;baz&#39; for &#39;self&#39; and &#39;nil&#39; for &#39;arg1&#39;. The correct way to call it would be <code>local value = foo:bar(&#39;baz&#39;)</code>.</p>`,11),t=[l];function c(p,i,r,d,u,f){return e(),n("div",null,t)}var y=s(o,[["render",c]]);export{m as __pageData,y as default};