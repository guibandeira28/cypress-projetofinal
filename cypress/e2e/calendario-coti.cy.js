describe('Calendário de Cursos', () => {
  const url = 'https://www.cotiinformatica.com.br/calendario';

  beforeEach(() => {
    cy.visit(url);
  });

  it('Deve ter pelo menos uma turma de Java', () => {
    // Verifica se existe algum elemento que contenha a palavra "Java"
    cy.contains(/java/i).should('exist');
    // Captura de tela como evidência
    cy.screenshot('turma-java');
  });

  it('Deve ter pelo menos uma turma de Front-end', () => {
    // Verifica se existe algum elemento que contenha a palavra "Front-end"
    cy.contains(/front[-\s]?end/i).should('exist');
    // Captura de tela como evidência
    cy.screenshot('turma-front-end');
  });
});