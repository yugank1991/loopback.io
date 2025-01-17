---
lang: en
title: 'API docs: context.resolvelist'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, OpenAPI
sidebar: lb4_sidebar
editurl: https://github.com/loopbackio/loopback-next/tree/master/packages/context
permalink: /doc/en/lb4/apidocs.context.resolvelist.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/context](./context.md) &gt; [resolveList](./context.resolvelist.md)

## resolveList() function

Resolve entries of an array into a new array with the same indexes. If one or more entries of the source array are resolved to a promise by the `resolver` function, this method returns a promise which will be resolved to the new array with fully resolved entries.

<b>Signature:</b>

```typescript
export declare function resolveList<T, V>(list: T[], resolver: (val: T, index: number, values: T[]) => ValueOrPromise<V>): ValueOrPromise<V[]>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  list | T\[\] | The original array containing the source entries |
|  resolver | (val: T, index: number, values: T\[\]) =&gt; [ValueOrPromise](./context.valueorpromise.md)<!-- -->&lt;V&gt; | A function resolves an entry to a value or promise. It will be invoked with the property value, the property index, and the source array. |

<b>Returns:</b>

[ValueOrPromise](./context.valueorpromise.md)<!-- -->&lt;V\[\]&gt;

## Example

- Example 1: resolve all entries synchronously

```ts
const result = resolveList(['a', 'b'], v => v.toUpperCase());
```
The `result` will be `['A', 'B']`<!-- -->.

- Example 2: resolve one or more entries asynchronously

```ts
const result = resolveList(['a', 'b'], v =>
  Promise.resolve(v.toUpperCase()),
);
```
The `result` will be a promise of `['A', 'B']`<!-- -->.


