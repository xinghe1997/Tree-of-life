var wH = $(window).height();
var wW = $(window).width();
var generateStars = function generateStars(n) {
    for (var i = 0; i < n; i++) {
        var div = $("<div>");
        div.addClass(i % 20 == 0 ? 'star star--big' : i % 9 == 0 ? 'star star--medium' : 'star');
        div.attr('style', 'top:' + Math.round(Math.random() * wH) + 'px;left:' + Math.round(Math.random() * wW) + 'px;animation-duration:' + (Math.round(Math.random() * 3000) + 3000) + 'ms;animation-delay:' + Math.round(Math.random() * 3000) + 'ms;');
        $('body').append(div);
    }
};
(function ($) {
	$(function(){
		generateStars(20);
	})
})(jQuery);