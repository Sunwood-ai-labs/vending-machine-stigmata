---
title: VENDING MACHINE STIGMATA
---

<script setup>
import { withBase } from 'vitepress'
</script>

<section class="vm-hero">
  <img class="vm-hero__image" :src="withBase('/assets/cover/vending-machine-stigmata_cd-jacket_retail-title_1x1.png')" alt="VENDING MACHINE STIGMATA CD jacket visual" />
  <div class="vm-hero__content">
    <p class="vm-kicker">AI music release asset kit</p>
    <h1>VENDING MACHINE STIGMATA</h1>
    <p>Album art, MV loop visuals, prompt records, audio, and video exports for AYANO YUKIMURA's gothic dark electro J-pop release.</p>
    <div class="vm-actions">
      <a :href="withBase('/guide/asset-catalog')">Open catalog</a>
      <a :href="withBase('/guide/workflow')">Production workflow</a>
      <a href="https://github.com/Sunwood-ai-labs/vending-machine-stigmata">GitHub</a>
    </div>
    <div class="vm-language">
      <a :href="withBase('/ja/')">日本語ページ</a>
    </div>
  </div>
</section>

## Release Kit

<div class="vm-grid">
  <div class="vm-tile">
    <h3>Album Cover</h3>
    <p>Square jacket artwork in base and retail-title variants.</p>
  </div>
  <div class="vm-tile">
    <h3>MV Visuals</h3>
    <p>16:9 background and title-screen stills for loop and visualizer work.</p>
  </div>
  <div class="vm-tile">
    <h3>Audio and Video</h3>
    <p>Audio master, visualizer export, and generated source clips tracked with Git LFS.</p>
  </div>
  <div class="vm-tile">
    <h3>Prompt Archive</h3>
    <p>Reusable generation prompts and production notes for future iterations.</p>
  </div>
</div>

<div class="vm-cover-row">
  <img :src="withBase('/assets/cover/vending-machine-stigmata_cd-jacket_retail-title_1x1.png')" alt="VENDING MACHINE STIGMATA CD jacket" />
  <div>
    <h2>Prepared for Handoff</h2>
    <p>The repository keeps the finished media, the prompt trail, bilingual docs, and publishing automation together so the project can move from local production to GitHub Pages and release packaging without losing context.</p>
  </div>
</div>
