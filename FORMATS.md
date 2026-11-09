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
| `.g1mx` with `.g1p` and `.g1cox` | a breakable object: its pieces, their bodies and their collision, assembled - intact, in pieces where they stand, or exploded - on its own or where a stage places it |
| `.grbf` | a face's slider rig, run every frame: its control joints drive its shape keys |

A model opens with the textures and motions found for it, including games
that keep every texture in a file of its own, and the small files the newer
games keep beside a model are followed for you. Several parts of one character
(a body and its garments) load together, each with its own textures.

## Textures

| Extensions | What is read |
|---|---|
| `.g1t` | every pixel format these games use, on every platform's memory layout (PS3, Xbox 360, Wii, Vita, 3DS, PS4, PS5, Switch, Switch 2, PC, mobile); cube, volume and array textures |
| `.g1tl` | the palettes Wii textures use |

## Compressed files

| Extensions | What is read |
|---|---|
| `.dz` `.gz` | compression around another file, not a format of their own: zlib in chunks or streams, big or little endian (the order is worked out from the data, since nothing in the file says it). What is inside is opened for what it is, by its own header first and then its name - Dissidia Final Fantasy Opera Omnia's `.g1t.dz` and `.g1m.dz`, Nights of Azure's `.elixir.gz`, Hyrule Warriors' `.bin.gz` |

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
| `.g1fx` `.g1e` | particle, ribbon and mesh effects, played back on a model and pinned to its bones, or where a stage places them |
| `.g1em` | the meshes effects draw |

## Shaders

| Extensions | What is read |
|---|---|
| `.g1s` `.g2s` | the games' own shader programs, run in the browser on a model or a stage: the mobile builds' (OpenGL), the PC builds' (DX11 and DX12), the PS3's and the Xbox 360's. The other consoles' programs are compiled for graphics chips nothing here translates, so their models use the viewer's own shading; the Wii has no shader programs |

## Stages and object data

| Extensions | What is read |
|---|---|
| `.kidsobjdb` `.kidssingletondb` `.kidsscndb` | the newer games' object and scene databases: a stage built from its placement data, with its terrain, plants, water and the shapes the game does not draw (collision, sound zones, locations), each on a toggle; its sun, sky and camera look where the files hold them |
| `.sod` | Dissidia Final Fantasy NT's stages: pieces, ground, water, grass, sky, lightmaps and effects, in the stage's own light |
| `.ktid` | which textures a model takes |
| older games' stage files | Dynasty Warriors 7 and 8, Warriors Orochi 3, Samurai Warriors 3, Trinity, Ken's Rage, One Piece: Pirate Warriors, Bladestorm, Samurai Warriors: Katana and the 3DS games: ground, objects, water, levels of detail, and their light, fog and baked shadows |

## Sound

| Kind | Read |
|---|---|
| Sound banks and streams | `.ktsl2asbin` `.ktsl2stbin` and their packs, `.ktss`, `.kvs` (Ogg), `.g1l`, KWB wave banks, `.sed`, Gust's `.fp` packs and `.wh2` / `.wb2`, Dissidia Final Fantasy Opera Omnia's banks, the Wii's `.brsar` and the NintendoWare streams, 3DS sound archives, the PS3's `MSFBANK`s, KMATs and `.at3`, the Vita's `.at9`, plain `.wav` |
| Codecs | HCA (keys for encrypted ones), Ogg Vorbis, Opus, KA1A, ATRAC3, ATRAC3plus, ATRAC9, XMA, WMA, Nintendo DSP, PCM and ADPCM |

Every sound of every game in the Games tab has been played through the viewer.
Play a sound, loop and seek it, step through a layered music track, and save
it as stored or decoded to `.wav` (or the `.ogg` / `.opus` inside it).

## Game archives

Browse a game's archive without extracting it first: lists are paged and
filterable, and any entry can be saved as the file it is.

| Archive | Opened on |
|---|---|
| `LINKDATA` sets (`.IDX` / `.BIN`, `.A` / `.B` / `.C`, `.BNS`) | Ken's Rage, One Piece: Pirate Warriors, Trinity: Souls of Zill O'll, Dynasty Warriors 7 and 7 Empires (PS3); Dynasty Warriors 7 and 8, Warriors Orochi 3, Bladestorm (Xbox 360); Samurai Warriors 3, Samurai Warriors: Katana (Wii); Hyrule Warriors, Ken's Rage 2 (Wii U); Attack on Titan 1 and 2, Samurai Warriors 4, Toukiden 2 (Vita); Toukiden, Toukiden Kiwami, Dynasty Warriors (PSP); Fire Emblem Warriors, Hyrule Warriors Legends, Yo-kai Sangokushi (3DS); Berserk and the Band of the Hawk (PS4); Fire Emblem: Three Houses, Hyrule Warriors: Age of Calamity (Switch); Samurai Warriors 5, Persona 5 Strikers (PC) |
| `.rdb` resource databases | Wo Long: Fallen Dynasty, Dynasty Warriors: Origins, Rise of the Ronin, Samurai Warriors 5, Nioh 3, Persona 5 Strikers, Venus Vacation PRISM (PC); Stranger of Paradise (PS5); Fairy Tail, Hyrule Warriors: Age of Calamity, Atelier Yumia (Switch); Pokopia (Switch 2) |
| `.lnk` and `archive_NN.bin` | Wo Long, Rise of the Ronin, Nioh 3, Venus Vacation PRISM (PC); Dead or Alive 5 and Last Round (PS3) |
| Gust `.PAK` | Atelier Sophie DX (PC) |
| `.elixir.gz` packs | Nights of Azure (PS3) |
| package table | Dissidia Final Fantasy NT (PC), every file named |
| resource packs | Nioh 2 (PS4) |
| `.psarc` | Ninja Gaiden 3 (PS3) |

Some of these games keep their models in other studios' formats (Dead or
Alive 5, Ninja Gaiden 3): their archives open, but there is nothing for the
viewer to draw. Wii games' own models (`.brres`) and textures (`.tpl`) draw
as well.

## Export

| From | To |
|---|---|
| Models, with textures and motions | glTF, FBX, OBJ |
| A built stage | glTF, one file |
| Textures | PNG, TGA |
| Sounds | as stored, `.wav`, or the `.ogg` / `.opus` inside |
| Everything loaded | one file at a time, or all of it as a zip |

## Missing something?

A game, file or format that does not open, or opens wrongly:
[send samples](https://github.com/hearhellacopters/G1Viewer/issues/new/choose).
