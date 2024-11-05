import Home from './Home'

describe('<Home />', () => {

  beforeEach(() => {
    cy.mount(<Home />)
  });

  it('renders', () => {
    cy.mount(<Home />)
  });

  it('renders the form', () => {
    cy.get('form').should('exist')
  });

  it('should be able to encrypt a text and display the result', () => {
    cy.get('input[placeholder="word to encrypt/decrypt"]').type('hello world')
    cy.get('input[placeholder="shift number"]').type('3')
    cy.get('select').select('encrypt')
    cy.get('button[type="submit"]').click()

    cy.get('p').contains('khoor zruog').should('exist')
  })

  it('should be able to decrypt a text and display the result', () => {
    cy.get('input[placeholder="word to encrypt/decrypt"]').type('khoor zruog')
    cy.get('input[placeholder="shift number"]').type('3')
    cy.get('select').select('decrypt')
    cy.get('button[type="submit"]').click()

    cy.get('p').contains('hello world').should('exist')
  })

})