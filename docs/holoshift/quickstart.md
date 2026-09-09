---
title: 簡単な使い方
sidebar_position: 3
sidebar_label: 簡単な使い方
---
ここでは、お好きなアバターを専用ウィンドウでホログラム化するまでを解説するよ！

今回はまめひなた/Mamehinataを使って解説していきます。

詳しい項目解説は次の章で解説するね。

# 簡単な使い方
## 【ステップ1】専用ウィンドウを開こう

1. Hierarchy(ヒエラルキー)上で、ホログラム化したいアバターを右クリックします。
2. メニューから「Hologram Setup」＞「Convert Avatar to Hologram...」をクリックします。
:::tip その他の開き方
Unity上部メニューの「Tools」＞「HoloShader」＞「Avatar Hologram Converter Window」からでも開けます。
:::
<img src={require('@site/docs/holoshift/img/HoloShift_QuickStart.png').default} alt="専用ウィンドウを開こう" />

## 【ステップ2】ホログラムアバターの生成
1. 設定ウィンドウが開いたら、変換対象を選んでください。（未指定なら全身がホログラム化するよ）
2. お好みの「カラープリセット(シアン、パープル等)」を選択します。
3. MAメニューが欲しい場合は「Expressionメニュー自動生成」にチェックが入っていることを確認します。
4. 一番下の「ホログラムアバターを生成」ボタンをクリックしてください。
5. 自動的に「アバター名_Hologram」という新しい複製アバターが生成され、マテリアルの差し替えとExpressionメニューの設置がまとめて完了します。

<img src={require('@site/docs/holoshift/img/HoloShift_QuickStart2.png').default} alt="ホログラムアバターの生成" />
:::info 生成後の注意
同じ座標にアバターが生成されるため、重なってしまいます。その時は、元アバターのInspector(インペクター)からチェックを外してください。
:::
<img src={require('@site/docs/holoshift/img/HoloShift_QuickStart3.png').default} alt="アバターの重なり" />
終わりましたらいつも通りにVRChatSDKを使い、アップロード作業を行ってください。お疲れ様でした。
