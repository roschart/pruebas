var A = function(foo) { 

	console.log("a" + foo);
	var B = function() {  
		console.log("b"+ foo);
		return A.prototype.constructor.apply(this, arguments);
	};
	B.prototype = A.prototype;                                                                                                 
	return B;                                                                                                                  
}; 

A(1)(2)(3);
