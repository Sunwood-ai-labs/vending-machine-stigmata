---
title: アセットカタログ
---

# アセットカタログ

完全なファイル一覧はリポジトリ直下の [ASSET_CATALOG.md](https://github.com/Sunwood-ai-labs/vending-machine-stigmata/blob/main/ASSET_CATALOG.md) にあります。このページでは公開・引き継ぎで参照しやすい主要アセットを整理します。

## 画像

| 種別 | 主なファイル | メモ |
| --- | --- | --- |
| CD ジャケット | `output/imagegen/vending-machine-stigmata_cd-jacket_retail-title_1x1.png` | タイトル入りのリテール向け正方形アートワーク。 |
| CD ジャケット高解像度版 | `output/imagegen/vending-machine-stigmata_cd-jacket_retail-title_1x1_2048.png` | 2048 px の保管用バージョン。 |
| MV タイトル静止画 | `output/imagegen/vending-machine-stigmata_mv-loop_title_16x9_1920x1080.png` | docs、Pages プレビュー、映像参照に使う 1080p タイトル画。 |
| MV 背景 | `output/imagegen/vending-machine-stigmata_mv-loop_16x9_1920x1080.png` | オーバーレイ用途に向くタイトルなし 1080p 背景。 |

## 音源と映像

| 種別 | 主なファイル | メモ |
| --- | --- | --- |
| 音源マスター | `VENDING MACHINE STIGMATA.mp3` | 現在のリポジトリ内音源。 |
| 完成 visualizer | `output/video/VENDING MACHINE STIGMATA_visualizer.mp4` | Git LFS で管理する大容量レンダー。 |
| 生成元クリップ | `video/*.mp4` | モーション検討時に生成したクリップ。 |

## Git LFS

このリポジトリでは `*.png`, `*.jpg`, `*.jpeg`, `*.mp3`, `*.mp4` を Git LFS で管理します。clone 後は次を実行してください。

```powershell
git lfs install
git lfs pull
```

メディアファイルが `version https://git-lfs.github.com/spec` から始まる短いテキストとして開く場合、LFS 実体がまだ取得されていません。
