describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('one can navigate from main page to the page of a particular pokemon', function () {
    cy.visit('http://localhost:5000')


    cy.contains('pikachu').click()
    cy.url().should('eq', 'http://localhost:5000/pokemon/pikachu')
    cy.contains('lightning rod')
  })
})