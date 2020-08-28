---
title: Creating a Session 🌐
sidebar_label: Creating a Session
---

We're finally ready to start using Flamingo from React!

The first step is to create a session. Creating a session is
simple. Here's the syntax:
```jsx
import { Provider, createSession } from 'flamingo';
export const App = () => (
  <Provider session={createSession(logic)}>
    <div>
        ... The rest of your app ...
    </div>
  </Provider>
);
```

You can create different sessions for different sections of
your app. However, think twice before you do so. Using
multiple sessions has the one benefit of keeping things localized,
which can make them easier to grok. However, it has several drawbacks:
- Flamingo can't verify the interactions of the two programs automatically
for you.
- There are inevitably entanglements between the different sections of apps.
If they haven't happened yet, just wait - the requirements will change and
your business logic will require a little bit of information from each section.

It's usually better to keep everything in a single session until you're
absolutely sure you need to break it apart. Fortunately, ~~Flamingo's
module system was designed to keep things contained and easy to grok
as your systems grow.~~[[1](#1)]




----------------
[<a name="1">1</a>]: ALM stands for the _Action Language with Modules_... but...
I haven't actually implemented its module system in Flamingo yet 😅.
