module.exports = class {
	data() {
		return {
			permalink: "/sitemap.xml",
			eleventyExcludeFromCollections: true
		};
	}

	render({ collections }) {
		const baseUrl = "https://qubitblog.net";

		const urls = collections.all
			.map(page => page.url)
			.filter(Boolean)
			.filter(url =>
				!url.startsWith("/authors/") &&
				!url.startsWith("/tags/") &&
				!url.startsWith("/admin/") &&
				url !== "/404/" &&
				url !== "/404.html"
			);

		return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `	<url>
		<loc>${baseUrl}${url}</loc>
	</url>`).join("\n")}
</urlset>`;
	}
};
