describe('nativation tests', () => {
  it('tests opening and closing sidebar', () => {
    cy.visit('/');
    cy.viewport(550, 750);
    cy.get('.menu-wrapper.active').should('not.be.exist');
    cy.get('[data-id="open-sidebar-btn"]').click();
    cy.get('.menu-wrapper.active').should('be.visible');
    cy.get('[data-id="close-sidebar-btn"]').click();
    cy.get('.menu-wrapper.active').should('not.be.exist');
  });
});
