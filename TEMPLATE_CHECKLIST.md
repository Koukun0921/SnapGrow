# テンプレートとして保存する前のチェックリスト

このテンプレートを他の案件で使い回す前に、以下の項目を確認・クリーンアップしてください。

## 必須項目

- [ ] `package.json` の `name` を汎用的な名前に変更（例: `vite-handlebars-flocss-template`）
- [ ] `package.json` の `version` を `0.0.0` または `1.0.0` にリセット
- [ ] `index.html` のサンプルコンテンツを汎用的なものに変更
- [ ] `src/sass/foundation/_variables.scss` のカラー・フォントをデフォルト値に戻す
- [ ] `dist/` ディレクトリを削除（ビルド成果物）
- [ ] `node_modules/` を削除（再インストールするため）

## 推奨項目

- [ ] サンプルファイルを残すか削除するか決定
  - 残す場合: コメントで「サンプル」と明記
  - 削除する場合: 空のディレクトリ構造だけ残す
- [ ] `README.md` にテンプレートの説明を追加（既に追加済み）
- [ ] `SETUP_GUIDE.md` にセットアップ手順を追加（既に追加済み）
- [ ] `.gitignore` が適切に設定されているか確認（既に設定済み）

## オプション項目

- [ ] `LICENSE` ファイルを追加（必要に応じて）
- [ ] `.editorconfig` を追加（チーム開発の場合）
- [ ] `prettier.config.js` や `.prettierrc` を追加（コードフォーマット統一のため）
- [ ] `eslint.config.js` を追加（JavaScriptのリントのため）

## テンプレート保存前の最終確認

```bash
# 1. クリーンな状態にする
rm -rf node_modules dist

# 2. 依存関係を再インストールして動作確認
npm install

# 3. ビルドが正常に動作するか確認
npm run build

# 4. 開発サーバーが正常に起動するか確認
npm run dev
```

## テンプレートの配布方法

### 方法1: フォルダをコピー
- テンプレートフォルダをそのままコピーして使用

### 方法2: Gitリポジトリとして管理
```bash
# テンプレート用のリポジトリを作成
git init
git add .
git commit -m "Initial template commit"
git remote add origin <リポジトリURL>
git push -u origin main
```

### 方法3: npmパッケージとして公開（上級者向け）
- `package.json` を適切に設定
- npmに公開（公開する場合）

## 注意事項

- **機密情報を含めない**: APIキー、パスワード、個人情報などは含めない
- **ライセンスを明確にする**: 使用条件を明確に記載
- **バージョン管理**: テンプレートのバージョンを管理する仕組みを検討

