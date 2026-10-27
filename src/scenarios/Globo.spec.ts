import { expect, test } from '@playwright/test';

test.describe('Globo.com E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.globo.com/', {
      waitUntil: 'domcontentloaded'
    });

    const dismissNotifications = page.getByRole('button', {
      name: 'Agora não'
    });
    if (
      await dismissNotifications.isVisible({ timeout: 3000 }).catch(() => false)
    ) {
      await dismissNotifications.click();
    }
  });

  test('deve carregar a home com destaque principal', async ({ page }) => {
    await expect(page).toHaveURL(/globo\.com/);
    await expect(page).toHaveTitle(/globo\.com/i);

    const headline = page.getByRole('heading', { level: 2 }).first();
    await expect(headline).toBeVisible();
  });

  test('deve buscar por economia e exibir resultados', async ({ page }) => {
    const searchInput = page.getByRole('textbox', {
      name: 'Encontre na globo.com'
    });
    await expect(searchInput).toBeVisible();

    await searchInput.fill('economia');
    await searchInput.press('Enter');

    await expect(page).toHaveURL(/\/busca\/\?q=economia/);
    await expect(page.getByText('Exibindo').first()).toBeVisible();
  });
});
