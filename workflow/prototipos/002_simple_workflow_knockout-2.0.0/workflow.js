function Task(id, title, done){
	var self=this;
	self.id=id;
	self.title=title;
	self.done=done||false;

}

function WorkFlowViewModel(){
	var self=this;
	self.tasks=ko.observableArray([
		new Task(1,"Prueba",false),
		new Task(2,"Otra",true)		
		]);
}

ko.applyBindings(new WorkFlowViewModel);
