var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
var data = require("sdk/self").data;

pageMod.PageMod({
    include: ["*.reddit.com"],
    contentScriptFile: [data.url("jquery-2.1.1.min.js"), data.url("script.js")]
});
