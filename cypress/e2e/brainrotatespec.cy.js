describe('buttons', () => {
  it('loads page', () => {
    cy.visit('http://localhost:3000/')
  });

  it('clicks 45 degree button', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.page_container___c__5 > :nth-child(1)').wait(3000).click();
  });

  it('clicks the back button', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.page_container___c__5 > :nth-child(2)').wait(3000).click();
  });
});