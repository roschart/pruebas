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


console.log("El resulado debe de ser 4", curry(function(x) {
    return x + 1;
})(3));



console.log("El resultado debe de ser 9 ", curry(function(x, y) {
    return x + y;
})(5)(4));


console.log("El resultado debe de ser 9 ", curry(function(x, y, z) {
    return x + y + z;
})(5)(4)(0));
