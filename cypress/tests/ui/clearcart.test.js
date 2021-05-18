import Custom from '../../utils/custom.js';
var custom = new Custom();
 /**
 * @description Test class to remove all added items from cart page
 * @author Shyedhu
 * 
 */
 describe('Remove added items from the cart page', () => {
    beforeEach(() => {
        cy.fixture('users.json').as('usersData')
        custom.navigateTo(Cypress.env('ENV'))
    });
    it('remove items from cart page', () => {
         cy.get('@usersData').then((usersData) => {
         //validate the login 
         cy.login(usersData.username,usersData.pass)
         //perform the add to cart 
         cy.addtocart()
         //view the added items in cart page 
         cy.viewcart()
         //remove added items from cart page
         cy.clearcart()
        })
    });
 });
