import { loginpage } from '../pages/loginpage';
import { homepage } from '../pages/homepage';
import { registerpage } from '../pages/registerpage';
import Custom from '../utils/custom.js';
var custom = new Custom();

Cypress.Commands.add('login', (user,password) => {
    custom.enterValue(loginpage.txtUsername,user)
    custom.enterValue(loginpage.txtPassword,password)
    custom.clickElement(loginpage.btnLogin)
    custom.elementTxtVisible(homepage.txtBody)
})
Cypress.Commands.add('register', (user,email,firstname,lastname,password) => {
    custom.clickElement(loginpage.lnkSignupnow)
    custom.enterValue(registerpage.txtUsername,user)
    custom.enterValue(registerpage.txtEmail,email)
    custom.enterValue(registerpage.txtFirstname,firstname)
    custom.enterValue(registerpage.txtLastname,lastname)
    custom.enterValue(registerpage.txtPassword,password)
    custom.enterValue(registerpage.txtRePassword,password)
    custom.clickElement(registerpage.rbGender)
    custom.getSelect(registerpage.ddlCountry)
    custom.clickElement(registerpage.btnRegister)
    custom.elementTxtVisible(homepage.txtBody)
})