module.exports = {
  "globDirectory": "app/",
  "globPatterns": [
    "**/*.{html,js,css,gif,jpg,png}"
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