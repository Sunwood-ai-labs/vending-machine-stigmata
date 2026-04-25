---
title: 権利と公開
---

# 権利と公開

このリポジトリは all-rights-reserved のライセンスを採用しています。閲覧と評価は可能ですが、再利用、再配布、派生制作、商用利用、公衆送信、機械学習用途には明示的な許諾が必要です。

## 配布時の注意

- 公開許可が取れていない参照素材はリポジトリへ含めないでください。
- GitHub へ push する前に、メディアファイルは Git LFS で管理します。
- リリース用パッケージを作る前に `git lfs pull` で実体ファイルがあることを確認します。
- 生成プロンプトの記録は、画像や音源を自由利用できるライセンスではありません。

## GitHub Pages

Pages サイトは GitHub Actions から VitePress をビルドし、base path `/vending-machine-stigmata/` で公開する想定です。

Pages ワークフローが Pages 未有効化で失敗する場合は、リポジトリ設定または GitHub API で GitHub Actions を Pages の公開元として有効化し、ワークフローを再実行します。
