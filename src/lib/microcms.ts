/**
 * microCMS API クライアント・型定義・フォールバックデータ・共通ヘルパー
 * GAIA EDUCATION for CORPORATION
 */

export interface MicroCMSImage {
  url: string;
  height?: number;
  width?: number;
}

export interface MicroCMSFile {
  url: string;
  fileSize?: number;
}

export interface CustomImageItem {
  fieldId?: string;
  image?: MicroCMSImage;
  caption?: string;
}

export interface CustomFileItem {
  fieldId?: string;
  file?: MicroCMSFile | string;
  title?: string;
}

export interface CustomSiteItem {
  fieldId?: string;
  url: string;
  title?: string;
}

export interface CustomTableRowItem {
  fieldId?: string;
  title: string;
  body?: string;
}

export interface CustomCardItem {
  fieldId?: string;
  title: string;
  image?: MicroCMSImage;
  image_caption?: string;
}

export interface CustomLinkCodeItem {
  fieldId?: string;
  code: string;
}

export interface MicroCMSBaseContent {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
  old_id?: number;
}

/** ① sliders API */
export interface SliderItem extends MicroCMSBaseContent {
  label: string;
  image: MicroCMSImage;
  url?: string;
  order?: number;
  note?: string;
}

/** ② information API */
export interface InformationItem extends MicroCMSBaseContent {
  title: string;
  category: string | string[];
  published_date?: string;
  body?: string;
  main_image?: MicroCMSImage;
  main_image_caption?: string;
  youtube_id?: string;
  youtube_caption?: string;
  sub_images?: CustomImageItem[];
  files?: CustomFileItem[];
  sites?: CustomSiteItem[];
  note?: string;
}

/** ③ product_categories API */
export interface ProductCategoryItem extends MicroCMSBaseContent {
  name: string;
  group: string | string[];
  order?: number;
  body?: string;
  list_image?: MicroCMSImage;
  list_image_caption?: string;
  main_image?: MicroCMSImage;
  main_image_caption?: string;
  note?: string;
}

/** ④ products API */
export interface ProductItem extends MicroCMSBaseContent {
  name: string;
  model: string;
  category?: ProductCategoryItem;
  order?: number;
  body?: string;
  list_image?: MicroCMSImage;
  list_image_caption?: string;
  main_image?: MicroCMSImage;
  main_image_caption?: string;
  youtube_id?: string;
  youtube_caption?: string;
  descriptions?: CustomTableRowItem[];
  files?: CustomFileItem[];
  functions?: CustomCardItem[];
  options?: CustomCardItem[];
  specs?: CustomTableRowItem[];
  sites?: CustomSiteItem[];
  links?: CustomLinkCodeItem[];
  amazon_url?: string;
  note?: string;
}

/** ⑤ works API */
export interface WorkItem extends MicroCMSBaseContent {
  label: string;
  category: string | string[];
  order?: number;
  body?: string;
  list_image?: MicroCMSImage;
  list_image_caption?: string;
  main_image?: MicroCMSImage;
  main_image_caption?: string;
  youtube_id?: string;
  youtube_caption?: string;
  sub_images?: CustomImageItem[];
  files?: CustomFileItem[];
  sites?: CustomSiteItem[];
  products?: ProductItem[];
  note?: string;
}

// ============================================================================
// マスター定義（旧 ProductCategoryGroup, WorkCategory, InformationCategory 完全準拠）
// ============================================================================

export interface GroupMaster {
  name: 'table' | 'other' | 'furniture' | 'oem' | 'temp';
  label: string;
  group: string; // CSS class / local stylesheet name (list01..list05)
  descriptionHtml: string;
  topCardImage: string;
  mainImage: string;
}

export const PRODUCT_CATEGORY_GROUPS: Record<string, GroupMaster> = {
  table: {
    name: 'table',
    label: 'IT機器収納会議テーブル',
    group: 'list01',
    descriptionHtml:
      'モニターやノートPC等のICT機器を収納・展開出来るIT機器収納型の会議テーブル<br>面倒な配線や画像転送装置の設置などに合わせてカスタマイズ可能なモデル<br>濃いカラーを基調とした高級感ある製品を中心としたラインナップ',
    topCardImage: '/service/product/images/table/it_01.jpg',
    mainImage: '/service/product/images/table/main.jpg',
  },
  other: {
    name: 'other',
    label: 'オフィス向け家具',
    group: 'list02',
    descriptionHtml:
      '機能性の高いオフィス向け家具を中心にラインナップ<br>いつも利用する家具にガイアエデュケーションならではの機能を+ONE',
    topCardImage: '/service/product/images/other/other_01.jpg',
    mainImage: '/service/product/images/other/main.jpg',
  },
  furniture: {
    name: 'furniture',
    label: 'PC関連収納家具',
    group: 'list03',
    descriptionHtml:
      'ノートPC収納に特化した製品ラインナップ<br>管理方法も壁面、移動型と豊富<br>コストパフォーマンスに優れたシンプルモデル',
    topCardImage: '/service/product/images/furniture/pc_01.jpg',
    mainImage: '/service/product/images/furniture/main.jpg',
  },
  oem: {
    name: 'oem',
    label: 'OEM製品',
    group: 'list04',
    descriptionHtml:
      '木製から金属製・樹脂製等幅広いオリジナル製品を企画開発<br>メーカー特定製品に合わせニーズを吸い上げたオリジナル製品の製作<br>御社ICT機器にプラス１の価値を提供',
    topCardImage: '/service/product/images/oem/oem_01.jpg',
    mainImage: '/service/product/images/oem/main.jpg',
  },
  temp: {
    name: 'temp',
    label: 'カテゴリー無',
    group: 'list05',
    descriptionHtml: '',
    topCardImage: '/function/images/no_image.png',
    mainImage: '/function/images/no_image.png',
  },
};

export const WORK_CATEGORIES: Record<string, { name: string; label: string; group: string }> = {
  table: { name: 'table', label: 'IT機器収納会議テーブル', group: 'list01' },
  other: { name: 'other', label: 'オフィス向け家具', group: 'list02' },
  furniture: { name: 'furniture', label: 'PC関連収納家具', group: 'list03' },
  oem: { name: 'oem', label: 'OEM製品', group: 'list04' },
};

export const INFORMATION_CATEGORIES: Record<string, { name: string; label: string; group: string }> = {
  news: { name: 'news', label: 'お知らせ', group: 'label-category-base' },
  important: { name: 'important', label: '重要', group: 'label-category-base' },
  media: { name: 'media', label: 'メディア', group: 'label-category-base' },
};

// ============================================================================
// 正規化・フォーマット用ヘルパー関数
// ============================================================================

/**
 * GitHub Pages サブパス検証環境 (https://<owner>.github.io/<repo>/) と
 * 本番カスタムドメイン環境 (https://corp.gaia-edu.co.jp/) の両方に対応するパス解決ヘルパー
 */
export function withBase(path?: string | null): string {
  if (!path) return '';
  if (/^(https?:\/\/|mailto:|tel:|#|data:|javascript:)/i.test(path)) {
    return path;
  }
  const rawBase = import.meta.env.BASE_URL || '/';
  const basePrefix = rawBase === '/' ? '' : rawBase.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  if (basePrefix && (normalizedPath === basePrefix || normalizedPath.startsWith(`${basePrefix}/`))) {
    return normalizedPath;
  }
  return `${basePrefix}${normalizedPath}`;
}

/** URLスラッグの取得（old_id が設定されていれば旧URL互換のため優先使用） */
export function getSlug(item?: MicroCMSBaseContent | null): string {
  if (!item) return '1';
  if (typeof item.old_id === 'number' && !Number.isNaN(item.old_id)) {
    return String(item.old_id);
  }
  return item.id;
}

/** セレクトフィールドの値（配列または文字列）を単一文字列に取り出す */
function unwrapSelect(val: string | string[] | undefined | null, fallback: string): string {
  if (Array.isArray(val)) {
    return val[0] ?? fallback;
  }
  return val || fallback;
}

/** 製品グループ名を正規化 ('table' | 'other' | 'furniture' | 'oem' | 'temp') */
export function normalizeGroupKey(raw: string | string[] | undefined | null): 'table' | 'other' | 'furniture' | 'oem' | 'temp' {
  const val = unwrapSelect(raw, 'table').trim();
  if (val === 'table' || val.includes('会議テーブル') || val.includes('テーブル')) return 'table';
  if (val === 'other' || val.includes('オフィス向け家具') || val.includes('オフィス')) return 'other';
  if (val === 'furniture' || val.includes('PC関連') || val.includes('収納家具')) return 'furniture';
  if (val === 'oem' || val.toLowerCase().includes('oem')) return 'oem';
  if (val === 'temp' || val.includes('カテゴリー無')) return 'temp';
  return 'table';
}

export function getProductGroup(raw: string | string[] | undefined | null): GroupMaster {
  const key = normalizeGroupKey(raw);
  return PRODUCT_CATEGORY_GROUPS[key] || PRODUCT_CATEGORY_GROUPS.table;
}

export function getWorkCategory(raw: string | string[] | undefined | null) {
  const key = normalizeGroupKey(raw);
  const validKey = key === 'temp' ? 'table' : key;
  return WORK_CATEGORIES[validKey] || WORK_CATEGORIES.table;
}

export function getInformationCategory(raw: string | string[] | undefined | null) {
  const val = unwrapSelect(raw, 'news').trim();
  if (val === 'important' || val === '重要') return INFORMATION_CATEGORIES.important;
  if (val === 'media' || val === 'メディア' || val === 'マスコミ') return INFORMATION_CATEGORIES.media;
  if (val === 'news' || val === 'お知らせ') return INFORMATION_CATEGORIES.news;
  return { name: val, label: val, group: 'label-category-base' };
}

/** 日付フォーマット (sep = '-' -> YYYY-MM-DD, sep = '/' -> YYYY/MM/DD) */
export function formatDate(dateStr?: string, sep: '-' | '/' = '-'): string {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  // 日本時間 (JST: UTC+9) で日付を算出
  const jst = new Date(d.getTime() + 9 * 60 * 60 * 1000);
  const y = jst.getUTCFullYear();
  const m = String(jst.getUTCMonth() + 1).padStart(2, '0');
  const day = String(jst.getUTCDate()).padStart(2, '0');
  return `${y}${sep}${m}${sep}${day}`;
}

export function getYear(dateStr?: string): string {
  if (!dateStr) return String(new Date().getFullYear());
  const formatted = formatDate(dateStr, '-');
  return formatted.slice(0, 4);
}

/** 旧 helpers.php の output_html() 完全再現（エスケープ＋URL自動リンク＋改行<br>変換） */
export function outputHtml(text?: string | null, link = true, br = true): string {
  if (!text) return '';
  // 既にHTMLタグ（<br>, <p>, <a> 等）が含まれるリッチテキストの場合はそのまま返す
  if (/<(br|p|div|ul|ol|li|a|span|strong|b|i|table)\b/i.test(text)) {
    return text;
  }
  let escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  if (link) {
    escaped = escaped.replace(/(https?:\/\/[^\s<]+)/gi, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
  }
  if (br) {
    escaped = escaped.replace(/\r\n|\r|\n/g, '<br>');
  }
  return escaped;
}

/** 旧 helpers.php の fa5_file_icon() 完全再現 */
export function getFileIconClass(fileOrUrl?: MicroCMSFile | string | null): string {
  const url = typeof fileOrUrl === 'string' ? fileOrUrl : fileOrUrl?.url || '';
  const lower = url.toLowerCase();
  if (lower.endsWith('.pdf') || lower.includes('pdf')) return 'far fa-file-pdf';
  if (lower.endsWith('.xls') || lower.endsWith('.xlsx') || lower.includes('excel') || lower.includes('spreadsheet')) {
    return 'far fa-file-excel';
  }
  if (lower.endsWith('.doc') || lower.endsWith('.docx') || lower.includes('word')) {
    return 'fa fa-file-word';
  }
  return 'far fa-file';
}

export function getFileUrl(fileOrUrl?: MicroCMSFile | string | null): string {
  if (!fileOrUrl) return '#';
  const raw = (typeof fileOrUrl === 'string' ? fileOrUrl : fileOrUrl.url || '#').trim();
  if (!raw || raw === '#') return '#';
  // https:// 等の外部URLや / 始まりのパスはそのまま withBase で解決し、
  // ファイル名のみ（例: "catalog.pdf"）が入力された場合は自動的に "/files/catalog.pdf" として補完する
  if (/^(https?:\/\/|mailto:|tel:|#)/i.test(raw)) {
    return raw;
  }
  const normalized = raw.startsWith('/') ? raw : raw.startsWith('files/') ? `/${raw}` : `/files/${raw}`;
  return withBase(normalized);
}

// ============================================================================
// 旧本番サーバーから抽出した全データ（microCMS 側のデータと自動マージ／フォールバック）
// ============================================================================

import productionData from '../data/production_data.json';

const LEGACY_SLIDERS = (productionData.sliders || []) as unknown as SliderItem[];
const LEGACY_INFORMATION = (productionData.information || []) as unknown as InformationItem[];
const LEGACY_CATEGORIES = (productionData.product_categories || []) as unknown as ProductCategoryItem[];
const LEGACY_PRODUCTS = (productionData.products || []) as unknown as ProductItem[];
const LEGACY_WORKS = (productionData.works || []) as unknown as WorkItem[];

// ============================================================================
// microCMS REST API フェッチ関数（全件取得対応）
// ============================================================================

const SERVICE_DOMAIN = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = import.meta.env.MICROCMS_API_KEY;

export function isMicroCMSConfigured(): boolean {
  return Boolean(
    SERVICE_DOMAIN &&
    API_KEY &&
    SERVICE_DOMAIN !== 'your-service-domain' &&
    API_KEY !== 'your-api-key'
  );
}

async function fetchAllFromMicroCMS<T>(
  endpoint: string,
  params: Record<string, string> = {}
): Promise<T[] | null> {
  if (!isMicroCMSConfigured()) {
    return null;
  }

  const limit = 100;
  let offset = 0;
  let allContents: T[] = [];

  try {
    while (true) {
      const searchParams = new URLSearchParams({
        limit: String(limit),
        offset: String(offset),
        ...params,
      });
      const url = `https://${SERVICE_DOMAIN}.microcms.io/api/v1/${endpoint}?${searchParams.toString()}`;
      const res = await fetch(url, {
        headers: {
          'X-MICROCMS-API-KEY': API_KEY,
        },
      });

      if (!res.ok) {
        console.warn(`[microCMS] Failed to fetch ${endpoint}: ${res.status} ${res.statusText}`);
        return null;
      }

      const data = await res.json();
      const contents: T[] = data.contents || [];
      allContents = allContents.concat(contents);

      if (allContents.length >= (data.totalCount || 0) || contents.length < limit) {
        break;
      }
      offset += limit;
    }
    return allContents;
  } catch (err) {
    console.warn(`[microCMS] Error fetching ${endpoint}:`, err);
    return null;
  }
}

/**
 * microCMS 側のデータと旧本番DBフォールバックデータの解決ヘルパー
 * - microCMS から正常に取得できた場合（配列が返った場合、0件含む）は microCMS 側を唯一の正とする
 *   （これにより、microCMS 側で削除・非公開化したコンテンツがローカルデータから復活するのを防ぐ）
 * - ローカル開発で環境変数未設定時や、API 通信障害で null が返った場合のみ旧データへフォールバックする
 */
function resolveWithFallback<T extends MicroCMSBaseContent>(cmsItems: T[] | null, legacyItems: T[]): T[] {
  if (cmsItems !== null) {
    return [...cmsItems];
  }
  return [...legacyItems];
}

/** ① スライダー一覧取得 */
export async function getSliders(): Promise<SliderItem[]> {
  const items = await fetchAllFromMicroCMS<SliderItem>('sliders', { orders: 'order,publishedAt' });
  const resolved = resolveWithFallback(items, LEGACY_SLIDERS);
  return resolved.sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));
}

/** ② お知らせ一覧取得 */
export async function getInformationList(): Promise<InformationItem[]> {
  const items = await fetchAllFromMicroCMS<InformationItem>('information', {
    orders: '-published_date,-publishedAt',
  });
  const resolved = resolveWithFallback(items, LEGACY_INFORMATION);
  return resolved.sort((a, b) => {
    const dateA = a.published_date || a.publishedAt || '';
    const dateB = b.published_date || b.publishedAt || '';
    return dateB.localeCompare(dateA);
  });
}

/** ③ 製品カテゴリー一覧取得 */
export async function getProductCategories(): Promise<ProductCategoryItem[]> {
  const items = await fetchAllFromMicroCMS<ProductCategoryItem>('product_categories', {
    orders: 'order,publishedAt',
  });
  const resolved = resolveWithFallback(items, LEGACY_CATEGORIES);
  return resolved.sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));
}

/** ④ 製品一覧取得 */
export async function getProducts(): Promise<ProductItem[]> {
  const items = await fetchAllFromMicroCMS<ProductItem>('products', {
    orders: 'order,publishedAt',
    depth: '2',
  });
  const resolved = resolveWithFallback(items, LEGACY_PRODUCTS);
  return resolved.sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));
}

/** ⑤ 導入事例一覧取得 */
export async function getWorks(): Promise<WorkItem[]> {
  const items = await fetchAllFromMicroCMS<WorkItem>('works', {
    orders: 'order,-publishedAt',
    depth: '2',
  });
  const resolved = resolveWithFallback(items, LEGACY_WORKS);
  return resolved.sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));
}

