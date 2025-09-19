//import '@4tw/cypress-drag-drop';
import "cypress-real-events/support";


Cypress.Commands.add('acessarPagina', () => {
  const url = 'https://demoqa.com';
  cy.visit(url);
});
;


