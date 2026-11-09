# G1 Viewer

![A hyrule hero in the G1 Viewer](images/hero.png)

The **G1 Viewer** is a file previewer and extractor for Koei Tecmo's games.
It lets you view almost all "G1" files - models, textures, animations and
effects - right in your browser. Open single files, a folder, or a game's
archive, and look at what is inside: models with their textures and motions,
cloth and hair simulated live, effects played back, whole stages built from
their placement data, sounds played. It supports games on every console from
the PS3 era to the Switch 2, and today's PC games. Models export to glTF, FBX 
and OBJ, built stages to glTF, and textures to PNG and TGA.

Note: This is NOT a modding tool. You supply every file you view. Everything
runs in the page: what you open is read in your browser and never uploaded anywhere.

### ▶ Open the viewer: **[https://hearhellacopters.github.io/G1Viewer/](https://hearhellacopters.github.io/G1Viewer/)**

[v1.0.0 change log](CHANGELOG.md)

## Supported files

| Files | Extensions | What you see |
|---|---|---|
| **Models** | `.g1m` `.g1mx` `.g1mz` | skeletons, skinned meshes and materials, levels of detail; cloth, hair and other physics simulated live |
| **Textures** | `.g1t` `.g1tl` | every pixel format and platform layout; cube, volume and array textures |
| **Motions** | `.g1a` `.g2a` | model, camera and light motions, scrubbed, looped and blended |
| **Faces and shape keys** | `.g1h` `.g1fpose` `.g1frani` | shape keys, face poses and the animations that weight them |
| **Swinging parts** | `.swg` | accessories that swing with the body, simulated |
| **Effects** | `.g1fx` `.g1e` `.g1em` | particle and mesh effects, played back on a model or a stage |
| **Shaders** | `.g1s` `.g2s` | the games' own shader programs, run in the browser (the PC, mobile, PS3 and Xbox 360 builds') |
| **Stages** | `.kidsobjdb`, Dissidia NT's `.sod` and older games' stage files | whole stages built from their placement data, with their own sky and light where the files hold them |
| **Sound** | banks and streams | every game's played, looped, and saved as it is or as `.wav` / `.ogg` |
| **Archives** | `LINKDATA`, `.rdb`, `.lnk` and more | a game's archive browsed without extracting it |

The full breakdown - every extension, sound codec, and which games' archives
open - is in **[FORMATS](FORMATS.md)**.

See full list of all features in **[FEATURES](FEATURES.md).**

[Report a problem or send samples](https://github.com/hearhellacopters/G1Viewer/issues/new/choose).

## How to

Open the link above in a current Chrome, Edge or Firefox. Then drop files or a
game's folder onto the page, or use **Open files…** / **Open folder…** under
*Loaded* to view files, or under *Archives* to browse a game archive without
extracting it. Click the **G1** icon at the top left for help - how to open a
game, build a stage, export a model, play a sound - and the full list of what
it opens; the version number beside it opens the changelog.

To run it yourself, serve this repository's files with any static web host -
it needs no server code and no configuration, and works at a domain's root or
in a subfolder. GitHub Pages serves it as it is.

## Why this repository is a build, not a source

This is a **published build** of the viewer: the page, minified, and nothing
else. The source is kept private, on purpose:

- **It is a viewer, not a mod tool.** It is made for looking at, learning
  from and extracting the games' files. It reads them; it does not repack,
  patch or write game data back.
- **The source holds reverse engineered knowledge of a proprietary engine.**
  How these formats work, and how the games' own systems behave, was worked out
  by reverse engineering. That research is not shared, out of respect for the
  developers whose work it describes.
- **No games of cat and mouse.** Keeping the source private helps
  development and long term support: fixes for new builds can happen without
  the fear of the game engine's designers changing things just to throw us off
  once they see what we already know.

## Report a problem, send samples, ask for a feature

Use **[New issue](https://github.com/hearhellacopters/G1Viewer/issues/new/choose)** and pick a form:

- **Bug report** - something does not open, looks wrong, or breaks.
- **Sample files** - a game, format or file the viewer does not handle yet, or
  handles wrongly.
- **Feature request** - something you would like the viewer to do.

What helps most:

- The **game, its platform and region**, and which files you opened;
- A **screenshot**, and for anything that looks wrong, what it should look like
  (a screenshot from the game is ideal);
- For samples: **only the files in question are needed** (the models,
  textures, sound banks or a stage's files) - attach them zipped (GitHub takes
  attachments up to 25 MB), or link to a download for larger sets. Please share
  only files from a copy of the game you own.

Search the [existing issues](https://github.com/hearhellacopters/G1Viewer/issues) first: someone may have sent
the same game already.

## Notes

- Not affiliated with or endorsed by Koei Tecmo. Game names and trademarks
  belong to their owners. No game files are included here.
- The libraries the viewer includes, and their licences:
  **[THIRD_PARTY_LICENSES](THIRD_PARTY_LICENSES.txt)**.

<!-- This README is written by the G1 Viewer's publish step from its template on every release; edit the template, not this file. -->
