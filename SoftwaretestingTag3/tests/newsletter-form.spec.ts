import { test, expect } from "@playwright/test";

test("user can successfully subscribe to the newsletter", async ({ page }) => {
  //// Öffnet App im Browser
  await page.goto("http://localhost:5173");
  //// Gibt eine gültige Email ein (mit @)
  await page.fill('input[placeholder="Your Email"]', "test@example.com");
  //// Checked die Box
  await page.check('input[type="checkbox"]');
  //// Klickt den Button
  await page.click('button[type="submit"]');
  //// Erwartet, dass die Nachricht angezeigt wird
  await expect(
    page.locator("text=Thank you! You are now subscribed")
  ).toBeVisible();
});

test("user cannot subscribe with invalid email", async ({ page }) => {
  await page.goto("http://localhost:5173");
  //// Gibt eine UNGÜLTIGE Email ein (ohne @)
  await page.fill('input[placeholder="Your Email"]', "invalid-email");
  await page.check('input[type="checkbox"]');
  await page.click('button[type="submit"]');
  await expect(
    page.locator("text=Thank you! You are now subscribed")
  ).not.toBeVisible();
});
