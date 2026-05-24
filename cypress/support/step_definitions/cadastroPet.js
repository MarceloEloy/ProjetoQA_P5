import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário está na tela de cadastro de pets", () => {
  cy.visit('http://127.0.0.1:8080/App/html/pets.html');
});

When("ele informa o nome e tipo do pet", () => {
  cy.get('#nomePet').type('Rex');
  cy.get('#tipoPet').type('Cachorro');
});

When("ele deixa campos vazios", () => {
  cy.get('#nomePet').clear();
  cy.get('#tipoPet').clear();
});

When("clica em cadastrar pet", () => {
  cy.get('#btnCadastrarPet').click();
});

When("ele cadastra um pet já existente", () => {

  cy.get('#nomePet').type('Rex');
  cy.get('#tipoPet').type('Cachorro');
  cy.get('#btnCadastrarPet').click();

  cy.get('#nomePet').clear();
  cy.get('#tipoPet').clear();

  cy.get('#nomePet').type('Rex');
  cy.get('#tipoPet').type('Cachorro');
});

When("clica em cadastrar pet duplicado", () => {
  cy.get('#btnCadastrarPet').click();
});

Then("o sistema deve exibir mensagem de pet já cadastrado", () => {
  cy.contains('Pet já cadastrado')
    .should('be.visible');
});

Then("o sistema deve cadastrar o pet com sucesso", () => {
  cy.contains('Pet cadastrado com sucesso')
    .should('be.visible');
});

Then("o sistema deve exibir erro de campos obrigatórios do pet", () => {
  cy.contains('Todos os campos são obrigatórios')
    .should('be.visible');
});