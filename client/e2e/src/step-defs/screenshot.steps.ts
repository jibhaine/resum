import { When } from "cucumber";
import { driver } from "selenium-webdriver";

When("and i take a screenshot", () => {
     
  var world = this;
 
  driver.takeScreenshot().then( (buffer) => {
    return world.attach(buffer, 'image/png');
  });
 
})