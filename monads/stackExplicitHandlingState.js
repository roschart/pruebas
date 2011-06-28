//Normal way of use stack

var stack=[];
stack.push(4);
stack.push(5);
stack.pop(); // 5
stack.pop(); //4

//The obvious solution to avoid mutable state is to construct a new 
//state container every time we need mutation. Here’s how it can
//look like in JavaScript (note that concat and slice are two Array
//methods that do not mutate the object they’re called on, instead they
//create new Array objects):

var push=function(element,stack){
	var newStack=[element].concat(stack);
	return newStack
}

var pop=function(stack){
  var value=stack[0];
  var newStack=stack.slice(1);
  return {value:value, stack:newStack}
}

var stack0=[];
var stack1=push(4,stack0);
var stack2=push(4,stack1);
var result0=pop(stack2);
var result1=pop(result0.stack);


//As you can see, both push and pop return a residual stack, the resulted
//state. pop additionally returns the popped value. Each subsequent stack
//operation uses the previous stack, but this may not be easily observable
//because of differences in representation of return values. However, code
//duplication can be emphasized by normalizing return values. We’ll have
//push return a dummy undefined value.

var push = function (element, stack) {
  var value = undefined;
  var newStack = [element].concat(stack);

  return { value: value, stack: newStack };
};

var pop = function (stack) {
  var value = stack[0];
  var newStack = stack.slice(1);

  return { value: value, stack: newStack };
};

var stack0 = [];

var result0 = push(4, stack0);
var result1 = push(5, result0.stack);
var result2 = pop(result1.stack); // {value: 5, stack: [4]}
var result3 = pop(result2.stack); // {value: 4, stack: []}

//Now, I’ll replace those intermediate result variables with functions
//and parameters. I want this because I find it easier to abstract over
//functions and parameters than over simple variables. To do this, I’ll
//create a small helper function, called bind, which does nothing more
//than just apply a continuation callback to the stack operation result.
//In other works, it binds a continuation to a stack operation.

var bind=function (value,continuation){
	return continuation(value);
}

var stack0=[];
var finalResult = bind(push(4, stack0), function (result0) {
  return bind(push(5, result0.stack), function (result1) {
    return bind(pop(result1.stack), function (result2) {
      return bind(pop(result2.stack), function (result3) {
        var value = result2.value + " : " + result3.value;
        return { value: value, stack: result3.stack };
      });
    });
  });
});

//Now, instead of calling push(4, stack0), we’ll call push(4)(stack0).
//In Haskell we wouldn’t even need this step, because its functions
//are curried by default

var push = function (element) {
  return function (stack) {
    var value = undefined;
    var newStack = [element].concat(stack);

    return { value: value, stack: newStack };
  };
};

var pop = function () {
  return function (stack) {
    var value = stack[0];
    var newStack = stack.slice(1);

    return { value: value, stack: newStack };
  };
};

var stack0 = [];

var finalResult = bind(push(4)(stack0), function (result0) {
  return bind(push(5)(result0.stack), function (result1) {
    return bind(pop()(result1.stack), function (result2) {
      return bind(pop()(result2.stack), function (result3) {
        var value = result2.value + " : " + result3.value;
        return { value: value, stack: result3.stack };
      });
    });
  });
});

//Preparing bind to Handle Intermediate Stacks
var bind = function (stackOperation, continuation) {
  return function (stack) {
    return continuation(stackOperation(stack));
  };
};

var stack0 = [];

var finalResult = bind(push(4), function (result0) {
  return bind(push(5), function (result1) {
    return bind(pop(), function (result2) {
      return bind(pop(), function (result3) {
        var value = result2.value + " : " + result3.value;
        return { value: value, stack: result3.stack };
      })(result2.stack);
    })(result1.stack);
  })(result0.stack);
})(stack0);

//Removing Trailing Stacks

var bind = function (stackOperation, continuation) {
  return function (stack) {
    var result = stackOperation(stack);
    var newStack = result.stack;
    return continuation(result)(newStack);
  };
};


var computation = bind(push(4), function (result0) {
  return bind(push(5), function (result1) {
    return bind(pop(), function (result2) {
      return bind(pop(), function (result3) {
        var value = result2.value + " : " + result3.value;

        // We need this anonymous function because we changed the protocol
        // of the continuation. Now, each continuation must return a
        // function which accepts a stack.
        return function (stack) {
          return { value: value, stack: stack };
        };
      });
    });
  });
});

var stack0 = [];
var finalResult = computation(stack0);

//Hiding the Final Residual Stack
var result = function (value) {
  return function (stack) {
    return { value: value, stack: stack };
  };
};

var computation = bind(push(4), function (result0) {
  return bind(push(5), function (result1) {
    return bind(pop(), function (result2) {
      return bind(pop(), function (result3) {

        return result(result2.value + " : " + result3.value);

      });
    });
  });
});

var stack0 = [];
var finalResult = computation(stack0);

//Keeping State Internal

var bind = function (stackOperation, continuation) {
  return function (stack) {
    var result = stackOperation(stack);
    return continuation(result.value)(result.stack);
  };
};

var computation = bind(push(4), function () {
  return bind(push(5), function () {
    return bind(pop(), function (result1) {
      return bind(pop(), function (result2) {

        return result(result1 + " : " + result2);

      });
    });
  });
});

var stack0 = [];
var finalResult = computation(stack0);
//Evaluating The Stack Computation
// Returns both the result and the final state.
var runStack = function (stackOperation, initialStack) {
  return stackOperation(initialStack);
};

// Returns only the computed result.
var evalStack = function (stackOperation, initialStack) {
  return stackOperation(initialStack).value;
};

// Returns only the final state.
var execStack = function (stackOperation, initialStack) {
  return stackOperation(initialStack).stack;
};

var stack0 = [];

console.log(runStack(computation, stack0));
// { value="5 : 4", stack=[]}

console.log(evalStack(computation, stack0));
// 5 : 4

console.log(execStack(computation, stack0));
// []


//Some JavaScript Sugar
var sequence = function (/* monadicActions..., continuation */) {
  var args           = [].slice.call(arguments);
  var monadicActions = args.slice(0, -1);
  var continuation   = args.slice(-1)[0];

  return function (stack) {
    var initialState = { values: [], stack: stack };

    var state = monadicActions.reduce(function (state, action) {
      var result = action(state.stack);
      var values = state.values.concat(result.value);
      var stack  = result.stack;

      return { values: values, stack: stack };
    }, initialState);

    var values = state.values.filter(function (value) {
      return value !== undefined;
    });

    return continuation.apply(this, values)(state.stack);
  };
};
var computation = sequence(
  push(4), // <- programmable commas :)
  push(5),
  pop(),
  pop(),

  function (pop1, pop2) {
    return result(pop1 + " : " + pop2);
  }
);

var initialStack = [];
var r = computation(initialStack); // "5 : 4"
console.log(r);



var computation = sequence(
  push(4), // <- programmable commas :)
  push(5),
  pop(),
  pop(),
  function(x,y){
  	return function(){return arguments};
  }

);

var initialStack = [];
var r = computation(initialStack); // "5 : 4"
console.log(r);
