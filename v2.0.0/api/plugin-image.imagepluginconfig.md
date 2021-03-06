<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@edtr-io/plugin-image](./plugin-image.md) &gt;
[ImagePluginConfig](./plugin-image.imagepluginconfig.md)

## ImagePluginConfig interface

<b>Signature:</b>

```typescript
export interface ImagePluginConfig
```

## Properties

| Property                                                        | Type                                                                                                                                                                                                                                                                                                                                                          | Description       |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [i18n](./plugin-image.imagepluginconfig.i18n.md)                | { label: string; failedUploadMessage: string; src: { label: string; placeholder: { empty: string; uploading: string; failed: string; }; retryLabel: string; }; link: { href: { label: string; placeholder: string; }; openInNewTab: { label: string; }; }; alt: { label: string; placeholder: string; }; maxWidth: { label: string; placeholder: string; }; } |                   |
| [secondInput?](./plugin-image.imagepluginconfig.secondinput.md) | 'description' \| 'link'                                                                                                                                                                                                                                                                                                                                       | <i>(Optional)</i> |
| [upload](./plugin-image.imagepluginconfig.upload.md)            | UploadHandler&lt;string&gt;                                                                                                                                                                                                                                                                                                                                   |                   |
| [validate](./plugin-image.imagepluginconfig.validate.md)        | UploadValidator                                                                                                                                                                                                                                                                                                                                               |                   |
