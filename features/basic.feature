Feature: Login
  Eu como usuario
  Gostaria de fazer Login
  Para acessar o sistema

  Scenario: Login com Sucesso
    Given que eu preencho o email
    And que eu preencho a senha
    When eu clicar no botão Entrar
    Then eu realizo o login com sucesso
