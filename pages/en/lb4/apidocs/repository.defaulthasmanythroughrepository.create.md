---
lang: en
title: 'API docs: repository.defaulthasmanythroughrepository.create'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, OpenAPI
sidebar: lb4_sidebar
editurl: https://github.com/loopbackio/loopback-next/tree/master/packages/repository
permalink: /doc/en/lb4/apidocs.repository.defaulthasmanythroughrepository.create.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/repository](./repository.md) &gt; [DefaultHasManyThroughRepository](./repository.defaulthasmanythroughrepository.md) &gt; [create](./repository.defaulthasmanythroughrepository.create.md)

## DefaultHasManyThroughRepository.create() method

<b>Signature:</b>

```typescript
create(targetModelData: DataObject<TargetEntity>, options?: Options & {
        throughData?: DataObject<ThroughEntity>;
        throughOptions?: Options;
    } & {
        polymorphicType?: string;
    }): Promise<TargetEntity>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  targetModelData | [DataObject](./repository.dataobject.md)<!-- -->&lt;TargetEntity&gt; |  |
|  options | [Options](./repository.options.md) &amp; { throughData?: [DataObject](./repository.dataobject.md)<!-- -->&lt;ThroughEntity&gt;; throughOptions?: [Options](./repository.options.md)<!-- -->; } &amp; { polymorphicType?: string; } | <i>(Optional)</i> |

<b>Returns:</b>

Promise&lt;TargetEntity&gt;


