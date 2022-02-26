// Выход из личного кабинета

let doLogout = (response) => {
    if (response.success === true) {
        location.reload();
    }
}

const logoutBtn = new LogoutButton();
logoutBtn.action = () => ApiConnector.logout(doLogout);


// Получение информации о пользователе

let doShowCurrentUser = (response) => {
    if (response) {
        console.log(response);
        ProfileWidget.showProfile(response);
    }
}

let User = () => ApiConnector.current(doShowCurrentUser);
// console.log(User());

