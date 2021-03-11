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



// OTHER



const buttonSignUp = document.querySelector('.button-sign-up')
const buttonLogIn = document.querySelector('.button-log-in')
const buttonMainPage = document.querySelectorAll('.button-main-page')
const logIn = document.querySelector('.log-in')
const signUp = document.querySelector('.sign-up')
const mainPage = document.querySelector('.main-page')

const adressRegistration = document.querySelector('.adress-registration')
const passwordRegistration = document.querySelector('.password-registration')
const passwordRegistrationRepeat = document.querySelector('.password-registration-repeat')
const adressLogIn = document.querySelector('.adress-log-in')
const passwordLogIn = document.querySelector('.password-log-in')

const sendRegistration = document.querySelector('.send-registration')
const sendLogIn = document.querySelector('.send-log-in')

let arrFormRegistration = []
const Site = function() {
    this.showMainPage = function() {
        mainPage.style.display = 'block'
        signUp.style.display = 'none'
        logIn.style.display = 'none'
        const self=this
        buttonLogIn.addEventListener('click', self.showAuthPage)
        buttonSignUp.addEventListener('click', self.showRegistrationPage)
    }
    this.showRegistrationPage = function() {
        mainPage.style.display = 'none'
        signUp.style.display = 'block'
        logIn.style.display = 'none'
        const self=this
        buttonMainPage[1].addEventListener('click', self.showMainPage)
        sendRegistration.addEventListener('click', self.registration)
        // adressRegistration.value = ''
        //     passwordRegistration.value = ''
        //     passwordRegistrationRepeat.value = ''
        buttonMainPage[1].removeEventListener('click', self.registration)
    }
    this.showAuthPage = function() {
        mainPage.style.display = 'none'
        signUp.style.display = 'none'
        logIn.style.display = 'block'
        const self=this
        buttonMainPage[0].addEventListener('click', self.showMainPage)
        sendLogIn.addEventListener('click', self.login)

    }
    this.registration = function() {
        const user = {email: adressRegistration.value, password: passwordRegistration.value, repeatPassword: passwordRegistrationRepeat.value}
        arrFormRegistration.push(user)
        console.log(arrFormRegistration);
    }
    this.login = function() {
        const user = arrFormRegistration.find(currentUser => currentUser.email === adressLogIn.value)
        if (user.password = passwordLogIn.value) alert('you are log in')
    }

}

const site = new Site()
site.showMainPage()