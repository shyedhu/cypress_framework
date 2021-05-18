import Custom from '../../utils/custom.js';

var custom = new Custom();
 /**
 * @description Test class to  capture the  API network calls and validate request and response 
 * @author Shyedhu
 * 
 */
 describe('Validate the network request and response', () => {
    beforeEach(() => {
        cy.fixture('users.json').as('usersData')
        cy.server()
        cy.route('GET', 'https://nodes-api-demo.vercel.app/api/products').as('productsapi')
        custom.navigateTo(Cypress.env('ENV'))
       
    });
    it('test api network calls', () => {
         cy.get('@usersData').then((usersData) => {
         //validate the login 
         cy.login(usersData.username,usersData.pass)
         cy.wait('@productsapi')
         //Assert on XHR
        cy.get('@productsapi').then(function (xhr) {
        //Assert status code     
        expect(xhr.status).to.eq(200)
        //Assert request method     
        expect(xhr.method).to.eq('GET')
        //Assert request url     
        expect(xhr.url).to.match(/\/products$/)
        //Assert response Body   
        const response = xhr.responseBody
        expect(response[0]).to.have.property('available_quantity', 20)
        expect(response[0]).to.have.property('price', 1)
        expect(response[0]).to.have.property('description', 'Banana.')
        expect(response[1]).to.have.property('available_quantity', 3)
        expect(response[1]).to.have.property('price', 5)
        expect(response[1]).to.have.property('description', 'Jackfruit.')
      })     
    })
    });
 });
