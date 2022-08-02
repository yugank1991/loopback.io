"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9770],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return d}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(o),d=r,h=u["".concat(p,".").concat(d)]||u[d]||g[d]||l;return o?n.createElement(h,a(a({ref:t},s),{},{components:o})):n.createElement(h,a({ref:t},s))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5946:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return s},toc:function(){return g},default:function(){return d}});var n=o(7462),r=o(3366),l=(o(7294),o(3905)),a=["components"],i={title:"Learning LoopBack 4 Interceptors (Part 1) - Global Interceptors",date:new Date("2019-07-31T00:00:00.000Z"),authors:"dhmlau",slug:"loopback4-interceptors-part1",tags:["learning","interceptor"]},p=void 0,c={permalink:"/blog/loopback4-interceptors-part1",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-07-31-learning-interceptor-part1.md",source:"@site/blog/2019/2019-07-31-learning-interceptor-part1.md",title:"Learning LoopBack 4 Interceptors (Part 1) - Global Interceptors",description:"Originally published on strongloop.com",date:"2019-07-31T00:00:00.000Z",formattedDate:"July 31, 2019",tags:[{label:"learning",permalink:"/blog/tags/learning"},{label:"interceptor",permalink:"/blog/tags/interceptor"}],readingTime:3.255,truncated:!0,authors:[{name:"Diana Lau",title:"LoopBack Maintainer",url:"https://github.com/dhmlau",imageURL:"https://avatars2.githubusercontent.com/u/25489897",key:"dhmlau"}],frontMatter:{title:"Learning LoopBack 4 Interceptors (Part 1) - Global Interceptors",date:"2019-07-31T00:00:00.000Z",authors:"dhmlau",slug:"loopback4-interceptors-part1",tags:["learning","interceptor"]},prevItem:{title:"LoopBack 4 July 2019 Milestone Update",permalink:"/blog/july-2019-milestone"},nextItem:{title:"Building an Online Game With LoopBack 4 - Deploying our Application to Kubernetes on IBM Cloud (Part 5)",permalink:"/blog/building-an-online-game-with-loopback-4-pt5"}},s={authorsImageUrls:[void 0]},g=[{value:"Creating a Global Interceptor",id:"creating-a-global-interceptor",children:[],level:2},{value:"Adding Logic to the Logging Interceptor",id:"adding-logic-to-the-logging-interceptor",children:[],level:2},{value:"Global Interceptor in\xa0Action",id:"global-interceptor-inaction",children:[],level:2},{value:"Getting HttpRequest from InvocationContext",id:"getting-httprequest-from-invocationcontext",children:[],level:2},{value:"Other Resources",id:"other-resources",children:[],level:2},{value:"Call to Action",id:"call-to-action",children:[],level:2}],u={toc:g};function d(e){var t=e.components,o=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Originally published on ",(0,l.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,l.kt)("p",null,"Wondering what an interceptor is in LoopBack 4?\xa0"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Interceptors are reusable functions to provide aspect-oriented logic around method invocations.\xa0")),(0,l.kt)("p",null,"Seems pretty useful, right? There are 3 levels of interceptors: global, class level and method level. In this article, we are going to look into what a global interceptor is and how to use it. "),(0,l.kt)("p",null,"Global interceptors are automatically called for all controller methods. They are called first, before interceptors specified at class and method level. You can insert additional logic before and after method invocation through ",(0,l.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Interceptors.html"},"interceptors"),". Examples of using global interceptors are ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/greeting-app"},"caching")," and ",(0,l.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/building-an-online-game-with-loopback-4-pt4/"},"authorization"),"."),(0,l.kt)("p",null,"For the sake of illustration, we'll use global interceptors for logging purposes using the default ",(0,l.kt)("inlineCode",{parentName:"p"},"/ping")," endpoint that comes with all scaffolded LB4 application. Note that interceptors are not the best tool for logging. It's usually better to implement logging as a new sequence action, as we demonstrate in our ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/log-extension"},"log extension example"),"."),(0,l.kt)("h2",{id:"creating-a-global-interceptor"},"Creating a Global Interceptor"),(0,l.kt)("p",null,"After you've scaffolded the application, run ",(0,l.kt)("inlineCode",{parentName:"p"},"lb4 interceptor")," command to create an interceptor. Since we are going to have one global interceptor, leave the ",(0,l.kt)("inlineCode",{parentName:"p"},"group name for the global interceptor")," as an empty string which is the default value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ lb4 interceptor\n? Interceptor name: logging\n? Is it a global interceptor? Yes\n\nGlobal interceptors are sorted by the order of an array of group names bound\nto ContextBindings.GLOBAL_INTERCEPTOR_ORDERED_GROUPS. See \nhttps://loopback.io/doc/en/lb4/Interceptors.html#order-of-invocation-for-interceptors.\n\n? Group name for the global interceptor: ('')\n\ncreate src/interceptors/logging.interceptor.ts\nupdate src/interceptors/index.ts\n\nInterceptor Logging was created in src/interceptors/\n")),(0,l.kt)("h2",{id:"adding-logic-to-the-logging-interceptor"},"Adding Logic to the Logging Interceptor"),(0,l.kt)("p",null,"Let's take a look at the generated interceptor. "),(0,l.kt)("p",null,"Go to ",(0,l.kt)("inlineCode",{parentName:"p"},"src/interceptors/logging.interceptor.ts"),". You'll see two comments in the try-catch block where you can add your logic: pre-invocation and post-invocation.\xa0We are going to simply print out the method name of the invocationContext before and after the method is being invoked."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"try {\n  // Add pre-invocation logic here\n  // ----- ADDED THIS LINE ----\n  console.log('log: before-' + invocationCtx.targetName);\n  \n  const result = await next();\n\n  // Add post-invocation logic here\n  // ----- ADDED THIS LINE -----\n  console.log('log: after-' + invocationCtx.targetName);\n\n  return result;\n} catch (err) {\n  // Add error handling logic here\n  console.error(err);\n  throw err;\n}\n")),(0,l.kt)("h2",{id:"global-interceptor-inaction"},"Global Interceptor in\xa0Action"),(0,l.kt)("p",null,"That's it! The global interceptor is ready for action. "),(0,l.kt)("p",null,"Start the application with ",(0,l.kt)("inlineCode",{parentName:"p"},"npm start")," command. Then go to the API Explorer: http://localhost:3000/explorer."),(0,l.kt)("p",null,"You'll now see the following printed to the console:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"log: before-ExplorerController.prototype.index\nlog: after-ExplorerController.prototype.index\n")),(0,l.kt)("p",null,"Next, call the ",(0,l.kt)("inlineCode",{parentName:"p"},"/ping"),' endpoint by clicking "Try it Out" > "Execute". You\'ll see two more lines got printed:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"log: before-PingController.prototype.ping\nlog: after-PingController.prototype.ping\n")),(0,l.kt)("p",null,"The interceptor method was called because it is at the global level.\xa0"),(0,l.kt)("h2",{id:"getting-httprequest-from-invocationcontext"},"Getting HttpRequest from InvocationContext"),(0,l.kt)("p",null,"For more meaningful log messages, you might want to get more information about the HTTP request. To do that, add this import in the interceptor class:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"import {RestBindings} from '@loopback/rest';\n")),(0,l.kt)("p",null,"We're going to print out the endpoint being called. To do that, add the snippet below as the pre-invocation logic:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"const httpReq = await invocationCtx.get(RestBindings.Http.REQUEST, {optional: true,});\nif (httpReq) {\n  console.log('Endpoint being called:', httpReq.path);\n}\n")),(0,l.kt)("p",null,"Restart the application, go to API Explorer and call the ",(0,l.kt)("inlineCode",{parentName:"p"},"/ping")," endpoint again. You'll see the following printed to the console log:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"log: before-ExplorerController.prototype.index\nEndpoint being called: /explorer/\nlog: after-ExplorerController.prototype.index\nlog: before-PingController.prototype.ping\nEndpoint being called: /ping\nlog: after-PingController.prototype.ping\n")),(0,l.kt)("h2",{id:"other-resources"},"Other Resources"),(0,l.kt)("p",null,"For other interceptor examples, check out: ",(0,l.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Interceptors.html#example-interceptors"},"https://loopback.io/doc/en/lb4/Interceptors.html#example-interceptors")),(0,l.kt)("p",null,"For running applications that use interceptors, see:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Caching enabled via interceptors in Greeter application, ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/tree/master/examples/greeting-app"},"https://github.com/strongloop/loopback-next/tree/master/examples/greeting-app")),(0,l.kt)("li",{parentName:"ul"},"Authorization added using interceptors in this tutorial, ",(0,l.kt)("a",{parentName:"li",href:"https://strongloop.com/strongblog/building-an-online-game-with-loopback-4-pt4/"},"https://strongloop.com/strongblog/building-an-online-game-with-loopback-4-pt4/"))),(0,l.kt)("h2",{id:"call-to-action"},"Call to Action"),(0,l.kt)("p",null,"LoopBack's future success depends on you. We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Please join us and help the project by:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues"},"Reporting issues"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md"},"Contributing"),"\ncode and documentation."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/labels/good%20first%20issue"},'Opening a pull request on one of our "good first issues"'),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/110"},"Joining")," our user group.")))}d.isMDXComponent=!0}}]);