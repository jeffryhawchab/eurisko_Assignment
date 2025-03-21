var LRUCache = /** @class */ (function () {
    function LRUCache(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    LRUCache.prototype.get = function (key) {
        if (!this.cache.has(key)) {
            return null;
        }
        var value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    };
    LRUCache.prototype.put = function (key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            var oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }
    };
    return LRUCache;
}());
// Example usage
var cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache.get(2));
cache.put(4, 4);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));
