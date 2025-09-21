🔵 🟢 🔴 ➡️ ⏺️ ⭕ 🟠 🟦 🟣 🟥 🟧 ✔️ ☑️ • ‣ → ⁕

# useMemo

- useMemo only memoizes the result of a computation inside a component.
- It prevents re-computation of expensive functions within that component’s render cycle, if the dependencies don’t change.
- It does not control whether the component itself re-renders — React decides re-rendering based on props, state, or context updates.

### ➡️ Case 1: Props (state passed from parent)

- If the parent passes down the same value (reference-stable), useMemo can prevent recomputation.
- But if the parent creates a new object/array/function on each render, useMemo in the child won’t help unless - - You also wrap those values in useMemo/useCallback in the parent.

### ➡️ Case 2: Internal state

- If your component’s own state updates, the component must re-render.
- But useMemo still works for avoiding re-running expensive calculations during that re-render.
- It just won’t prevent the re-render itself.

### ➡️ Case 3: Context

- When context changes, all consumers re-render.
- useMemo can still avoid recomputing heavy values inside, but it cannot prevent the component from re-rendering.
- If you want to avoid re-rendering due to context, you usually need:
  - Context selector pattern (useContextSelector from use-context-selector library)
  - Or splitting context into smaller providers.
