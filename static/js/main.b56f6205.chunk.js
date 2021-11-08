(this["webpackJsonphooks-snake-game"]=this["webpackJsonphooks-snake-game"]||[]).push([[0],{17:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),a=n(12),s=n.n(a),r=(n(17),function(t,e){for(var n=function(){var n=Math.floor(Math.random()*(t-1-1))+1,c=Math.floor(Math.random()*(t-1-1))+1;if(!e.some((function(t){return t.x===n&&t.y===c})))return{v:{x:n,y:c}}};;){var c=n();if("object"===typeof c)return c.v}}),o=function(t,e){for(var n=[],c=0;c<t;c++){var i=new Array(t).fill("");n.push(i)}n[e.y][e.x]="snake";var a=r(t,[e]);return n[a.y][a.x]="food",n},u={x:17,y:17},l=o(35,u),d=[1e3,500,100,50,10],b=Object.freeze({init:"init",playing:"playing",suspended:"suspended",gameover:"gameover"}),f=Object.freeze({up:"up",right:"right",left:"left",down:"down"}),j=Object.freeze({37:f.left,38:f.up,39:f.right,40:f.down}),h=Object.freeze({up:"down",right:"left",left:"right",down:"up"}),O=Object.freeze({up:{x:0,y:-1},right:{x:1,y:0},left:{x:-1,y:0},down:{x:0,y:1}}),m=n(0),v=function(t){var e=t.length,n=t.difficulty,c=void 0===n?3:n,i=t.onChangeDifficulty,a=c<d.length?"":"is-hidden",s=c>1?"":"is-hidden";return Object(m.jsxs)("div",{className:"navigation",children:[Object(m.jsxs)("div",{className:"navigation-item",children:[Object(m.jsx)("span",{className:"navigation-label",children:"Length:"}),Object(m.jsx)("div",{className:"navigation-item-number-cotainer",children:Object(m.jsx)("div",{className:"num-board",children:e})})]}),Object(m.jsxs)("div",{className:"navigation-item",children:[Object(m.jsx)("span",{className:"navigation-lable",children:"Difficulty:"}),Object(m.jsxs)("div",{className:"navigation-item-number-container",children:[Object(m.jsx)("span",{className:"num-board",children:c}),Object(m.jsxs)("div",{className:"difficulty-button-container",children:[Object(m.jsx)("div",{className:"difficulty-button difficulty-up".concat(a),onClick:function(){return i(c+1)}}),Object(m.jsx)("div",{className:"difficulty-button difficulty-down".concat(s),onClick:function(){return i(c-1)}})]})]})]})]})},x=function(t){var e=t.fields;return Object(m.jsx)("div",{className:"field",children:e.map((function(t){return t.map((function(t){return Object(m.jsx)("div",{className:"dots ".concat(t)})}))}))})},p=function(t){var e=t.status,n=t.onStart,c=t.onStop,i=t.onRestart;return Object(m.jsxs)("div",{className:"button",children:[e===b.gameover&&Object(m.jsx)("button",{className:"btn btn-gameover",onClick:i,children:"gameover"}),e===b.init&&Object(m.jsx)("button",{className:"btn btn-init",onClick:n,children:"start"}),e===b.suspended&&Object(m.jsx)("button",{className:"btn btn-suspended",onClick:n,children:"start"}),e===b.playing&&Object(m.jsx)("button",{className:"btn btn-playing",onClick:c,children:"stop"})]})},g=n(5),y=n(7),N=function(t){var e=t.onChange;return Object(m.jsxs)("div",{className:"manipulation-panel",children:[Object(m.jsx)("button",{className:"manipulation-btn btn btn-left",onClick:function(){return e(f.left)},children:Object(m.jsx)(g.a,{icon:y.b})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"manipulation-btn btn btn-up",onClick:function(){return e(f.up)},children:Object(m.jsx)(g.a,{icon:y.d})}),Object(m.jsx)("button",{className:"manipulation-btn btn btn-down",onClick:function(){return e(f.down)},children:Object(m.jsx)(g.a,{icon:y.a})})]}),Object(m.jsx)("button",{className:"manipulation-btn btn btn-rifht",onClick:function(){return e(f.right)},children:Object(m.jsx)(g.a,{icon:y.c})})]})},k=n(11),C=n(3),w=null,S=function(){w&&clearInterval(w)},D=function(){var t=Object(c.useState)(l),e=Object(C.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)([]),s=Object(C.a)(a,2),m=s[0],v=s[1],x=Object(c.useState)(b.init),p=Object(C.a)(x,2),g=p[0],y=p[1],N=Object(c.useState)(f.up),D=Object(C.a)(N,2),E=D[0],z=D[1],I=Object(c.useState)(3),L=Object(C.a)(I,2),M=L[0],F=L[1],A=Object(c.useState)(0),B=Object(C.a)(A,2),J=B[0],P=B[1];Object(c.useEffect)((function(){return v([u]),w=setInterval((function(){P((function(t){return t+1}))}),d[M-1]),S}),[M]),Object(c.useEffect)((function(){0!==m.length&&g===b.playing&&(G()||(S(),y(b.gameover)))}),[J]);var R=Object(c.useCallback)((function(t){g===b.playing&&h[E]!==t&&z(t)}),[E,g]),T=Object(c.useCallback)((function(t){g===b.init&&(t<1||t>d.length||F(t))}),[g]);Object(c.useEffect)((function(){var t=function(t){var e=j[t.keyCode];e&&R(e)};return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[R]);var G=function(){var t=m[0],e=t.x,c=t.y,a=O[E],s={x:e+a.x,y:c+a.y};if(function(t,e){return e.y<0||e.x<0||e.y>t-1||e.x>t-1}(n.length,s)||function(t,e){return"snake"===t[e.y][e.x]}(n,s))return!1;var o=Object(k.a)(m);if("food"!==n[s.y][s.x]){var u=o.pop();n[u.y][u.x]=""}else{var l=r(n.length,[].concat(Object(k.a)(o),[s]));n[l.y][l.x]="food"}return n[s.y][s.x]="snake",o.unshift(s),v(o),i(n),!0};return{body:m,difficulty:M,fields:n,status:g,start:function(){return y(b.playing)},stop:function(){return y(b.suspended)},reload:function(){w=setInterval((function(){P((function(t){return t+1}))}),100),y(b.init),v([u]),z(f.up),i(o(n.length,u))},updateDirection:R,updateDifficulty:T}};var E=function(){var t=D(),e=t.body,n=t.difficulty,c=t.fields,i=t.start,a=t.stop,s=t.reload,r=t.status,o=t.updateDirection,u=t.updateDifficulty;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("header",{className:"header",children:[Object(m.jsxs)("div",{className:"title-container",children:[Object(m.jsx)("h1",{className:"title",children:"Snake Game"}),Object(m.jsx)("p",{children:"creat by Nagai"})]}),Object(m.jsx)(v,{length:e.length,difficulty:n,onChangeDifficulty:o})]}),Object(m.jsx)("main",{className:"main",children:Object(m.jsx)(x,{fields:c})}),Object(m.jsxs)("footer",{className:"footer",children:[Object(m.jsx)(p,{status:r,onStop:a,onStart:i,onRestart:s}),Object(m.jsx)(N,{onChange:u})]})]})},z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),a(t),s(t)}))};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root")),z()}},[[24,1,2]]]);
//# sourceMappingURL=main.b56f6205.chunk.js.map