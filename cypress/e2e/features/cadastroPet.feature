Feature: Cadastro de Pets

Scenario: Cadastro de pet com sucesso
Given que o usuário está na tela de cadastro de pets
When ele informa o nome e tipo do pet
And clica em cadastrar pet
Then o sistema deve cadastrar o pet com sucesso

Scenario: Tentativa de cadastrar pet já cadastrado
Given que o usuário está na tela de cadastro de pets
When ele cadastra um pet já existente
And clica em cadastrar pet duplicado
Then o sistema deve exibir mensagem de pet já cadastrado


