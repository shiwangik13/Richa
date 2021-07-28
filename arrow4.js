function sayNamaste() {
    console.log('Namaste World');
}

setInterval(sayNamaste, 1000);

// converting this example to arrow function
setInterval(()=> console.log('Namaste World'), 1000);
