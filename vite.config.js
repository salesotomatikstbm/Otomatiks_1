import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const routes = [
  '/',
  '/about-us',
  '/robotics-coding-courses',
  '/robotics-coding-school-curriculum',
  '/workshop',
  '/robotics-ai-lab',
  '/csr',
  '/franchise',
  '/robotica',
  '/blog',
  '/shop',
  '/contact-us'
];

// Sitemap generator that works in both dev and production
function sitemapPlugin() {
  let config;
  const virtualModuleId = 'virtual:sitemap';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'sitemap-plugin',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const sitemap = generateSitemapContent();
        return `export default ${JSON.stringify(sitemap)}`;
      }
    },
    configureServer(server) {
      server.middlewares.use('/sitemap.xml', (_, res) => {
        res.setHeader('Content-Type', 'application/xml');
        res.end(generateSitemapContent());
      });
    },
    async writeBundle() {
      if (config.command === 'build') {
        const fs = await import('fs');
        const sitemap = generateSitemapContent();
        fs.writeFileSync(
          path.resolve(config.build.outDir, 'sitemap.xml'), 
          sitemap
        );
      }
    }
  };

  function generateSitemapContent() {
    return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${routes.map(route => `
          <url>
            <loc>https://www.otomatiks.com${route}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
            <priority>${route === '/' ? 1.0 : 0.8}</priority>
          </url>
        `).join('')}
      </urlset>`;
  }
}

export default defineConfig({
  plugins: [
    react(),
    sitemapPlugin()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});