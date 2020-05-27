package regression.customerPortalPOM;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class InfoNewsContactPage extends basePage {

    @FindBy(how = How.XPATH,
            using = "//div[contains(@class,'header-navbar bg-menu-bar')]//a[contains(@class,'dropdown-toggle')][contains(text(),'INFO PAGES')]")
    WebElement infoPages;



    public void infoPagesLink(){
        driver.findElement(By.xpath("//div[@class='modal-body']//div[@class='container']//span[contains(text(),'×')]")).click();
        infoPages.isDisplayed();
    }






}
