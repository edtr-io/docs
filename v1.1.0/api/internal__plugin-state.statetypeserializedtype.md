<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@edtr-io/internal\_\_plugin-state](./internal__plugin-state.md) &gt; [StateTypeSerializedType](./internal__plugin-state.statetypeserializedtype.md)

## StateTypeSerializedType type

Maps a \[\[StateType\]\] to the type of its serialized state

<b>Signature:</b>

```typescript
export declare type StateTypeSerializedType<
  D extends StateType
> = D extends StateType<infer S> ? S : never
```