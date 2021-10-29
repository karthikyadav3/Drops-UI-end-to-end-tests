const languages = ["Saab", "Volvo", "BMW"];
describe('TEST 1: Test Language list', () => {
    it('Drops Homepage', () => {
        cy.visit('/')
        cy.wait(5000)
      })
      it('Select Languages', () => {
        cy.get('[data-testid=ENGB]').click()
      })
  })