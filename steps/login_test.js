//const { doLogin } = require("./pages/login_page.js"); 
const { I, login_page }= inject(); //variavel global pra classe
const { doCheckLoginSucess } = require("../pages/home_page.js");

Feature('login');

BeforeSuite(() => { //Before Suite sempre é executado antes de cada suite/classe
    console.log('BeforeSuite')
});

Before(() => { //Before sempre é executado antes de cada cenário
    console.log('Before')
});

AfterSuite(() => { //After Suite sempre é executado depois de cada suite/classe
    console.log('AfterSuite')
});

After(() => { //Before sempre é executado depois de cada cenário
    console.log('After')
});

Scenario('Login com Sucesso', ({ home_page }) => {
    
    login_page.doLogin('teste@teste.com', '123456')
    //pause() (ele para o teste e te da opções para executar ações no meio do teste em execução além de criar um arquivo em output com um histórico com o nome cli-history onde você também pode deixar ações lá para executar durante a pausa no teste)
    home_page.doCheckLoginSucess()

});

Scenario('Login com Erro', () => {

    login_page.doLogin('xteste@teste.com', '123456')
    login_page.doCheckLoginError()

});
