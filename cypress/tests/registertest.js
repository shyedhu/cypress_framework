import Custom from '../utils/custom.js';
var custom = new Custom();
 /**
 * @description Test class to validate the register page
 * @author Shyedhu
 * 
 */
 describe('Validate the register page', () => {
    beforeEach(() => {
        cy.fixture('users.json').as('usersData')
        custom.navigateTo(Cypress.env('ENV'))
    });
    it('test the register page', () => {
         cy.get('@usersData').then((usersData) => {
         //validate the register 
         cy.register(usersData.username,usersData.email,usersData.firstname,usersData.lastname,usersData.pass)
        })
    });
 });
