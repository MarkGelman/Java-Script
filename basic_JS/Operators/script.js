"use strict";

console.log(2*4 == 8) // это оператор не строгого сравнения вернёт TRUE
console.log(2*4 == '8') // это оператор не строгого сравнения вернёт также TRUE, т.к. сравнение
                        // происходит по значению, а не по типу объекта

console.log(2*4 === '8') // это оператор строгого сравнения, т.к. сравнение происходит и по
                         // значению и по типу объекта. В данном случае вернётся FALSE