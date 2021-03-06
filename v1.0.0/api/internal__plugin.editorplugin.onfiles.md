<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@edtr-io/internal\_\_plugin](./internal__plugin.md)
&gt; [EditorPlugin](./internal__plugin.editorplugin.md) &gt;
[onFiles](./internal__plugin.editorplugin.onfiles.md)

## EditorPlugin.onFiles() method

May be provided to let the plugin respond to file \[`paste`
events\](https://developer.mozilla.org/docs/Web/API/Element/paste\_event) or
drop events

<b>Signature:</b>

```typescript
onFiles?(files: File[]): void | {
        state?: StateTypeSerializedType<S>;
    };
```

## Parameters

| Parameter | Type                | Description                                                                 |
| --------- | ------------------- | --------------------------------------------------------------------------- |
| files     | <code>File[]</code> | The \[FileList\](https://developer.mozilla.org/en-US/docs/Web/API/FileList) |

<b>Returns:</b>

`void | { state?: StateTypeSerializedType<S>; }`
