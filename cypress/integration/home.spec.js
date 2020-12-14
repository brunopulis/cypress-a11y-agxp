/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
    cy.checkA11y()
  })
})