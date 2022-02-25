
const logoutBtn = new LogoutButton();
console.log(logoutBtn);

logoutBtn.action = () => ApiConnector.logout(() => {
    location.reload();
});