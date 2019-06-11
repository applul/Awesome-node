//Requires node package module as well as node to be installed. I think?
//As of Wed. June 12th, I ran npm install. Will continue to test

const fs = require('fs'); 

// fs.readFile('./Hello.txt', (err, data) => {
//     if (err) {
//         console.log('Errror! Also, Holo I love you!');
//     }
//     console.log("Async", data.toString('utf8'));
// })

// const file = fs.readFileSync('./Hello.txt');

// console.log("Sync", file.toString());

//Append
// fs.appendFile('./Hello.txt', ' Hello, H', err => {
//     if (err) {
//         console.log(1, err)
//     }
// });

// fs.appendFile('./Seiba', 'Hello, S', err => {
//     if (err) {
//         console.log(2, err)
//     }
// });

//WRITE
fs.writeFile('Apples.txt', "I'll see you in 30 seconds!", err => {
    if (err) {
        console.log(err)
    }
})

//DELETE 
fs.unlink('./Apples.txt', err => {
    if (err) {
        console.log(err)
    }
    console.log("Secret Message has been erased. Shhhh....")
})