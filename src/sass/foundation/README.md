# Foundation レイヤー - レスポンシブ対応

## ファイル構成

- `_variables.scss` - 変数定義（ブレークポイント、フォント、色など）
- `_functions.scss` - 関数定義（px→rem変換、vw計算など）
- `_mixin.scss` - ミックスイン定義（メディアクエリなど）
- `_reset.scss` - リセットCSS
- `_base.scss` - ベーススタイル（レスポンシブフォントサイズなど）

## 使用方法

### 1. メディアクエリの使用

```scss
// ComponentやProjectファイルで使用
@use '../foundation/mixin' as *;

.my-component {
  font-size: 16px;
  
  // タブレット以上
  @include mq("md") {
    font-size: 18px;
  }
  
  // PC以上
  @include mq("lg") {
    font-size: 20px;
  }
}
```

### 2. ブレークポイント

- `sm`: 400px以上（SPファーストの場合）
- `md`: 768px以上
- `lg`: 1000px以上
- `xl`: 1200px以上

### 3. 関数の使用

```scss
@use '../foundation/functions' as *;

.my-element {
  // px→rem変換
  font-size: prem(16); // 16px → 1rem
  
  // vw計算
  width: vw(375, 320); // 375px幅の画面で320pxをvwに変換
}
```

### 4. 変数の使用

```scss
@use '../foundation/variables' as *;

.my-element {
  color: $color-black;
  font-family: $font-family-base;
  padding: $padding-sp;
  
  @include mq("md") {
    padding: $padding-pc;
  }
}
```

## SPファースト / PCファーストの切り替え

`_variables.scss`の`$break-flg`を変更：

- `$break-flg: 0;` → SPファースト（デフォルト）
- `$break-flg: 1;` → PCファースト

