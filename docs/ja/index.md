---
title: VENDING MACHINE STIGMATA
---

<script setup>
import { withBase } from 'vitepress'
</script>

<section class="vm-hero">
  <img class="vm-hero__image" :src="withBase('/assets/hero/vending-machine-stigmata_mv-loop_title_16x9_1920x1080.png')" alt="VENDING MACHINE STIGMATA title visual" />
  <div class="vm-hero__content">
    <p class="vm-kicker">AI music release asset kit</p>
    <h1>VENDING MACHINE STIGMATA</h1>
    <p>AYANO YUKIMURA のゴシック・ダークエレクトロ J-pop リリース用に、ジャケット、MV ループ、プロンプト記録、音源、映像を書き出しまでまとめたアセットキットです。</p>
    <div class="vm-actions">
      <a :href="withBase('/ja/guide/asset-catalog')">カタログを見る</a>
      <a :href="withBase('/ja/guide/workflow')">制作フロー</a>
      <a href="https://github.com/Sunwood-ai-labs/vending-machine-stigmata">GitHub</a>
    </div>
    <div class="vm-language">
      <a :href="withBase('/')">English page</a>
    </div>
  </div>
</section>

## リリースキット

<div class="vm-grid">
  <div class="vm-tile">
    <h3>CD ジャケット</h3>
    <p>正方形のベース版とタイトル入りリテール版を収録しています。</p>
  </div>
  <div class="vm-tile">
    <h3>MV ビジュアル</h3>
    <p>ループや visualizer に使える 16:9 の背景・タイトル静止画です。</p>
  </div>
  <div class="vm-tile">
    <h3>音源と映像</h3>
    <p>音源、完成 visualizer、生成元クリップを Git LFS で管理します。</p>
  </div>
  <div class="vm-tile">
    <h3>プロンプト記録</h3>
    <p>後続制作や再生成のためのプロンプトと制作メモを残しています。</p>
  </div>
</div>

<div class="vm-cover-row">
  <img :src="withBase('/assets/cover/vending-machine-stigmata_cd-jacket_retail-title_1x1.png')" alt="VENDING MACHINE STIGMATA CD jacket" />
  <div>
    <h2>引き継ぎやすい公開構成</h2>
    <p>完成メディア、プロンプトの流れ、日英 docs、Pages 用ワークフローを同じリポジトリに揃え、ローカル制作から公開・リリース準備へ移しやすい形にしています。</p>
  </div>
</div>
