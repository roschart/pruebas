
ko.bindingHandlers.jqButton = {
    init: function(element,valueAccessor) {
		  var currentValue = valueAccessor();
		  $(element).button({disabled:currentValue.disabled});
    },
    update: function(element,valueAccessor) {
		  var currentValue = valueAccessor();
		  $(element).button({disabled:currentValue.disabled});
    },
};


function Task(id, title, isDone){
	var self=this;
	self.id=id;
	self.title=title;
	self.isDone=ko.observable(isDone);
	self.done=function(){self.isDone(true);
	}

}

function WorkFlowViewModel(){
	var self=this;
	self.tasks=ko.observableArray([
		new Task(1,"Pendiente",false),
		new Task(2,"Realizada",true),
		new Task(3,"Otra mas pendiente",false)
		
		]);
}

ko.applyBindings(new WorkFlowViewModel);



