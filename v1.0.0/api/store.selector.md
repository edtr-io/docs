<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@edtr-io/store](./store.md) &gt; [Selector](./store.selector.md)

## Selector type

<b>Signature:</b>

```typescript
export declare type Selector<T = any, P extends any[] = []> = (
  ...args: P
) => (scopedState: ScopedState) => T
```