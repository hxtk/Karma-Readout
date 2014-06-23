function comaify(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
}

var n = $('.linkinfo .score .number').html();
    n = n.replace(/\D/g,'');

var p = $('.linkinfo .score').html();
    p = p.substring(p.indexOf('(')+1,p.indexOf('%'));

var y = (100-p)*n/(2*p-100);
    y = Math.round(y);
var x = parseInt(n) + parseInt(y);

var text = $('.linkinfo .score').html();

text =  text + '<br><span style="color:#FF4500; font-size:80%">'+
        comaify(x) + '&#32;upvotes</span>&#32;'+
        '<span style="color:#5F99CF; font-size:80%">'+
        comaify(y) + '&#32;downvotes</span>';

$('.linkinfo .score').html(text);
