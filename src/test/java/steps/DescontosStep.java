package steps;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pages.HomePage;
import runner.RunCucumberTest;

public class DescontosStep extends RunCucumberTest {

    HomePage homepage = new HomePage(driver);

    @Dado("^que estou no site da qazando$")
    public void acessar_site_qazando(){
        homepage.acessarAplicao();
    }

    @Quando("^eu preencho meu e-mail$")
    public void eu_preencho_meu_e_mail() throws InterruptedException {
        // Write code here that turns the phrase above into concrete actions
        homepage.scrollDown();
        homepage.preencheEmail("joaogome@test.com");

    }

    @Quando("^clico em ganhar cupom$")
    public void clico_em_ganhar_cupom(){
        homepage.clickGanharDesconto();

    }

    @Entao("^eu vejo o codigo de desconto\\.$")
    public void eu_vejo_o_codigo_de_desconto() {
        homepage.verificarCupomDesconto("QAZANDO15OFF");

    }
    @Dado("^que eu tenho um cupom gerado Errado$")
    public void geraCupomErro() throws InterruptedException {
        homepage.acessarAplicao();
        homepage.scrollDown();
        homepage.preencheEmail("Teste@gmail.com");
        homepage.clickGanharDesconto();
        homepage.verificarCupomDesconto("teste");
    }


}
