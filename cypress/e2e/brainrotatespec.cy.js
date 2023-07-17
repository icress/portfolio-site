describe('buttons', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  it('clicks 45 degree button', () => {
    cy.get('.page_container___c__5 > :nth-child(1)').wait(1000).click().wait(1000);
  });

  it('clicks the back button', () => {
    cy.get('.page_container___c__5 > :nth-child(2)').wait(1000).click().wait(1000);
  });

  it('tests all buttons', () => {
    cy.get('.page_container___c__5 > :nth-child(1)x').wait(1000).click().click();
    cy.get('.page_container___c__5 > :nth-child(2)').wait(1000).click();
    cy.get('.page_container___c__5 > :nth-child(1)').wait(1000).click().click();
  })
});