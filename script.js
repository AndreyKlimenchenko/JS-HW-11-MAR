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

const sections1 = document.getElementsByClassName('.log-page');

const sections2 = document.getElementsByClassName('.get-page');

const sections3 = document.getElementsByClassName('.welcome-page');

function MainConstructor() {
    this.ShowMainPage = function() {
        sections1.style.display = 'flex'
        sections2.style.display = 'none'
        sections3.style.display = 'none'
    }
    this.showAuthPage = function() {
        const element = document.querySelector('.get-page');
        element.add.style.display = 'block';
    }
    this.showRegistrationPage = function() {
        const element = document.querySelector('.welcome-page');
        element.add.style.display = 'block';
    }
}



const newObj = new MainConstructor();
