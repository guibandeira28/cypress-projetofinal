describe('SauceDemo Login Tests', () => {
  const url = 'https://www.saucedemo.com/';

  beforeEach(() => {
    cy.visit(url);
  });

  it('1 - Login com sucesso', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Verifica se a página de inventário foi carregada
    cy.get('.title').should('have.text', 'Products');
    cy.screenshot('login-sucesso');
  });

  it('2 - Login com credenciais inválidas', () => {
    cy.get('#user-name').type('invalid_user');
    cy.get('#password').type('wrong_password');
    cy.get('#login-button').click();

    // Verifica mensagem de erro
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username and password do not match any user in this service');
    cy.screenshot('login-credenciais-invalidas');
  });

  it('3 - Campos obrigatórios', () => {
    // Tentativa sem preencher nenhum campo
    cy.get('#login-button').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username is required');
    cy.screenshot('login-campo-username-obrigatorio');

    // Preenche usuário, deixa senha vazia
    cy.get('#user-name').type('standard_user');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Password is required');
    cy.screenshot('login-campo-senha-obrigatorio');
  });
});