---
title: Architecture Overview 🏛️
sidebar_label: Architecture Overveiw
---

Before we get into the nitty-gritty, a high-level overview of
the architecture of Flamingo+React apps will help us keep our
bearings. 

Flamingo uses the [_Flux Architecture_](https://krasimirtsonev.com/blog/article/dissection-of-flux-architecture-or-how-to-write-your-own-react).
The Flux Architecture
is really just the [Elm Architecture](https://guide.elm-lang.org/architecture/), which is refined,
minimalistic version of
[Functional Reactive Programming](https://en.wikipedia.org/wiki/Functional_reactive_programming).

As a quick refresher, the basic idea is a _unidirectional flow of data_, as in this diagram:
![](https://krasimirtsonev.com/blog/article/dissection-of-flux-architecture-or-how-to-write-your-own-react/assets/fluxiny_basic_flux_architecture.jpg).

Note that:
- The views dispatch actions as result of DOM events, etc.
- The dispatcher updates the store.
- The store updates its state based on pure functions. This makes
state transitions predicable and easy to test.
- The updated state is pushed to the views via queries, resulting in
the display of a new state, and the cycle repeats.

Additionally, "side-band" actions can occur from HTTP events, etc (hence
the lone action in bottom-left field in the diagram).

As it turns out, decades before we were all writing React, the AI/robotics
research community called this pattern the Sense-Think-Act:
- The agent (think robot) _senses_ his environment. In our case, he
might observe a DOM event.
- The agent _thinks_ about how to respond. The Flamingo runtime will
use your ALM specification to do this.
- The agent _acts_ accordingly. This corresponds to updating the DOM
in our views.

In our case, the _think_ act is very simple - the only DOM only
has to do a single update, and then it can rest, waiting for the
next user input. In its traditional setting, ALM was used to do
_planning_, where the agent comes up with a sequence of actions
to perform to achieve some desired goal. Maybe in the future
Flamingo will be used for robotics and video games, but for now,
we'll stick to UI.

Speaking of, our basic structure will be this:
- At the top level of our program, we'll create a _session_, an
in-memory database you can query and update via actions.
- We'll pass this session to all our components via [React Context](https://reactjs.org/docs/context.html).
- Components will query the session for whatever data they need by subscribing via hooks.
- Components will dispatch actions to update the state.

The third bullet point is a major difference between, Flamingo and, say, Redux. In Redux,
the typical pattern is to have a few "smart components" that retrieve data from the store
via selectors, and then feed the data as well as any callbacks to many "dumb components" by
prop-drilling.

By contrast, in Flamingo, we can express very precise, powerful queries in the same language
as writing axioms. This eliminates the need for selectors entirely - queries _are_ the selectors.
Additionally, in this TodoMVC example, every component queries for its own data, making every
component a "smart component". Who knows? Maybe this a terrible idea - Flamingo best practices
are still yet to be discovered and codified. But I offer two items in defense of this integrated
approach:
- This dramatically reduces the amount of boilerplate needed. Compared with the React Hooks
example this code was forked from, the Flamingo version is nearly 1/2 as much code.
- While this technically ruins some of the blissful simplicity of testing dumb components,
it makes it easy to move _all_ the logic into Flamingo, where we have far more powerful
verification tools.

Flamingo is an adventure in finding the sweet-spot among the opposing forces of code agility,
formal verification, and maintainability. We're still figuring it all out, so let us know
if you have opinions!
