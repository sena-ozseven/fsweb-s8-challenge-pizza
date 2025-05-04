describe('Pizza Input', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/siparisform');
  });

  it('Inputa yazı yazılabiliniyor', () => {
    cy.get('[data-cy="note-input"]').type('Zil çalışmıyor lütfen arayın.').should("have.value", 'Zil çalışmıyor lütfen arayın.');
  });

  it("Dört malzeme seçilebiliniyor", () => {
    cy.get('[data-cy="topping-domates"]').check().should("be.checked");
    cy.get('[data-cy="topping-sosis"]').check().should("be.checked");
    cy.get('[data-cy="topping-kabak"]').check().should("be.checked");
    cy.get('[data-cy="topping-ananas"]').check().should("be.checked");
  })




  it(("Form gereklilikler yapıldığında sorunsuz gönderiliyor"), () => {

    cy.get('[data-cy="size-orta"]').click();


    cy.get('[data-cy="dough-select"]').select('Kalın');


    cy.get('[data-cy="topping-domates"]').check().should("be.checked");
    cy.get('[data-cy="topping-sosis"]').check().should("be.checked");
    cy.get('[data-cy="topping-kabak"]').check().should("be.checked");
    cy.get('[data-cy="topping-ananas"]').check().should("be.checked");

    cy.get('[data-cy="isim-input"]').type('Sena');
    cy.get('[data-cy="note-input"]').type('Zil çalışmıyor lütfen arayın.');


    cy.get('form').submit();


    cy.url().should('include', '/confirmation');
    cy.contains('SİPARİŞ ALINDI').should('be.visible');
  })




  it("En fazla 10 malzeme seçilebilmeli", () => {
    cy.visit("http://localhost:5174/siparisform");

    cy.get('[data-cy^="topping-"]').each(($checkbox, index) => {
      if (index < 11) {
        cy.wrap($checkbox).check({ force: true });
      }
    });

    cy.get('[data-cy^="topping-"]:checked').should('have.length', 10);
  });



  it("Boyut seçilmeden form gönderilememeli", () => {

    cy.visit("http://localhost:5174/siparisform");
  
    cy.get('[data-cy="dough-select"]').select("Kalın");
  
    cy.get('[data-cy="topping-domates"]').check();
    cy.get('[data-cy="topping-sosis"]').check();
    cy.get('[data-cy="topping-kabak"]').check();
    cy.get('[data-cy="topping-ananas"]').check();
  
    cy.get('[data-cy="isim-input"]').type("Sena");
    cy.get('[data-cy="note-input"]').type("Zil çalışmıyor.");
  
    cy.get("form").submit();
  
    cy.url().should("not.include", "/confirmation");
  
  });
  

});  
