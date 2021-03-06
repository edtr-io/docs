<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt;
[@edtr-io/internal\_\_plugin-state](./internal__plugin-state.md) &gt;
[StateUpdater](./internal__plugin-state.stateupdater.md)

## StateUpdater type

An updater will get called with the current state and helpers and should return
the new state

<b>Signature:</b>

```typescript
export declare type StateUpdater<T> = (
  previousState: T,
  helpers: StoreDeserializeHelpers
) => T
```

<b>References:</b>
[StoreDeserializeHelpers](./internal__plugin-state.storedeserializehelpers.md)
