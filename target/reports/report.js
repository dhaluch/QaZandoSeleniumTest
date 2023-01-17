$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desconto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Receber o cupom de  desconto da qazando",
  "description": "Eu como usuario da qazando\r\nquero receber um cupom de desconto\r\npara comprar um curso com valor reduzido.",
  "id": "receber-o-cupom-de--desconto-da-qazando",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 8,
  "name": "Visualizar codigo de desconto",
  "description": "",
  "id": "receber-o-cupom-de--desconto-da-qazando;visualizar-codigo-de-desconto",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 9,
  "name": "que estou no site da qazando",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "eu preencho meu e-mail",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "clico em ganhar cupom",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "eu vejo o codigo de desconto.",
  "keyword": "Entao "
});
formatter.match({
  "location": "DescontosStep.acessar_site_qazando()"
});
formatter.result({
  "duration": 2086235900,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.eu_preencho_meu_e_mail()"
});
formatter.result({
  "duration": 2150038000,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.clico_em_ganhar_cupom()"
});
formatter.result({
  "duration": 65688400,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.eu_vejo_o_codigo_de_desconto()"
});
formatter.result({
  "duration": 28122100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Cupom gerado Errado",
  "description": "",
  "id": "receber-o-cupom-de--desconto-da-qazando;cupom-gerado-errado",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 15,
  "name": "que eu tenho um cupom gerado Errado",
  "keyword": "Dado "
});
formatter.match({
  "location": "DescontosStep.geraCupomErro()"
});
formatter.result({
  "duration": 2717954000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[teste]\u003e but was:\u003c[QAZANDO15OFF]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat pages.HomePage.verificarCupomDesconto(HomePage.java:35)\r\n\tat steps.DescontosStep.geraCupomErro(DescontosStep.java:42)\r\n\tat ✽.Dado que eu tenho um cupom gerado Errado(desconto.feature:15)\r\n",
  "status": "failed"
});
});