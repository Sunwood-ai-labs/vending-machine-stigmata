---
title: Production Workflow
---

# Production Workflow

The repository is organized around a reproducible creative handoff rather than a software build.

## 1. Generate Core Stills

Create the base square CD jacket and 16:9 MV background first. These images establish the palette, subject, vending-machine altar, and cold underpass setting.

## 2. Add Release Typography

Create title-ready versions only after the base images are stable. Typography must preserve the artwork and keep the release strings readable:

- `VENDING MACHINE STIGMATA`
- `AYANO YUKIMURA`
- `アヤノ ユキムラ`

## 3. Generate Motion Tests

Use the 16:9 title image as the start and end frame for loop generation. Keep the camera fixed and move only internal scene elements such as mist, fabric, hair, LEDs, reflections, and subtle subject motion.

## 4. Render and Archive

Store final renders under `output/video` and source clips under `video`. Keep high-resolution images under `output/imagegen`.

## 5. Publish Documentation

Run the docs build before publishing:

```powershell
npm --prefix docs install
npm --prefix docs run docs:build
```

The GitHub Pages workflow builds from `docs` and uploads `docs/.vitepress/dist`.
