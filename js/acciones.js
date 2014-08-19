//JavaScript
	
$(document).ready(function(e){ $('#principal').height($('#page').height());
	document.addEventListener("deviceready",function(){
    	audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('do', 'audio/DO.mp3', function(){}, function(e){alert ("Error " +e);});
		audio.preloadFX('re', 'audio/RE.mp3', function(){}, function(e){alert ("Error " +e);});
		audio.preloadFX('mi', 'audio/MI.mp3', function(){}, function(e){alert ("Error " +e);});
		audio.preloadFX('fa', 'audio/FA.mp3', function(){}, function(e){alert ("Error " +e);});
		audio.preloadFX('sol', 'audio/SOL.mp3', function(){}, function(e){alert ("Error " +e);});
		audio.preloadFX('la', 'audio/LA.mp3', function(){}, function(e){alert ("Error " +e);});
		audio.preloadFX('si', 'audio/SI.mp3', function(){}, function(e){alert ("Error " +e);});
	//se codifica el evento
	//hacemos una clase para que cambie de color la tecla cuando sea tocada
	$('.nota').bind('touchstart', function(){
		$(this).addClass('tocada');
		audio.play($(this).attr('id'));
	}).bind('touchend',function(){
		$(this).removeClass('tocada')
	});
	},false); //deviceready
});//ready