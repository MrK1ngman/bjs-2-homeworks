//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args) {
        const hash = md5(...args);
        let objectInCache = cache.find((item) => item == hash)
        if (!objectInCache) {
            console.log('Из кэша:' + objectInCache);
            return 'Из кэша:' + objectInCache;
        }
        let result = func(...args);
        cache.push(hash);
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
