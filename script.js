// 2) Подкючаем js и создаем функцию конструктор с методами:

// showMainPage() - показывает главную страницу (делает ее видимой)
// showAuthPage() - показывает страницу авторизации
// showRegistrationPage() - показывает страницу регистрации

// все эти методы должны скрывать другие страницы 

//  Registration() - добавляет в массив данные из формы 
// массив объявлен в начале script.js файла и изначально он пустой

// Пример: const newUser = {email: ДАННЫЕИЗИНПУТАEMAIL, pass: ДАННЫЕИЗ_ИНПУТАPASS}
// myArray.push(newUser)

//  Auth() - проверяет есть ли пользователь с таким email

// Через метод find находит пользователя
// Пример: const user = myArray.find(currentUser => currentUser.email === EMAILИЗПОЛЯ)

// делаете проверку на совпадение pass 
// if(user.pass === PASSИЗ_ПОЛЯ) {
//  alert(‘Вы вошли в систему’)
// } else  alert(‘Пароль не верный’)


let regInfo = [];

const sections1 = document.querySelector('.log-page');
const sections2 = document.querySelector('.get-page');
const sections3 = document.querySelector('.welcome-page');

const inputEmail = document.querySelector('#get_input_email');
const inputPass = document.querySelector('#get_input_pass');
const inputPassRepeat = document.querySelector('#get_input_repeat_pass');

const regBtn = document.querySelector('#reg-btn');

// const handleRegistration = () => {
//     regInfo.push(inputEmail.value);
//     regInfo.push(inputPass.value);
//     regInfo.push(inputPassRepeat.value);
// };


function MainConstructor() {
    this.showMainPage = function() {
        sections1.style.display = 'flex'
        sections2.style.display = 'none'
        sections3.style.display = 'none'
    };
    this.showRegistrationPage = function() {
        sections1.style.display = 'none'
        sections2.style.display = 'flex'
        sections3.style.display = 'none'
    };
    this.showAuthPage = function() {
        sections1.style.display = 'none'
        sections2.style.display = 'none'
        sections3.style.display = 'flex'
    };
    this.saveReg = function () {
        regInfo.push(inputEmail.value);
        regInfo.push(inputPass.value);
        regInfo.push(inputPassRepeat.value);
    };
}

console.log(regInfo);


const newObj = new MainConstructor();
