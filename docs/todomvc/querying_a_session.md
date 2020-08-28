---
title: Querying a Session ❔
sidebar_label: Creating a Session
---

Once we've created a session, we can _query_ it
for any data our components might need. Querying
using the same language we learned for writing axioms.

As an example, here are some function signatures from
our todo list specification:

```alm
fluents
    basic
    ...
    active_filter: filters
    ...

    defined
        ...
        visible : todos -> booleans
        ...
```

This means that, at any given state, our session has
some facts about the active filter and visible todos.

We can access those facts with a query using the
`useQuery` hook.

```jsx
useQuery("visible(Todo). active_filter = ActiveFilter.") 
```

This query says: "Find me all the values of the variables `Todo`
and `ActiveFilter` that make `visible(Todo)` and `activeFilter = ActiveFilter`
true. Flamingo will think about it and then package them up in
a nice object for you, where each variable is a key:

```jsx
const { ActiveFilter, Todo } = useQuery("visible(Todo). active_filter = ActiveFilter.");
```

If the variable is in the _return_ position of a function, its key will contain
a single value, since, by definition, a function can only yield one value at a time.
Conversely, if the variable is an an _argument_ position of a function, its key
will contain an array of the results, since there are potentially many values.
