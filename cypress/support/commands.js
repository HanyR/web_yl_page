// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.addQuery('getEsById',(id)=>{
    //ALLOWS TO EXECUTE METHOS INSTANTLY instead qeued
        const getFn = cy.now('get',`.sidebar > #productsMenuGroup > .menu-content > :nth-child(2) > .links > [href="/es_CR/products/c/aceites-esenciales/${id}`);// Executed when you call getbyId() in your tests
        return()=>{
          return getFn(); //using this as a template to inject the value
        } //this is retry when custom query is used, until element is found
    }); //retry it by cypress, important when we need to find an element
    
    Cypress.Commands.addQuery('getImgById',(id)=>{
        //ALLOWS TO EXECUTE METHOS INSTANTLY instead qeued
            const getFn = cy.now('get',`[href="/es_CR/products/id/${id}"] > .image`);// Executed when you call getbyId() in your tests
            return()=>{
               return getFn(); //using this as a template to inject the value
            }
        });

    Cypress.Commands.add('addToCart',()=>{
           // cy.get('.add-to-cart > span').click();
           cy.on('uncaught:exception', (err, runnable) => {
            //expect(err.message).to.include("\n\n > Cannot read properties of undefined (reading 'length')\n\n")
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            //done()
            // return false to prevent the error from
            // failing this test
            return false
          })
        
          // assume this causes an error
          //cy.get('button').click()
         //  cy.get('.add-to-cart').should('exist');
          // cy.get('.add-to-cart').scrollIntoView().should('be.visible')
           cy.get('.add-to-cart').click();
        });
    
        Cypress.Commands.add('checkProductDetails',()=>{
          cy.get('.image > img').should('exist');
          //  cy.get('.add-to-cart').should('exist');
          cy.get('.image > img').scrollIntoView().should('be.visible')
          //  cy.get('.add-to-cart').click();
          cy.get('.product-meta').should('exist');
          cy.get('.how-to-use').should('exist');
          cy.get('#shoppingInformation').should('exist');
          cy.get('.add-to-cart').should('exist');
          cy.get('#taxInclusiveWarning').should('exist');
          cy.get('#pageBodyContent').should('exist');
          cy.get('#howToUseContent > h2').should('exist');
          cy.get('#ingredientsContent > h2').should('exist');
          
          
         });
        