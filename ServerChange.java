import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;

import java.util.concurrent.TimeUnit;

/**
 * As a user
 * I want to use the Summoner Tool
 * So that I can look up a single player's statistics
 *
 */

public class ServerChange {

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
	public void listRegions() {
		// Enter five valid summoner names with the correct "joined the room." formatting applied to each line
		WebElement regionSelect = driver.findElement(By.cssSelector("div.Link"));
		// Submits the names to be searched
		regionSelect.click();
		// Checks to see if a link is created to each player's statistics
		try {
			WebElement link_turkey = driver.findElement(By.linkText("Turkey"));
			assertTrue(link_turkey.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}
	}

	// Given I am on the main page (na.op.gg)
	// When I look up a summoner name that exists on the NA server (e.g. penguin)
	// Then the account named "penguin" that is associated with the NA server has its game stats returned
	@Test
	public void accountNA() {
		// Enter five valid summoner names with the correct "joined the room." formatting applied to each line
		driver.findElement(By.id("searchInput")).sendKeys("penguin");
		// Submits the names to be searched
		driver.findElement(By.id("searchInput")).submit();

		// Checks to see if a link is created to each player's statistics
		try {
			WebElement displayed = driver.findElement(By.cssSelector("div.WinLose"));
			assertTrue(displayed.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}
	}

	// Given I am on the main page (na.op.gg)
	// When switch server search and look up a summoner name that exists on the EUW server (e.g. penguin)
	// Then the account named "penguin" that is associated with the EUW server has its game stats returned
	// (NOTE) this is to test that the same account name accross different servers returns different results
	@Test
	public void accountEUW() {
		
		WebElement regionSelect = driver.findElement(By.cssSelector("div.Link"));
		regionSelect.click();
		WebElement link_euw = driver.findElement(By.linkText("Europe West"));
		link_euw.click();

		driver.findElement(By.id("searchInput")).sendKeys("penguin");
		driver.findElement(By.id("searchInput")).submit();

		// Checks to see if a link is created to each player's statistics
		try {
			WebElement displayed = driver.findElement(By.cssSelector("div.WinLose"));
			assertTrue(displayed.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}
	}


	// Given I am on the main page
	// When I click on the "region" button
	// And I click on a region (e.g Europe West)
	// Then I am taken to a corresponding site that allows me to search for players on that server
	@Test
	public void switchServer() {
		// Enter five valid summoner names with the correct "joined the room." formatting applied to each line
		WebElement regionSelect = driver.findElement(By.cssSelector("div.Link"));
		// Submits the names to be searched
		regionSelect.click();
		// Checks to see if a link is created to each player's statistics
		WebElement link_euw = driver.findElement(By.linkText("Europe West"));
		link_euw.click();

		String title = driver.getTitle();
		assertTrue(title.contains("Europe West"));
	}
}
