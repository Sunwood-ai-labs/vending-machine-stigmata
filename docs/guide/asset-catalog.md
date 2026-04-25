---
title: Asset Catalog
---

# Asset Catalog

The complete file inventory lives in the repository-level [ASSET_CATALOG.md](https://github.com/Sunwood-ai-labs/vending-machine-stigmata/blob/main/ASSET_CATALOG.md). This page summarizes the publishing-facing assets.

## Images

| Type | Main file | Notes |
| --- | --- | --- |
| CD jacket | `output/imagegen/vending-machine-stigmata_cd-jacket_retail-title_1x1.png` | Retail-ready square artwork with title treatment. |
| CD jacket, high-res | `output/imagegen/vending-machine-stigmata_cd-jacket_retail-title_1x1_2048.png` | 2048 px archival version. |
| MV title still | `output/imagegen/vending-machine-stigmata_mv-loop_title_16x9_1920x1080.png` | 1080p title-screen image for docs, Pages preview, and video reference. |
| MV background | `output/imagegen/vending-machine-stigmata_mv-loop_16x9_1920x1080.png` | 1080p no-title background suitable for overlays. |

## Audio and Video

| Type | Main file | Notes |
| --- | --- | --- |
| Audio master | `VENDING MACHINE STIGMATA.mp3` | Current repository audio master. |
| Finished visualizer | `output/video/VENDING MACHINE STIGMATA_visualizer.mp4` | Large render stored with Git LFS. |
| Source clips | `video/*.mp4` | Generated clips used during motion exploration. |
| Official video post | <https://x.com/hAru_mAki_ch/status/2047866042853282151> | Public video URL for the release post. |

## Git LFS

The repository tracks `*.png`, `*.jpg`, `*.jpeg`, `*.mp3`, and `*.mp4` with Git LFS. After cloning, run:

```powershell
git lfs install
git lfs pull
```

If a media file opens as a short text file that starts with `version https://git-lfs.github.com/spec`, the LFS payload has not been pulled yet.
