(this["webpackJsonpfotografo-resume"]=this["webpackJsonpfotografo-resume"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(25),a=n.n(i),r=(n(33),n(10)),o=n(4),l=(n(34),n(8)),u=n(3),j=(n(35),n(36),n(2));function p(e){var t=e.to,n=e.title;return Object(j.jsx)(r.b,{to:t,className:"nav-item--wrapper",children:Object(j.jsx)("div",{className:"nav-item",children:n})})}n(38);function b(e){var t=e.title,n=e.children;return Object(j.jsxs)("div",{className:"header-select--wrapper",children:[Object(j.jsxs)("div",{className:"nav-title",children:[t,Object(j.jsx)("span",{className:"iconfont icon icon-arrow-right-bold"})]}),Object(j.jsx)("div",{className:"nav-subitem--wrapper",children:n.map((function(e){return Object(j.jsx)(p,{to:e.to,title:e.title},e.to)}))})]})}var d=[{title:"\u9996\u9875",to:"home"},{title:"\u56fe\u5e93",children:[{title:"\u98ce\u5149",to:"landscape"},{title:"\u57ce\u5e02",to:"cityscape"},{title:"\u5efa\u7b51",to:"architecture"},{title:"\u4eba\u50cf",to:"portrait"},{title:"\u5546\u4e1a",to:"commercial"},{title:"\u751f\u6d3b",to:"lifescape"}]},{title:"\u9879\u76ee",to:"project"},{title:"\u5408\u4f5c",to:"/contact"}];function f(){var e=Object(c.useState)(["header--wrapper"]),t=Object(u.a)(e,2),n=t[0],s=t[1],i=Object(o.e)();return Object(c.useLayoutEffect)((function(){"/home"===i.pathname?(!n.includes("is-home")&&n.push("is-home"),s(Object(l.a)(n))):s(n.filter((function(e){return"is-home"!==e})))}),[i]),Object(j.jsxs)("header",{className:n.join(" "),children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)(r.b,{to:"/home",children:"Haoran Jiang"})}),Object(j.jsx)("div",{className:"nav-list--wrapper",children:d.map((function(e){return e.children?Object(j.jsx)(b,{children:e.children,title:e.title},e.title):Object(j.jsx)(p,{to:e.to,title:e.title},e.to)}))})]})}n(39);function m(){var e=[{src:"./icons/500px.svg",title:"500px",link:"https://500px.com.cn/community/user-details/d51181108439d8025c243823370d39218"},{src:"./icons/tuchong.png",title:"Tuchong",link:"https://haoranxiansheng.tuchong.com/"}],t=function(e){window.open(e)};return Object(j.jsxs)("div",{className:"footer--wrapper",children:[Object(j.jsxs)("section",{className:"top",children:[Object(j.jsxs)("div",{className:"contact-me--wrapper",children:[Object(j.jsx)("div",{className:"title",children:"\u8054\u7cfb\u6211"}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("a",{href:"mailto:".concat("531624487@QQ.com"),children:"HAORAOJIANG"}),Object(j.jsx)("img",{className:"icon-item",src:e[0].src,onClick:function(){return t(e[0].link)},alt:e[0].title})]})]}),Object(j.jsxs)("div",{className:"follow-me--wrapper",children:[Object(j.jsx)("div",{className:"title",children:"\u5173\u6ce8\u6211"}),Object(j.jsx)("div",{className:"content",children:e.map((function(e){return Object(j.jsx)("img",{className:"icon-item",src:e.src,onClick:function(){return t(e.link)},alt:e.title},e.src)}))})]}),Object(j.jsxs)("div",{className:"subscribe-me--wrapper",children:[Object(j.jsx)("div",{className:"title",children:"\u8ba2\u9605\u6700\u65b0\u6d88\u606f"}),Object(j.jsxs)("div",{className:"input--wrapper",children:[Object(j.jsx)("input",{type:"text",className:"subscribe-input",placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u90ae\u7bb1"}),Object(j.jsx)("img",{className:"submit-icon-item",src:e[0].src,onClick:function(){return t(e[0].link)},alt:e[0].title})]}),Object(j.jsx)("button",{className:"subscribe-button",children:"\u8ba2\u9605"})]})]}),Object(j.jsx)("div",{className:"copyright",children:"COPYRIGHT 2021 HAORAN JIANG, ALL RIGHTS RESERVED"})]})}var h=n(7),O=(n(40),n(26)),x=n.n(O).a.create({baseURL:"/mock",timeout:3e3});x.interceptors.response.use((function(e){if(200!==e.status)return Promise.reject(e);var t=e.data;try{t=JSON.parse(e.data)}finally{return Promise.resolve(t)}}));var v=x;function g(){return v.get("/home.json")}function N(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,s=Object(c.useState)(e),i=Object(u.a)(s,2),a=i[0],r=i[1];return Object(c.useEffect)((function(){t().then((function(e){r(e)}))}),[]),Object(c.useEffect)((function(){n&&a.length&&(console.log("???"),n())}),[a]),[a]}function w(){var e=N([],g),t=Object(u.a)(e,1)[0];return Object(j.jsxs)("div",{className:"home--wrapper",children:[Object(j.jsx)("div",{className:"controlers--wrapper"}),Object(j.jsx)(h.a,{heightMode:"first",autoplay:!0,autoplayReverse:!0,autoplayInterval:3e3,defaultControlsConfig:{pagingDotsContainerClassName:"paging-dots--container",prevButtonText:" ",prevButtonClassName:"prev-button iconfont icon-arrow-left-bold",nextButtonText:" ",nextButtonClassName:"next-button iconfont icon-arrow-right-bold"},speed:1500,children:t.map((function(e){return Object(j.jsx)("img",{src:e.src,alt:"Opps."},e.src)}))})]})}n(65);function C(){return v.get("/landscape.json")}function k(){var e=N([],C),t=Object(u.a)(e,1)[0];return Object(j.jsx)("div",{className:"landscape--wrapper func--full-height",children:Object(j.jsx)(h.a,{heightMode:"first",transitionMode:"fade",cellAlign:"center",defaultControlsConfig:{pagingDotsContainerClassName:"paging-dots--container",prevButtonText:" ",prevButtonClassName:"prev-button iconfont icon-arrow-left-bold",nextButtonText:" ",nextButtonClassName:"next-button iconfont icon-arrow-right-bold"},speed:1500,children:t.map((function(e){return Object(j.jsx)("img",{src:e.src,alt:"Opps."},e.src)}))})})}n(66);function S(){return v.get("/cityscape.json")}function y(){var e=N([],S),t=Object(u.a)(e,1)[0];return Object(j.jsx)("div",{className:"cityscape--wrapper func--full-height",children:Object(j.jsx)(h.a,{heightMode:"first",transitionMode:"fade",cellAlign:"center",defaultControlsConfig:{pagingDotsContainerClassName:"paging-dots--container",prevButtonText:" ",prevButtonClassName:"prev-button iconfont icon-arrow-left-bold",nextButtonText:" ",nextButtonClassName:"next-button iconfont icon-arrow-right-bold"},speed:1500,children:t.map((function(e){return Object(j.jsx)("img",{src:e.src,alt:"Opps."},e.src)}))})})}n(67);function B(){Object(c.useEffect)((function(){v.get("/architecture.json").then((function(e){i(e)}))}),[]);var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(0),r=Object(u.a)(a,2),o=r[0],l=r[1];return function(e,t){var n=s.a.useRef(),c=s.a.useRef(e);s.a.useEffect((function(){c.current=e}),[e]),s.a.useEffect((function(){if("number"===typeof t)return n.current=window.setInterval((function(){return c.current()}),t),function(){window.clearInterval(n.current)}}),[t])}((function(){o<n.length-1?l(o+1):l(0)}),5e3),Object(j.jsx)("div",{className:"architecture--wrapper func--full-height",children:n.map((function(e,t){var n=["img"];return o===t&&n.push("is-show"),Object(j.jsx)("img",{className:n.join(" "),src:"".concat("/photographer-s-eyes"+e.src),alt:"Opps."},e.src)}))})}n(68);function I(){return v.get("/portrait.json")}function T(){var e=N([],I),t=Object(u.a)(e,1)[0],n=Object(c.useState)([]),s=Object(u.a)(n,2),i=s[0],a=s[1],r=Object(c.useState)([]),o=Object(u.a)(r,2),p=o[0],b=o[1],d=Object(c.useState)(0),f=Object(u.a)(d,2),m=f[0],h=f[1];function O(e,t){t?m>0&&h(m-1):m<i.length-1&&h(m+1)}return Object(c.useEffect)((function(){t.forEach((function(e,t){t%2===0?i.push(e):p.push(e)})),a(Object(l.a)(i)),b(Object(l.a)(p))}),[t]),Object(j.jsx)("div",{className:"portrait--wrapper func--full-height",children:Object(j.jsxs)("div",{className:"pics",children:[Object(j.jsx)("div",{className:"left",children:i.map((function(e,t){var n=["img"];return m===t&&n.push("is-show"),Object(j.jsx)("img",{src:e.src,onClick:function(){return O(0,!0)},alt:"Opps.",className:n.join(" ")},e.src)}))}),Object(j.jsx)("div",{className:"right",children:p.map((function(e,t){var n=["img"];return m===t&&n.push("is-show"),Object(j.jsx)("img",{src:e.src,onClick:function(){return O(0,!1)},alt:"Opps.",className:n.join(" ")},e.src)}))})]})})}function A(){return v.get("/commercial.json")}n(69);function E(){var e=N([],A),t=Object(u.a)(e,1)[0],n=Object(c.useState)(!1),s=Object(u.a)(n,2),i=s[0],a=s[1],r=Object(c.useState)(0),o=Object(u.a)(r,2),l=o[0],p=o[1],b=["dialogue--wrapper"];function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;e?t.stopPropagation():a(!1)}return i&&b.push("is-show"),Object(j.jsxs)("div",{className:"commercial--wrapper func--full-height",children:[Object(j.jsx)("div",{className:"preview--wrapper",children:t.map((function(e,t){return Object(j.jsx)("div",{className:"previewr--item",onClick:function(){return function(e,t){a(!0),p(t)}(0,t)},style:{backgroundImage:"url(".concat(e.src,")")}},e.src)}))}),Object(j.jsx)("div",{className:b.join(" "),onClick:function(){return d()},children:Object(j.jsx)("div",{className:"dialogue--inner",onClick:function(e){return d(!0,e)},children:Object(j.jsx)(h.a,{heightMode:"first",slideIndex:l,transitionMode:"fade",cellAlign:"center",defaultControlsConfig:{pagingDotsContainerClassName:"paging-dots--container",prevButtonText:" ",prevButtonClassName:"prev-button iconfont icon-arrow-left-bold",nextButtonText:" ",nextButtonClassName:"next-button iconfont icon-arrow-right-bold"},speed:1500,children:t.map((function(e){return Object(j.jsx)("img",{src:e.src,alt:"Opps."},e.src)}))})})})]})}n(70);function M(){return v.get("/lifescape.json")}function R(){var e=N([],M),t=Object(u.a)(e,1)[0],n=Object(c.useState)([]),s=Object(u.a)(n,2),i=s[0],a=s[1],r=Object(c.useState)([]),o=Object(u.a)(r,2),p=o[0],b=o[1],d=Object(c.useState)(0),f=Object(u.a)(d,2),m=f[0],h=f[1];function O(e,t){t?m>0&&h(m-1):m<i.length-1&&h(m+1)}return Object(c.useEffect)((function(){t.forEach((function(e,t){t%2===0?i.push(e):p.push(e)})),a(Object(l.a)(i)),b(Object(l.a)(p))}),[t]),Object(j.jsx)("div",{className:"lifescape--wrapper func--full-height",children:Object(j.jsxs)("div",{className:"pics",children:[Object(j.jsx)("div",{className:"left",children:i.map((function(e,t){var n=["img"];return m===t&&n.push("is-show"),Object(j.jsx)("img",{src:e.src,onClick:function(){return O(0,!0)},alt:"Opps.",className:n.join(" ")},e.src)}))}),Object(j.jsx)("div",{className:"right",children:p.map((function(e,t){var n=["img"];return m===t&&n.push("is-show"),Object(j.jsx)("img",{src:e.src,onClick:function(){return O(0,!1)},alt:"Opps.",className:n.join(" ")},e.src)}))})]})})}function D(){return v.get("/project.json")}n(71);function J(){var e=N([],D),t=Object(u.a)(e,1)[0],n=Object(c.useState)([]),s=Object(u.a)(n,2),i=s[0],a=s[1],r=Object(c.useState)(0),o=Object(u.a)(r,2),l=o[0],p=o[1];Object(c.useEffect)((function(){t.length&&a(t[l].children)}),[t,l]);var b=Object(c.useState)(!1),d=Object(u.a)(b,2),f=d[0],m=d[1],O=Object(c.useState)(0),x=Object(u.a)(O,2),v=x[0],g=x[1],w=["dialogue--wrapper"];function C(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;e?t.stopPropagation():m(!1)}return f&&w.push("is-show"),Object(j.jsxs)("div",{className:"project--wrapper func--full-height",children:[Object(j.jsxs)("div",{className:"preview--list",children:[Object(j.jsx)("div",{className:"preview--item",children:"\u7b5b\u9009\uff1a"}),t.map((function(e,t){var n=["preview--item","cursor"];return t===l&&n.push("is-checked"),Object(j.jsx)("div",{className:n.join(" "),onClick:function(){return function(e){l!==e&&p(e)}(t)},children:e.title},e.type)}))]}),Object(j.jsx)("div",{className:"preview--wrapper",children:i.map((function(e,t){return Object(j.jsx)("div",{className:"preview-img--item",onClick:function(){return function(e,t){m(!0),g(t)}(0,t)},style:{backgroundImage:"url(".concat(e.src,")")}},e.src)}))}),Object(j.jsx)("div",{className:w.join(" "),onClick:function(){return C()},children:Object(j.jsx)("div",{className:"dialogue--inner",onClick:function(e){return C(!0,e)},children:Object(j.jsx)(h.a,{heightMode:"first",slideIndex:v,transitionMode:"fade",cellAlign:"center",defaultControlsConfig:{pagingDotsContainerClassName:"paging-dots--container",prevButtonText:" ",prevButtonClassName:"prev-button iconfont icon-arrow-left-bold",nextButtonText:" ",nextButtonClassName:"next-button iconfont icon-arrow-right-bold"},speed:1500,children:i.map((function(e){return Object(j.jsx)("img",{src:e.src,alt:"Opps."},e.src)}))})})})]})}n(72);function P(e){var t=Object(c.useState)(e),n=Object(u.a)(t,2),s=n[0],i=n[1];return[s,function(e){var t=e.target;i(t.value)}]}function H(){var e=P(""),t=Object(u.a)(e,2),n=t[0],c=t[1],s=P(""),i=Object(u.a)(s,2),a=i[0],r=i[1],o=P(""),l=Object(u.a)(o,2),p=l[0],b=l[1];return Object(j.jsxs)("div",{className:"contact--wrapper func--full-height",children:[Object(j.jsx)("div",{className:"title",children:"To Haoran Jiang"}),Object(j.jsxs)("div",{className:"form--wrapper",children:[Object(j.jsx)("div",{className:"form-item",children:Object(j.jsx)("input",{className:"input",value:n,type:"text",name:"name",onInput:function(e){return c(e)},placeholder:"*\u60a8\u7684\u59d3\u540d"})}),Object(j.jsx)("div",{className:"form-item",children:Object(j.jsx)("input",{className:"input",value:a,onInput:function(e){return r(e)},type:"text",name:"email",placeholder:"*\u60a8\u7684\u7535\u5b50\u90ae\u7bb1"})}),Object(j.jsx)("div",{className:"form-item",children:Object(j.jsx)("textarea",{className:"input textarea",value:p,onInput:function(e){return b(e)},name:"message",placeholder:"*\u7559\u4e0b\u60a8\u7684\u9700\u6c42\u5728\u8fd9\u513f"})}),Object(j.jsx)("button",{className:"submit--button",onClick:function(){/^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/.test(a)&&v.post("http://mockbin.com/request?foo=bar&foo=baz").then((function(e){console.log(e)}))},children:"\u53d1\u9001"})]})]})}var L=function(){return"/"===window.location.pathname&&window.history.replaceState("/home","","/home"),Object(j.jsx)(r.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(f,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/home",element:Object(j.jsx)(w,{})}),Object(j.jsx)(o.a,{path:"/landscape",element:Object(j.jsx)(k,{})}),Object(j.jsx)(o.a,{path:"/cityscape",element:Object(j.jsx)(y,{})}),Object(j.jsx)(o.a,{path:"/architecture",element:Object(j.jsx)(B,{})}),Object(j.jsx)(o.a,{path:"/portrait",element:Object(j.jsx)(T,{})}),Object(j.jsx)(o.a,{path:"/commercial",element:Object(j.jsx)(E,{})}),Object(j.jsx)(o.a,{path:"/lifescape",element:Object(j.jsx)(R,{})}),Object(j.jsx)(o.a,{path:"/project",element:Object(j.jsx)(J,{})}),Object(j.jsx)(o.a,{path:"/contact",element:Object(j.jsx)(H,{})})]}),Object(j.jsx)(m,{})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),z()}},[[73,1,2]]]);
//# sourceMappingURL=main.af8601c7.chunk.js.map