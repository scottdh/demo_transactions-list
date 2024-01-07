// Filters
const dateFilter = require("./src/filters/date-filter.js");
const w3DateFilter = require("./src/filters/w3-date-filter.js");

module.exports = function (eleventyConfig) {
  // Add filters
  eleventyConfig.addFilter("dateFilter", dateFilter);
  eleventyConfig.addFilter("w3DateFilter", w3DateFilter);

  // Set directories to pass through to the dist folder
  eleventyConfig.addPassthroughCopy("./src/fonts/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  // Copy `img/favicon/` to `_site/`
  eleventyConfig.addPassthroughCopy({ "./src/favicon": "/" });

  eleventyConfig.addWatchTarget("./src/sass/");

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  };
};
