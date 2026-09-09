---
title: 導入手順
sidebar_position: 2
sidebar_label: 導入手順
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# VPMリポジトリをインストール

Modular AvatarとAnimator As Code V1をVRChat Creator CompanionもしくはALCOMで使えるようにしましょう。

このページでは「HoloShift」をプロジェクトに追加するところまでを解説します。

画像をクリックすることで拡大できます。


<Tabs>
  <TabItem value="vcc" label="VRChat Creator Companion" default>

## VCC での導入手順
こちらをクリックしてください

 * [Modular AvatarをVCCに追加](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json)
 * [Animator As Code V1をVCCに追加](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)

 その後、プロジェクトの"Manage Project"を開き、以下の4つをPackageの＋ボタンをクリックしてください。
 * Modular Avatar
 * Animator As Code V1
 * Animator As Code V1-VRChat
 * Animator As Code V1 - Modular Avatar functions
 
 画像をクリックすることで拡大できます。

　<img src={require('@site/docs/holoshift/img/VCC_Package1.png').default} alt="VCCのMAPackage画像" />
　
　<img src={require('@site/docs/holoshift/img/VCC_Package2.png').default} alt="VCCのaacPackage画像" />

最新版にアップデートするには、"Latest Version"の緑色の矢印をクリックしてください。

  </TabItem>
  <TabItem value="alcom" label="ALCOM">

## ALCOM での導入手順

以下の手順でVPMリポジトリを追加してください。

 1. 「パッケージ管理」 > 「VPMリポジトリを追加」
 2. 「リポジトリ情報を入力」に次の値を入力し、「VPMリポジトリを追加」
	1. Modular Avatar：`https://vpm.nadena.dev/vpm.json`
	1. Animator As Code V1：`https://hai-vr.github.io/vpm-listing/index.json`
 3. 以下の情報が記載されることを確認し、「VPMリポジトリを追加」
	1. Modular Avatar→リポジトリ名`bd_`
	1. Animator As Code V1→リポジトリ名`https://docs.hai-vr.dev`

<img src={require('@site/docs/holoshift/img/ALCOM_1.png').default} alt="ALCOMVRMリポジトリ説明1" />

<img src={require('@site/docs/holoshift/img/ALCOM_2.png').default} alt="ALCOMVRMリポジトリ説明2" />

4. リポジトリの追加作業を終えましたら、プロジェクトの"管理"を開き、以下の4つをPackageの＋ボタンをクリックし、「適用」をクリックしてください。

<img src={require('@site/docs/holoshift/img/ALCOM_3.png').default} alt="ALCOMVRMリポジトリ説明3" />

<img src={require('@site/docs/holoshift/img/ALCOM_4.png').default} alt="ALCOMVRMリポジトリ説明4" />

最新版にアップデートするには、バージョン番号と緑色の矢印を囲った枠内をクリックし、「適用」をクリックしてください。

  </TabItem>
</Tabs>

---
## プロジェクトにHoloShiftを追加する

上記の事前準備が完了したUnityプロジェクトを開き、UnityのAssetsメニューにある「Import Package」から「Custom Package」を選択し、

「HoloShift`バージョン`.unitypackage」をインポートしてください。

<img src={require('@site/docs/holoshift/img/Unity_import.png').default} alt="Unityからインポート説明" />