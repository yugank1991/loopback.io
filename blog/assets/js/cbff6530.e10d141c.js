"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4962],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return b}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(o),b=r,g=m["".concat(i,".").concat(b)]||m[b]||u[b]||a;return o?n.createElement(g,l(l({ref:t},s),{},{components:o})):n.createElement(g,l({ref:t},s))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<a;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},96:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return s},toc:function(){return u},default:function(){return b}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),l=["components"],p={title:"Import LoopBack 3 Models into a LoopBack 4 Project",date:new Date("2019-10-08T00:00:00.000Z"),authors:"bajtos",slug:"import-loopback-3-models-to-loopback-4",tags:["LoopBack 3","migration"]},i=void 0,c={permalink:"/blog/import-loopback-3-models-to-loopback-4",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-10-08-import-lb3-models-to-lb4.md",source:"@site/blog/2019/2019-10-08-import-lb3-models-to-lb4.md",title:"Import LoopBack 3 Models into a LoopBack 4 Project",description:"Originally published on strongloop.com",date:"2019-10-08T00:00:00.000Z",formattedDate:"October 8, 2019",tags:[{label:"LoopBack 3",permalink:"/blog/tags/loop-back-3"},{label:"migration",permalink:"/blog/tags/migration"}],readingTime:4.04,truncated:!0,authors:[{name:"Miroslav Bajto\u0161",title:"LoopBack Maintainer",url:"http://github.com/bajtos",imageURL:"https://avatars.githubusercontent.com/u/1140553",key:"bajtos"}],frontMatter:{title:"Import LoopBack 3 Models into a LoopBack 4 Project",date:"2019-10-08T00:00:00.000Z",authors:"bajtos",slug:"import-loopback-3-models-to-loopback-4",tags:["LoopBack 3","migration"]},prevItem:{title:"LoopBack 4 2019 Q3 Overview",permalink:"/blog/loopback-4-2019-q3-overview"},nextItem:{title:"LoopBack 4 September 2019 Milestone Update",permalink:"/blog/september-2019-milestone"}},s={authorsImageUrls:[void 0]},u=[],m={toc:u};function b(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Originally published on ",(0,a.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,a.kt)("p",null,"It has been almost a year since ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/loopback-4-ga"},"LoopBack 4.0 GA was announced"),". Since then, we have been working hard on closing the feature gap between the new and the old versions and looking for ways to simplify migration of projects built on LoopBack 3."),(0,a.kt)("p",null,"In June, we announced a new feature that allows LoopBack 3 applications to be mounted in LoopBack 4 projects, allowing developers to start writing new features using LoopBack 4 while keeping existing APIs powered by LoopBack 3 (Read more about it in this ",(0,a.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/migrate-from-loopback-3-to-loopback-4/"},"blog post"),")."),(0,a.kt)("p",null,"Today, we are happy to announce a preview version of a tool automating migration of models from LoopBack 3 to LoopBack 4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"lb4 import-lb3-models\n")))}b.isMDXComponent=!0}}]);