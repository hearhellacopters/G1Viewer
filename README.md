# G1 Viewer

### ▶ Open the viewer: **[https://hearhellacopters.github.io/G1Viewer/](https://hearhellacopters.github.io/G1Viewer/)**

Version 0.5.0 · [What's in it](FEATURES.md) · [What changed](CHANGELOG.md) · [Report a problem or send samples](https://github.com/hearhellacopters/G1Viewer/issues/new/choose)

A viewer for the model, texture, motion, physics and effect files of Koei
Tecmo's games, in your browser. Open single files, a folder, or a game's
archive, and look at what is inside: models with their textures and motions,
cloth and hair simulated live, effects played back, whole stages built from
their placement data, sounds played. Models export to glTF, FBX and OBJ, and
textures to PNG and TGA.

**Your files stay with you.** Everything runs in the page: what you open is
read in your browser and never uploaded anywhere.

## Using it

Open the link above in a current Chrome, Edge or Firefox. Then drop files onto
the page, or use **Open files…** / **Open folder…** under *Loaded* to view
files, or under *Archives* to browse a game archive without extracting it.
Click **G1 Viewer** at the top left for the full list of what it opens, and
the version number beside it for the changelog.

To run it yourself, serve this repository's files with any static web host -
it needs no server code and no configuration, and works at a domain's root or
in a subfolder. GitHub Pages serves it as it is.

## Why this repository has the build, not the source

This is the **published build** of the viewer: the page, minified, and nothing
else. The source is kept private, on purpose:

- **It is a viewer, not a mod tool.** It is made for looking at and learning
  from the games' files. It reads them; it does not repack, patch or write game
  data back.
- **The source holds reverse engineered knowledge of a proprietary engine.**
  How these formats work, and how the games' own systems behave, was worked out
  by reverse engineering. That research is not shared, out of respect for the
  developers whose work it describes.
- **One source, one place to fix things.** Keeping the source in one place
  makes ongoing development and support practical: fixes and new games arrive
  here as new builds, and every report is against a build anyone can open.

## Report a problem, send samples, ask for a feature

Use **[New issue](https://github.com/hearhellacopters/G1Viewer/issues/new/choose)** and pick a form:

- **Bug report** - something does not open, looks wrong, or breaks.
- **Sample files** - a game, format or file the viewer does not handle yet, or
  handles wrongly.
- **Feature request** - something you would like the viewer to do.

What helps most:

- the **viewer version** (beside the title at the top left) and your browser;
- the **game, its platform and region**, and which files you opened;
- a **screenshot**, and for anything that looks wrong, what it should look like
  (a screenshot from the game is ideal);
- for samples: **only the files needed** - attach them zipped (GitHub takes
  attachments up to 25 MB), or link to a download for larger sets. Please share
  only files from a copy of the game you own.

Search the [existing issues](https://github.com/hearhellacopters/G1Viewer/issues) first: someone may have sent
the same game already.

## Notes

- Not affiliated with or endorsed by Koei Tecmo. Game names and trademarks
  belong to their owners. No game files are included here.
- The libraries the viewer includes, and their licences:
  [THIRD_PARTY_LICENSES.txt](THIRD_PARTY_LICENSES.txt).

<!-- This README is written by the G1 Viewer's publish step from its template on every release; edit the template, not this file. -->
