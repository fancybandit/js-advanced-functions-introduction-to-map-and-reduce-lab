// 'map()'-like functions

function mapToNegativize(sourceArray) {
    const newArray = [];
    for (const val of sourceArray) {
        newArray.push(-(val));
    };
    return newArray;
};

function mapToNoChange(sourceArray) {
    const newArray = [];
    for (const val of sourceArray) {
        newArray.push(val);
    };
    return newArray;
};

function mapToDouble(sourceArray) {
    const newArray = [];
    for (const val of sourceArray) {
        newArray.push(val * 2);
    };
    return newArray;
};

function mapToSquare(sourceArray) {
    const newArray = [];
    for (const val of sourceArray) {
        newArray.push(val ** 2);
    };
    return newArray;
};


// 'reduce()'-like functions

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint;
    for (const val of sourceArray) {
        total += val;
    };
    return total;
};

function reduceToAllTrue(sourceArray) {
    for (const val of sourceArray) {
        if (!val) {return false;};
    };
    return true;
};

function reduceToAnyTrue(sourceArray) {
    for (const val of sourceArray) {
        if (val) {return true;};
    };
    return false;
};