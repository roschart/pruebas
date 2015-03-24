function maybe(fn) {
    return function(argument) {
        if (argument !== null) {
            return fn.call(this, argument);
        }
    };

}



function once(fn) {
    var done = false;
    return function() {
        return done ? void 0 : ((done = true), fn.apply(this, arguments));
    };
}

function flip(fn) {
    return function(first, second) {
        if (arguments.length === 2) {
            return fn.call(this, second, first);
        } else {
            return function(second) {
                return fn.call(this, second, first);
            };
        }
    };
}

function map(list, fn) {
    return list.map(fn);
}
var mapWith = flip(map);


function curry(fn, n, arg) {
    var narg = n || fn.length;
    var larg = arg || [];
    if (narg === 1) {
        return function(head) {
            return fn.apply(this, larg.concat(head));
        };
    } else {
        return function(head) {
            return curry(fn, narg - 1, larg.concat(head));
        };
    }

}
