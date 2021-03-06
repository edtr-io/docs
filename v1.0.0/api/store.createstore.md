<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@edtr-io/store](./store.md) &gt;
[createStore](./store.createstore.md)

## createStore() function

Creates the Edtr.io store

<b>Signature:</b>

```typescript
export declare function createStore<K extends string>(
  options: StoreOptions<K>
): {
  store: Store<State, Action>
}
```

## Parameters

| Parameter | Type                               | Description |
| --------- | ---------------------------------- | ----------- |
| options   | <code>StoreOptions&lt;K&gt;</code> | The options |

<b>Returns:</b>

`{ store: Store<State, Action>; }`

The Edtr.io store
