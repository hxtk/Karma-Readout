$(document).ready(function(){
    var n = $('.score .number').html();

    var p = $('.score').html();
        p = p.substring(p.indexOf('(')+1,p.indexOf('%');

    var y = (100-p)*n/(2p-101);
    var x = n + y;

    var text = $('.score').html();

    text =  text + '<span class="upvotes"><span class="number">'+
            Math.round(x)+
            '</span>&#32;<span class="word">upvotes</span></span>&#32;'+
            '<span class="downvotes"><span class="number">'+
            Math.round(y)+
            '</span>&#32;<span class="word">downvotes</span></span>';

    $('.score').html(text);
});
