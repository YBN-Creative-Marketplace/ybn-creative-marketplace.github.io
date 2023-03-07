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

## Lockpick

### Alarm

Chance in %
```
setr carsteal:chanceToLockpickAlarm 50
```

Time in seconds
```
setr carsteal:lockpickAlarmTime 20
```

### Item

Name of the item used for lockpick

```
set carsteal:lockpickItem "lockpick"
```

How many lockpicks you can use in a given time
```
set lockpick:max_lockpicks 3
```

The time when the lockpick cooldown resets in seconds
```
set lockpick:unlock_time 60000
```

### Difficulty

Difficulty for the lockpick minigame easy/medium/hard

- More on this [here](https://overextended.github.io/docs/ox_lib/Interface/Client/skillcheck)

```
setr carsteal:lockpickDifficulty "easy"
```

How often the skillcheck should be repeated

```
setr carsteal:lockpickSkillCheckRepeats 3
```

### Animation

Animation displayed when lockpicking a car

- Dictionary
    ```
    setr carsteal:lockpickAnimationDictionary "mini@repair"
    ```

- Name
    ```
    setr carsteal:lockpickAnimationName "fixing_a_player"
    ```

- Flag
    ```
    setr carsteal:lockpickAnimationFlag 49
    ```

## Hotwire

### Alarm

Chance in %
```
setr carsteal:chanceToHotwireAlarm 50
```

Time in seconds
```
setr carsteal:hotwireAlarmTime 20
```

### Item

Name of the item used for hotwire

```
set carsteal:hotwireItem "hotwire"
```

### Difficulty

Difficulty for the hotwire minigame easy/medium/hard

- More on this [here](https://overextended.github.io/docs/ox_lib/Interface/Client/skillcheck)

```
setr carsteal:hotwireDifficulty "easy"
```

How often the skillcheck should be repeated

```
setr carsteal:hotwireSkillCheckRepeats 3
```

### Animation

Animation displayed when hotwireing a car

- Dictionary
    ```
    setr carsteal:hotwireAnimationDictionary "mini@repair"
    ```

- Name
    ```
    setr carsteal:hotwireAnimationName "fixing_a_player"
    ```

- Flag
    ```
    setr carsteal:hotwireAnimationFlag 49
    ```

## Search

### Time

Time in seconds for the player search the car

```
setr carsteal:search_time 10
```

### Items

Items that can be found

(itemname) / (minAmount) / (maxAmount) / (chanceInPercent)

```
setr carsteal:search_items [
    ["bread", 1, 2, 100],
    ["water", 1, 2, 50]
]
```

### Animation

Animation displayed when searching the car

- Dictionary
    ```
    setr carsteal:searchAnimationDictionary "amb@world_human_gardener_plant@male@base"
    ```

- Name
    ```
    setr carsteal:hotwireAnimationName "base"
    ```

- Flag
    ```
    setr carsteal:hotwireAnimationFlag 49
    ```

