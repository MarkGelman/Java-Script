"use strict";

let num = 50;

while (num<55) {

}

do {

}
while (num<55);

for (let i = 1; i<8; i++) {
    break;
    continue ; -- /* даёт возможность пропустить при необходимости одну из итераций цикла*/
}

for (let i = 1; i<8; i++) {

    second: for (let i = 1; i<8; i++) {

        for (let i = 1; i<8; i++) {
            break;
            continue second; -- /* даёт возможность не только пропустить при необходимости одну из итераций цикла
                                в которой он записан, но и перейти на цикл, с которого нужно снова начинать(только
                                    в случае, если говориться о вложенных циклах)*/
        }
    }
}