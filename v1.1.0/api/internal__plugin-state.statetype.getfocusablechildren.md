<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt;
[@edtr-io/internal\_\_plugin-state](./internal__plugin-state.md) &gt;
[StateType](./internal__plugin-state.statetype.md) &gt;
[getFocusableChildren](./internal__plugin-state.statetype.getfocusablechildren.md)

## StateType.getFocusableChildren() method

Gives the editor information about the children of the plugin (e.g. to build the
document tree)

<b>Signature:</b>

```typescript
getFocusableChildren(state: T): FocusableChild[];
```

## Parameters

| Parameter | Type | Description   |
| --------- | ---- | ------------- |
| state     | T    | current state |

<b>Returns:</b>

[FocusableChild](./internal__plugin-state.focusablechild.md)<!-- -->\[\]

an array of children, each described by an object with an `id`
