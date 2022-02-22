const path = require("path");

const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/resource-timeline",
  "@fullcalendar/timegrid",
  "@fullcalendar/timeline",
]);

module.exports = withTM({
  // // any other general next.js settings
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },
});