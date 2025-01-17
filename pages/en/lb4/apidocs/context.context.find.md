---
lang: en
title: 'API docs: context.context.find'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, OpenAPI
sidebar: lb4_sidebar
editurl: https://github.com/loopbackio/loopback-next/tree/master/packages/context
permalink: /doc/en/lb4/apidocs.context.context.find.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/context](./context.md) &gt; [Context](./context.context.md) &gt; [find](./context.context.find.md)

## Context.find() method

Find bindings using a key pattern or filter function

<b>Signature:</b>

```typescript
find<ValueType = BoundValue>(pattern?: string | RegExp | BindingFilter): Readonly<Binding<ValueType>>[];
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  pattern | string \| RegExp \| [BindingFilter](./context.bindingfilter.md) | <p><i>(Optional)</i> A filter function, a regexp or a wildcard pattern with optional <code>*</code> and <code>?</code>. Find returns such bindings where the key matches the provided pattern.</p><p>For a wildcard: - <code>*</code> matches zero or more characters except <code>.</code> and <code>:</code> - <code>?</code> matches exactly one character except <code>.</code> and <code>:</code></p><p>For a filter function: - return <code>true</code> to include the binding in the results - return <code>false</code> to exclude it.</p> |

<b>Returns:</b>

Readonly&lt;[Binding](./context.binding.md)<!-- -->&lt;ValueType&gt;&gt;\[\]


