import type { APIRoute } from 'astro';
import {
  getInformationList,
  getProductCategories,
  getProducts,
  getWorks,
  getSlug,
  normalizeGroupKey,
} from '../lib/microcms';

const SITE_ORIGIN = 'https://corp.gaia-edu.co.jp';

interface SitemapEntry {
  loc: string;
  lastmod?: string;
  priority: string;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toIsoDate(dateStr?: string): string | undefined {
  if (!dateStr) return undefined;
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString();
}

export const GET: APIRoute = async () => {
  const [information, categories, products, works] = await Promise.all([
    getInformationList(),
    getProductCategories(),
    getProducts(),
    getWorks(),
  ]);

  const seen = new Set<string>();
  const entries: SitemapEntry[] = [];

  const addEntry = (path: string, priority: string, lastmod?: string) => {
    const normalized = path.startsWith('/') ? path : `/${path}`;
    const fullUrl = `${SITE_ORIGIN}${normalized}`;
    if (seen.has(fullUrl)) return;
    seen.add(fullUrl);
    entries.push({ loc: fullUrl, priority, lastmod: toIsoDate(lastmod) });
  };

  // 1. 固定ページ・グループ一覧ページ
  addEntry('/', '1.0');
  addEntry('/service/', '0.9');
  addEntry('/service/table/', '0.8');
  addEntry('/service/other/', '0.8');
  addEntry('/service/furniture/', '0.8');
  addEntry('/service/oem/', '0.8');
  addEntry('/work/', '0.8');
  addEntry('/work/table/', '0.7');
  addEntry('/work/other/', '0.7');
  addEntry('/work/furniture/', '0.7');
  addEntry('/work/oem/', '0.7');
  addEntry('/information/', '0.8');
  addEntry('/company/', '0.7');
  addEntry('/company/access/', '0.6');
  addEntry('/company/about_this_site/', '0.5');
  addEntry('/inquiry/', '0.8');

  // カテゴリー参照マップ
  const categoryMap = new Map<string, (typeof categories)[number]>();
  for (const cat of categories) {
    categoryMap.set(cat.id, cat);
    if (typeof cat.old_id === 'number') {
      categoryMap.set(String(cat.old_id), cat);
    }
  }

  // 2. 製品カテゴリーページ
  for (const cat of categories) {
    const gKey = normalizeGroupKey(cat.group);
    if (gKey === 'temp') continue;
    addEntry(`/service/${gKey}-${getSlug(cat)}/`, '0.8', cat.updatedAt || cat.publishedAt);
  }

  // 3. 製品詳細ページ
  for (const prod of products) {
    const catRef = prod.category;
    const catObj =
      typeof catRef === 'string'
        ? categoryMap.get(catRef)
        : catRef
          ? categoryMap.get(catRef.id) || catRef
          : undefined;

    if (!catObj) continue;
    const gKey = normalizeGroupKey(catObj.group);
    const groupCategory = `${gKey}-${getSlug(catObj)}`;
    addEntry(
      `/service/${groupCategory}/product/${getSlug(prod)}/`,
      '0.8',
      prod.updatedAt || prod.publishedAt
    );
  }

  // 4. お知らせ詳細ページ
  for (const info of information) {
    addEntry(
      `/information/${getSlug(info)}/`,
      '0.7',
      info.updatedAt || info.published_date || info.publishedAt
    );
  }

  // 5. 導入事例詳細ページ
  for (const work of works) {
    addEntry(`/work/${getSlug(work)}/`, '0.7', work.updatedAt || work.publishedAt);
  }

  const xmlBody = entries
    .map((e) => {
      const lines = [
        '  <url>',
        `    <loc>${escapeXml(e.loc)}</loc>`,
        ...(e.lastmod ? [`    <lastmod>${escapeXml(e.lastmod)}</lastmod>`] : []),
        `    <priority>${e.priority}</priority>`,
        '  </url>',
      ];
      return lines.join('\n');
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlBody}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};

