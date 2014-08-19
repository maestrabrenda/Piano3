//JavaScript
	
$(document).ready(function(e){ $('#principal').height($('#page').height());
	document.addEventListener("deviceready",function(){
    	audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('DO','audio/DO.mp3', function(){}, function(e){alert('Error ' + e);});
		audio.preloadFX('RE','audio/RE.mp3', function(){}, function(e){alert ("Error " +e);});
		audio.preloadFX('MI','audio/MI.mp3', function(){}, function(e){alert ("Error " +e);});
		audio.preloadFX('FA','audio/FA.mp3', function(){}, function(e){alert ("Error " +e);});
		audio.preloadFX('SOL','audio/SOL.mp3', function(){},function(e){alert ("Error " +e);});
		audio.preloadFX('LA','audio/LA.mp3', function(){}, function(e){alert ("Error " +e);});
		audio.preloadFX('SI','audio/SI.mp3', function(){}, function(e){alert ("Error " +e);});
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