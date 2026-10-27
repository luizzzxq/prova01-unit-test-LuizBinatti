
import { Page, expect } from '@playwright/test';

export default class LoginPage {
  constructor(private page: Page) {}

  async abrir() {
    await this.page.goto('https://login.live.com/', {
      waitUntil: 'domcontentloaded',
    });

    await expect(
      this.page.locator('input[type="email"]')
    ).toBeVisible();
  }

  async preencherEmail(email: string) {
    await this.page
      .locator('input[type="email"]')
      .fill(email);
  }

  async clicarAvancar() {
    await this.page
      .getByRole('button', { name: /avançar|next/i })
      .click();
  }

  async validarFormularioLogin() {
    await expect(
      this.page.locator('input[type="email"]')
    ).toBeVisible();
  }

  async validarEmailPreenchido(email: string) {
    await expect(
      this.page.locator('input[type="email"]')
    ).toHaveValue(email);
  }

  async validarRespostaAposAvancar() {
    await expect(
      this.page.locator('body')
    ).not.toBeEmpty();
  }
}

