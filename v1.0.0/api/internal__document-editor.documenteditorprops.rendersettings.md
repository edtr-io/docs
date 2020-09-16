<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@edtr-io/internal\_\_document-editor](./internal__document-editor.md) &gt; [DocumentEditorProps](./internal__document-editor.documenteditorprops.md) &gt; [renderSettings](./internal__document-editor.documenteditorprops.rendersettings.md)

## DocumentEditorProps.renderSettings() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Render prop to override rendering of settings

<b>Signature:</b>

```typescript
renderSettings?(children: React.ReactNode, { close }: {
        close(): void;
    }): React.ReactNode;
```

## Parameters

| Parameter | Type                                                                | Description           |
| --------- | ------------------------------------------------------------------- | --------------------- |
| children  | <code>React.ReactNode</code>                                        | the rendered settings |
| { close } | <code>{</code><br/><code> close(): void;</code><br/><code> }</code> |                       |

<b>Returns:</b>

`React.ReactNode`

the newly rendered settings