Ext.onReady(function() {
	Ext.get('myEl1').on('click',function(e,t){
		this.addClass('red');
	});

	Ext.get('myEl2').on('click',function(e,t){
		this.addClass('gren');
	});
});
