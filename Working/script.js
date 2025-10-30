const p = new Promise(setTimeout(() => {
    resolve("hello");
    reject("hi");
}, 3000))

p.then((value)=>console.log(value))

console.log();
