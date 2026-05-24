import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário está na tela de cadastro", () => {
  cy.visit('http://127.0.0.1:8080/App/html/index.html');
});

When("ele informa dados válidos", () => {
  cy.get('#nome').type('João');
  cy.get('#email').type('joao@email.com');
  cy.get('#senha').type('123456');
});

When("clica no botão cadastrar", () => {
  cy.get('#btnCadastrar').click();
});

When("ele tenta cadastrar sem preencher os campos", () => {
  cy.get('#btnCadastrar').click();
});

Then("o sistema deve cadastrar o usuário", () => {
  cy.contains('Cadastro realizado com sucesso');
});

Then("o sistema deve exibir mensagens de obrigatoriedade", () => {
  cy.contains('Campo obrigatório');
});