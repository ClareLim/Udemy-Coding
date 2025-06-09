### `article span { background-color: pink; }`

✅ **Selector Meaning**:
 Selects **all `span` elements** that are **descendants** of an `article` element — this includes:

- Direct children
- **Nested elements at any depth**

**Example matched HTML**:

```
html

<article>
  <div>
    <p>
      <span>This span will be pink</span>
    </p>
  </div>
</article>
```

### 2. `article > span { background-color: yellow; }`

✅ **Selector Meaning**:
 Selects only the `span` elements that are **direct children** of an `article` element — not nested deeper.

**Example matched HTML**:

```
html


CopyEdit
<article>
  <span>This span will be yellow</span>
</article>
```

But **not**:

```
html


CopyEdit
<article>
  <div>
    <span>This span will NOT be yellow</span>
  </div>
</article>
```

------

### Summary of the Difference

| Selector         | Matches all nested `span`s | Only direct `span` children |
| ---------------- | -------------------------- | --------------------------- |
| `article span`   | ✅ Yes                      | ❌                           |
| `article > span` | ❌                          | ✅ Yes                       |



So if both rules apply to the same `span`, the one with **more specificity or declared later in the CSS** will take precedence.

Let me know if you’d like an example with both styles applied in practice!