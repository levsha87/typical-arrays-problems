
exports.min = function min (array) {
    if (typeof array != "undefined"  
                        && array != null  
                        && array.length != null  
                        && array.length > 0){
            let min = Math.min.apply(null, array);
                       return min; }
             else {
        return 0;
    }
}

exports.max = function max (array) {
    if (typeof array != "undefined"  
                        && array != null  
                        && array.length != null  
                        && array.length > 0){

    let max = Math.max.apply(null, array);
        return max;
    } else {
    return 0;
    }
}

exports.avg = function avg (array) {
    if (typeof array != "undefined"  
                        && array != null  
                        && array.length != null  
                        && array.length > 0){

    let sumArr = array.reduce((sum, current) => sum + current, 0);
    let n = array.length;
    let result = sumArr/n;
    return result;
    } else {
    return 0;
    }
}
