const { I } = inject();

module.exports = {

  buttons:{
    cancel: '~cancelar',
    save: '~salvar'
  },

  doCheckLoginSucess() {
    I.wait(5);
    I.retry(4).seeElement(this.buttons.cancel); //como o nome sugere, com o método retry ele vai executar quantas vezes forem indicadas até conseguir executar a ação com sucesso
    I.retry(4).seeElement(this.buttons.save);
  }

}
