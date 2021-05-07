# Calculation commands

These commands are the real meat of the features, and there are so many of them.

> remember to add a `q!` before every command! only command names are shown

## bank

just run q!bank, there is an automated system.

## cash

q!cash &lt;`cashNeeded`> &lt;`startRound`>

example:

```
q!cash 69420 5
```

this shows the round you can get `cashNeeded` if you start popping bloons in `startRound`

## chincome

q!chincome &lt;`round`> [`gamemode`] (Order doesn't matter)

example:

```
q!chincome 69 abr
```

shows 3 things:

-   Cash generated during round `round`
-   Cash generated from start of round 6 through end of round `round`
-   Cash generated from start of round `round` through end of round 100

## health

q!health &lt;`blimp`> &lt;`round`>
shows the health of `blimp` at round `round`

example:

```
q!health bfb 420
```

## herolevel

just like q!bank, this is automatic. This calculates what level a hero will reach when it is placed on a round

## herolevelby

similar to `q!herolevel`. This time in reverse, calculates when you should place a hero to get specified level by specified round.

## herolevelenergiser

similar to `q!herolevel` but with the added paramter on which round you got energiser

## income

q!income &lt;`startround`> &lt;`endround`> [`difficulty`]

example:

```
q!income 7 67
```

shows the amount of cash earned from popping all the bloons from `startround` to `endround` (in `difficulty` mode of course)

## rbe

q!rbe &lt;`startround`> &lt;`endround`> [`difficulty`]

```
q!rbe 7 67
```

shows the number of pops from popping all the bloons from `startround` to `endround` (in `difficulty` mode of course)

## speed

q!speed &lt;`blimp/bloon`> &lt;`round`>
shows the speed of `blimp/bloon` at round `round`

example:

```
q!speed pink 420
```

## yopolis

q!mp &lt;total farm cost> &lt;total farm amount>

example:

```
q!monkeyopolis 69420 4
```
