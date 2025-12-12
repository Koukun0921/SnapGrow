# 新規案件セットアップガイド

このテンプレートを新しい案件で使用する際の具体的な手順です。

## ステップ 1: テンプレートのコピー

### 方法 A: フォルダをコピー（推奨）

1. このテンプレートフォルダ全体をコピー
2. 新しい案件名にリネーム
3. 以下のファイル・フォルダを削除：
   - `node_modules/`（再インストールするため）
   - `dist/`（ビルド成果物）
   - `.git/`（既存の Git 履歴がある場合）

### 方法 B: Git でクローン（Git 管理する場合）

```bash
# テンプレートをリモートリポジトリにプッシュ済みの場合
git clone <テンプレートのリポジトリURL> my-new-project
cd my-new-project
```

## ステップ 2: 初期設定

### 1. package.json の更新

```json
{
  "name": "my-new-project",  // ← プロジェクト名に変更
  "version": "1.0.0",         // ← 必要に応じて変更
  ...
}
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 基本情報の更新

#### `index.html`

- `<title>`: サイトタイトル
- `<meta name="description">`: サイト説明
- `<meta name="keywords">`: キーワード
- OGP 設定（`og:title`, `og:description`, `og:image`など）
- ファビコンのパス

#### `src/sass/foundation/_variables.scss`

最低限変更すべき項目：

```scss
// フォント設定
$font-family-base: "Noto Sans JP", sans-serif; // ← プロジェクトのフォントに変更

// カラーパレット
$color-black: #333; // ← プロジェクトのカラーに変更
$color-theme: #2589d0; // ← プロジェクトのテーマカラーに変更
$color-white: #fff;

// コンテナ幅
$inner: 1200px; // ← プロジェクトの最大幅に変更

// SP/PCファースト
$break-flg: 0; // 0: SPファースト、1: PCファースト
```

## ステップ 3: サンプルファイルの削除

以下のサンプルファイルは削除または置き換えてください：

```
partials/
  - header.html      ← プロジェクト用に書き換え
  - footer.html      ← プロジェクト用に書き換え
  - sample-text.html ← 削除または置き換え

src/sass/object/component/
  - _c-logo.scss     ← 不要なら削除
  - _c-card.scss     ← 不要なら削除
  - _c-title.scss    ← 不要なら削除

src/sass/object/project/
  - _p-app.scss      ← 不要なら削除
  - _p-sample-text.scss ← 不要なら削除
```

## ステップ 4: 開発開始

```bash
# 開発サーバー起動
npm run dev
```

ブラウザで `http://localhost:5173` を開いて確認。

## ステップ 5: プロジェクト固有の設定

### 追加の HTML ページがある場合

`vite.config.js` を編集：

```javascript
build: {
  rollupOptions: {
    input: {
      main: "./index.html",
      about: "./about.html",      // 追加
      contact: "./contact.html",  // 追加
    },
  },
},
```

### 追加の Handlebars パーツ

`partials/` ディレクトリに新しい HTML ファイルを追加し、`index.html` で使用：

```html
<!-- partials/navigation.html -->
<nav class="l-nav">
  <ul>
    <li><a href="/">ホーム</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<!-- index.html -->
<body>
  {{> header}} {{> navigation}}
  <!-- 追加 -->
  <main>コンテンツ</main>
  {{> footer}}
</body>
```

## チェックリスト

セットアップ完了時に確認：

- [ ] `package.json` の `name` を変更
- [ ] `index.html` のメタ情報を更新
- [ ] `_variables.scss` のカラー・フォントを設定
- [ ] サンプルファイルを削除または置き換え
- [ ] `npm run dev` で正常に起動することを確認
- [ ] `npm run build` でビルドが成功することを確認

## 次のステップ

1. デザインに合わせてコンポーネントを作成
2. レイアウトファイル（`layout/`）を追加
3. プロジェクト固有のスタイル（`project/`）を追加
4. 必要に応じてユーティリティクラス（`utility/`）を追加

## よくある質問

**Q: 既存の CSS ファイルがある場合は？**
A: `src/sass/object/project/` に移行するか、`src/sass/main.scss` に直接インポートしてください。

**Q: 画像ファイルはどこに置く？**
A: `public/` ディレクトリに配置します。`/image.jpg` のようにルートパスで参照できます。

**Q: JavaScript ファイルはどこに置く？**
A: `src/` ディレクトリに配置し、`src/main.js` からインポートします。
