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

| Parameter | Type                                                     | Description |
| --------- | -------------------------------------------------------- | ----------- |
| options   | [StoreOptions](./store.storeoptions.md)<!-- -->&lt;K&gt; | The options |

<b>Returns:</b>

{ store: Store&lt;[State](./store.state.md)<!-- -->,
[Action](./store.action.md)<!-- -->&gt;; }

The Edtr.io store
