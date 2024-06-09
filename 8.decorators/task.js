//Задача № 1
function cachingDecoratorNew(func) {
    const cache = [];
    function wrapper(...args) {
        const hash = md5(args);
        let objectInCache = cache.find((item) => item.hash == hash)
        if (objectInCache) {
            console.log('Из кэша: ' + objectInCache.value);
            return 'Из кэша: ' + objectInCache.value;
        }
        let result = func(...args);
        cache.push({hash: hash, value: result});
        if (cache.length > 5) {
            cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  
}
