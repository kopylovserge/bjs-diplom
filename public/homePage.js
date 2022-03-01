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
        // console.log(response);
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

moneyOperation.addMoneyCallback = function (data) {

    let callbackMoney = (response) => {
        if (response.data) {
            ProfileWidget.showProfile(response.data);
            moneyOperation.setMessage(true, "Операция успешна");
        } else {
            moneyOperation.setMessage(true, response.error);
        }
    }

    if (data !== undefined) {
        const money = () => ApiConnector.addMoney(data, callbackMoney);
        money();
    }

}

moneyOperation.addMoneyCallback();

// конвертирование валюты