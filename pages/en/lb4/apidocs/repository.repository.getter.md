---
lang: en
title: 'API docs: repository.repository.getter'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, OpenAPI
sidebar: lb4_sidebar
editurl: https://github.com/loopbackio/loopback-next/tree/master/packages/repository
permalink: /doc/en/lb4/apidocs.repository.repository.getter.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/repository](./repository.md) &gt; [repository](./repository.repository.md) &gt; [getter](./repository.repository.getter.md)

## repository.getter() function

Decorator used to inject a Getter for a repository Mainly intended for usage with repository injections on relation repository factory

<b>Signature:</b>

```typescript
function getter(nameOrClass: string | Class<Repository<Model>>): (target: Object, member: string | undefined, methodDescriptorOrParameterIndex?: number | TypedPropertyDescriptor<any> | undefined) => void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  nameOrClass | string \| [Class](./repository.class.md)<!-- -->&lt;[Repository](./repository.repository.md)<!-- -->&lt;[Model](./repository.model.md)<!-- -->&gt;&gt; | The repository class (ProductRepository) or a string name ('ProductRepository'). |

<b>Returns:</b>

(target: Object, member: string \| undefined, methodDescriptorOrParameterIndex?: number \| TypedPropertyDescriptor&lt;any&gt; \| undefined) =&gt; void


