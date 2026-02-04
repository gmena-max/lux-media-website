/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://luxmediacr.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [],
  },
  // Add more pages here if you create additional routes
  additionalPaths: async () => {
    return [
      {
        loc: "/",
        changefreq: "weekly",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
    ];
  },
};
