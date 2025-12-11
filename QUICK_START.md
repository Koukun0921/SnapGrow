# クイックスタートガイド

最短5分で新しい案件を開始する手順です。

## 1. テンプレートのコピー（1分）

```bash
# テンプレートフォルダをコピー
# Windows: エクスプローラーでコピー
# Mac/Linux: cp -r 静的Vite my-new-project
```

## 2. 依存関係のインストール（2分）

```bash
cd my-new-project
npm install
```

## 3. 基本設定の変更（1分）

### `package.json`
```json
{
  "name": "my-new-project"  // ← プロジェクト名に変更
}
```

### `src/sass/foundation/_variables.scss`
```scss
$font-family-base: 'Noto Sans JP', sans-serif;  // ← フォント変更
$color-theme: #2589d0;  // ← テーマカラー変更
```

### `index.html`
```html
<title>新しいサイト名</title>  // ← タイトル変更
```

## 4. 開発開始（1分）

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開く

## 完了！

これで開発を開始できます。

## 次のステップ

- `partials/header.html` と `partials/footer.html` を編集
- `src/sass/object/component/` にコンポーネントを追加
- 必要に応じて `SETUP_GUIDE.md` を参照

