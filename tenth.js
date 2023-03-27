// for (let count = '#'; count.length<8; count+='#')
// console.log(count)

// for (let n = 1; n <= 100; n++){
//     let output = '';
//     if (n % 3 == 0) output += 'Fizz';
//     if (n % 5 == 0) output += 'Buzz';
//     console.log(output || n);
// }

let size = 8;

let board = '';

for (let width = 0; width < size; width++){
    for (let length = 0; length < size; length++){
        if ((width + length) % 2 == 0){
            board+= ' ';
        } else {
            board += '#';
        }
    }
    board += "\n";
}
console.log(board);