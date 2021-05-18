import Custom from '../../utils/custom.js';
var custom = new Custom();
 /**
 * @description Test class to validate the add the items in cart page and then Proceed to Payment in checkout page
 * @author Shyedhu
 * 
 */
 describe('Validate the cart and checkout page', () => {
    beforeEach(() => {
        cy.fixture('users.json').as('usersData')
        custom.navigateTo(Cypress.env('ENV'))
    });
    it('test the checkout page', () => {
         cy.get('@usersData').then((usersData) => {
         //validate the login 
         cy.login(usersData.username,usersData.pass)
         //perform the add to cart 
         cy.addtocart()
         //view the added items in cart page 
         cy.viewcart()
         //view the added items in checkout page 
         cy.viewcheckout()
         //Proceed to Payment in checkout page
         cy.gotopay()
        })
    });
 });
