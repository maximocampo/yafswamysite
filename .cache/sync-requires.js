const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/macpro/Desktop/sites/yafswamysite/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/macpro/Desktop/sites/yafswamysite/src/pages/404.js"))),
  "component---src-pages-dametumail-js": hot(preferDefault(require("/Users/macpro/Desktop/sites/yafswamysite/src/pages/dametumail.js"))),
  "component---src-pages-epk-js": hot(preferDefault(require("/Users/macpro/Desktop/sites/yafswamysite/src/pages/epk.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/macpro/Desktop/sites/yafswamysite/src/pages/index.js"))),
  "component---src-pages-musicaca-js": hot(preferDefault(require("/Users/macpro/Desktop/sites/yafswamysite/src/pages/musicaca.js")))
}

