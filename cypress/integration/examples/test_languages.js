const languages = ['AIN', 'AR', 'BS', 'ZHYUE', 'HR', 'DA', 'NL', 'EN', 'EO', 'ET', 'FI', 'FR', 'DE', 'EL',
                    'HAW', 'HE', 'HI', 'HU', 'IC', 'IG', 'ID', 'IT', 'JP', 'KO', 'MI', 'NO', 'FA', 'PL', 'PT',
                    'PTPT', 'RU', 'SM', 'SA', 'SR', 'ES', 'ESMX', 'SW', 'SV', 'TL', 'TH', 'TR', 'VI', 'YO']

const text = ['Try 7 days for free • Then €8.49 €5.00 / month',
  'Recurring billing • Cancel any time', 'Try it free', 'Purchase ', 'Premium Yearly Free Trial',
  'PlanB Labs OÜ', ' may send me product updates and offers via email. It is possible to opt-out at any time.']

const email = 'abc@test.com'

const data_test_id = ['ActionButton', 'headerContainerComponent', 'closeIcon',
  'authenticationEmailInput', 'audienceCollectionInput',
  'marketingConsentMessage']

describe('TEST 1: Test Language list', () => {
    it('Visiting Languagedrops Homepage', () => {
        cy.visit('/')
      })

      it('Check if all languages are showing', () => {
        // check the header if the text is displayed correctly
        cy.get('[style="opacity: 1; transform: translateY(0px);"] > .css-1dbjc4n > .css-901oao')
          .should('have.text', 'What language do you want to learn?')
        // check if all the languages are displayed
        for (let index = 0; index < languages.length; index++) {
            cy.get(`[data-testid=${languages[index]}]`).should('be.visible').trigger("mouseover")
        }
      })
      
      it('Select Language', () => {
        // selecting the (British) English language
       cy.SelectLanguage("EN")
      })
      
      /*
      it('Checking the start tutorial', () => {
        // check if all the text is displayed for start tutorial
        cy.get(`[data-testid= 'intro']`).contains('Immerse yourself in language with Drops').should('be.visible')
      })
      */
      
  it('Next page', () => {
    
    cy.get(`[data-testid=CloseButton]`).click()
    cy.wait(1000)
    cy.get(':nth-child(4) > .r-1kihuf0').should('have.text', text[0])
    cy.wait(1000)
    cy.get(':nth-child(5) > .css-901oao').should('have.text', text[1])
    cy.wait(1000)
    // validate trial button
    cy.get(`[data-testid=${data_test_id[0]}]`).should('be.visible')
      .should('have.text', text[2])
      .click()
    /*
    cy.wait(10 * Cypress.env('short_timeout'))

    cy.get(`[data-testid=${data_test_id[1]}]`).should('be.visible')
      .should('have.text', text[5])
      .should('have.text', text[6])
      
    // cy.get(`[data-testid=${data_test_id[2]}]`).should('be.visible')

    // cy.get(`[data-testid=${data_test_id[3]}]`).clear().type('abc@test.com').should('have.text', email)

    // cy.get(`[data-testid=${data_test_id[4]}]`).should('be.visible')

    // cy.get(`[data-testid=${data_test_id[5]}]`).should('have.text', text[7]).should('have.text', text[8])
    */
  })
})
