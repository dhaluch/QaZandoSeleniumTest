# language: pt

  Funcionalidade: Receber o cupom de  desconto da qazando
    Eu como usuario da qazando
    quero receber um cupom de desconto
    para comprar um curso com valor reduzido.

    @gerar_cupom
    Cenario: Visualizar codigo de desconto
      Dado que estou no site da qazando
      Quando eu preencho meu e-mail
      E clico em ganhar cupom
      Entao eu vejo o codigo de desconto.

     @gerar_falha
    Cenario: Cupom gerado Errado
      Dado que eu tenho um cupom gerado Errado
