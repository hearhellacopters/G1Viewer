# Changelog

What changed in each version of the G1 Viewer, newest first.

## 0.6.0 (2026-10-20)

### Models and materials
- Nioh 3's eyes draw their irises, refracted through the cornea as the game lays them on
- Nioh 3's glowing materials (the boss's claws, crest and wing edges) glow and pulse as in the game, with a glow slider under View > materials
- Nioh 3, Wo Long and Rise of the Ronin models draw with physically based materials, their roughness, reflectance and occlusion read from their specular maps the way each game's shader reads them (View > materials), on placed stage pieces too
- Nioh 3's tiled detail layers draw: fine surface normals, and on some materials a second colour, roughness and occlusion, picked per texel by the material's mask
- Nioh 3's hair is lit as strands, with the shifted highlight and its coloured second one running along the hair
- Rim light where a material sets one (Nioh 3's spirit creatures)
- Materials whose game shader cuts out alpha now draw as cutouts
- Samurai Warriors 3's and Samurai Warriors: Katana's Wii models draw textured, paletted and TPL textures included
- Dynasty Warriors: Gundam's models, the oldest G1M version, open
- Dynasty Warriors 7's and Bladestorm's characters, equipment and objects find the textures the game gives them
- The Scene tab's textures follow the model picker, so a new model no longer keeps the last one's textures

### Textures
- PS3 tiled textures, short-stored Xbox 360 block textures, odd-sized DirectX 12 textures (Rise of the Ronin's landscape sheets) and the 3DS's uncompressed formats decode whole
- The Textures tab shows a G1T's signed distance field settings
- DFFOO's compressed .g1t.dz and .g1m.dz files open on their own

### Motions
- Samurai Warriors 3's character motions play
- Rise of the Ronin's and the Nioh 3 demo's characters play their actions, sounds included, with each sound listed to mute or play on its own
- A clip played once with repeat off plays again from the start

### Physics
- Classic cloth simulates as the game solves it, including its collision with the body

### Effects
- Every Wo Long effect plays, and Dynasty Warriors 8's and Samurai Warriors 5's run with nothing unsupported
- The Nioh 3 demo's effects play, composite force fields included
- Bladestorm's effects open and play, and older games' effects (Dynasty Warriors 7 and 8, Warriors Orochi 3, Bladestorm, DFFOO) take their sizes, colours and rotations from the right fields
- Effect quads are lit per vertex as the games light them, and physically based quads per pixel
- Particles keep to their effect's boundary volume, turn in vortex and magnetic fields, and mesh particles cycle through their models over their life
- A stage's effects draw together, and only those in view

### Shaders and lighting
- On a stage, the physically based materials reflect the stage's own sky and ground instead of the studio, and take their ambient from it
- A stage camera's bloom and tone curve are drawn (View > lighting > stage post effects), with an exposure control
- The PC games' own shader programs run in the browser: Wo Long and Dissidia NT (DirectX 11) and Rise of the Ronin (DirectX 12), skinned, lit by the viewer's lights, each mesh with its own library
- Stage pieces can be drawn with the game's own shaders (View > stage drawing, off by default); Wo Long's bamboo, rocks and sky dome draw right with them
- Stages are lit by their own environment: the sun or moon placed by the stage's date, time and place, with the sky's ambient light beside it
- Wo Long's terrain draws as the game's terrain shader draws it, displaced where the ground is tessellated
- Older stages take their own light, fog and baked shadows: Dynasty Warriors 7 (with its scattering fog), Dynasty Warriors 8, Warriors Orochi 3, Trinity, One Piece: Pirate Warriors, Samurai Warriors: Katana and the 3DS stages
- Stage water draws as in the games: the Xbox 360 stages' reflects the stage's cube map under its normal maps, and Samurai Warriors 3's and Bladestorm's scroll
- Dynasty Warriors 8's leaf cards cut out where the game cuts them, and Bladestorm's sky dome changes with the hour and the weather
- A built stage says how it is drawn and what of its own look the opened files could not supply

### Archives and games
- Opening an archive that is still opening, or already open, no longer opens a second copy
- The Nioh 3 demo's archive folder opens (archive_NN.bin), compressed entries included; with it open, the character creator, the title screen and the Edo stage take the environments the game puts in place of theirs
- Older games' stages build with their ground, objects and water: Samurai Warriors 3, Dynasty Warriors 7, Warriors Orochi 3, Dynasty Warriors 8, Trinity, Ken's Rage, One Piece: Pirate Warriors, Bladestorm, Samurai Warriors: Katana and the 3DS games
- Those stages switch levels of detail where the game does, and Dynasty Warriors 7, Warriors Orochi 3, Samurai Warriors 3 and the 3DS stages bring their collision
- New games open: Bladestorm (Xbox 360), Samurai Warriors: Katana (Wii), Hyrule Warriors Legends, Yo-kai Sangokushi and Samurai Warriors Chronicles (3DS), Dynasty Warriors (PSP), and the Nioh 3 demo
- Rise of the Ronin's buildings build whole with their extra models, and a stage's story variants can be picked when the install's archive folder is open
- Rise of the Ronin's grey-and-magenta placeholder pieces are hidden (View > hide placeholder pieces), its landscape tiles take their own textures, and its game shaders are found from a linked install
- A stage too large to build whole builds around where the view is, and a stage built only from stand-in models says so

### Sound
- A sound player in the Inspector: play, stop, loop and seek, and save a sound as stored or decoded to .ogg or .wav
- Sound plays across the games: HCA (with a key for encrypted ones), KTSR banks and streams, KTSS, KA1A, KWB, G1L, Ogg, ATRAC3, ATRAC3plus, ATRAC9, XMA, WMA Pro, Nintendo DSP and 3DS sound archives, DFFOO's sound banks and Gust's .fp packs

### Viewer
- Click the title for the features list, and the version number for this changelog
- The View menu is grouped: model, materials, lighting, physics overlays (drawn, not run: that is Simulate) and scene
- A neutral studio environment lights the physically based materials, with a strength slider (View > lighting)
- The grid follows the camera and scales from a character to a whole district
- Open folder uses Chrome's and Edge's folder picker, which only reads the files
- A drag with any mouse button hides the pointer, and the camera's near plane follows the view so flying in no longer clips things away
- Clicking a loose .g1m in the Archives panel brings its textures and motions of the same name
- Archive lists page 200 rows at a time and filter by regular expression
- Stage buttons are named for what they do, with plain tooltips, and the version shows beside the title
- The viewer starts faster: physics and archive support load only when first needed

## 0.5.0 (2026-10-04)

### Models and materials
- Normal maps shade correctly, cloth no longer shows a checkerboard, and models no longer get an invented glow or a shadow pass drawn over them
- Meshes with up to eight bone influences skin with all eight
- Cutout and translucent materials draw in passes of their own: Rise of the Ronin's hair, brows and lashes cut out cleanly, and blended meshes no longer hide what is behind them
- Secondary normal maps blend in at the strength the file asks for, and parallax eyes draw the iris under the sclera
- Models whose positions overflow in the file, and Dynasty Warriors: Origins' largest models, now draw whole
- A model taken out of an archive brings its textures and the skeleton it borrows
- A model's detail levels and part sets show in the model view
- Stranger of Paradise and Rise of the Ronin models pair with their textures through their .ktid lists

### Textures
- PS3, PS4 and PS5 textures decode correctly
- Two-channel normal maps are unpacked, with a toggle to see the stored channels
- UV shells draw over the texture preview

### Motions
- Motions play from their curves at the exact clip time, with G1A rotations read correctly
- A repeat toggle, and DFFOO motion packs chain as the game plays them
- Additive overlays with a live weight, blending and crossfading, root motion modes, and light and camera motions with roll and aperture
- G1H shape keys play as morph targets driven by shape motions, and face poses (.g1fpose) and face animations (.g1frani) play on a model
- One animation bar for model, camera, light and face motions
- Placed pieces in areas animate, each with a motion picker, and characters list their actions in the Scene tab

### Physics
- Cloth is rebuilt for each kind of cloth: sheets hold their authored shape, stretch less, collide with the body and no longer spin or circle
- Wind, turbulence and drag move cloth and hair, with a wind control
- Ponytail and hair chains twist like rods, take roots skinned to several bones, and no longer fall off the head or sit on the floor; Nioh 3's strand hair follows its simulated points
- Swinging accessories simulate, and .swg swing files swing their bones
- Alt+click stamps wet, blood or mask looks onto Stranger of Paradise and Rise of the Ronin characters
- Physics works on combined and borrowed skeletons, slow frames simulate in full, and Stranger of Paradise's cloth no longer stays stretched after a turn

### Effects
- Ribbon tails, line traces and stripes draw and animate
- Force fields, noise, cone emitters and the remaining particle types simulate, completing Rise of the Ronin's effects
- Older games' effects open: Samurai Warriors 3 (Wii), Ken's Rage, Dynasty Warriors 7 and 7 Empires, Dynasty Warriors 8, Samurai Warriors 4, and the PS3 and Vita builds
- Refraction effects draw, and Wo Long's fires no longer show black boxes
- Stages play their placed effects and the effects attached to their pieces

### Shaders and lighting
- Hair highlights, a tone mapping toggle, and a time of day sky (View > sky) with soft sun shadows
- Stage lights fall off as in the game, and stages draw their decals and rivers

### Archives and games
- An Archives panel opens game archives directly, names their files where the game keeps names, and extracts entries on demand
- Games that open: Dynasty Warriors 7, 7 Empires, 8 and Origins, Warriors Orochi 3, Ken's Rage, Trinity, One Piece: Pirate Warriors, Samurai Warriors 3, 4 and 5, Toukiden and Toukiden 2, Attack on Titan, Berserk and the Band of the Hawk, Fire Emblem Warriors, Hyrule Warriors: Age of Calamity, Fairy Tail, Dissidia Final Fantasy NT, Nioh 2, Stranger of Paradise, Wo Long, Rise of the Ronin and Atelier Yumia; Dead or Alive 5, Dead or Alive 5 Last Round and Ninja Gaiden 3 archives list and extract
- Areas and stages build with their pieces in place, their terrain, Rise of the Ronin's landscapes and vegetation, lights, decals and rivers
- Large stages stay explorable: repeated models are instanced, matching meshes merged and finer detail levels loaded as the camera nears
- Build around: the stages around a place build together, with progress, stop and follow the view
- Pieces the game does not draw (collision boxes, invisible walls) are hidden, collision, sound and location shapes show as overlays, and clicking a placed piece shows what it is
- .swg, .g1fpose, .g1frani and .dz files are listed, and game databases and .ktid lists open in the Inspector

### Viewer
- Two camera modes: orbit, and free flight with W A S D and Q E (Shift faster, Alt slower), switched with one button or F
- A camera readout with the position, which can be typed back
- Hover a mesh name to light it, click to show only it; the right panel resizes
- A debug menu: isolate texture maps, force culling, paint vertex attributes, show any texture stage
- The animation slider seeks correctly when only a camera, face, shape or light motion plays

### Export
- Every loaded file saves with a button, and save all zips them
- glTF exports carry shape keys, shape motions and camera motions
- Built stages export as one .glb, repeated models as instanced copies
- Exports follow a model's selected detail level and parts, and draw its two-sided materials as the viewer does

## 0.2.1 – 0.4.1 (2026-09-14)

### Motions
- G1A motions play at the right speed
- Big-endian G1A motions read correctly
- Hyrule Warriors motion files open

### Physics
- Older games' ponytails simulate and collide with the body
- Hair tips swing freely instead of being pinned

### Viewer
- The model draws, physics solves and the controls show by default
- The viewer builds as a static site that works from any host

## 0.2.0 (2026-09-13)

### Models and materials
- Rigid meshes follow their bone instead of staying in the bind pose, and every blend influence is read
- Split builds draw as one model, and parts can add bones of their own to a borrowed skeleton
- Meshlet models draw instead of showing nothing
- Compressed G1MZ, G1H shape key containers and .g1mx files open
- A G1M without a mesh says so and frames its skeleton

### Textures
- Platform textures decode: PS5 tiled mips, 3DS ETC1, Xbox 360, Wii (with palettes), Switch, Vita and ETC2

### Motions
- A body motion and its face motion play together
- Motions pair with models by bone, since the names are stripped
- The motion that shakes the physics is picked first

### Physics
- Cloth simulates, anchored where the file says and colliding with the body's collision volumes
- Soft bodies simulate, with contact
- Ponytail and hair chains simulate and collide
- Physics overlays draw on the animated model, cloth control points included
- Solver controls sit in the top bar, and unticking a solver no longer stops the clip

### Effects
- G1FX effects play as live particle systems: animators, orbits, flip-books and nested containers
- Effects pick their G1EM models and draw with their own textures; swords spin
- G1EM files list each model with solo, and effects export
- An effect can be pinned to a bone

### Shaders and lighting
- A game shader mode runs a G1S library's own programs on the model

### Viewer
- The Scene tab builds a scene from mesh and texture pairs
- The folders the file browser shows are chosen at launch
- One View menu at the top, with separate physics views
- The panel keeps its place when a checkbox redraws it

### Export
- Split builds export whole, and TGA files keep their alpha

## 0.1.0 (2026-09-01)

### Models and materials
- Opens G1M models: skeletons, skinned meshes, materials and detail levels, with alpha, wireframe and vertex colours

### Textures
- Opens G1T textures and decodes every format to a preview, with thumbnails and TGA / PNG download

### Motions
- G1A and G2A motions play on the skeleton, and camera motions drive the view

### Effects
- Opens G1EM effect meshes and G1FX effect files

### Shaders and lighting
- Opens G1S shader libraries and shows each program's source

### Viewer
- An Inspector with a structured view of every section of a file

### Export
- Exports glTF, FBX, OBJ and TGA / PNG, with a command line converter
