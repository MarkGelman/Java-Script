// Создайте объект "student", содержащий свойства: 
//     Имя
//     Фамилия
//     Оценка
// Напишите функцию принимающую свойства объекта и
// выводящую следующее предложение:
//     "Hello Vr Israel your grade is 95"
// Нужно использовать destructuring объекта

import React, { useState} from 'react'

export default function outputOfObject() {
  return (
    <>
      const student = {
        firstName: "Israel",
        lastName: "Israeli",
        ball: 95
      };

      function printStudent(student) = {
        firstName, lastName, ball = student;
        string = `Hello Mr ${firstName} your grade is ${lastName}`
        <p>{string}</p>
      }
    </>
  )
}

