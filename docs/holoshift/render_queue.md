---
title: 頬がおかしくなった場合
sidebar_position: 6
sidebar_label: 頬がおかしくなった場合
---

import videoUrl from './video/Render_Queue.mp4';

ここでは、ホログラム化した後に頬の表現がおかしくなった際の解決法を説明します。

---
今回はゆめかちゃんを例に修正していきます。

## 前提

ゆめかちゃんは、「Body」というオブジェクトには以下のマテリアルが存在します。
* 「Yumeka_Face_Transparent_Holo」という頬の描写等を担当するマテリアル
* 「Yumeka_Face_Holo」という通常の顔を担当するマテリアル

<img src={require('@site/docs/holoshift/img/Render_Queue1.png').default} alt="頬の問題" />

## 原因

上記の画像のようになってしまう理由は、この2つのマテリアルの「Render Queue」の数値が同じことで発生するものと思われる。

## 修正

そのため、今回は以下の手順で修正を行った。

1. まず、問題のオブジェクトに置いてあるマテリアルの構造を把握する。
2. 今回は「Yumeka_Face_Transparent_Holo」が頬の描写であることを確認する。
3. 該当のマテリアルがある「PECOPECO-DO/HoloShift/GeneratedMaterials/Yumeka_v1.0_Hologram」に移動。
4. 「Yumeka_Face_Transparent_Holo」を選択し、Inspector項目から一番下の「Render Queue」項目の数値を2461→3000に変更

言葉だけでは分かりにくいと思うので動画を置いておきます。（それでも解決しない場合は、お手数ですがお問い合わせをお願い致します。）
<video controls width="100%">
  <source src={videoUrl} type="video/mp4" />
  お使いのブラウザは video タグをサポートしていません。
</video>


