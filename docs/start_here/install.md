---
title: Installing Flamingo 📦
sidebar_label: Installing Flamingo
---

Installing Flamingo is easy! Just grab it from NPM:

```
npm i -g flamingo-lang
```

Additionally, if you want to do automatic verification,
you'll need the Clingo ASP solver somewhere on your
path.

On Mac, you can install with homebrew:

```
brew install clingo
```

For Debian/Ubuntu Linux, you can install from the Debian
Package Registry. For historical reasons it's called Gringo there.
```
sudo apt install gringo
```

On Windows, you'll have to download the latest executable
from the [Clingo Releases](https://github.com/potassco/clingo/releases)
page and [add it to the path yourself](https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/)
