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

public class SummonerSearch {

	static WebDriver driver = new FirefoxDriver();

	// Start at the home page for op.gg for each test
	@Before
	public void setUp() throws Exception {
		driver.get("http://na.op.gg");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	// Given one valid summoner name
	// When I try to look up this player
	// Then player statistics from this player are returned
	@Test
	public void validSummoner() {
		driver.findElement(By.id("searchInput")).sendKeys("penguin");
		// Submits the name to be searched
		driver.findElement(By.id("searchInput")).submit();

		try {
			WebElement displayed = driver.findElement(By.cssSelector("div.SummonerName"));
			assertTrue(displayed.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}
	}

	// Given one invalid summoner name
	// When I try to look up this player
	// Then it takes me to a page reminding me to check my region and spelling
	@Test
	public void invalidSummoner() {
		driver.findElement(By.id("searchInput")).sendKeys("zxcvbg");
		// Submits the name to be searched
		driver.findElement(By.id("searchInput")).submit();

		try {
			WebElement region_link = driver.findElement(By.linkText("Europe Nordic & East"));
			assertTrue(region_link.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}
	}

	// Given two valid summoner names
	// When I try to look up this player
	// Then it takes me to a page reminding me to check my region and spelling
	@Test
	public void twoSummoners() {
		driver.findElement(By.id("searchInput")).sendKeys("penguin Zelchor");
		// Submits the names to be searched
		driver.findElement(By.id("searchInput")).submit();

		try {
			WebElement region_link = driver.findElement(By.linkText("Europe Nordic & East"));
			assertTrue(region_link.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}
	}

	// Given no summoner names
	// When I try to search without any input
	// Then no results are returned, and details about Summoner Search capabilities are displayed
	@Test
	public void noSummoners() {
		driver.findElement(By.id("searchInput")).submit();

		try {
			WebElement displayed = driver.findElement(By.cssSelector("div.Error.UIContainer"));
			assertTrue(displayed.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}
	}

	// Given an invalid summoner name is searched
	// And I am now on the page reminding me to check region and spelling
	// When I click on a different region
	// Thenif that summoner name is valid in that region, that player's statistics are returned
	@Test
	public void wrongRegionSummoner() {
		driver.findElement(By.id("searchInput")).sendKeys("penguin from na");
		// Submits the name to be searched
		driver.findElement(By.id("searchInput")).submit();

			WebElement region_link = driver.findElement(By.linkText("Europe West"));
			region_link.click();

		try {
			WebElement displayed = driver.findElement(By.cssSelector("div.SummonerName"));
			assertTrue(displayed.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}
	}

}
