describe('Pizza Order', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.contains('Sipariş Ver').click();
  });

  it('fills the form and submits successfully', () => {

    cy.get('[data-cy="isim-input"]').type('Sena');
    cy.get('[data-cy="size-orta"]').click();


    cy.get('[data-cy="dough-select"]').select('Kalın');


    cy.get('[data-cy="topping-pepperoni"]').check();
    cy.get('[data-cy="topping-mantar"]').check();
    cy.get('[data-cy="topping-zeytin"]').check();
    cy.get('[data-cy="topping-mozarella"]').check();


    cy.get('[data-cy="note-input"]').type('Zil çalışmıyor lütfen arayın.');


    cy.get('form').submit();


    cy.url().should('include', '/confirmation');
    cy.contains('SİPARİŞ ALINDI').should('be.visible');
  });
});