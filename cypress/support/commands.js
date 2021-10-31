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

/**
 *Select the Language.
 * @param {String} language
 */
 Cypress.Commands.add('SelectLanguage', (language) => {
    cy.wait(Cypress.env('short_timeout'))
    cy.get(`[data-testid=${language}]`).click()
  })
  
  /*
   *helper function:login - for login into Web Application
   *----------------------------------------------------------
   *param email : email
   *param password : password
   */
  Cypress.Commands.add('login', (email, password) => {
    cy.visit('/')
    cy.get('[data-testid="EmailButton"]').click()
    cy.get('[data-testid="EmaiSignup_Login"]').click()
    cy.get('[data-testid="EmaiSignup_Email"]').clear().type(email)
    cy.get('[data-testid="EmaiSignup_Password"]').clear().type(password, { log: false })
    cy.get('[data-testid="EmaiSignup_Submit"]').click()
  })
  