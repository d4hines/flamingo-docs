---
title: Intro 📃
sidebar_label: Intro
---

Implementing [TodoMVC](http://todomvc.com/) is a rite of passage for every
aspiring web technology, and Flamingo is no exception! In the coming sections,
we'll walk through an implementation of TodoMVC that uses Typescript, React
and Flamingo.

TodoMVC has a [complete specification](https://github.com/tastejs/todomvc/blob/master/app-spec.md#functionality).
This is the ideal scenario for Flamingo development, since translating the rules
in the spec into a signature and axioms will be easy. (A complete informal
specification is really the ideal scenario for _any_ project, but Flamingo makes
it particularly nice).

Flamingo's current API makes heavy use of [React Hooks](https://reactjs.org/docs/hooks-intro.html).
You'll want to have at least a basic familiarity with hooks before you continue.

:::tip Follow Along on the Repl
The implementation is hosted on the wonderful Repl.it! 
[Follow along and edit things on the fly in the repl](https://repl.it/@d4hines/flamingo-todomvc#README.md). When you're there, click the big green "Run" button
to start the app (give it some time, as it has to install quite a few npm packages).
