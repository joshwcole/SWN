# SWN
Some tools for Stars Without Number, excuse to learn to javascript

The tool is based around the Stars Without Number. A copy of the rulebook can be found [here](https://img.4plebs.org/boards/tg/image/1366/05/1366053319764.pdf)

At present, if you would like to use these methods, you will need to run `node` from your terminal in the folder that this project is stored in. Then `require` the modules as you need them.

##core.js
**d(x)** will 'roll' a single x-sided die.

##generator.js
**generateWorld()** will generate a world and output the atmosphere, temperature, biosphere, population, tech level and world tags, as well as a possible culture for that world.

**generateSector(x)** will generate d(3) worlds for a single sector.

**name(nationality, gender)** expects the nationality to be "arb", "chi", "eng", "ind", "jap", "nig", "rus", "spa" for each of the cultures defined in the rulebook. The gender is either "m", "f", or blank.

**place(nationality)** expects "arb", "chi", "eng", "ind", "jap", "nig", "rus", "spa" as an argument and will return the name of a place for this culture.

**adventure()** will just return an adventure seed.

##Ongoing
* Generate NPC
