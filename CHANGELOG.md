# Changelog

What changed in each version of the G1 Viewer, newest first.

## 1.1.0 (2026-11-09)

- **The Textures tab opens on a 2D view of the texture over the viewport**, and the 3D view pauses underneath. Drag to pan, scroll to zoom about the pointer, and double click to fit; 1:1 shows one texel per pixel. Magnified texels stay square, with a faint texel grid from 16x. A readout under the pointer gives the texel, the UV there and the decoded RGBA. Buttons show RGBA over a checkerboard, RGB with alpha ignored, or R, G, B or A alone, and tile the image 3 x 3 for UVs that run outside the 0..1 square. UV shells stay thin lines at any zoom, with each loaded mesh that samples the texture in its own colour, listed so each can be hidden or hovered to pick it out. "3D view" goes back to the model and the in-panel preview until the tab is opened again.
- **The axes stay hidden until View > axes is ticked**, as the menu says. An empty page drew them from the start while their box read unticked; they hid only once a file loaded.

## 1.0.1 (2026-11-08)

- **R5G6B5 textures (format 0x34, and the 3DS's tiled 0x3B) draw with red and blue the right way round.** The engine's format table gives 0x34 as GL's 5-6-5 layout, red in the top five bits, but the viewer read blue there: Dissidia Final Fantasy Opera Omnia's message images came out brown where they are blue, and Yo-kai Sangokushi's cut-ins blue where they are red.

## 1.0.0 (2026-11-07)

The first public release since 0.6.0. Versions 0.7, 0.8 and 0.9 were built but not published, so their changes, below, are new on the public page too.

### Highlights

- **Motion blur and temporal anti-aliasing** on a built stage, where its camera turns them on, drawn as Nioh 3's own programs draw them (a first pass: they follow the camera's movement only).
- **A tidier Scene panel:** every section folds away under its heading, the rows share one label column, and the effect controls sit in labelled rows with knobs. An effect's texture is picked from a list of the texture file's textures.
- **Knobs work on touch screens**, a double tap putting one back to its default.
- **Untextured models draw light grey**, where the studio lights had clipped them to flat white.
- **Dissidia Final Fantasy Opera Omnia's effect packs** name their effects by their ids, so each pairs with its textures and meshes by name.
- **The published page loads with a clean browser console**, and Help links straight to the forms for reporting a problem, sending samples or asking for a feature.

### For first-time readers

What the viewer is, as of 1.0, for anyone who has not followed it version by version:

- **A viewer for Koei Tecmo's games' files**, in the browser: what you open is read on your computer and never uploaded. It is not a modding tool, and no game files come with it.
- **It opens the games' own archives**, from the PS3 and Xbox 360 era (`LINKDATA` and its kin) through the Wii, Wii U, Vita, PSP, 3DS, PS4, PS5, Switch and Switch 2 to today's PC games (`.rdb`, `root.rdb` with its packages, Dissidia NT's package table). The Games tab lists the 42 game dumps it has been checked against and how far each reads.
- **Models** draw with their skeletons, skins, materials and textures - every texture format of every platform - and play their motions, face poses and shape keys; **cloth, hair, ponytails, soft bodies and surface fluid** run live, by the games' own rules where those are traced.
- **Effects** play back, from fire and smoke to the newer games' lit and refracting meshes.
- **Stages** build from their own placement data: the older games' terrain and objects, and the newer games' whole stages with their sun, sky, fog, lightmaps, water, grass and post effects (Help tab: Build a stage).
- **Sound** plays from the games' own banks and streams, decoded in the page: every sound of every game in the Games tab - over 1,300 hours of it - plays, the console codecs (ATRAC3, ATRAC3plus, ATRAC9, XMA, WMA, DSP) checked against ffmpeg's own decoders.
- **Export**: glTF, FBX and OBJ for models with their skeletons, skins and motions; PNG and TGA for textures; every file saved as it is.
- What is drawn as the game draws it, and what is the viewer's own stand-in, is in the Features tab; the Help tab has how-tos for the common tasks.

### All changes
- The camera corner shows how fast the keys fly the camera, live, in the scene's units a second: it follows the wheel (a zoom when orbiting, the speed itself in free mode) and shows ×4 while Shift and ×¼ while Alt is held.
- The Scene panel's Effect (G1FX) controls sit in one box of labelled rows (file, playback, show, scale, lights, attach), each control kept beside its label and wrapping under its own row in a narrow panel; the explanations moved into the controls' tooltips, and what the simulation covers into a short list that opens on a click. The Archives panel's opening text is a short list.
- The effect playback has no separate "simulate" switch: ▶ starts the effect and pauses it, ■ stops it while it plays, and ⟲ restarts it from the beginning with a new random seed when it is not playing (the reseed and one-frame step buttons are gone). The speed is a knob, as on the animation bar, and "camera fades" sits with loop and emitters.
- The effect's mesh list counts nested mesh managers, so it no longer reads "no mesh managers" for the many files whose meshes all sit inside a container (45 of the 53 sampled mesh effects). The Effect models list starts collapsed, and so does the mesh managers list, which is left out when the effect has none. Attaching an effect to a bone works like an archive's list: a search bar over a short scrolling list of the bones (with their positions), a click pins the effect. It sits in a collapsed "Attach: <bone>" section, with rotate and frame inside, and stays open or closed across the panel's redraws. The Scene panel's LOD and Skeleton rows line up with the rows above them.
- The knobs (the animation bar's speed, fade and overlay weight, the effect speed) work on a touch screen: a double tap puts one back to its default on every browser (detected by the knob, not left to the browser's double click), the value stays up for a moment after the finger lifts and no longer sticks after a tap, and the knob takes a finger-sized 44 px touch area around the same dial.
- The effect's size, nested, brightness and exposure are knobs as well (double click for 1×, or 16 for exposure); the nested rate rebuilds the simulation once a turn ends rather than at every step of a drag.
- A model with no texture draws light grey (#aaaaaa) instead of white, which the Studio lights clipped to flat white over most of the model (61% of b_ifr_00's pixels; none at the grey). Pairing a texture brings back the material's own colour.
- The Scene panel's sections - Models, Effects, Lighting and Effect (G1FX) - fold away under their headings, like the lists inside them; each starts open and stays as left across the panel's redraws. Models' and Effects' + stays on the heading, and Models holds the Skeleton and Parts pickers. So do Placements, Materials and shaders, Actions, Stages, Stage view and Shaders. The Parts row and the Lighting sliders sit on the same label column as the rows around them, and the effect's texture slot is a list of the G1T's textures (each with its size and format) instead of a number box.
- A built stage's camera now brings its motion blur and temporal anti-aliasing, where it turns them on (View > motion blur, View > temporal anti-aliasing, with the stage post effects): drawn as Nioh 3's own programs draw them, with the camera's shutter speed, sample count and weights. A first pass - the blur and the anti-aliasing's history follow the camera's movement only, so a moving character is not blurred and can trail.
- Dissidia Final Fantasy Opera Omnia's effect packs (`_EffChr044.bin.dz` and the rest) name their effects by their effect ids, read from the pack's own id list - `_EffChr044_1130.g1fx`, where they were numbered by their place in the pack (`_2_0`, `_2_1`, ...) - and their textures and meshes `_EffChr044_0000.g1t` / `.g1em`, so an effect pairs with them by name; the Archives panel names them the same way.
- The published page no longer asks for a local server's folders on every load, which left two errors in every visitor's browser console; served from your own machine it still does.
- Help links straight to the issue forms for reporting a problem, sending samples or asking for a feature; the bug report form lists the Switch 2 and gives this version as its example.
- Rise of the Ronin's dog, boar and wolf no longer draw bright cyan. Their body's base texture is a cyan mask; the fur colour is in a second material the game lays over it from two texture arrays (its "M4" multimap shaders), which the viewer now draws as the game's programs do - colour, normal, reflectance, roughness and occlusion - for the models whose shader binding names one of those 15 shader libraries.
- Exporting one of those models (glTF, FBX or OBJ, and a stage's glTF) writes the fur colour as the base colour, on the layer's own UV set, and the layer's reflectance as the specular, where the game's program comes to the layer alone; where it would not (a partial mask, an overlay), the export says so. A plane array of floats (those layers' 1 x 1 constants) is read by its values, no longer by its gamma-encoded preview, which had tilted the layer's normal and made its reflectance 0.23 instead of 0.04.
- With the game's own shaders, a material's two texture arrays of one kind (a multimap's colour and its second array) each reach their own sampler, as the engine binds them, where the second used to get the first's texture; texture arrays reach their programs at all (they drew stand-ins before), and each texture is read on the UV set its stage names (the programs' texIdx), not always the first.
- Rise of the Ronin's layered materials (its "Mm00" / "Mmx00" / "Mm0" shaders: up to two further materials laid over a base by a painted mask, on 5,938 meshes in 3,121 models of the copy read) draw their layers - colour, normal, reflectance, roughness and occlusion, as the game's programs read them - where they drew the base alone.
- So do its "Mdb" / "Mdbx" materials (up to four layers, each replacing the surface where its mask reaches a threshold, or blended by a weight): the seven models of the copy read keep their base, as their parameters leave the layers off.
- And its "M1" hair materials take their layer's normal, occlusion and roughness, as the game's programs read them (9 models of the copy read).

## 0.9.0 (2026-11-03)

### Highlights

- **Every game's sound plays.** Every sound file of all 42 games in the Games tab was played through the viewer, and none fails. Newly playing: Dissidia Final Fantasy NT's sound effects and voices, Ken's Rage 2's on the Wii U, Ninja Gaiden 3's on the PS3, the Wii games' sound archives, Atelier Sophie DX's effects, Dynasty Warriors 7 Empires' layered music, and the Wii, 3DS and PSP music streams.
- **Big stages export.** A built stage saves as a `.glb` however large: Nioh 3's biggest ran out of memory before. Exported stages were checked in Blender and with the glTF validator.
- **Dissidia Final Fantasy NT's stages.** Open a stage's `.sod` to build it, with its effects, water, grass, sky, lightmaps, reflections and the game's own lighting.
- **The PS3 and Xbox 360 games' own shaders** run on their characters and stages (View > KTGL shaders): Ken's Rage, One Piece, Yoru no Nai Kuni, Bladestorm, Warriors Orochi 3, Dynasty Warriors 7 and 8.
- **More games open:** Persona 5 Strikers, Atelier Sophie DX and Dynasty Warriors: Origins' demo; Hyrule Warriors and Ken's Rage 2 on the Wii U read their textures and music whole; Switch 2 textures read.
- **Effects** are as bright as their files say, and refraction, soft particles and animated textures draw as the games draw them.
- **Physics:** soft bodies dent where a body touches them, cloth uses its file's own settings, and Bladestorm's capes hang as cloth.
- **Motions** play their additive layers and cutscene cameras; a character's face animations can be stepped through.
- **glTF export** keeps the newer games' materials (roughness, specular) and bakes cloth and ponytails into the motions.
- **Opening a game is easier:** drag a game folder onto the page; Open folder… says what it found and why something did not open; the Archives panel shows where each archive is.
- **Errors in plain words**, a red status line and an error count you can click for the full message.
- **Phones and tablets:** the view takes the whole screen and the side panels slide over it. Checked in Firefox too.
- **Large archives take half the memory:** Rise of the Ronin, Nioh 3 and Dissidia NT open together in under a third of a gigabyte.
- **Help** has how-tos for the common tasks, and the **Games** tab opens on what each platform's files get.

### All changes: the viewer
- A big built stage exports as `.glb`: Nioh 3's larger stages ran the page out of memory (2.4 GB now writes in five minutes), the copies a stage keeps hidden no longer go in as broken transforms, and normal-mapped pieces carry the tangents they were drawn with.
- Dissidia Final Fantasy NT's sound effects and voices play: its 643 `.sed` banks, about 51,000 sounds, opened as packs of two files and played nothing.
- Fist of the North Star: Ken's Rage 2's sound effects and voices play on the Wii U: its 744 `SDWi` banks, 10,519 sounds, were listed but not read; its music's ATSL tables play too.
- Samurai Warriors 3's and Samurai Warriors: Katana's Wii sound archives (`.brsar`) play: about 19,800 effects and voices, named by the bank or sound that plays them.
- The music behind an ATSL table plays where it is a RIFF: Samurai Warriors 4's on the Vita and One Piece: Pirate Warriors' 5.1 music on the PS3.
- Dynasty Warriors: Origins' voice cues play their lines, which listed as playing no sound, and so do its cut scenes' and stage objects' cues.
- A stream file (`.srst`) opened on its own lists and plays its streams: Dynasty Warriors: Origins' stopped with an error, and Venus Vacation PRISM's streams whose size is not a multiple of eight did not decode.
- Dynasty Warriors 7 Empires' 13 layered music tracks play, two 5.1 layers each, the first heard and the layer picked in the player as Origins' music.
- Ninja Gaiden 3's sound plays on the PS3: its `.xws` banks hold their waves in an MSF bank (ATRAC3), which was not read - 5,129 waves.
- Atelier Sophie DX's sound effects play: a `.wh2` bank opens with the `.wb2` of its name, as Bladestorm's `.hd3` with its `.bd3`.
- A plain `.wav` opens and plays, as Nioh 3's movie sound beside its archives.
- Large archives take about half the memory: Rise of the Ronin, Nioh 3 and Dissidia Final Fantasy NT open together in under a third of a gigabyte.
- A file that cannot be read says why in plain words - empty, not a format the viewer reads, cut short or damaged - instead of the browser's own error.
- On a tablet held upright or a phone, the view takes the whole screen and the side panels slide over it from ☰ and ⚙ in the menu bar; before, the view was squeezed to a sliver or to nothing. A model framed in an upright view now fits across it.
- Drop a game folder on the page to open it, as Open folder… does: the way in where the browser's folder dialog picks files only, as in the Claude app's browser pane, which the viewer now says. Dissidia Final Fantasy NT's archive is shown by its folder, COMMON, rather than by its index file.
- Dissidia Final Fantasy NT: open a stage's `.sod` from the archive to build the stage: its models, textured ground, sky, lights and grass fields; its water, lightmaps and effects are not read yet
- Dissidia Final Fantasy NT's stages play their own effects: fog, fire, lamps, clouds, waterfalls and skydomes, and the floors and walls of the summon arenas.
- Dissidia Final Fantasy NT's stage effects sit in the stage's own haze and fog, take its lights and cloud shade, fade softly where they meet the ground, and bend what is behind them.
- Dissidia Final Fantasy NT's stages show what is there when a fight starts, no longer drawing the climax's scenery on top of it.
- Dissidia Final Fantasy NT's stages have the game's moving patches of sun and cloud shade.
- Dissidia Final Fantasy NT's light shafts come from the sky alone on the stages that ask for it, as on S07_00, and its screen space reflection runs at the game's half size with its reach.
- Dissidia Final Fantasy NT's stages glow as the game's do, from city windows to pulsing crystal veins, and the white floors on two stages are gone.
- Dissidia Final Fantasy NT's stages that use the game's screen space reflection now draw it, as on the SSLC stages.
- Dissidia Final Fantasy NT's crystals and arena floors are glass, showing the scene bent through them, and its ground takes its own normal maps, reflectance and gloss.
- Dissidia Final Fantasy NT's stage models shine by the game's own reflectance and gloss, its metals reflect the stage's environment, and lightmaps count for as much as each stage says, so a stage that ignores its baked shadows no longer shows them.
- Dissidia Final Fantasy NT's stages draw the second material painted over their banks, rock walls and buildings, so Cornelia's lake has its rock shore instead of bare grass, and those surfaces shine by the game's own reflectance and gloss.
- Dissidia Final Fantasy NT's rivers and lakes bend what shows through them with their ripples, by the game's own refraction, and read the true depth under the water, so the film of water on a road draws instead of vanishing.
- Dissidia Final Fantasy NT's sea takes the sun's shadow, on the water the game shadows.
- Dissidia Final Fantasy NT's sun shadows use the game's cascades and filters, so they reach as far as the game's and their edges are firmer near the camera.
- Dissidia Final Fantasy NT's grass thins out and ends with distance as the game's does.
- Dissidia Final Fantasy NT stages draw their light shafts.
- Dissidia Final Fantasy NT stages meter their exposure as the game does, adapting to the view within the stage's range; View > game's auto exposure turns it off, and the exposure slider works on top of it.
- Dissidia Final Fantasy NT's grass is lit as the game lights it, both sides of each blade, and is fuller for it; only what the game draws into its shadow map casts a live sun shadow on a stage.
- Dissidia Final Fantasy NT's breakable rocks sit in the ground, at the offset the game keeps in their physics data.
- Dissidia Final Fantasy NT stages take their ambient cube on models and ground, and their bloom.
- Dissidia Final Fantasy NT's water reflects as the game's does: the mirror holds what the game puts in it, the sky and the stage's reflection models, and the ripples play as a flipbook.
- Sun shadows on stages stay when the view turns: what stands out of sight still casts into the shadow map.
- Dissidia Final Fantasy NT stages draw their sky as the game does: the dome placed by the stage's data, pale in the scattering, with its sun, and its cloud plane.
- Dissidia Final Fantasy NT stages read their lightmaps: the sun's baked shadow on every copy of a model that has a page, on the ground and on the grass.
- Dissidia Final Fantasy NT stages draw their water: rivers, lakes and seas from the `.river`.
- Dissidia Final Fantasy NT stages draw every part of an object, tree trunks and second mountains among them, and their breakable rocks from the `.dest`.
- Dissidia Final Fantasy NT stages use the game's four lights at the strengths its stage passes give them, tone mapping, height fog and scattering, with sun shadows on, and grow grass by the engine's counts and sizes.
- Physics: soft bodies dent and push where a body part touches them, and shift as the body tilts
- Physics: cloth runs the file's own solver settings, so it may hang a touch looser than before, and soft bodies take the correct left and right sides
- Motions: a character's actions play their additive layers as the game's data says, and can play their cutscene cameras
- Motions: find a character's face animations from the Actions section and step through them
- Effects: each effect's authored brightness is applied, up to 64x and more, so many effects are brighter than before (not on PS3-era files)
- Effects: trails and ribbons refract instead of painting their distortion map as colour, and the refraction modes that draw a texture over the bent scene do so
- Effects: refracting sprites and ribbons bend the scene by their texture, as the games draw them, and tint it only where the effect asks for that
- Effects: soft particles fade where they meet the scene instead of being cut by it, animated textures blend between frames, and refraction reads the right distortion map
- Effects: Dynasty Warriors 8's effects take their authored brightness
- Effects: colours authored in sRGB are read as sRGB, and effects without post-processing are no longer drawn too dark
- Effects: refraction now bends what is behind it - the captured scene is read through the face's normal, a mesh's own normals or the effect's distortion map, by the strength the effect file sets, as the engine's effect shaders do; a refraction primitive at zero strength no longer darkens the scene behind it
- glTF export: physically based materials as the game's programs read them - a PB2 set's specular texture baked into glTF's roughness (and occlusion) image and its F0 into a KHR_materials_specular colour image, by its library's packing and the material's specular colour (Nioh 3, Wo Long, Rise of the Ronin); normal maps written in glTF's convention (green flipped where the model's own tangent frame reads it the other way - every map of the three PC games), on their own UV set
- glTF export: a model's cloth and ponytails go into the exported motions, parked on the body frame by frame as the viewer shows them with physics off (they hung stiffly off one bone each, up to a third of the model's size away); every file passes the Khronos glTF validator with no errors or warnings (cloth weights below zero, which glTF does not allow, are clamped, and the export says so; a skeleton without meshes writes a valid file)
- Ninja Gaiden 3's `.sqd` stage files no longer hang the viewer (their first byte passed them for Nintendo's CX compression, and the decoder never stopped)
- Wo Long's rivers draw their shore foam where the water runs shallow over the ground, from each river's own bubble texture, colour and threshold
- Switch 2 textures open (platform 0x18), volume textures too (colour grading LUTs, noise volumes); the Textures tab steps through a volume's slices
- Switch and Switch 2 RGBA16F / RGBA32F textures are untiled (they showed stripes)
- Hyrule Warriors (Wii U): characters, weapons and action objects cut out where their texture's alpha says, as the game draws them (lace, filigree and bows were solid)
- Open folder says plainly why nothing opened: a game that keeps its files loose (its G1 files listed, the other files' types named), app packages or disc images to unpack first, an index found that would not read; two notes that were no fault are gone (a LINKDATA named like an enciphered game's, an editor's name records not shipped)
- An opened archive's notes and warnings fold into one line under its buttons (⚠ N notes), shown on a click
- Xbox 360 normal maps in the linear DXT1 format (Dynasty Warriors 8) read whole; they were scrambled
- tex_codec 1.8: PS4 volume textures (Nioh 2's colour LUTs and the rest) and RGBA16F arrays untile, as do the Switch's volumes; Wii U cube maps read their faces right; DX12 64 KiB tiles of any texel size
- Switch textures in the plain BC formats (0x59 - 0x5F: thousands in Three Houses, some in Age of Calamity, Fairy Tail, Yumia) read linear, as they are stored - many came out scrambled, and their arrays' mips wrong
- Wo Long's and Stranger of Paradise's stage decals draw, each stage from its own decal array, as Yumia's do; a decal lies on every surface inside its box, as the game projects it, rather than as a flat sheet inside the floor or over it
- Wo Long's distant stand-ins (its "-far" pieces) are drawn only far off, in place of their models: whole ships were drawn twice over each other and flickered as the camera moved
- Wo Long's banners and other cloth on stage pieces draw whole under the game's shaders; they came apart into grey bands over their poles
- A stage says what it cut back to fit in memory - textures made smaller, only a part built, plants thinned - under its name in Placements and in the status panel, which now lists a build's details under headings rather than as one long line
- Nintendo's sound streams play: BRSTM (Samurai Warriors: Katana's music and voices on the Wii), BCSTM (Samurai Warriors Chronicles' on the 3DS) and BFSTM
- The PSP's ATRAC3 music plays (Toukiden Kiwami's tracks, looping where they loop)
- The Debug menu shows the ground grid's current cell size
- KTGL shaders run the PS3 games' own programs (Ken's Rage, One Piece Pirate Warriors ...): a model's libraries are found in its archive by shader name and their Cg programs translated
- The game's shader programs compile without freezing the page
- Yoru no Nai Kuni's characters draw with their own shaders, from its Shader folder
- KTGL shaders run the Xbox 360 games' own programs too (Bladestorm, Warriors Orochi 3, Dynasty Warriors 8)
- A game's shader libraries are found in seconds the second time its archive is opened
- Cloth collision volumes are only the model's own: the ones meant for a horse or a partner no longer land on the character
- Warriors Orochi 3's characters and weapons taken out of its archive come with their textures, as the game pairs them
- View > game shaders on stage pieces runs the PS3 and Xbox 360 stages' own programs too: Warriors Orochi 3's and Dynasty Warriors 7's from their stage shader sets (DW7's boulders and walls no longer draw pale); Dynasty Warriors 8's still partly fed
- KTGL shaders: Yoru no Nai Kuni's characters take the game's own character light, rim light and point light strength, the light fixed to the camera as the game keeps it; One Piece's mask lookup takes the game's scale and angle
- Warriors Orochi 3's stages take their baked shadow from above (the pattern map) on the ground, the objects and the pieces' own programs, as Dynasty Warriors 7's do
- Dynasty Warriors 8's stages open whole again (they split into a pack), and their pieces under the game's programs take its tone curve's white point and each stage's exposure range, as the game sets them
- The PS3 and Xbox 360 programs keep a material's alpha test: cut-out leaves and fences no longer draw their clear parts
- KTGL shaders on the PS3 and Xbox 360 characters: hair, beards and eyelashes are cut out as in the game, and cloth (capes, coats) takes the game's shading too
- Bladestorm's capes and ponytails hang as cloth; they drew as a spike above the model and a cone at its feet
- Verlet cloth (coats, skirts on the newer NUNV sheets) is already hung when a model loads, as the game warms it up, rather than falling into place
- KTGL shaders on the PS3 and Xbox 360 characters follow their motions; every vertex followed one bone, so a model tore apart as soon as it moved
- Dynasty Warriors 8 characters keep their armour on in their motions; the shoulder, chest and thigh plates were left behind where the motion started
- A model opened as a whole pack entry finds its own shaders again (KTGL shaders did not apply to Dynasty Warriors 8's 503)
- The Archives panel shows where each open archive is - its index file's full path, a linked folder followed - with what kind of archive it is on the line below
- Opening an archive that is already open from somewhere else opens it from there in place of the old one; it was refused, so a game folder could open to nothing
- Open folder… reads a game folder that holds files another program has open (an IDA database beside the executable); one unreadable file made the whole folder open nothing
- Errors stand out: the status line turns red behind a warning sign, a badge beside it counts the errors since you last looked, and clicking either opens the full message and the recent errors, to read or copy; every status message shows in full on hover, and the line stays on screen in a narrow window
- Open folder… says what it did: it counts the files as it reads them, then sums the folder up in one line - the archives it opened (or found already open), the G1 files it listed, the files it could not read - and says so as an error when nothing in the folder was recognised, or when the browser refused the folder; before, a folder could open to nothing without a word
- Open folder… works where the browser will not let the page read a folder it picks (the Claude app's browser pane): it says no folder was opened, and from then on uses the browser's own folder dialog
- The status panel's clear all empties the status line and every error
- A middle click in the viewport frames the model, as the fit button does
- Persona 5 Strikers (PC) opens whole: its models, textures and the rest of the 42,834 records it keeps scrambled, and its LINKDATA.BIN, which has no index file of its own
- Persona 5 Strikers' stages: no longer blown out by their sun (they have no sky of their own; the viewer lends one), their collision boxes are no longer drawn as yellow walls, and their streets no longer flicker through the flat ground under them
- Dynasty Warriors: Origins (PC demo): its LinkData files open whole - every entry was enciphered, and now reads
- Dissidia Final Fantasy NT: its model packs open by their own tables, so each model's cloth physics file and the other files that were missed now list
- Dissidia Final Fantasy NT: the characters' eyes show their own iris colour, clear - they were drawn with a dark map in place of the iris and a milky film over it
- The time of day sky has a ground: below the horizon it was the sky's white haze, as if the model stood on a cloud
- Changing the time of day or the sun angle with sun shadows off no longer leaves the sun shining from under the model
- Atelier Sophie DX (PC): its .PAK archives open, every file named, and its models, motions and effects open out of them
- Hyrule Warriors (Wii U): its 10 channel music plays
- Persona 5 Strikers: the one model with an older soft body section reads its soft body
- Venus Vacation PRISM (PC) models that came apart on loading now build
- Hyrule Warriors (Wii U): its small textures decode, and the texture files whose sizes did not add up read every texture; its UI archives (.arc) open, their files listed to save
- Ken's Rage 2 (Wii U): its two small textures that would not decode now do
- A KIDS database's missing name records are said to be names only, not missing game data
- Xbox 360 programs with an environment map no longer fail to draw
- The Games tab opens with a checklist of every game: archive, models, textures, motions, physics, effects, stages and sound, each tried on the game's own files by a script

### All changes: formats
- Older shader libraries (Bladestorm, Dynasty Warriors 7, Ken's Rage, Trinity) open their shader programs
- The PS3 shader libraries' texture tables read (their older, unnamed entries)
- Trinity's effect entries open as the hundreds of effects each holds, not as one
- Effects: the computed switch and period expressions, the animator that moves an emitter's shape through a pointer, and the filtered composite field
- Samurai Warriors Chronicles' motions, and its packed loose files
- Nioh 3's streamed textures (hair atlases, texture arrays) open
- Dissidia NT's long motions keep their last bones; a Rise of the Ronin normal map that would not decode does
- Stage objects, kits and destruction physics are named in the archive list

## 0.8.0 (2026-10-23)

### The viewer
- A progress bar beside the status while an archive opens or a stage builds
- The folder you opened last time, and the file you last opened from it, can be reopened with one click (Chrome and Edge; the browser asks to allow it)
- After an update, the list of changes opens by itself, once
- The About page has a Help tab (the controls in short) and a Games tab (which games are checked, and how far)

### Shaders and lighting
- A Nioh 3 stage's lighting follows the sun: the environment's sun-height curves set its light groups' strengths, as the game does each frame
- A Nioh 3 stage's pieces and the characters on it are lit by their own light groups, as in the game: each with its own key light strength and its own balance of reflection to diffuse light (View > game's light balance)
- Where a stage's environment has an hour and weather grid (Atelier Yumia, Rise of the Ronin), any hour and weather can be picked: the four nearest of its cameras blended as the game blends them (the Scene panel's Lighting: camera, then hour and weather)
- A stage in its own light has sun shadows from the start, as dark as the game's: a shadow takes the whole of the sun, the sky's light stays (the studio keeps its soft ones, off until asked)
- Nioh 3's far sun shadows from its distance fields, where a stage camera turns them on
- Nioh 3's open-world stages take the newer daylight environment the game swaps in for the old one, with its own light groups, far shadows and exposure (open the install's archive folder with the package so the viewer finds the game's swap table)
- A stage camera's depth of field: what is out of focus blurs as the game works it out, from the camera's focus, lens and aperture (View > depth of field)
- The physically based materials' occlusion now shades the sun and lamps too, by each light group's own share, as the game does - not only the ambient light
- A stage's pieces take the game's second specular lobe where its light group turns it on (most of Nioh 3's and all of Wo Long's environments): highlights blended from a tighter and a broader one, as the game draws them
- A stage's exposure sets itself: metered as the game's post-effect programs meter the frame, at the stage camera's own exposure dial, and following the view (View > game's auto exposure); its sky drawn at the scene's level while it does

## 0.7.0 (2026-10-23)

### Files
- A model's textures put together from its texture list (Nioh 3, Rise of the Ronin, Stranger of Paradise) can be saved: the texture files as the game stores them, one per slot, in a zip
- `.dz` and `.gz` files open in either byte order, the order worked out from the data, and what is inside opens for what it is - by its own header, whatever the outer name says
- Dissidia Final Fantasy Opera Omnia's iOS `.dz` files whose last chunk is stored uncompressed open (they were refused)

### Models
- Breakable objects open whole: Wo Long's, Rise of the Ronin's and Stranger of Paradise's, intact or as the pieces they break into, each where it stands, with an explode slider (the Scene panel's Stage view) and each piece's collision (View > breakable objects)
- On a stage, a breakable object's pieces stand in for it when asked for, and explode in place
- Rise of the Ronin's faces take their shape sliders: the rig the game runs on a face moves its shape keys as its control joints move

### Shaders and lighting
- A stage's environment offers all its cameras - its hours, weather and areas - each with its own sun, sky, post effects and fog (the Scene panel's Lighting: camera)
- Stage fog: the camera's height fog drawn as the game's own fog program draws it, and an aerial haze, each on a switch (View > shaders and lighting)
- Skin takes light under its surface, at the stage camera's own setting (View > shaders and lighting: subsurface skin)
- Ears, leaves and other thin surfaces let light through from behind, as the game's shader does (View > shaders and lighting)
- Eyes catch the light: their catchlight drawn from the game's own catchlight cube (View > shaders and lighting)
- Fur draws as the game draws it: layer over layer, thinning toward the tips (View > shaders and lighting: fur shells)
- The wet layers over Nioh 3's eyes are see-through again, the iris showing under them
- Eyes are no longer milky: very rough surfaces stop reflecting the room, as in the game, so irises and pupils show through (View > shaders and lighting: game's reflection table)
- The studio's back light is white and dimmer, so hair lit from behind no longer glows blue
- Hair reflects its surroundings as the game's hair shader does - along the strands, softer and dimmer - and lets light through from behind where the game turns that on
- Nioh 3's constant materials take their real values: hair, eyes and skin had read their reflectance about six times too high (grey, chrome-like sheens), eyeball normals tilted and hair highlights off centre
- The eyes' wet layers draw: a faint reflection over the eye, as their specular is added whole
- A model shadows itself under the studio light: the head over the neck, and stubble, lashes and hair cards no longer lit from behind the head (View > shaders and lighting: model shadows)
- Ambient occlusion: creases, eye sockets and where hair meets skin fall darker (View > shaders and lighting: ambient occlusion)
- Nioh 3's stages take the game's own distance-field occlusion: ground darkens where rocks and walls stand over it (View > shaders and lighting: SDF occlusion)
- Dark hair is no longer washed out by a grey film: the room's reflection is weighed against its diffuse light as the game weighs it for a character, a built stage's own balance where it has one (View > shaders and lighting: game's ambient balance)

### Viewer
- A menu bar: the G1 icon opens an About page (what the viewer is, the supported files, its features and changes), then File, View, Simulate and Debug, with the version
- The View menu runs scene first, then renders and highlights (the model and its physics overlays), then shaders and lighting (materials, lighting and sky) - switches only
- Lighting is the game's or the studio's: a built stage that brings its own light lights the scene by itself, its camera the only thing to pick; otherwise the viewer's studio, with its strengths and time of day in the Scene panel's new Lighting section
- The Debug menu's choices sit in the menu itself rather than in drop-downs
- The time of day sky and sun shadows are switches in the Scene panel's Lighting, their sliders greyed out while off - moving the sun no longer turns the sky on by surprise; "sun from" reads "sun angle"
- Menus stay open while you tick their switches
- The animation bar: the motion and its root setting on the first row, a second motion laid over it on a row of its own (+ overlay, ✕ to take it off), the transport on the last (play, eject, repeat, speed, the bar, fade) - controls greyed out rather than vanishing as motions are picked - and no stray empty bar when nothing plays
- The animation bar's speed, crossfade and overlay weight are small knobs, their values shown on hover - drag, scroll or use the arrow keys; double click resets
- The free camera: the mouse wheel no longer rescales the grid, and close layers (eyes, decals) no longer break up and flicker as it flies

### Physics
- Hair and hanging ornaments come to rest on a still model: uneven frame times had kept them bouncing for ever, worst on chains held at both ends, like the chains across a chest

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
