const languages = ['Arabic', 'Bosnian', 'Chinese (Cantonese)', 'Chinese (Mandarin)', 'Croatian',
                   'Danish', 'Dutch', 'English (American)', 'English (British)', 'Esperanto', 
                   'Estonian', 'Finnish', 'French','German', 'Greek','Hawaiian', 'Hebrew', 
                   'Hindi', 'Hungarian', 'Icelandic', 'Igbo', 'Indonesian', 'Italian', 'Japanese',
                   'Korean', 'Māori', 'Norwegian', 'Persian', 'Polish', 'Portuguese (Brazilian)',
                   'Portuguese (European)', 'Russian', 'Samoan', 'Serbian', 'Spanish (Castilian)', 
                    'Spanish (Mexican)', 'Swahili', 'Swedish', 'Tagalog', 'Thai', 'Turkish',
                    'Vietnamese', 'Yoruba']

describe('TEST 1: Test Language list', () => {
    it('Visiting Languagedrops Homepage', () => {
        cy.visit('/')
      })

      it('Check if all languages are showing', () => {

        cy.get('[style="opacity: 1; transform: translateY(0px);"] > .css-1dbjc4n > .css-901oao')
          .should('have.text', 'What language do you want to learn?')
        // check if all the languages are displayed
        for (let index = 0; index < languages.length; index++) {
          //cy.get(`[data-testid=${languages[index]}]`).should('be.visible')
            cy.get('.r-jwli3a').contains(languages[index]).should('be.visible').trigger("mouseover")
        }
      })
      
      it('Select Language', () => {
        // selecting the (British) English language
       cy.SelectLanguage("English (British)")
      })
  })