const path = require("path");

const withTM = require("next-transpile-modules")([]);

module.exports = withTM({
  // // any other general next.js settings
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },
  images: {
    // disableStaticImages: true,
  },
  inlineImageLimit: false,
});
