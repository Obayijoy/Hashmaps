class HashMaps <K, V>{
    private storage: [K, V][][];
    private size: number;

    constructor(size: number) {
        this.size = size;
        this.storage = [];
            for (let i = 0; i < size; i++) {
                    this.storage.push([]);
}
    }

    private hash(key: K): number {
        const keyStr = String(key);
        return keyStr.length % this.size;
    }
        // set method returns nothing
    set(key: K, value: V): void{
        const index = this.hash(key); //refer to hash method
        const bucket = this.storage[index];

        for(let i = 0; i < bucket.length; i++){
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }

        // if  key value not found, push a new key value
        bucket.push([key, value]);
    }

    get(key: K): V | undefined {
            const index = this.hash(key);
            const bucket = this.storage[index]!;

            for (const [k, v] of bucket){
                if(k=== key) {
                    return v;
                }
            }

            return undefined;
        }

    // you can do a delete method on hashmaps

}


const fruits = new HashMap <string, number>(20);
fruits.set("apple", 10);
fruits.set("orange", 50);

console.log(fruits.get("apple"));
console.log(fruits.get("orange"));

