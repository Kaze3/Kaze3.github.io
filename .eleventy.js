module.exports = function (eleventyConfig) {
    return eleventyConfig.addPassthroughCopy("CNAME");
};