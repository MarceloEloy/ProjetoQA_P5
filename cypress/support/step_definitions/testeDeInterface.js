import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário acessa a tela de cadastro de pets", () => {
  cy.visit('http://127.0.0.1:8080/App/html/pets.html');
});

Then("o título da página deve estar visível", () => {
  cy.contains('Cadastro de Pets')
    .should('be.visible');
});

Then("o campo nome do pet deve estar visível", () => {
  cy.get('#nomePet')
    .should('be.visible');
});

Then("o campo tipo do pet deve estar visível", () => {
  cy.get('#tipoPet')
    .should('be.visible');
});

Then("o botão cadastrar pet deve estar visível", () => {
  cy.get('#btnCadastrarPet')
    .should('be.visible');
});