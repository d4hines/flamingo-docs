# Flamingo and the Tar Pit

Before we go over details of using Flamingo, we should discuss the problem
it aims to solve.

## The Software Crisis

In the late 60's, folks already knew that software was in [a crisis](https://en.wikipedia.org/wiki/Software_crisis).
Hardware is (or at least was) constantly getting faster by Moore's law, but software never seems
to get substantially easier. Thus, the major bottleneck to software today is the work of writing
it. And writing it is _hard_. More so than in perhaps any other profession, software projects
seem to go south as soon as they start, quickly becoming tarpits - so full of bugs you can't
stay where you are, but so hard to change you can't move forward.

In 2006, Ben Mosley and Peter Marks published a [paper](http://curtclifton.net/papers/MoseleyMarks06a.pdf)
giving their analysis of why we're in the software crisis. Flamingo is largely based
on the ideas in this paper.

## The Promise and Failure of Functional Programming

In the view of Mosley and Marks, the root of the problem is accidental complexity introduced
through conventional programming methods. Our programs are full of details that users don't
care about, and we consequently spend far too much energy chasing rabbit trails that never add value
to a human life. The biggest driver of complexity by far is statefulness - every bit of state
in your program doubles the possible space you need to consider and test.

Functional programming is a method of programming without the use of mutable state. Languages
like Elm and Haskell eschew state altogether, instead relying on monads. But ultimately
FP suffers from serious issues:
- FP is still algorithmic - business problems are not represented directly, but
are encoded as algebraic data structures. This is a difficult process, and one quickly
gets lost in a sea of category theory that users don't care about.
- Most FP languages are  still Turing-complete, and can easily simulate state in ways
that are just as bad as imperative programs.

Don't get me wrong - I love FP, and my goal is implement Flamingo in a dependently-typed,
total, functional language (the FP of FP, if you will). But FP comes from math, logic,
and linguistics - if you're solving down-to-earth problems and not manipulating languages
and metalanguages, FP is too powerful.

## FRP, the Missing Paradigm

In the same paper, Mosley and Marks outline a new paradigm they call Functional Relational
Programming (not to be confused with functional reactive programming, an FP paradigm).
The idea is this: pretend performance doesn't matter at all. How would you
model your problem if the only things mattered were clarity and maintainability?
You'd want a declarative language to represent logical relationships
(if/then and given/when/then). This language would have to be carefully limited to
preserve simplicity - for example, they advise against abstract data types entirely,
using simple predicates instead. Such a language might _finally_ produce tractable
systems.

Now of course, performance does matter. But, that's what compilers are for. Through
automated analysis or handwritten annotations, declarative programs can often be
optimized to produce programs that are just as fast if not faster than imperative
programs. Not to mention, PC's and mobile devices are so fast these days that
performance often _doesn't_ matter, at least not for most of the app.

The FRP system they described was purely hypothetical, and to my knowledge their
hasn't been a real implementation... until Flamingo that is!

## Flamingo, FRP Incarnate

For the last few decades at least, researchers in the field of knowledge representation have
been studying how to represent commonsense knowledge in a precise way. One powerful
tool they've developed are action languages - "controlled natural languages" that describe
cause-effect relationships. ALM is one such language. Like in other action languages, in
ALM you can write if/then and given/when/then statements directly as state constraints
and causal laws. Unlike other action langauges, ALM is highly modular, designed to support
complex reasoning libraries that can be easily and incrementally extended.

My hypothesis is that ALM _is_ the language Mosley and Marks describe. Flamingo is an experiment
in applying the FRP paradigm and ALM to web apps. Additionally, Flamingo borrows heavily
from ideas in modeling and "lightweight formal methods" a la Alloy. In 2020, we shouldn't have to 
rely on unit tests - have the machine do it for you.

Flamingo is predicated on the idea that buggy software is doomed for extinction, and that
day might be sooner than we think. Software should be simultaneously delightful, correct,
and cheap, and Flamingo is my attempt at making it so.
