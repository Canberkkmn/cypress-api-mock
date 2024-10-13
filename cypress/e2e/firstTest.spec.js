describe('Test with backend', () => {
  beforeEach('login to app', () => {
    cy.loginToApp()
  })

  it('verify correct request and response', () => {
    cy.intercept('POST', 'https://conduit-api.bondaracademy.com/api/articles/').as('postArticles')

    cy.contains('New Article').click()
    cy.get('[formcontrolname="title"]').type('This is the title ' + 'Math.random()')
    cy.get('[formcontrolname="description"]').type('This is the description')
    cy.get('[formcontrolname="body"]').type('This is the body')
    cy.contains('Publish Article').click()

    cy.wait('@postArticles')
    cy.get('@postArticles').then(xhr => {
      console.log(xhr)
      expect(xhr.response.statusCode).to.equal(201)
      expect(xhr.request.body.article.body).to.equal('This is the body')
      expect(xhr.response.body.article.description).to.equal('This is the description')
    })
  })
})