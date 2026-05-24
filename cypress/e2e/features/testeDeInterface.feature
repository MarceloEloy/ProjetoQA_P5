Feature: Interface do Cadastro de Pets

Scenario: Verificar elementos visuais da tela de cadastro de pets
Given que o usuário acessa a tela de cadastro de pets
Then o título da página deve estar visível
And o campo nome do pet deve estar visível
And o campo tipo do pet deve estar visível
And o botão cadastrar pet deve estar visível