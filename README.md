# 16memo
なかよし第五公園プロジェクト「16memo」のフロントエンドリポジトリ

バックエンドは[こちら](https://github.com/pppeyo38/16memo_backend)


## setup

### 1. パッケージのインストール

```
$ npm i
```

### 2. ローカルサーバーの起動

```
$ npm run dev
```

### 3. 表示の確認

http://localhost:3000 にアクセス🚀





## CSSの書き方

本プロジェクトでは、CSS in JSを採用しています。
使用ライブラリ[styled-components](https://styled-components.com/)





## ディレクトリ構成について

ディレクトリ構成に関しては、AtomicDesignの構成に加え、カスタムフック（再利用可能な独自作成メソッド）をまとめるhooksディレクトリを新規で作成したいと考えてます。

AtomicDesignについては[こちら](https://bradfrost.com/blog/post/atomic-web-design/)(日本語でもっとわかりやすいサイトもあるかもしれない、、)




### Lv1.原子（Atoms）

UIを構成する最小単位の要素  ex.ボタン、入力フォーム、ラベル等



### Lv2.分子（Molecules）

Atomsを組み合わせて作られるコンポーネントの単位　ex.フォーム（入力フォームとラベルとボタンで成り立ってるイメージ）



### Lv3.生体（Organisms）

複数のMoleculesを組み合わせた、具体的な機能を持つ部分　ex.ヘッダー、フッター等



### Lv4.テンプレート（Templates）

ページの設計図、構成図のようなワイヤーフレーム的なもの



### Lv5.ページ（Pages）

ユーザーが最終的に使うもの・見るもの


