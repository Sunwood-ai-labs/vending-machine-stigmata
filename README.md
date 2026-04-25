<div align="center">
  <img src="assets/brand/vending-machine-stigmata-mark.svg" alt="VENDING MACHINE STIGMATA mark" width="96" />
  <h1>VENDING MACHINE STIGMATA</h1>
  <p><strong>A polished asset kit for AYANO YUKIMURA's gothic dark electro J-pop release.</strong></p>
  <p>
    <a href="README.md">English</a> |
    <a href="README.ja.md">日本語</a> |
    <a href="https://sunwood-ai-labs.github.io/vending-machine-stigmata/">Docs site</a>
  </p>
  <p>
    <a href="https://github.com/Sunwood-ai-labs/vending-machine-stigmata/actions/workflows/validate.yml"><img alt="Validate" src="https://github.com/Sunwood-ai-labs/vending-machine-stigmata/actions/workflows/validate.yml/badge.svg" /></a>
    <a href="LICENSE"><img alt="License: All rights reserved" src="https://img.shields.io/badge/license-all%20rights%20reserved-lightgrey" /></a>
    <img alt="Git LFS" src="https://img.shields.io/badge/assets-Git%20LFS-2f74c0" />
    <img alt="Docs: VitePress" src="https://img.shields.io/badge/docs-VitePress-42b883" />
  </p>
  <img src="output/imagegen/vending-machine-stigmata_mv-loop_title_16x9_1920x1080.png" alt="VENDING MACHINE STIGMATA music video title visual" />
</div>

## ✨ Overview

`VENDING MACHINE STIGMATA` is a release-ready creative package centered on a dark electro J-pop single concept: album-cover artwork, music-video loop imagery, source prompt notes, audio, and rendered video exports.

The repository is organized for archival review, public presentation, and handoff to a release pipeline. Large media files are intentionally handled with Git LFS so the repository remains pushable while preserving the finished assets.

## 📦 What's Included

- Final and source-like album cover images under [output/imagegen](output/imagegen).
- MV loop title visuals and background stills under [output/imagegen](output/imagegen).
- The audio master at [VENDING MACHINE STIGMATA.mp3](<VENDING MACHINE STIGMATA.mp3>).
- Rendered and generated video files under [output/video](output/video) and [video](video).
- A prompt and generation log in [GENERATED_ASSETS_AND_PROMPTS.md](GENERATED_ASSETS_AND_PROMPTS.md).
- A curated file inventory in [ASSET_CATALOG.md](ASSET_CATALOG.md).
- A bilingual VitePress documentation site under [docs](docs).

## 🗂 Repository Map

| Path | Purpose |
| --- | --- |
| [assets/brand](assets/brand) | Lightweight SVG identity mark for README and docs. |
| [docs](docs) | VitePress documentation source with English and Japanese pages. |
| [output/imagegen](output/imagegen) | Album jacket and MV still image exports. |
| [output/video](output/video) | Finished visualizer render and preview frame. |
| [video](video) | Generated source video clips. |
| [GENERATED_ASSETS_AND_PROMPTS.md](GENERATED_ASSETS_AND_PROMPTS.md) | Full prompt archive and production notes. |

## 🚀 Quick Start

```powershell
git clone https://github.com/Sunwood-ai-labs/vending-machine-stigmata.git
cd vending-machine-stigmata
git lfs install
git lfs pull
npm --prefix docs install
npm --prefix docs run docs:dev
```

Use `npm --prefix docs run docs:build` to build the documentation locally. The built site is emitted to `docs/.vitepress/dist`.

## 🧊 Asset Handling

This repository tracks media files with Git LFS:

- images: `*.png`, `*.jpg`, `*.jpeg`
- audio: `*.mp3`, `*.wav`, `*.flac`
- video: `*.mp4`
- production archives: `*.psd`, `*.zip`

If a media file looks like a small text pointer after cloning, run `git lfs pull`.

## 📚 Documentation

The docs site is designed for GitHub Pages:

- local source: [docs](docs)
- build command: `npm --prefix docs run docs:build`
- expected public URL: <https://sunwood-ai-labs.github.io/vending-machine-stigmata/>

The Pages workflow lives in [.github/workflows/deploy-docs.yml](.github/workflows/deploy-docs.yml).

## 🔐 Rights

All creative materials are all rights reserved unless separate written permission is granted. See [LICENSE](LICENSE) and the docs page on rights before reusing, redistributing, or publishing derivative works.
