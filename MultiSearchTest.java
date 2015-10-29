import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;

import java.util.concurrent.TimeUnit;

/**
 * As a user
 * I want to use the Multi-Search Tool
 * So that I can look up multiple players at once
 *
 */

public class MultiSearchTest {

	static WebDriver driver = new FirefoxDriver();

	// Start at the home page for op.gg for each test
	@Before
	public void setUp() throws Exception {
		driver.get("http://na.op.gg");
		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
	}

	// Given five valid summoner names
	// And the look-up sentences are complete
	// When I try to look up the five players
	// Then links to all of the players' game statistics are returned
	@Test
	public void testWithProperInput() {
		// Go to op.gg's Multi-Search page
		driver.findElement(By.linkText("Multi-Search")).click();
		// Enter five valid summoner names with the correct "joined the room." formatting applied to each line
		driver.findElement(By.name("query")).sendKeys("Gary joined the room.\nWilliam joined the room.\nParsnips joined the room.\nBubbles joined the room.\nLemons joined the room.");
		// Submits the names to be searched
		driver.findElement(By.name("query")).submit();

		// Checks to see if a link is created to each player's statistics
		try {
			WebElement link_gary = driver.findElement(By.linkText("Gary"));
			assertTrue(link_gary.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}
		try {
			WebElement link_william = driver.findElement(By.linkText("William"));
			assertTrue(link_william.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}
		try {
			WebElement link_parsnips = driver.findElement(By.linkText("Parsnips"));
			assertTrue(link_parsnips.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}
		try {
			WebElement link_bubbles = driver.findElement(By.linkText("Bubbles"));
			assertTrue(link_bubbles.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}
		try {
			WebElement link_lemons = driver.findElement(By.linkText("Lemons"));
			assertTrue(link_lemons.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}
	}

	// Given three valid summoner names
	// And two invalid summoner names
	// And the look-up sentences are complete
	// When I try to look up the five players
	// Then links to only the three valid players' game statistics are returned
	@Test
	public void testWithThreeValidAndTwoInvalid() {

		// Go to op.gg's Multi-Search page
		driver.findElement(By.linkText("Multi-Search")).click();
		// Enter five valid summoner names with the correct "joined the room." formatting applied to each line
		driver.findElement(By.name("query")).sendKeys("Gary joined the room.\nzxcvbg joined the room.\nParsnips joined the room.\nghjklo joined the room.\nLemons joined the room.");
		// Submits the names to be searched
		driver.findElement(By.name("query")).submit();

		try {
			WebElement link_gary = driver.findElement(By.linkText("Gary"));
			assertTrue(link_gary.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}

		WebElement link_zxcvbg = driver.findElement(By.linkText("zxcvbg"));
		assertNull(link_zxcvbg);

		try {
			WebElement link_parsnips = driver.findElement(By.linkText("Parsnips"));
			assertTrue(link_parsnips.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}

		WebElement link_ghjklo = driver.findElement(By.linkText("ghjklo"));
		assertNotNull(link_ghjklo);
		
		try {
			WebElement link_lemons = driver.findElement(By.linkText("Lemons"));
			assertTrue(link_lemons.isDisplayed());
		} catch(NoSuchElementException nseex) {
			fail();
		}
	}

	// Given five valid summoner names
	// And the look-up sentences are incomplete
	// When I try to look up the five players
	// Then no links to any player's game statistics ar returned
	@Test
	public void incompleteSentences() {

		// Go to op.gg's Multi-Search page
		driver.findElement(By.linkText("Multi-Search")).click();
		// Enter the names but with incomplete look-up sentences
		driver.findElement(By.name("query")).sendKeys("Gary joined t\nWilliam joined\nParsnips joined th\nBubbles joined the ro\nLemons joine");
		// Submits the names to be searched
		driver.findElement(By.name("query")).submit();

		//
		// Checks if links to these account aren't displayed. They aren't, but true still doesn't return
		//
		WebElement link_gary = driver.findElement(By.linkText("Gary"));
		assertFalse(link_gary.isDisplayed());

		WebElement link_william = driver.findElement(By.linkText("William"));
		assertFalse(link_william.isDisplayed());

		WebElement link_parsnips = driver.findElement(By.linkText("Parsnips"));
		assertFalse(link_parsnips.isDisplayed());

		WebElement link_bubbles = driver.findElement(By.linkText("Bubbles"));
		assertFalse(link_bubbles.isDisplayed());

		WebElement link_lemons = driver.findElement(By.linkText("Lemons"));
		assertFalse(link_lemons.isDisplayed());
	}

	// Given five invalid summoner names
	// And the look-up sentences are complete
	// When I try to look up the five players
	// Then no links to any player's game statistics are returned
	@Test
	public void testAllInvalid() {

		// Go to op.gg's Multi-Search page
		driver.findElement(By.linkText("Multi-Search")).click();
		// Enter all invalid names
		driver.findElement(By.name("query")).sendKeys("zxcvg joined the room.\nxcvbh joined the room.\ncvbnj joined the room.\nvbnmk joined the room.\nghjki joined the room.");
		// Submits the names to be searched
		driver.findElement(By.name("query")).submit();

		//
		// Checks if links to these account aren't displayed. They aren't, but true still doesn't return
		//
		WebElement link_1 = driver.findElement(By.linkText("zxcvg"));
		assertFalse(link_1.isDisplayed());

		WebElement link_2 = driver.findElement(By.linkText("xcvbh"));
		assertFalse(link_2.isDisplayed());

		WebElement link_3 = driver.findElement(By.linkText("cvbnj"));
		assertFalse(link_3.isDisplayed());

		WebElement link_4 = driver.findElement(By.linkText("vbnmk"));
		assertFalse(link_4.isDisplayed());

		WebElement link_5 = driver.findElement(By.linkText("ghjki"));
		assertFalse(link_5.isDisplayed());
	}
}
