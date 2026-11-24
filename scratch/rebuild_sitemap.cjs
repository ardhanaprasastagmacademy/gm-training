const fs = require('fs');
const path = require('path');

const sitemapPath = 'public/sitemap.xml';
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const beritaDir = 'src/content/berita';
const mdFiles = fs.readdirSync(beritaDir).filter(f => f.endsWith('.md') && !f.startsWith('_'));

// Read date and metadata for all 37 articles
const articles = [];
for (const f of mdFiles) {
  const c = fs.readFileSync(path.join(beritaDir, f), 'utf8');
  const slug = f.replace('.md', '');
  const tMatch = c.match(/tanggal:\s*['"]?([^'"\r\n]+)['"]?/);
  const tanggal = tMatch ? tMatch[1].trim() : '2026-11-23';
  const lastmod = tanggal.split('T')[0];
  articles.push({ slug, tanggal, lastmod });
}

// Sort descending by tanggal
articles.sort((a, b) => b.tanggal.localeCompare(a.tanggal));
console.log('Total articles to place in sitemap:', articles.length);

// Extract all existing blog blocks to reuse their image tags if present
const blogBlocks = {};
const blockRegex = /<url>[\s\S]*?<loc>https:\/\/maganginformatika\.web\.id\/blog\/([^<]+)<\/loc>[\s\S]*?<\/url>/g;
let m;
while ((m = blockRegex.exec(sitemapContent)) !== null) {
  const slug = m[1].replace(/\/$/, '');
  if (!blogBlocks[slug]) {
    blogBlocks[slug] = m[0];
  }
}

// Build the new blog URL blocks
const newBlogXmlBlocks = [];
for (const a of articles) {
  const existing = blogBlocks[a.slug];
  if (existing) {
    // Update lastmod
    let updated = existing.replace(/<lastmod>[^<]+<\/lastmod>/, `<lastmod>${a.lastmod}</lastmod>`);
    newBlogXmlBlocks.push(updated);
  } else {
    // Construct default block
    const block = `  <url>
    <loc>https://maganginformatika.web.id/blog/${a.slug}/</loc>
    <lastmod>${a.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    newBlogXmlBlocks.push(block);
  }
}

// Now replace the blog section in sitemap.xml
// Let's identify the start of blog section or replace all blog <url> blocks
// In sitemap.xml, find where the first blog/berita <url> starts or find comment
// Let's inspect where non-blog urls end
const nonBlogBlocks = [];
const allUrlRegex = /<url>[\s\S]*?<\/url>/g;
let uMatch;
while ((uMatch = allUrlRegex.exec(sitemapContent)) !== null) {
  if (!uMatch[0].includes('/blog/') && !uMatch[0].includes('/berita/')) {
    nonBlogBlocks.push(uMatch[0]);
  }
}

console.log('Non-blog blocks count:', nonBlogBlocks.length);

const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>`;

const footer = `</urlset>
`;

const newSitemap = `${header}

${nonBlogBlocks.join('\n\n')}

  <!-- ========================================== -->
  <!-- ARTIKEL BLOG & EDUKASI MAGANG              -->
  <!-- ========================================== -->

${newBlogXmlBlocks.join('\n\n')}

${footer}`;

fs.writeFileSync(sitemapPath, newSitemap, 'utf8');
console.log('Successfully wrote new sitemap.xml');
console.log('Total URLs in new sitemap:', nonBlogBlocks.length + newBlogXmlBlocks.length);
