var HashMap = /** @class */ (function () {
    function HashMap(size) {
        this.size = size;
        this.storage = [];
        for (var i = 0; i < size; i++) {
            this.storage.push([]);
        }
    }
    HashMap.prototype.hash = function (key) {
        var keyStr = String(key);
        return keyStr.length % this.size;
    };
    // set method returns nothing
    HashMap.prototype.set = function (key, value) {
        var index = this.hash(key);
        var bucket = this.storage[index];
        for (var i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }
        // if  key value not found, push a new key value
        bucket.push([key, value]);
    };
    HashMap.prototype.get = function (key) {
        var index = this.hash(key);
        var bucket = this.storage[index];
        for (var _i = 0, bucket_1 = bucket; _i < bucket_1.length; _i++) {
            var _a = bucket_1[_i], k = _a[0], v = _a[1];
            if (k === key) {
                return v;
            }
        }
        return undefined;
    };
    return HashMap;
}());
var fruits = new HashMap(5);
fruits.set("apple", 10);
fruits.set("orange", 50);
console.log(fruits.get("apple"));
console.log(fruits.get("orange"));
