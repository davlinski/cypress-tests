describe('Mixed Content Test', () => {
  it('Checks for mixed content warnings', () => {
    cy.visit('https://cdisi.com/');

    cy.get('head link[rel="stylesheet"][href^="http://"]').should('not.exist');
    cy.get('head script[src^="http://"]').should('not.exist');
    cy.get('img[src^="http://"]').should('not.exist');
    // Add more checks for other resources like iframes, etc., if needed
  });
});
as