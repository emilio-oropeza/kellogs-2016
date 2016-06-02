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
					$(".media").each(function(i, val){
						$(this).on("click", function(){
							componentObj.methods.changeBox((i+1));
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
					console.log("hola");
				},
				changeBox: function(pos){
					$("#front").css({'background-image':'url("'+urlIndepth+'images/cajas/caja'+pos+'/front.png")'});
					$("#back").css({'background-image':'url("'+urlIndepth+'images/cajas/caja'+pos+'/back.png")'});
					$("#left").css({'background-image':'url("'+urlIndepth+'images/cajas/caja'+pos+'/left.png")'});
					$("#right").css({'background-image':'url("'+urlIndepth+'images/cajas/caja'+pos+'/right.png")'});
				}
			}
		};
		return componentObj;
	};	
})(jQuery);