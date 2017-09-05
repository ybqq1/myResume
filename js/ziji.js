




//第二页的图片效果
	$(function(){
		$('.s2-1 .photo').mouseover(function(){
			$('.s2-1 .photo').addClass('animated bounce');
			setTimeout(function(){
				 $('.s2-1 .photo').removeClass('bounce');
			}, 1000);
		})
		$('.s2-2 .photo').mouseover(function(){
			$('.s2-2 .photo').addClass('animated swing');
			setTimeout(function(){
				 $('.s2-2 .photo').removeClass('swing');
			}, 1000);
		})
		
		
		$('.s2-3 .photo').mouseover(function(){
			$('.s2-3 .photo').addClass('animated wobble');
			setTimeout(function(){
				 $('.s2-3 .photo').removeClass('wobble');
			}, 1000);
		})
		
		
		$('.s2-4 .photo').mouseover(function(){
			$('.s2-4 .photo').addClass('animated jello');
			setTimeout(function(){
				 $('.s2-4 .photo').removeClass('jello');
			}, 1000);
		})
	});




//6页

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 150);
		});
		return this;
	};
})(jQuery);
	