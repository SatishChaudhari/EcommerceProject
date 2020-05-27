package regression;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.*;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import regression.TestRunner;
import regression.customerPortalPOM.InfoNewsContactPage;

public class infoNewsContactStepDef extends TestRunner {
   // static WebDriver driver;
        public InfoNewsContactPage infoNewsContactPage;
    @Before
    public void start() {
        infoNewsContactPage = new InfoNewsContactPage();

        driver.get("http://142.93.198.238/ecom/public/");
    }

    @After
    public void stop(Scenario scenario) {

        if (!scenario.isFailed()) {
            byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshotBytes, "image/png");
        }

    }
    @Given("^Open url$")
    public void openUrl() {
        infoNewsContactPage.infoPagesLink();


    }

    @When("^User do mouse over on InfoPages link in main menu on homepage$")
    public void userDoMouseOverOnInfoPagesLinkInMainMenuOnHomepage() {

    }

    @And("^select option from \"([^\"]*)\" list$")
    public void selectOptionFromList(String arg0) throws Throwable {

    }

    @Then("^navigate to the relevant page$")
    public void navigateToTheRelevantPage() {
    }
}
