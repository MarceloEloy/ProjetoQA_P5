Feature: Cadastro de usuários

Scenario: Cadastro realizado com sucesso
Given que o usuário está na tela de cadastro
When ele informa dados válidos
And clica no botão cadastrar
Then o sistema deve cadastrar o usuário

Scenario: Cadastro com campos vazios
Given que o usuário está na tela de cadastro
When ele tenta cadastrar sem preencher os campos
Then o sistema deve exibir mensagens de obrigatoriedade