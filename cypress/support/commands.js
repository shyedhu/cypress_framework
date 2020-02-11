import { loginpage } from '../pages/loginpage';
import { homepage } from '../pages/homepage';
import Custom from '../utils/custom.js';
var custom = new Custom();

Cypress.Commands.add('login', (user,password) => {
    custom.enterValue(loginpage.txtUsername,user)
    custom.enterValue(loginpage.txtPassword,password)
    custom.clickElement(loginpage.btnLogin)
    custom.elementTxtVisible(homepage.txtBody)
})