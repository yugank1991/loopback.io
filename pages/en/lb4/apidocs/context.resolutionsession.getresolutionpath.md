---
lang: en
title: 'API docs: context.resolutionsession.getresolutionpath'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, OpenAPI
sidebar: lb4_sidebar
editurl: https://github.com/loopbackio/loopback-next/tree/master/packages/context
permalink: /doc/en/lb4/apidocs.context.resolutionsession.getresolutionpath.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/context](./context.md) &gt; [ResolutionSession](./context.resolutionsession.md) &gt; [getResolutionPath](./context.resolutionsession.getresolutionpath.md)

## ResolutionSession.getResolutionPath() method

Get the resolution path including bindings and injections, for example: `bindingA --> @ClassA[0] --> bindingB --> @ClassB.prototype.prop1 --> bindingC`<!-- -->.

<b>Signature:</b>

```typescript
getResolutionPath(): string;
```
<b>Returns:</b>

string


