import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module";

const html = htm.bind(h);

function safeFormatDate(value) {
	if (!value) {
		return "";
	}

	const date = value instanceof Date ? value : new Date(value);

	if (Number.isNaN(date.getTime())) {
		return "";
	}

	return format(date, "dd MMM, yyyy");
}

// Preview component for a Post
const Post = createClass({
	render() {
		const entry = this.props.entry;

		const title = entry.getIn(["data", "title"], null);
		const dateValue = entry.getIn(["data", "date"], null);
		const dateText = safeFormatDate(dateValue);
		const summary = entry.getIn(["data", "summary"], "");
		const tags = entry.getIn(["data", "tags"], []);

		return html`
			<main>
				<article>
					<h1>${title}</h1>

					<p>
						<small>
							${dateText
								? html`
										<time>${dateText}</time>
									`
								: null}
							${" by Author"}
						</small>
					</p>

					<p>${summary}</p>

					${this.props.widgetFor("body")}

					<p>
						${tags.map(
							tag =>
								html`
									<a href="#" rel="tag">${tag}</a>
								`
						)}
					</p>
				</article>
			</main>
		`;
	}
});

export default Post;
