package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/reports/cucumberReport.Json", "html:target/reports/"},
        features = "src/test/resources/features",
        tags = {"~@ignore"},
        glue = {"steps"}
)

public class RunCucumberTest {

    public static ChromeOptions option;
    public static WebDriver driver;

    @BeforeClass
    public static void start(){
        option = new ChromeOptions();
        option.addArguments("start-maximized");
        driver = new ChromeDriver(option);
    }
    @AfterClass
    public static void stop(){
        driver.quit();

    }

}
