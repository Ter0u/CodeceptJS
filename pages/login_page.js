const { I } = inject();

module.exports = {
  //Para referencia o tipo de elemento como ID se colocaria # antes do nome do id, no caso de acessibilityID colocariamos ~
  fields:{
    email: '~email',
    password: '~senha'
  },

  buttons:{
    enter: '~entrar',
  },

  messages:{
    erroLogin: '~lognFail'
  },

  doLogin(email, password){
    I.wait(5);
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.tap(this.buttons.enter);
  },

  doCheckLoginError() {
    I.wait(5);
    I.seeElement(this.messages.erroLogin);
  }
  
}
