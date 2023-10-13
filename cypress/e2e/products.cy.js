/// <reference types="Cypress" />

describe('yl_products', () => {
 
  beforeEach(()=>{ //once before each test
    cy.visit('/products');
  }); //this run before every test

  it('should show all the products in Individual Essential Oils sidebar menu', () => {
    cy.getEsById('aceites-esenciales-individuales').click();
    cy.getImgById('46').should('exist');
    cy.getImgById('107').should('exist');
    cy.getImgById('241').should('exist');
    cy.getImgById('52').should('exist');
    cy.screenshot();
  
    // cy.getEsById('mezclas-de-aceites-esenciales').click();
   // cy.getEsById('vitality-aceites-consumibles').click();
  
  });

  it('should add products of Individual Essential Oils to the car', () => {
    cy.getEsById('aceites-esenciales-individuales').click();
    cy.screenshot();
    cy.getImgById('46').click();
    cy.screenshot();
    cy.checkProductDetails();
    cy.screenshot();
    cy.addToCart();
    cy.screenshot();
    

  })
})