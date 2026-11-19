# GAIA EDUCATION for CORPORATION - GitHub Pages 静的サイトプロジェクト

旧 Laravel 5.2 + MySQL 構成のコーポレート・製品サイト（`https://corp.gaia-edu.co.jp/`）を、**Astro（SSG）＋ microCMS（無料 Hobbyプラン：5 API）＋ BowNow フォーム ＋ GitHub Pages** で完全復活させるためのプロジェクトディレクトリです。

---

## ディレクトリ構成

```text
github-site/
├── .github/workflows/
│   └── deploy.yml                # GitHub Pages 自動ビルド＆デプロイ定義（GitHub Actions）
├── microcms-schemas/             # 【STEP 2用】microCMS スキーマインポート用JSON定義一式
│   ├── README.md                 # microCMSへのインポート手順書
│   ├── 1_sliders.json            # ① スライダー API
│   ├── 2_information.json        # ② お知らせ API
│   ├── 3_product_categories.json # ③ 製品カテゴリー API
│   ├── 4_products.json           # ④ 製品 API（機能・オプション内包）
│   └── 5_works.json              # ⑤ 導入事例 API
├── public/                       # 静的アセット（CSS / JS / 画像 / .nojekyll）
└── src/
    ├── lib/microcms.ts           # microCMS APIクライアント・型定義・初期モックフォールバック
    ├── layouts/MainLayout.astro  # 全ページ共通レイアウト（ヘッダー・フッター・OGP・GTM）
    ├── components/               # 共通ナビゲーションパーツ
    └── pages/                    # 各ページルーティング
```

---

## セットアップとビルド確認手順

### 1. ローカルでの動作確認
microCMSのAPIキーを設定する前でも、内蔵の初期モックデータによって全ページのビルドとプレビューが可能です。

```bash
cd github-site
npm install
npm run dev      # ローカル開発サーバー起動 (http://localhost:4321)
npm run build    # 静的HTML一式を dist/ に出力
```

### 2. microCMS の構築と環境変数設定
1. `microcms-schemas/README.md` の手順に従い、microCMS（無料 Hobbyプラン）に5つのAPI（`sliders`, `information`, `product_categories`, `products`, `works`）を作成してJSONをインポートします。
2. ローカルで確認する場合は `.env.example` を `.env` にコピーし、以下を設定します。
   ```env
   MICROCMS_SERVICE_DOMAIN=あなたのサービスドメイン（xxxx.microcms.io の xxxx 部分）
   MICROCMS_API_KEY=あなたのAPIキー
   ```
3. GitHub リポジトリの **Settings > Secrets and variables > Actions** に、以下の Repository secrets を登録します。
   * `MICROCMS_SERVICE_DOMAIN`
   * `MICROCMS_API_KEY`
   * `PUBLIC_BOWNOW_PRODUCT_QUERY_KEY`（任意：BowNowフォームの製品名項目の `_bq_` クエリコード）

### 3. GitHub Pages の公開検証とカスタムドメイン移行手順
1. **【ステージング検証（カスタムドメイン適用前）】**
   * この `github-site` フォルダの中身を GitHub リポジトリへ Push します。
   * GitHub リポジトリの **Settings > Pages** を開き、**Build and deployment > Source** を **「GitHub Actions」** に変更します。
   * `.github/workflows/deploy.yml` 内の `actions/configure-pages` がリポジトリのサブパス（`https://<アカウント名>.github.io/<リポジトリ名>/`）を自動検出し、CSS・画像・リンクのパスをすべて検証用URLに合わせて自動ビルド＆デプロイします。
2. **【本番移行（検証完了後のカスタムドメイン適用）】**
   * 検証用URLで全ページの表示・動作に問題がないことを確認した後、GitHub リポジトリの **Settings > Pages > Custom domain** に `corp.gaia-edu.co.jp` を入力して保存し、DNSレコードを切り替えます。
   * 次回以降のビルドでは、自動的にルートパス（`https://corp.gaia-edu.co.jp/`）向けに切り替わってデプロイされます（ソースコードの書き換えは一切不要です）。
3. **【microCMS Webhook連携】**
   * microCMS の **API設定 > Webhook** から「GitHub Actions」連携を追加すると、microCMSで記事や製品を公開・更新するたびに自動でGitHub Pagesが更新されます。

