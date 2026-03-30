![Astro Photo Grid Preview](./public/cover.png)

# Astro Photo Grid

[Astro](https://astro.build/) 用の最小限のシングルページ写真ギャラリー。[デモ](https://astro-photo-grid.netlify.app/) をご覧ください！

## 機能

- **モダンな CSS を使用したレスポンシブなジャスティファイドグリッド。** すべてのレイアウトとリフロー処理は純粋な CSS で処理され、位置決めに JS は必要ありません！
- **自動ライトボックス統合。** 画像は [Fancybox](https://fancyapps.com/fancybox/) を使用してフルスクリーンプレビューで開き、スワイプ、ドラッグ、ピンチズーム、カスタマイズ可能なツールバーが含まれます。
- **最適化された画像読み込みとサイズ調整。** グリッド上の画像は Astro の [`<Image />` コンポーネント](https://docs.astro.build/en/guides/images/) を使用して最適化されます。最初の画面を超えたグリッド上の画像は遅延読み込みされます。

## 開始方法

1. 「Use this template」をクリックして新しいリポジトリを作成します。
2. `astro.config.mjs` で、`site` を `https://mysite.com` からあなたのサイト URL に更新します。
3. `src/layouts/BaseLayout.astro` で、`siteName` をあなたのサイト名に更新します。
4. `src/images` のアイテムをあなた自身の写真に置き換えます。
5. 準備完了！

## クレジット

- [Helmut Wandl](https://medium.com/@ehtmlu/css-image-grid-gallery-4ec8824560a1) と [SmolCSS](https://smolcss.dev/#smol-aspect-ratio-gallery) による CSS のみのジャスティファイドギャラリーレイアウト
- [Fancybox](https://fancyapps.com/fancybox/) ライトボックス
- すべてのデモ画像は [Unsplash](https://unsplash.com/) から
