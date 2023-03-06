if (4 == 9) {

} else {

};

const num = 50;
if (num<49) {

} else if (num > 100) {

} else {

};

(num === 50)? console.log('oK!'):console.log('Error!');

switch (num) {
    case 49:
        console.log('False');
        break;
    case 100:
        console.log('False');
        break;
    case 50:
        console.log('true');
        break;
    default:
        console.log('Не в этот раз!');
        break;
}