# PDF・Excel・Word等のダウンロード用ファイル格納ディレクトリ

microCMSの無料プラン（Hobbyプラン）では `file` フィールドが利用できないため、
製品カタログや添付資料（PDF / Excel / Word 等）はこの `public/files/` フォルダ内に配置してください。

## 使い方
1. このフォルダ（`github-site/public/files/`）にファイル（例：`catalog_g200124.pdf`）を配置します。
   （※GitHubのWeb画面上から `public/files/` フォルダを開き、「Add file > Upload files」でドラッグ＆ドロップするだけでも追加可能です）
2. microCMSの「関連ファイルリスト」の **「ファイルURLまたはパス」** 欄に、以下のように入力します：
   * `/files/catalog_g200124.pdf`（またはファイル名 `catalog_g200124.pdf` だけでも自動補完されます）
   * ※外部サーバー（`https://www.gaia-edu.co.jp/...` や Googleドライブ、BowNow資料URL等）のURLを直接入力することも可能です。
3. 拡張子（`.pdf`, `.xlsx`, `.docx` 等）を自動判別し、サイト上にPDF・Excel・Wordアイコン付きのダウンロードリンクが表示されます。

