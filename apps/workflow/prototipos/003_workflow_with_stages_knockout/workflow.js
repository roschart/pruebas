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

//Objects


function Task(id, title, isDone){
	var self=this;
	self.id=id;
	self.title=title;
	self.isDone=ko.observable(isDone);
	self.done=function(){self.isDone(true);
	}

}

function Stage(id,title,tasks){
	var self=this;
	self.id=id;
	self.title=title;
	self.tasks=tasks;
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
	//self.tasks=ko.observableArray([
	//	new Task(1,"Pendiente",false),
	//	new Task(2,"Realizada",true),
	//	new Task(3,"Otra mas pendiente",false)
	//	
	//	]);
}

ko.applyBindings(new WorkFlowViewModel);



