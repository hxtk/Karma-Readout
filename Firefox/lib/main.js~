var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
    include: ["*.reddit.com"],
    contentScriptWhen: "ready",
    contentScriptFile: self.data.url("script.js")
});
