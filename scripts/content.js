const article = document.querySelector("article");

if(article) {
    const text = article.textContent;
    const wordMatchRegEx = /[^\s]+/g;
    // matchAll=> returns an iterator, convert to array to get word count
    const Words = text.matchAll(wordMatchRegEx);
    const wordsCount = [...Words].length;
    const readingTime = Math.round(wordsCount / 50);
    const badge = document.createElement("p");

    // Use the same styling as the publish information in an article's header
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read => Elzohary estimation`;

    // Support for API reference docs
    const heading = document.querySelector("h1");

    // Support for article docs with date
    const date = document.querySelector("time")?.parentNode;

    (date ?? heading).insertAdjacentElement("afterbegin", badge);
}