# Pokemon 図鑑 React App

PokeAPI を使用して作成したシンプルなポケモン図鑑アプリケーションです。ポケモンの基本情報を日本語で表示し、ページネーション機能を実装しています。

## 機能

- ポケモンの基本情報の表示
  - 日本語名
  - タイプ（日本語）
  - 特性（日本語）
  - 画像
- ページネーション機能による複数ポケモンの閲覧
- ローディング状態の表示

## 技術スタック

- TypeScript
- React (Create vite App)
- CSS
- PokeAPI

## セットアップ

```bash
# リポジトリのクローン
git clone [your-repository-url]

# 依存関係のインストール
cd [your-repository-url]
npm install

# 開発サーバーの起動
npm start
```

## プロジェクト構造

```
src/
├── components/
│   ├── Card/
│   │   └── Card.tsx
│   └── Navbar/
│       └── Navbar.tsx
├── utils/
│   └── pokemon.ts
├── App.css
└── App.tsx
```

## 使用方法

1. アプリケーションを起動すると、最初のページのポケモンが表示されます
2. 「前へ」「次へ」ボタンでページを切り替えることができます
3. 各ポケモンカードには、名前、タイプ、特性が日本語で表示されます

## API について

このアプリケーションは[PokeAPI](https://pokeapi.co/)を使用しており、以下のエンドポイントを利用しています：

- `/pokemon`: ポケモンの基本情報の取得
- `/pokemon-species`: 日本語名の取得
- `/ability`: 特性の日本語名の取得

## 開発者向け情報

データの取得は`utils/pokemon.ts`に実装されており、以下の主要な関数があります：

```javascript
getAllPokemon(); // ポケモンリストの取得
getPokemon(); // 個別ポケモンの詳細情報取得
getPokemonJapaneseName(); // 日本語名の取得
getPokemonAbilityJapaneseName(); // 特性の日本語名取得
```
