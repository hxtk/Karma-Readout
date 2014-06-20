var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
    include: ["*.reddit.com"],
    contentScriptWhen: "start",
    contentScriptFile: self.data.url("script.js")
});
