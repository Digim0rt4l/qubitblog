module.exports = class {
	data() {
		return {
			permalink: "/sitemap.xml",
			eleventyExcludeFromCollections: true,
			layout: false
		};
	}

	render({ collections }) {
		const baseUrl = "https://qubitblog.net";

		const urls = collections.all
			.map(page => page.url)
			.filter(Boolean)
			.map(url => {
				if (url.startsWith("http")) {
					try {
						return new URL(url).pathname;
					} catch {
						return url;
					}
				}
				return url;
			})
			.map(path => {
				let p = path.startsWith("/") ? path : `/${path}`;
				while (p.startsWith("//")) p = p.slice(1);
				return p;
			})
			.filter(path =>
				!path.startsWith("/authors/") &&
				!path.startsWith("/tags/") &&
				!path.startsWith("/admin/") &&
				path !== "/404/" &&
				path !== "/404.html"
			);

		return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		path => `	<url>
		<loc>${baseUrl}${path}</loc>
	</url>`
	)
	.join("\n")}
</urlset>
`;
	}
};
