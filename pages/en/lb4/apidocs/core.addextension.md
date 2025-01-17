---
lang: en
title: 'API docs: core.addextension'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, OpenAPI
sidebar: lb4_sidebar
editurl: https://github.com/loopbackio/loopback-next/tree/master/packages/core
permalink: /doc/en/lb4/apidocs.core.addextension.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/core](./core.md) &gt; [addExtension](./core.addextension.md)

## addExtension() function

Register an extension for the given extension point to the context

<b>Signature:</b>

```typescript
export declare function addExtension(context: Context, extensionPointName: string, extensionClass: Constructor<unknown>, options?: BindingFromClassOptions): Binding<unknown>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  context | [Context](./context.context.md) | Context object |
|  extensionPointName | string | Name of the extension point |
|  extensionClass | [Constructor](./context.constructor.md)<!-- -->&lt;unknown&gt; | Class or a provider for an extension |
|  options | [BindingFromClassOptions](./context.bindingfromclassoptions.md) | <i>(Optional)</i> Options Options for the creation of binding from class |

<b>Returns:</b>

[Binding](./context.binding.md)<!-- -->&lt;unknown&gt;


