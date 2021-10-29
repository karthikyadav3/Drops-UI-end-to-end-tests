const languages = ["Dutch", "English (British)"];
describe('TEST 1: Test Language list', () => {
    it('Visiting Languagedrops Homepage', () => {
        cy.visit('/')
      })
      it('Select Language', () => {
       cy.SelectLanguage(languages[0])
      })
  })