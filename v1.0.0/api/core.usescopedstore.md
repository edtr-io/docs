<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@edtr-io/core](./core.md) &gt;
[useScopedStore](./core.usescopedstore.md)

## useScopedStore() function

React Hook to obtain a reference to the scoped store

<b>Signature:</b>

```typescript
export declare function useScopedStore(
  enforcedScope?: string
): {
  dispatch: (scopedAction: (scope: string) => Action) => void
  getState: () => ScopedState
  subscribe: (listener: () => void) => Unsubscribe
}
```

## Parameters

| Parameter     | Type                | Description                                                 |
| ------------- | ------------------- | ----------------------------------------------------------- |
| enforcedScope | <code>string</code> | If provided, used as the scope instead of the current scope |

<b>Returns:</b>

`{ dispatch: (scopedAction: (scope: string) => Action) => void; getState: () => ScopedState; subscribe: (listener: () => void) => Unsubscribe; }`

The scoped store
