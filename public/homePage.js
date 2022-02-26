
let doLogout = (response) => {
    if (response.success === true) {
        location.reload();
    }
}

const logoutBtn = new LogoutButton();
logoutBtn.action = () => ApiConnector.logout(doLogout);