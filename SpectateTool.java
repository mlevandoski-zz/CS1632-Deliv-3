import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;

import java.util.concurrent.TimeUnit;

/**
 * As a user
 * I want to use the Spectate Tool
 * So that I can see which professional players are currently in game
 *
 */

public class SpectateTool {

	static WebDriver driver = new FirefoxDriver();

	// Start at the home page for op.gg for each test
	@Before
	public void setUp() throws Exception {
		driver.get("http://na.op.gg");
		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
	}

	// Given that I am on the main page
	// When I click on the "region" button
	// Then all available regions are displayed
	@Test
	public void goToSpectate() {

		driver.findElement(By.linkText("Spectate")).click();

		try {
		WebElement playerDisplay = driver.findElement(By.cssSelector("div.nContentLayout"));
		assertTrue(playerDisplay.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}
	}

	// Given that I am on the main page
	// And I navigate to the spectate page
	// When I click on the "List of Registered Summoners"
	// Then I can see a list of all of the registered professional players in the region
	@Test
	public void registeredPlayers() {

		driver.findElement(By.linkText("Spectate")).click();

		WebElement registered_list = driver.findElement(By.linkText("List of registered summoners"));
		registered_list.click();

		try {
			WebElement displayed = driver.findElement(By.cssSelector("dl.progamerList"));
			assertTrue(displayed.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}

	}

	// Given that I am on the main page
	// And I navigate to the spectate page
	// When I click a player's "+ Open Current Game info"
	// Then basic stats of that player's game are revealed
	@Test
	public void gameInfo() {

		driver.findElement(By.linkText("Spectate")).click();

		WebElement game_info = driver.findElement(By.linkText("Open Current Game Info"));
		game_info.click();

		try {
			WebElement displayed = driver.findElement(By.cssSelector("div.SpectatorBig > div.nBox"));
			assertTrue(displayed.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}

	}

	// Given that I am on the main page
	// And I navigate to the spectate page
	// When I click on the "help" button
	// Then a list of general troubleshooting is displayed
	@Test
	public void spectateHelp() {

		driver.findElement(By.linkText("Spectate")).click();

		driver.findElement(By.linkText("Help")).click();

		try {
			WebElement displayed = driver.findElement(By.cssSelector("ul.helpList > li"));
			assertTrue(displayed.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}

	}

	// Given that I am on the main page and I navigate to the Spectate page
	// And I navigate to the spectate page
	// When I switch to a server that doesn't support the Spectate tool
	// Then I get an error page stating "This feature is not available in (server)"
	@Test
	public void spectateInvalidRegion() {

		driver.findElement(By.linkText("Spectate")).click();
		driver.findElement(By.cssSelector("div.Link")).click();
		driver.findElement(By.linkText("Russia")).click();

		try {
			WebElement displayed = driver.findElement(By.cssSelector("div.WorkingTitle"));
			assertTrue(displayed.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}

	}

	
}
