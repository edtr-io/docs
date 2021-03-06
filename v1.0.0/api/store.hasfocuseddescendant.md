<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@edtr-io/store](./store.md) &gt;
[hasFocusedDescendant](./store.hasfocuseddescendant.md)

## hasFocusedDescendant variable

\[\[Selector\]\] that checks whether the document with the given id has a
focused descendant. In contrast to \[\[hasFocusedChild\]\], this also returns
`true` if the focused document is an indirect child (e.g. a child of a child of
a child).

<b>Signature:</b>

```typescript
hasFocusedDescendant: Selector<boolean, [string]>
```
