(function($){
	$.fn.aprobados = function(options){
		return this.each(function() {
			var element = $(this);						
			if (element.data('aprobados')) return;
			var myplugin = new Aprobados(this, options);
			element.data('aprobados', myplugin);
			element.data('aprobados').methods.init();			
		});
	};
	
	var Aprobados = function(target, options ){
		var componentObj = {
			methods:{
				init:function(){
					componentObj.methods.showBotes();
				},
				showBotes: function(){
					var start = -1;
					$(".tubos > ul > li").each(function(i, val){
						var img = '';
						if(config.botes[i].disponible){
							img = '<img class="img-responsive img-center" src="images/botes/'+(i+1)+'.gif">';
							start++;
						}else{
							img = '<img class="img-responsive img-center" src="images/botes/blanco.png">';
						}
						$(img).appendTo($(this));
					});
					$('.tubos').flipster({
						buttons: true,
						start: start,
						scrollwheel: false,
						style: 'flat',
						spacing: 0
					});					
				}
			}
		};
		return componentObj;
	};	
})(jQuery);