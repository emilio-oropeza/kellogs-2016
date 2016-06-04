(function($){
	$.fn.box3d = function(options){
		return this.each(function() {
			var element = $(this);						
			if (element.data('box3d')) return;
			var myplugin = new Box3d(this, options);
			element.data('box3d', myplugin);
			element.data('box3d').methods.init();			
		});
	};
	
	var Box3d = function(target, options ){
		var componentObj = {
			methods:{
				init:function(){
					componentObj.methods.loadThumb();
					$(".media").each(function(i, val){
						$(this).on("click", function(){
							componentObj.methods.changeBox((i+1), val);
						});
					});
					if(!componentObj.methods.isIE()){
						var traqball_2 = new Traqball({stage: "box-cont", axis: [0,1,0], angle: 0.7, limitAxxis: "y"})
						setInterval(function () {
							traqball_2.setup({stage: "box-cont", limitAxxis: "y"});
						}, 30000);
					}else{
						componentObj.methods.showToIE();
					}
				},
				loadThumb: function(){
					$(".media").each(function(i, val){
						var img_container = $(this).find(".media-left");
						var nombre = $(this).find(".media-body");
						var img = '';
						var name = '';
						if(config.cajas[i].disponible){
							img = '<img class="img-center img-circle img-responsive" src="images/cajas/thumbs/'+config.cajas[i].img_nombre+'.jpg">';
							name = config.cajas[i].nombre;
						}else{
							img = '<img class="img-center img-circle img-responsive" src="images/cajas/thumbs/blanco.jpg">';
						}
						$(img).appendTo($(img_container));
						$(nombre).text(name);
					});
				},
				isIE: function(){
					var ua = window.navigator.userAgent;
				    var msie = ua.indexOf("MSIE ");

				    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
				    	return true;
				    }else {                
				    	return false;
					}
				},
				showToIE: function(){
					$("#box").css({"transform": "none"});
				},
				changeBox: function(pos, el){
					console.log(config.cajas[(pos-1)].disponible);
					if(config.cajas[(pos-1)].disponible){
						$(".media").removeClass("active");
						$(el).addClass("active");
						$("#front").css({'background-image':'url("'+urlIndepth+'images/cajas/caja'+pos+'/front.png")'});
						$("#back").css({'background-image':'url("'+urlIndepth+'images/cajas/caja'+pos+'/back.png")'});
						$("#left").css({'background-image':'url("'+urlIndepth+'images/cajas/caja'+pos+'/left.png")'});
						$("#right").css({'background-image':'url("'+urlIndepth+'images/cajas/caja'+pos+'/right.png")'});
					}
				}
			}
		};
		return componentObj;
	};	
})(jQuery);