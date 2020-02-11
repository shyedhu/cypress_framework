import Custom from '../utils/custom.js';
var custom = new Custom();
 /**
 * @description Test class to validate the login page
 * @author Shyedhu
 * 
 */
 describe('Validate the login page', () => {
    beforeEach(() => {
        cy.fixture('users.json').as('usersData')
        custom.navigateTo(Cypress.env('ENV'))
    });
    it('test the login page', () => {
         cy.get('@usersData').then((usersData) => {
         //validate the login 
         cy.login(usersData.username,usersData.pass)
        })
    });
 });
