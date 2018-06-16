module.exports = {
  "globDirectory": "app/",
  "globPatterns": [
    "**/*.{html,js,css,gif,jpg,png,json,svg,scss,ico,eot,ttf,woff,woff2,otf}"
  ],
  "swSrc":"app/sw-base.js",
  "swDest": "app/sw.js",
  "globIgnores":[
    "workbox-config.js",
    "workbox-sw.js",
    "sw-base.js",
    "manifest.json"
  ]
};