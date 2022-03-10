
let doLogin = (response) => {
    if (response.success === true) {
        location.reload();
    } else {
        userForm.setLoginErrorMessage(response.error)
    }
}

let doRegister = (response) => {
    if (response.success === true) {
        location.reload();
    } else {
        userForm.setRegisterErrorMessage(response.error)
    }
}

const userForm = new UserForm();
userForm.loginFormCallback = data => ApiConnector.login(data, doLogin);
userForm.registerFormCallback = data => ApiConnector.register(data, doRegister);