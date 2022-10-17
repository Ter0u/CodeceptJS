const { I } = inject();
// Add in your custom step files

Given('que eu preencho o email', () => {
  I.wait(5);
  I.fillField('~email', 'teste@teste.com');
});

Given('que eu preencho a senha', () => {
  I.wait(5);
  I.fillField('~senha', '123456');
});

When('eu clicar no botão Entrar', () => {
  I.tap('~entrar');
});

Then('eu realizo o login com sucesso', () => {
  I.wait(5);
  I.retry(4).seeElement('~cancelar');
  I.retry(4).seeElement('~salvar');
});
