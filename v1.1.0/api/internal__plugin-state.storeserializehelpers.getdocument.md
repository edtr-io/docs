<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt;
[@edtr-io/internal\_\_plugin-state](./internal__plugin-state.md) &gt;
[StoreSerializeHelpers](./internal__plugin-state.storeserializehelpers.md) &gt;
[getDocument](./internal__plugin-state.storeserializehelpers.getdocument.md)

## StoreSerializeHelpers.getDocument() method

Retrieves a document from the store

<b>Signature:</b>

```typescript
getDocument(id: string): {
        plugin: K;
        state?: S;
    } | null;
```

## Parameters

| Parameter | Type   | Description        |
| --------- | ------ | ------------------ |
| id        | string | id of the document |

<b>Returns:</b>

{ plugin: K; state?: S; } \| null

the document if it exists, `null` otherwise
