describe('company register', () => {
  before(() => {
    cy.visit('https://test.goalflags.com')
  })

  it('register basic', () => {
    cy.getTestId('company-register-form').within(() => {
      cy.getTestId('name').type('Company C&C')
    })
  })
})

