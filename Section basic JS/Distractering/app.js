//array destructuring

let arr = ["Ford", "Mazda", "Shevrolet"];

//let car1, car2, car3;

// car1 = arr[0];
// car2 = arr[1];
// car3 = arr[2];

let [car1, car2, car3] = arr;

function _arr(x, y) {
    return [x+1, y+1];
}

let [num1, num2] = _arr(5, 10);

// rest syntax...

let arr2= [1,2,3,4,5,6];

let [nume, num4] = arr2; //получаем первые два члена массива

let [nume, num4, ...arr3] = arr2; //получаем первые два члена массива в первые переменные, а всё остальное в arr3

//используй когда нужно передать в функцию неизвестное к-во переменных

function printDetails (firstName, lastName, ...otherDetails) {
    console.log(firstName);
    console.log(lastName);
    for (let index = 0; index < otherDetails.length; index++){
        onsole.log(otherDetails);
    }
}

printDetails("Avi", "Cohen", 21, "Raanaa", "something");

//destructuring in object

let student = {
    firstName : "Yosi",
    lastName:"Levi",
    id: 1561851851,
}

let {firstName, lastName, id} = student;