# microCMS APIスキーマ インポート手順書

本ディレクトリには、microCMS（無料 Hobbyプラン：上限5 API）にそのままインポートして全5つのAPIを構築できるスキーマ定義JSONファイルが格納されています。

## 作成する5つのAPIとインポート順序

API間のコンテンツ参照（リレーション）を設定するため、**以下の番号順（1 → 5）** にAPIを作成してください。

| 順番 | API名（表示名） | エンドポイント名 | 選択するAPIの型 | インポートするJSONファイル |
| :---: | :--- | :--- | :---: | :--- |
| **1** | **スライダー** | `sliders` | **リスト形式** | `1_sliders.json` |
| **2** | **お知らせ** | `information` | **リスト形式** | `2_information.json` |
| **3** | **製品カテゴリー** | `product_categories` | **リスト形式** | `3_product_categories.json` |
| **4** | **製品** | `products` | **リスト形式** | `4_products.json` |
| **5** | **導入事例** | `works` | **リスト形式** | `5_works.json` |

---

## インポート手順（各API共通）

1. microCMS管理画面にログインし、左メニューの **「APIを追加」**（＋ボタン）をクリックします。
2. **「自分で定義」** を選択します。
3. 上記の表の通り **「API名」** と **「エンドポイント」** を入力し、**「リスト形式」** を選択します。
4. フィールド設定画面で **「スキーマをインポート」** をクリックし、該当するJSONファイル（`1_sliders.json` 〜 `5_works.json`）を選択して読み込みます。

### ※【重要】コンテンツ参照フィールドの設定（4番・5番のAPIのみ）

microCMSの仕様上、別APIを参照するフィールド（`relation` / `relationList`）はインポート直後は参照先が空（`null`）になっています。インポート時に以下の設定を行ってください。

* **`4_products.json`（製品 API）インポート時**：
  * `category`（カテゴリー）フィールドの参照先APIとして **`product_categories`（製品カテゴリー）** を選択してください。
* **`5_works.json`（導入事例 API）インポート時**：
  * `products`（導入製品リスト）フィールドの参照先APIとして **`products`（製品）** を選択してください。

---

## 関連ファイル（PDF・Excel・Word等）の添付方法について（無料プラン対応）

microCMSの無料プラン（Hobby）ではファイルアップロード専用フィールド（`kind: "file"`）が制限されているため、`cf_file` カスタムフィールド内のファイル指定を **テキストフィールド（URLまたはパス指定）** に変更しています。以下のいずれかの方法で無料のままPDF等を添付できます。

1. **GitHubリポジトリ（`public/files/`）に配置する方法【推奨・容量無制限】**
   * `github-site/public/files/` フォルダにPDFやExcelファイル（例：`catalog.pdf`）を配置します（GitHubのWeb画面からドラッグ＆ドロップでアップロード可能）。
   * microCMSの入力欄には `/files/catalog.pdf`（またはファイル名 `catalog.pdf` のみ）を入力すると、自動的にGitHub Pages上のファイルへのダウンロードリンク＋ファイル種別アイコン（PDF/Excel/Word）が出力されます。
2. **外部URL（本社サイト・Googleドライブ・BowNow等）を指定する方法**
   * `https://www.gaia-edu.co.jp/.../sample.pdf` のような外部URLを直接入力してもそのままダウンロードリンクとして機能します。

