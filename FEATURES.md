# Features

What the G1 Viewer opens and what it does with it. Everything runs in your
browser: files you open are read on this page and never uploaded.

## Opening games and files

- Open a whole game with **File > Open game folder…**, or by dragging its folder
  onto the page: every archive in it is listed, to browse without extracting
  anything first. The Games tab lists the 42 games it has been checked
  against, from the PS3 and Xbox 360 to the Switch 2 and today's PC games.
- The games' own archives, of every era: the `LINKDATA` family and its
  relatives on the PS3, Xbox 360, Wii, Wii U, Vita, PSP, 3DS and PS4; `.rdb`
  resource databases on PC, PS5, Switch and Switch 2 (Wo Long, Rise of the
  Ronin, Nioh 3, Dynasty Warriors: Origins, Stranger of Paradise, Pokopia and
  others); Dissidia NT's package table;
  Gust `.PAK`, `.elixir.gz`, `.psarc` and `.lnk`.
- Archive lists are paged and filterable (plain text or regular
  expressions), can name every entry's type, and can be named from a CSV; any
  entry can be saved as the file it is.
- A model opens with its textures and motions found for it, including the
  games that keep every texture as its own file.

## Models

- Skeletons, skinning, levels of detail, the opaque and transparent passes,
  cutout hair and foliage.
- Several parts on one character (a body and its garments), each with its own
  textures.
- Shape keys and face poses; face sliders, where the face carries a rig.
- Physically based materials for the newest games (Nioh 3, Wo Long, Rise of
  the Ronin), read the way each game's own shaders read their textures.
- Glowing materials (claws, crests, embers) with the game's own pulse; skin
  with light under its surface, ears and leaves lit from behind, eyes with
  their catchlights and a refracting cornea, and fur drawn as the game layers
  it.
- Breakable objects assembled from their pieces - intact, in pieces or
  exploded - with each piece's collision, on their own or on a stage.
- Wireframe, vertex colours, the skeleton and the texture slots on view.

## Textures

- Every pixel format and platform layout, cube and volume textures,
  thumbnails and a full preview.
- Save any texture as PNG or TGA.

## Motions

- Model, camera and light motions, scrubbable, looping and blended, with the
  additive layers an action plays and its cutscene cameras.
- Face animations and shape-key motions.
- Hyrule Warriors' motion cartridges and Dissidia Opera Omnia's motion packs.

## Physics

- Cloth, ponytails and hair chains, soft bodies, swinging accessories and
  surface fluid, simulated live on the playing motion.
- Wind, collision on or off, and overlays that draw what the physics acts on.
- Each system's settings shown as the file states them.

## Effects

- Particle, ribbon and mesh effects played back on a model, pinned to their
  bones, or placed on a stage where the stage places them.
- As bright as their files say, with refraction, soft particles and animated
  textures drawn as the games draw them.

## Shaders and lighting

- Run the game's own shader programs on a model or a stage (View > KTGL
  shaders): the mobile builds' (OpenGL), the PC builds' (DX11 and DX12), the
  PS3's and the Xbox 360's. The other consoles' programs are compiled for
  graphics chips nothing here translates, so their models use the viewer's
  shading; the Wii has none to run.
- A soft studio light for looking at a single model, with the model's own
  shadows and ambient occlusion, and a time of day sky with sun shadows.
- A stage in its own light: its hours, weather and areas to pick from, each
  with its sun, sky, bloom, tone curve, fog, exposure and depth of field.
- An endless ground grid that follows the camera and scales from a character
  to a whole district.

## Stages

- The newer games' stages, built whole from their placement data: pieces,
  terrain, rivers, decals, grass, lightmaps and effects, with the shapes the
  game does not draw (collision, sound zones, locations) on toggles.
- Dissidia NT's stages, from their `.sod`, with their effects, water, grass,
  sky and reflections.
- The older games' stages, from their stage files: Dynasty Warriors 7 and 8,
  Warriors Orochi 3, Ken's Rage, One Piece, Trinity, Bladestorm, Samurai
  Warriors 3 and Katana, and the 3DS games (Help tab: Build a stage).

## Sound

- Every sound bank and stream form of the games in the Games tab, decoded in
  the page: each sound plays in the player, looping where the game loops it,
  a layered track one layer at a time.
- Save a sound as it is, or decoded as a `.wav` (or the `.ogg` / `.opus`
  inside it).

## Export

- Models as glTF, FBX or OBJ, with their skeletons, skins, materials,
  textures, shape keys and motions; a built stage as one glTF file.
- Textures as PNG or TGA; every loaded file as it is, one by one or all at
  once in a zip.

## As the game draws it, or the viewer's own

- **As the game:** models, skinning and textures; motions; the cloth,
  ponytail and swing solvers where the engine's are traced; the newer games'
  materials and their stages' light, fog, exposure and shadow strength, read
  from the game's own data; the game's shader programs, where they run.
- **The viewer's own:** the studio light; the shadow map and light
  scattering under a stage's own light; the lighting model under the
  physically based materials; a few physics values the files do not hold.
- **Not drawn yet**, for the newer games: weathering (wet, dirt, blood), the
  lens flare's ghosts, motion blur, the HDR colour grading. The Games tab
  lists each game's known gaps.

## Problems, samples and requests

- Something does not open or looks wrong, a game you would like supported, or
  an idea: [open an issue on GitHub](https://github.com/hearhellacopters/G1Viewer/issues/new/choose).
  Mention the version beside the title, and the game and its platform.
