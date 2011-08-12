Ext.onReady(function() {
  var el=Ext.fly('foo');
  Ext.fly('bar').frame();
  el.addClass('error');
});
