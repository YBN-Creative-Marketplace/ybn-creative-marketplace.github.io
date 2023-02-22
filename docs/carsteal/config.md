---
title: Config
---

## How to use

You can configure the script by using Convars.

If you want to know how to modify them use: 
- [Fivem docs on Convars](https://docs.fivem.net/docs/scripting-reference/convars/)

## Locale

The ressource ships with a english locale.

For adding your own one read more here: 
- [ox_lib locales](https://overextended.github.io/docs/ox_lib/Locale/Shared#setup)

## Configure 

### Platepattern

Set the npc carpattern so there cars get locked

```
. all characters
%a	letters
%c	control characters
%d	digits
%l	lower case letters
%p	punctuation characters
%s	space characters
%u	upper case letters
%w	alphanumeric characters
%x	hexadecimal digits
%z	the character with representation 0
```

In server.cfg: 
```cfg
setr carsteal:platePattern "%d%d%a%a%a%d%d"
```

### Lock npc cars

Set to true if npc cars should be locked.

```cfg
setr carsteal:lockNpcCars "true"
```

:::caution

This option should always stay on yes.

:::

### Framework

Change to the framework you are using

- esx
- **Soon** qbcore

```
set carsteal:framework "esx"
```




