// Условие задачи:
//     Если пароль меньше 6 символов, то вметсо пароля выведется на экран: "Ваш пароль слишком короток!"
//    иначе на экране отобразиться имя пользователя и его пароль

const myForm = document.getElementById('loginForm')

myForm.addEventListener("submit", myFunc);

function myFunc(e) {
    e.preventDefault();
    const myP = document.getElementById("userDetailis");
    const userName = document.getElementById("user").value;
    const password = document.getElementById("pass").value;
    if (password.length < 6) {
        myP.innerText = 'סיסמתך קצרה מידי'
    } else {
        myP.innerText = userName + " " + password;
    }

}