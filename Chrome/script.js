var n = $('.linkinfo .score .number').html();
    n = n.replace(/\D/g,'');

var p = $('.linkinfo .score').html();
    p = p.substring(p.indexOf('(')+1,p.indexOf('%'));

var y = (100-p)*n/(2*p-101);
    y = Math.round(y);
var x = parseInt(n) + parseInt(y);

var text = $('.linkinfo .score').html();

text =  text + '<br><span class="upvotes" style="color:#FF4500; font-size:80%">'+
        x + '&#32;upvotes</span>&#32;'+
        '<span class="downvotes" style="color:#5F99CF; font-size:80%">'+
        y + '&#32;downvotes</span>';

$('.linkinfo .score').html(text);
