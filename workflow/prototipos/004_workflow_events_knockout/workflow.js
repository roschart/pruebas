//Bindings
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

//events
$('.stages_container').on('taskDone','.stage',function(event,task){
    var context=ko.contextFor(event.currentTarget);
	context.$data.onTaskDone(task,context.$parent);
});



//Objects
function Task(id, title, isDone){
	var self=this;
	self.id=id;
	self.title=title;
	self.isDone=ko.observable(isDone);
	self.done=function(data,event){
		self.isDone(true);
		$(event.target).trigger("taskDone",[data]);
	}

}

function Stage(id,title,tasks){
	var self=this;
	self.id=id;
	self.title=title;
    self.tasks=ko.observableArray(tasks || []);
	self.onTaskDone=function(task,parent){
		self.tasks.remove(task);
		var stages=parent.stages();
		var i=stages.indexOf(self);
		if(i+1<stages.length){
			task.isDone(false);
			stages[i+1].tasks.push(task);
		}
	};
}

//ViewModel
function WorkFlowViewModel(){
	var self=this;
	self.stages=ko.observableArray([
					new Stage(1,"Nuevo Contrato",
							[
								new Task(1, "Contrato XXX_01",false),
								new Task(4, "Contrato XXX_04",false),
							]),
					new Stage(2,"Preparar Orden de Trabajo",
							[
								new Task(2, "Contrato XXX_02",false),
								new Task(3, "Contrato XXX_03",false),
							]),
					]);
}

ko.applyBindings(new WorkFlowViewModel);
