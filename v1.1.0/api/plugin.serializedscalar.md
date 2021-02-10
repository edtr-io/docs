<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@edtr-io/plugin](./plugin.md) &gt; [serializedScalar](./plugin.serializedscalar.md)

## serializedScalar() function

<b>Signature:</b>

```typescript
export declare function serializedScalar<S, T>(
  initialState: T,
  serializer: Serializer<S, T>
): SerializedScalarStateType<S, T>
```

## Parameters

| Parameter    | Type                                                     | Description                              |
| ------------ | -------------------------------------------------------- | ---------------------------------------- |
| initialState | T                                                        | The initial state                        |
| serializer   | [Serializer](./plugin.serializer.md)<!-- -->&lt;S, T&gt; | The [serializer](./plugin.serializer.md) |

<b>Returns:</b>

[SerializedScalarStateType](./plugin.serializedscalarstatetype.md)<!-- -->&lt;S, T&gt;