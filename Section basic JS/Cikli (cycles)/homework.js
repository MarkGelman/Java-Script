// for (let i=5; i<11; i++) {
//     console.log(i);
// }

// for (let i=20; i>9; i--) {
//     console.log(i);
//     if (i === 13) {
//         break;
//     }
// }

// for (let i=2; i<11; i=i+2) {
//     console.log(i);
// }

// i=2;
// while (i <= 16) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
//     i++
// }

const arr = [];
for (let i=5; i<11; i++) {
    arr[i-5] = i
};
console.log(arr);