function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  )

  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  )

  cy.task('table', violationData)
}

/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  })

  it('Exibe resultado dos testes visualmente', () => {
    cy.checkA11y()
  })

  it('Exibe resultado dos testes no terminal', () => {
    cy.checkA11y(null, null, terminalLog)
  })
})