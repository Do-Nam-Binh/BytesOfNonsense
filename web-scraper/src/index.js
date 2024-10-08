const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeTitles(url) {
  try {
    // Fetch the web page
    const { data } = await axios.get(url);

    // Load the HTML into cheerio
    const $ = cheerio.load(data);

    // Extract article titles based on the website's structure
    const titles = [];

    // Example for a general news site that uses <h2> for article titles
    $(".headline-small h2 a").each((index, element) => {
      const title = $(element).text();
      titles.push(title.trim());
    });

    console.log(titles);
  } catch (error) {
    console.error("Error scraping titles:", error);
  }
}

// Example: Replace with the news website you want to scrape
const url = "https://www.nbcnews.com/";
scrapeTitles(url);
