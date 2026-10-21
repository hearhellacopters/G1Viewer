# Supported files

What the G1 Viewer reads, in more detail than the [README](README.md). Open
any of these on their own, a folder of them, or straight out of a game's
archive. Everything is read in your browser; nothing is uploaded.

[Back to the README](README.md) · [All features](FEATURES.md) · [What changed](CHANGELOG.md)

## Models

| Extensions | What is read |
|---|---|
| `.g1m` `.g1mx` `.g1mz` | skeletons, skinned meshes, materials and their texture slots, levels of detail, collision shapes, and the physics a model carries (cloth, hair and ponytail chains, soft bodies, surface fluid), simulated live |
| `.g1co` | an object's collision, drawn on a toggle |

A model opens with the textures and motions found for it, including games
that keep every texture in a file of its own, and the small files the newer
games keep beside a model are followed for you. Several parts of one character
(a body and its garments) load together, each with its own textures.

## Textures

| Extensions | What is read |
|---|---|
| `.g1t` | every pixel format these games use, on every platform's memory layout (PS3, Xbox 360, Wii, Vita, 3DS, PS4, PS5, Switch, PC, mobile); cube, volume and array textures |
| `.g1tl` | the palettes Wii textures use |
| `.g1t.dz` `.g1m.dz` | Dissidia Final Fantasy Opera Omnia's compressed files |

## Motions

| Extensions | What is read |
|---|---|
| `.g1a` `.g2a` | model, camera and light motions: scrubbed, looped and blended |
| `.g1h` | shape keys, played as morph targets |
| `.g1fpose` `.g1frani` | face poses and the animations that weight them |
| motion packs | Hyrule Warriors' motion cartridges, Dissidia Final Fantasy Opera Omnia's motion packs |

Characters from the newer games play their actions - motion, effects and
sounds together - as the game lists them.

## Physics

| Extensions | What is read |
|---|---|
| `.swg` | swinging accessories, every kind, simulated |
| in the model | cloth, hair and ponytail chains, soft bodies and surface fluid, simulated on the playing motion, with their collision |

## Effects

| Extensions | What is read |
|---|---|
| `.g1fx` `.g1e` | particle and mesh effects, played back on the model and pinned to their bones |
| `.g1em` | the meshes effects draw |

## Shaders

| Extensions | What is read |
|---|---|
| `.g1s` `.g2s` | the games' own shader programs, run in the browser on a model or a stage: the mobile games', and the PC builds of Wo Long, Rise of the Ronin and Dissidia NT |

## Stages and object data

| Extensions | What is read |
|---|---|
| `.kidsobjdb` `.kidssingletondb` `.kidsscndb` | the newer games' object and scene databases: a stage built from its placement data, with its terrain, plants, water and the shapes the game does not draw (collision, sound zones, locations), each on a toggle; its sun, sky and camera look where the files hold them |
| `.ktid` | which textures a model takes |
| older games' stage files | Dynasty Warriors 7 and 8, Warriors Orochi 3, Samurai Warriors 3, Trinity, Ken's Rage, One Piece: Pirate Warriors, Bladestorm, Samurai Warriors: Katana and the 3DS games: ground, objects, water, levels of detail, and their light, fog and baked shadows |

## Sound

| Kind | Read |
|---|---|
| Sound banks and streams | `.ktsl2asbin` `.ktsl2stbin` and their packs, `.ktss`, `.kvs` (Ogg), `.g1l`, KWB wave banks, `.sed`, Gust's `.fp` packs, Dissidia Final Fantasy Opera Omnia's banks, 3DS sound archives |
| Codecs | HCA (keys for encrypted ones), Ogg Vorbis, KA1A, ATRAC3, ATRAC3plus, ATRAC9, XMA, WMA Pro, Nintendo DSP, PCM and ADPCM |

Play a sound, loop and seek it, step through a layered music track, and save
it as stored or decoded to `.ogg` or `.wav`.

## Game archives

Browse a game's archive without extracting it first: lists are paged and
filterable, and any entry can be saved as the file it is.

| Archive | Opened on |
|---|---|
| `LINKDATA` sets (`.IDX` / `.BIN`, `.A` / `.B` / `.C`, `.BNS`) | Ken's Rage, One Piece: Pirate Warriors, Trinity: Souls of Zill O'll, Dynasty Warriors 7 (PS3); Dynasty Warriors 7 and 8, Warriors Orochi 3, Bladestorm (Xbox 360); Samurai Warriors 3, Samurai Warriors: Katana (Wii); Attack on Titan, Samurai Warriors 4, Toukiden 2 (Vita); Toukiden, Toukiden Kiwami, Dynasty Warriors (PSP); Fire Emblem Warriors, Hyrule Warriors Legends, Yo-kai Sangokushi (3DS); Berserk and the Band of the Hawk (PS4); Fire Emblem: Three Houses, Hyrule Warriors: Age of Calamity (Switch); Samurai Warriors 5 (PC) |
| `.rdb` resource databases | Wo Long: Fallen Dynasty, Dynasty Warriors: Origins, Rise of the Ronin, Samurai Warriors 5, Nioh 3 (PC); Stranger of Paradise (PS5); Fairy Tail, Hyrule Warriors: Age of Calamity, Atelier Yumia (Switch) |
| `.lnk` and `archive_NN.bin` | Wo Long, Rise of the Ronin, Nioh 3 (PC); Dead or Alive 5 and Last Round (PS3) |
| `.elixir.gz` packs | Nights of Azure (PS3) |
| packed data | Dissidia Final Fantasy NT (PC), Nioh 2's resource packs (PS4) |
| `.psarc` | Ninja Gaiden 3 (PS3) |

Some of these games keep their models in other studios' formats (Dead or
Alive 5, Ninja Gaiden 3): their archives open, but there is nothing for the
viewer to draw. Wii games' own models (`.brres`) and textures (`.tpl`) draw
as well.

## Export

| From | To |
|---|---|
| Models, with textures and motions | glTF, FBX, OBJ |
| Textures | PNG, TGA |
| Sounds | as stored, `.ogg`, `.wav` |
| Everything loaded | one file at a time, or all of it as a zip |

## Missing something?

A game, file or format that does not open, or opens wrongly:
[send samples](https://github.com/hearhellacopters/G1Viewer/issues/new/choose).
