---
title: Prompt Archive
---

# Prompt Archive

The full prompt trail is kept in [GENERATED_ASSETS_AND_PROMPTS.md](https://github.com/Sunwood-ai-labs/vending-machine-stigmata/blob/main/GENERATED_ASSETS_AND_PROMPTS.md). It records the image prompts, title-image edit prompts, and the final seamless MV loop prompt.

## Prompt Families

| Family | Purpose |
| --- | --- |
| Base CD jacket | Create the core square album-cover image without typography. |
| Base MV loop image | Create a wide, quiet background that can support motion and overlays. |
| Retail CD jacket edit | Preserve the base illustration and add title/artist typography. |
| MV title image edit | Preserve the 16:9 composition and add title-screen typography. |
| Final 15-second loop | Guide video generation with fixed camera, seamless motion, preserved text, and no visualizer overlay. |

## Preservation Notes

- Keep the exact title string `VENDING MACHINE STIGMATA`.
- Keep `AYANO YUKIMURA` and `アヤノ ユキムラ` stable when editing title images.
- Preserve the vending-machine altar composition, icy artist styling, dark underpass, cyan/red light, and non-gory stigmata-like glow.
- Avoid adding waveforms, equalizer bars, subtitles, fake logos, barcodes, or extra characters.
