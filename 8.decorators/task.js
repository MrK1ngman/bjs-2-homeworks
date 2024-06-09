//Задача № 1
function cachingDecoratorNew(func) {
    let cash = [];
    function wrapper(...args) {
        const hash = md5(...args);
        let objectInCash = cash.find((item) => item = hash)
        if (!objectInCash) {
            console.log('Из кэша:' + objectInCash);
            return 'Из кэша:' + objectInCash;
        }
        let result = func(...args);
        cash.push(hash);
        if (cash.length > 5) {
            cash.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  
}
