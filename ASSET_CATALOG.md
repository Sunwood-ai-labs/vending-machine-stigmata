# VENDING MACHINE STIGMATA Asset Catalog

This catalog lists the repository assets that are intended for archival review, publishing prep, or release packaging. Large media files are stored with Git LFS.

## Images

| Asset | Dimensions | Size | Path |
| --- | ---: | ---: | --- |
| CD jacket, base | 1254 x 1254 | 2.41 MiB | [output/imagegen/vending-machine-stigmata_cd-jacket_1x1.png](output/imagegen/vending-machine-stigmata_cd-jacket_1x1.png) |
| CD jacket, base upscaled | 2048 x 2048 | 9.93 MiB | [output/imagegen/vending-machine-stigmata_cd-jacket_1x1_2048.png](output/imagegen/vending-machine-stigmata_cd-jacket_1x1_2048.png) |
| CD jacket, retail title | 1254 x 1254 | 2.54 MiB | [output/imagegen/vending-machine-stigmata_cd-jacket_retail-title_1x1.png](output/imagegen/vending-machine-stigmata_cd-jacket_retail-title_1x1.png) |
| CD jacket, retail title upscaled | 2048 x 2048 | 5.52 MiB | [output/imagegen/vending-machine-stigmata_cd-jacket_retail-title_1x1_2048.png](output/imagegen/vending-machine-stigmata_cd-jacket_retail-title_1x1_2048.png) |
| MV loop background | 1672 x 941 | 2.38 MiB | [output/imagegen/vending-machine-stigmata_mv-loop_16x9.png](output/imagegen/vending-machine-stigmata_mv-loop_16x9.png) |
| MV loop background, 1080p | 1920 x 1080 | 2.96 MiB | [output/imagegen/vending-machine-stigmata_mv-loop_16x9_1920x1080.png](output/imagegen/vending-machine-stigmata_mv-loop_16x9_1920x1080.png) |
| MV loop title image | 1672 x 941 | 2.48 MiB | [output/imagegen/vending-machine-stigmata_mv-loop_title_16x9.png](output/imagegen/vending-machine-stigmata_mv-loop_title_16x9.png) |
| MV loop title image, 1080p | 1920 x 1080 | 3.10 MiB | [output/imagegen/vending-machine-stigmata_mv-loop_title_16x9_1920x1080.png](output/imagegen/vending-machine-stigmata_mv-loop_title_16x9_1920x1080.png) |
| Visualizer preview frame | 1920 x 1080 | 0.35 MiB | [output/video/VENDING MACHINE STIGMATA_visualizer_frame.jpg](<output/video/VENDING MACHINE STIGMATA_visualizer_frame.jpg>) |

## Audio

| Asset | Size | Path |
| --- | ---: | --- |
| Audio master | 3.31 MiB | [VENDING MACHINE STIGMATA.mp3](<VENDING MACHINE STIGMATA.mp3>) |

## Video

| Asset | Size | Path |
| --- | ---: | --- |
| Finished visualizer render | 167.37 MiB | [output/video/VENDING MACHINE STIGMATA_visualizer.mp4](<output/video/VENDING MACHINE STIGMATA_visualizer.mp4>) |
| Generated clip 2256 | 17.97 MiB | [video/kling_20260425_作品_Create_a_p_2256_0.mp4](video/kling_20260425_作品_Create_a_p_2256_0.mp4) |
| Generated clip 2356 | 10.94 MiB | [video/kling_20260425_作品_Create_a_p_2356_0.mp4](video/kling_20260425_作品_Create_a_p_2356_0.mp4) |
| Generated clip 2405 | 15.56 MiB | [video/kling_20260425_作品_Create_a_p_2405_0.mp4](video/kling_20260425_作品_Create_a_p_2405_0.mp4) |

## Production Notes

- Prompt archive: [GENERATED_ASSETS_AND_PROMPTS.md](GENERATED_ASSETS_AND_PROMPTS.md)
- Docs source: [docs](docs)
- Brand mark: [assets/brand/vending-machine-stigmata-mark.svg](assets/brand/vending-machine-stigmata-mark.svg)

## Release Checklist

- Run `git lfs pull` before packaging assets.
- Confirm that final media files are present, not LFS pointer files.
- Build docs with `npm --prefix docs run docs:build`.
- Review rights and permissions before public redistribution.
