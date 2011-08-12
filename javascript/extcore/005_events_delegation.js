Ext.onReady(function() {
	Ext.fly('elId').on('click',function(e,t){
		Ext.fly(t).addClass('red');
	});
});
