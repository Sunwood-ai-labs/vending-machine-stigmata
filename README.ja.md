<div align="center">
  <img src="output/imagegen/vending-machine-stigmata_mv-loop_title_16x9_1920x1080.png" alt="VENDING MACHINE STIGMATA header image" width="100%" />
  <br />
  <br />
  <img src="assets/brand/vending-machine-stigmata-mark.svg" alt="VENDING MACHINE STIGMATA mark" width="96" />
  <h1>VENDING MACHINE STIGMATA</h1>
  <p><strong>AYANO YUKIMURA のゴシック・ダークエレクトロ J-pop リリース用アセットキットです。</strong></p>
  <p>
    <a href="README.md">English</a> |
    <a href="README.ja.md">日本語</a> |
    <a href="https://sunwood-ai-labs.github.io/vending-machine-stigmata/">Docs site</a> |
    <a href="https://x.com/hAru_mAki_ch/status/2047866042853282151">動画投稿</a>
  </p>
  <p>
    <a href="https://github.com/Sunwood-ai-labs/vending-machine-stigmata/actions/workflows/validate.yml"><img alt="Validate" src="https://github.com/Sunwood-ai-labs/vending-machine-stigmata/actions/workflows/validate.yml/badge.svg" /></a>
    <a href="LICENSE"><img alt="License: All rights reserved" src="https://img.shields.io/badge/license-all%20rights%20reserved-lightgrey" /></a>
    <img alt="Git LFS" src="https://img.shields.io/badge/assets-Git%20LFS-2f74c0" />
    <img alt="Docs: VitePress" src="https://img.shields.io/badge/docs-VitePress-42b883" />
  </p>
</div>

## ✨ 概要

`VENDING MACHINE STIGMATA` は、ダークエレクトロ J-pop シングルの世界観を公開・引き継ぎしやすい形にまとめた制作アセット集です。アルバムカバー、MV ループ用ビジュアル、生成プロンプト記録、音源、映像書き出しを含みます。

大容量メディアは Git LFS で管理します。通常の GitHub push の制限にかかりやすい動画や高解像度画像を、安全にリポジトリへ載せるための構成です。

## 📦 含まれるもの

- [output/imagegen](output/imagegen) 配下の CD ジャケット画像と MV 用静止画。
- [VENDING MACHINE STIGMATA.mp3](<VENDING MACHINE STIGMATA.mp3>) の音源ファイル。
- [output/video](output/video) と [video](video) 配下の映像ファイル。
- 公式動画投稿: <https://x.com/hAru_mAki_ch/status/2047866042853282151>。
- [GENERATED_ASSETS_AND_PROMPTS.md](GENERATED_ASSETS_AND_PROMPTS.md) の生成プロンプト・制作メモ。
- [ASSET_CATALOG.md](ASSET_CATALOG.md) の整理済みアセット一覧。
- [docs](docs) 配下の日本語/英語 VitePress ドキュメント。

## 🗂 リポジトリ構成

| パス | 用途 |
| --- | --- |
| [assets/brand](assets/brand) | README と docs で使う軽量 SVG マーク。 |
| [docs](docs) | 英日対応の VitePress ドキュメントソース。 |
| [output/imagegen](output/imagegen) | CD ジャケット、MV 静止画、タイトル入り画像。 |
| [output/video](output/video) | 完成 visualizer とプレビューフレーム。 |
| [video](video) | 生成元の映像クリップ。 |
| [GENERATED_ASSETS_AND_PROMPTS.md](GENERATED_ASSETS_AND_PROMPTS.md) | 生成プロンプトと制作ログ。 |

## 🚀 クイックスタート

```powershell
git clone https://github.com/Sunwood-ai-labs/vending-machine-stigmata.git
cd vending-machine-stigmata
git lfs install
git lfs pull
npm --prefix docs install
npm --prefix docs run docs:dev
```

ドキュメントをローカルでビルドする場合は `npm --prefix docs run docs:build` を実行します。成果物は `docs/.vitepress/dist` に出力されます。

## 🧊 アセット管理

このリポジトリでは、次のメディアを Git LFS で管理します。

- 画像: `*.png`, `*.jpg`, `*.jpeg`
- 音声: `*.mp3`, `*.wav`, `*.flac`
- 動画: `*.mp4`
- 制作用アーカイブ: `*.psd`, `*.zip`

clone 後にメディアファイルが短いテキストポインタに見える場合は、`git lfs pull` を実行してください。

## 📚 ドキュメント

docs は GitHub Pages 公開を前提にしています。

- ソース: [docs](docs)
- ビルドコマンド: `npm --prefix docs run docs:build`
- 公開予定 URL: <https://sunwood-ai-labs.github.io/vending-machine-stigmata/>

Pages ワークフローは [.github/workflows/deploy-docs.yml](.github/workflows/deploy-docs.yml) です。

## 🔐 権利

クリエイティブ素材は、別途明示的な許諾がない限り all rights reserved です。再利用、再配布、派生制作、公開利用の前に [LICENSE](LICENSE) と docs の権利ページを確認してください。
