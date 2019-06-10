const fs = require('fs'); 

fs.readFile('./Hello.txt', (err, data) => {
    if (err) {
        console.log('Errror! Also, Holo I love you!');
    }
    console.log("Async", data.toString('utf8'));
})

const file = fs.readFileSync('./Hello.txt');

console.log("Sync", file.toString());

//Append
// fs.appendFile('./Hello.txt', ' Hello, Holo', err => {
//     if (err) {
//         console.log(1, err)
//     }
// });

// fs.appendFile('./Seiba', 'Hello, Seiba', err => {
//     if (err) {
//         console.log(2, err)
//     }
// });