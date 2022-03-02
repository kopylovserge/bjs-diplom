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
        ProfileWidget.showProfile(response.data);
    }
}

const User = () => ApiConnector.current(doShowCurrentUser);
User();

// Получение текущих курсов валюты

let doRatesBoard = (response) => {
    if (response) {
        valuta.clearTable();
        valuta.fillTable(response.data);
    }
}

const valuta = new RatesBoard;
const getRatesBoard = () => ApiConnector.getStocks(doRatesBoard);
getRatesBoard();
setInterval(getRatesBoard, 60000);

// Операции с деньгами

const moneyOperation = new MoneyManager;

// пополнение баланса

moneyOperation.addMoneyCallback = function(data) {

    let callbackMoney = (response) => {
        if (response.data) {
            ProfileWidget.showProfile(response.data);
            moneyOperation.setMessage(true, "Операция успешна");
        } else {
            moneyOperation.setMessage(true, response.error);
        }
    }

    const money = () => ApiConnector.addMoney(data, callbackMoney);
    money();

}

// конвертирование валюты

moneyOperation.conversionMoneyCallback = function(data) {

    let callbackMoney = (response) => {
        if (response.data) {
            ProfileWidget.showProfile(response.data);
            moneyOperation.setMessage(true, "Операция успешна");
        } else {
            moneyOperation.setMessage(true, response.error);
        }
    }

    const money = () => ApiConnector.convertMoney(data, callbackMoney);
    money();

}

// перевод валюты

moneyOperation.sendMoneyCallback = function(data) {

    let callbackMoney = (response) => {
        if (response.data) {
            ProfileWidget.showProfile(response.data);
            moneyOperation.setMessage(true, "Операция успешна");
        } else {
            moneyOperation.setMessage(true, response.error);
        }
    }

    const money = () => ApiConnector.transferMoney(data, callbackMoney);
    money();

}

// Работа с избранным

const favotites = new FavoritesWidget;

let doFavor = (response) => {
    if (response) {
        favotites.clearTable();
        favotites.fillTable(response.data);
        moneyOperation.updateUsersList(response.data);
    }
}

const getFavor = () => ApiConnector.getFavorites(doFavor);
getFavor();

// добавления пользователя в список избранных

favotites.addUserCallback = function(data) {

    let callbackFavor = (response) => {
        if (response.data) {
            favotites.clearTable();
            favotites.fillTable(response.data);
            moneyOperation.updateUsersList(response.data);
            moneyOperation.setMessage(true, "Операция успешна");
        } else {
            moneyOperation.setMessage(true, response.error);
        }
    }

    const userFav = () => ApiConnector.addUserToFavorites(data, callbackFavor);
    userFav();

}

// удаление пользователя из избранного

favotites.removeUserCallback = function(data) {

    let callbackFavor = (response) => {
        if (response.data) {
            favotites.clearTable();
            favotites.fillTable(response.data);
            moneyOperation.updateUsersList(response.data);
            moneyOperation.setMessage(true, "Операция успешна");
        } else {
            moneyOperation.setMessage(true, response.error);
        }
    }

    const userFav = () => ApiConnector.removeUserFromFavorites(data, callbackFavor);
    userFav();

}