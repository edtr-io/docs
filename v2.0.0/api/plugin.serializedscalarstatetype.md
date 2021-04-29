<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@edtr-io/plugin](./plugin.md) &gt;
[SerializedScalarStateType](./plugin.serializedscalarstatetype.md)

## SerializedScalarStateType type

<b>Signature:</b>

```typescript
export declare type SerializedScalarStateType<S, T> = StateType<
  S,
  T,
  {
    value: T
    get(): T
    set(value: T | ((currentValue: T) => T)): void
  }
>
```

<b>References:</b> [StateType](./plugin.statetype.md)