# node_modules の扱い方ガイド

`node_modules` とは何か、いつ削除・再インストールが必要か、Vite環境での扱い方を説明します。

## node_modules とは？

`node_modules` は、`package.json` に記載された依存パッケージ（ライブラリ）がインストールされるディレクトリです。

```
プロジェクト/
├── node_modules/     ← ここにパッケージがインストールされる
│   ├── vite/
│   ├── sass/
│   └── ... (数百〜数千のファイル)
├── package.json       ← 必要なパッケージのリスト
└── package-lock.json   ← インストールしたバージョンの記録
```

## いつ削除・再インストールが必要？

### ✅ 削除・再インストールが必要なケース

#### 1. **エラーが発生した時**
```
エラー例:
- "Cannot find module 'xxx'"
- "Module not found"
- ビルドが突然失敗するようになった
```

**対処法:**
```bash
# node_modulesを削除して再インストール
rm -rf node_modules
npm install

# Windowsの場合
rmdir /s /q node_modules
npm install
```

#### 2. **package.json を変更した時**
- 新しいパッケージを追加した
- パッケージのバージョンを変更した
- パッケージを削除した

**対処法:**
```bash
# 通常は npm install だけでOK
npm install

# うまくいかない場合は削除して再インストール
rm -rf node_modules
npm install
```

#### 3. **プロジェクトを別のPCに移した時**
- Gitでクローンした
- USBなどでコピーした
- 別の開発者から受け取った

**対処法:**
```bash
# node_modulesは通常Gitに含めないので、再インストールが必要
npm install
```

#### 4. **Node.jsのバージョンを変更した時**
- Node.jsをアップグレードした
- 異なるバージョンのNode.jsに切り替えた

**対処法:**
```bash
rm -rf node_modules
npm install
```

#### 5. **package-lock.json が更新された時**
- チームメンバーがパッケージを更新した
- package-lock.json が変更された

**対処法:**
```bash
npm install
# または
npm ci  # package-lock.jsonを厳密に再現（推奨）
```

### ❌ 削除・再インストールが不要なケース

#### 1. **通常の開発作業**
- コードを編集するだけ
- SCSSファイルを追加・編集するだけ
- HTMLファイルを編集するだけ

**→ 何もしなくてOK！**

#### 2. **開発サーバーを起動するだけ**
```bash
npm run dev
```

**→ 何もしなくてOK！**

#### 3. **ビルドするだけ**
```bash
npm run build
```

**→ 何もしなくてOK！**

## Vite環境での扱い

### Gulp環境との違い

#### Gulp環境（以前）
- 多くのプラグインを使用
- プラグイン間の依存関係が複雑
- エラーが起きやすい
- **→ よく削除・再インストールが必要だった**

#### Vite環境（現在）
- 依存パッケージが少ない
- 依存関係がシンプル
- エラーが起きにくい
- **→ 削除・再インストールが必要になることは少ない**

### 現在の環境の依存パッケージ

```json
{
  "devDependencies": {
    "vite": "^7.2.4"  // ビルドツール（1つだけ）
  },
  "dependencies": {
    "sass": "^1.94.2",                    // Sassコンパイラ
    "vite-plugin-handlebars": "^2.0.0"   // Handlebarsプラグイン
  }
}
```

**たった3つのパッケージ！** Gulp環境と比べて非常にシンプルです。

## 実践的な使い方

### 日常的な作業（削除不要）

```bash
# 1. 開発サーバー起動
npm run dev

# 2. コードを編集

# 3. ビルド
npm run build

# → node_modulesを触る必要なし！
```

### エラーが発生した時（削除が必要）

```bash
# 1. エラーが発生
npm run dev
# → エラーメッセージが表示される

# 2. node_modulesを削除
rm -rf node_modules
# Windows: rmdir /s /q node_modules

# 3. 再インストール
npm install

# 4. 再度実行
npm run dev
```

### 新しいパッケージを追加した時

```bash
# 1. パッケージをインストール
npm install パッケージ名

# 2. これだけでOK！削除は不要
```

### プロジェクトをコピーした時

```bash
# 1. プロジェクトをコピー（node_modulesは含めない）

# 2. 依存関係をインストール
npm install

# 3. これで完了！
```

## よくある質問

### Q: node_modulesはGitに含めるべき？

**A: 含めないでください！**

`.gitignore` に `node_modules` が含まれているので、通常は自動的に除外されます。

**理由:**
- ファイル数が多すぎる（数千〜数万ファイル）
- サイズが大きい（数百MB〜数GB）
- `package.json` と `package-lock.json` があれば再現可能

### Q: 毎回削除した方がいい？

**A: いいえ、必要ない時は削除しないでください。**

削除・再インストールには時間がかかります（数分〜10分以上）。エラーが発生した時だけ削除しましょう。

### Q: package-lock.json は削除していい？

**A: 基本的に削除しないでください。**

`package-lock.json` は、インストールしたパッケージの正確なバージョンを記録しています。これがあることで、同じ環境を再現できます。

**削除するケース:**
- パッケージの依存関係が壊れてしまった時
- 完全にクリーンな状態から始めたい時

```bash
rm package-lock.json
rm -rf node_modules
npm install
```

### Q: npm install と npm ci の違いは？

**A: 用途が違います。**

- **`npm install`**: 開発時に使用。`package-lock.json` を更新する場合がある
- **`npm ci`**: CI/CDや本番環境で使用。`package-lock.json` を厳密に再現（更新しない）

**推奨:**
- 開発中: `npm install`
- ビルド時: `npm ci`（より安全）

## まとめ

### Vite環境では

✅ **通常は削除不要**
- コード編集だけなら何もしない
- 開発サーバー起動だけなら何もしない

✅ **削除が必要な時**
- エラーが発生した時
- 新しいパッケージを追加した時（通常は `npm install` だけでOK）
- プロジェクトをコピーした時（`npm install` だけ）

### Gulp環境との違い

- **Gulp**: 複雑な依存関係 → よく削除が必要
- **Vite**: シンプルな依存関係 → 削除が必要になることは少ない

**結論: Vite環境では、Gulp環境ほど頻繁に削除・再インストールする必要はありません！**


