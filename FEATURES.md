# Features

What the G1 Viewer opens and what it does with it. Everything runs in your
browser: files you open are read on this page and never uploaded.

## Opening files

- Open single files, a folder, or a whole game archive and browse it without
  extracting everything first.
- Game archives: `LINKDATA` sets (Ken's Rage, One Piece: Pirate Warriors,
  Trinity, Dynasty Warriors 7, Warriors Orochi 3), `.elixir.gz` packs, `.rdb`
  resource databases (Wo Long, Rise of the Ronin, Dynasty Warriors: Origins,
  Nioh 3 and others), Dissidia NT's data, `.psarc` and `.lnk`.
- Archive lists are paged, filterable (plain text or regular expressions) and
  can be named from a CSV; any entry can be saved as the file it is.
- A model opens with its textures and motions found for it, including the
  games that keep every texture as its own file.

## Models

- Skeletons, skinning, levels of detail, the opaque and transparent passes,
  cutout hair and foliage.
- Several parts on one character (a body and its garments), each with its own
  textures.
- Shape keys and face poses.
- Physically based materials for the newest games (Nioh 3, Wo Long, Rise of
  the Ronin), read the way each game's own shaders read their textures.
- Glowing materials (claws, crests, embers) with the game's own pulse.
- Eyes with iris refracted through the cornea.
- Wireframe, vertex colours, the skeleton and the texture slots on view.

## Textures

- Every pixel format and platform layout, cube and volume textures,
  thumbnails and a full preview.
- Save any texture as PNG or TGA.

## Motions

- Model, camera and light motions, scrubbable, looping and blended.
- Face animations and shape-key motions.
- Hyrule Warriors' motion cartridges and Dissidia Opera Omnia's motion packs.

## Physics

- Cloth, ponytails and hair chains, soft bodies, swinging accessories and
  surface fluid, simulated live on the playing motion.
- Wind, collision on or off, and overlays that draw what the physics acts on.
- Each system's settings shown as the file states them.

## Effects

- Particle and mesh effects played back on the model, pinned to their bones.

## Shaders and lighting

- Run the game's own shader programs on a model or a stage, mobile and PC
  builds alike.
- A soft studio light for looking at a single model; a time of day sky with
  sun shadows for stages; tone mapping.
- An endless ground grid that follows the camera and scales from a character
  to a whole district.

## Stages

- Build a stage from its placement data: its pieces, terrain and the shapes
  the game does not draw (collision, sound zones, locations), each on a toggle.

## Sound

- The games' sound banks and streams: play a cue, step through a layered
  music track, save a sound as a file players open.

## Export

- glTF, FBX and OBJ, with textures and motions.
- Save every loaded file, one by one or all at once as a zip.

## Problems, samples and requests

- Something does not open or looks wrong, a game you would like supported, or
  an idea: [open an issue on GitHub](https://github.com/hearhellacopters/G1Viewer/issues/new/choose).
  Mention the version beside the title, and the game and its platform.
