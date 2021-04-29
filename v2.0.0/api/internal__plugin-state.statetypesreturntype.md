<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt;
[@edtr-io/internal\_\_plugin-state](./internal__plugin-state.md) &gt;
[StateTypesReturnType](./internal__plugin-state.statetypesreturntype.md)

## StateTypesReturnType type

<b>Signature:</b>

```typescript
export declare type StateTypesReturnType<
  Ds extends Record<string, StateType>
> = {
  [K in keyof Ds]: StateTypeReturnType<Ds[K]>
}
```

<b>References:</b> [StateType](./internal__plugin-state.statetype.md)<!-- -->,
[StateTypeReturnType](./internal__plugin-state.statetypereturntype.md)