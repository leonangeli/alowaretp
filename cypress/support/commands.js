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

Cypress.Commands.add("validateSuccessfulAccess", (url, titleText) => {
  cy.url().should("eq", url);
  cy.title().should("eq", titleText);
});

Cypress.Commands.add("clickAndVerify", (selector) => {
  cy.get(selector).should("be.visible").click({ force: true });
});

Cypress.Commands.add("navigateBack", () => {
  cy.go("back");
});

Cypress.Commands.add("scrollAndAssertVisible", (selector) => {
  cy.get(selector).scrollIntoView().should("be.visible");
});
