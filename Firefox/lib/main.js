var pageMod = require("sdk/page-mod");



pagemod.PageMod({
    include:       "*.reddit.com/r/*/comments/*"
    contentScript: "var n = $('.score .number').html();" +
	           "var p = $('.score').html();" +
                   "p = p.substring(p.indexOf('(')+1,p.indexOf('%');" +
                   "var y = (100-p)*n/(2p-101);" +
                   "var x = n + y;" + 
