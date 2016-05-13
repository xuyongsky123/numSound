;(function($){
	$.fn.numSound = function(){
		this.on('keyup',function(event){
			switch(event.keyCode){
				case 48:
					document.getElementById('audio0').play();
					break;
				case 49:
					document.getElementById('audio1').play();
					break;
				case 50:
					document.getElementById('audio2').play();
					break;
				case 51:
					document.getElementById('audio3').play();
					break;
				case 52:
					document.getElementById('audio4').play();
					break;
				case 53:
					document.getElementById('audio5').play();
					break;
				case 54:
					document.getElementById('audio6').play();
					break;
				case 55:
					document.getElementById('audio7').play();
					break;
				case 56:
					document.getElementById('audio8').play();
					break;
				case 57:
					document.getElementById('audio9').play();
					break;
			}
		});
	}
})(jQuery);