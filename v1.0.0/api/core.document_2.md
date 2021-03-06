<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@edtr-io/core](./core.md) &gt;
[Document_2](./core.document_2.md)

## Document_2() function

> This API is provided as a preview for developers and may change based on
> feedback that we receive. Do not use this API in a production environment.

Renders an editor for an Edtr.io document

<b>Signature:</b>

```typescript
export declare function Document<K extends string = string>(
  props: Omit<EditorProps<K>, 'initialState'> & {
    scope: string
  } & (
      | {
          mirror: true
          initialState?: unknown
        }
      | {
          mirror?: false
          initialState: EditorProps<K>['initialState']
        }
    )
): JSX.Element | null
```

## Parameters

| Parameter | Type                                                                                                                                                                                                                                                                                                                                                                 | Description                                         |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| props     | <code>Omit&lt;EditorProps&lt;K&gt;, 'initialState'&gt; &amp; {</code><br/><code> scope: string;</code><br/><code>} &amp; ({</code><br/><code> mirror: true;</code><br/><code> initialState?: unknown;</code><br/><code>} &#124; {</code><br/><code> mirror?: false;</code><br/><code> initialState: EditorProps&lt;K&gt;['initialState'];</code><br/><code>})</code> | The [props](./core.editorprops.md) for the document |

<b>Returns:</b>

`JSX.Element | null`
