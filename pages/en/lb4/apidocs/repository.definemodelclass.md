---
lang: en
title: 'API docs: repository.definemodelclass'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, OpenAPI
sidebar: lb4_sidebar
editurl: https://github.com/loopbackio/loopback-next/tree/master/packages/repository
permalink: /doc/en/lb4/apidocs.repository.definemodelclass.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/repository](./repository.md) &gt; [defineModelClass](./repository.definemodelclass.md)

## defineModelClass() function

Create (define) a new model class with the given name and definition.

<b>Signature:</b>

```typescript
export declare function defineModelClass<BaseCtor extends typeof Model, Props extends object = {}>(base: BaseCtor, definition: ModelDefinition): DynamicModelCtor<BaseCtor, Props>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  base | BaseCtor | The base model to extend, typically Model or Entity. You can also use your own base class, e.g. <code>User</code>. |
|  definition | [ModelDefinition](./repository.modeldefinition.md) | Definition of the model to create. |

<b>Returns:</b>

[DynamicModelCtor](./repository.dynamicmodelctor.md)<!-- -->&lt;BaseCtor, Props&gt;

## Remarks


```ts
const Product = defineModelClass(Entity, new ModelDefinition('Product'));
```
To enable type safety, you should describe properties of your model:

```ts
const Product = defineModelClass<
 typeof Entity,
 {id: number, name: string}
>(Entity, new ModelDefinition('Product'));
```
If your model allows arbitrary (free-form) properties, then add `AnyObject` to the type describing model properties.

```ts
const Product = defineModelClass<
 typeof Entity,
 AnyObject & {id: number},
>(Entity, new ModelDefinition('Product'));
```


