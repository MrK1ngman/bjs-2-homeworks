function parseCount(value){
    if(Number.parseFloat(value) === NaN){
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(value);
}

function validateCount(value){ 
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}