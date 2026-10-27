
import { test, expect } from '@playwright/test';
import LoginPage from '../support/pages/loginpage';

test.describe('Testes de login - Microsoft', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.abrir();
  });

  // CT01 - Verificar se o formulário de login é exibido
  test('CT01 - Exibir formulário de login', async ({ page }) => {
    await loginPage.validarFormularioLogin();

    await expect(
      page.getByRole('button', { name: /avançar|next/i })
    ).toBeVisible();
  });

  // CT02 - Verificar se o campo aceita o preenchimento do e-mail
  test('CT02 - Preencher campo de e-mail', async () => {
    const email = 'usuario.inexistente.123456@example.com';

    await loginPage.preencherEmail(email);
    await loginPage.validarEmailPreenchido(email);
  });

  // CT03 - Verificar a resposta após avançar com um e-mail
  test('CT03 - Avançar após informar um e-mail', async () => {
    await loginPage.preencherEmail(
      'usuario.inexistente.123456@example.com'
    );

    await loginPage.clicarAvancar();
    await loginPage.validarRespostaAposAvancar();
  });

  // CT04 - Validar tentativa de avanço sem informar e-mail
  test('CT04 - Impedir avanço com e-mail vazio', async ({ page }) => {
    const campoEmail = page.locator('input[type="email"]');

    await expect(campoEmail).toBeEmpty();
    await loginPage.clicarAvancar();

    await expect(campoEmail).toBeVisible();
    await expect(page).toHaveURL(/login\.live\.com/);
  });

  // CT05 - Validar e-mail em formato inválido
  test('CT05 - Validar formato de e-mail inválido', async ({ page }) => {
    const campoEmail = page.locator('input[type="email"]');

    await loginPage.preencherEmail('email-invalido');
    await loginPage.clicarAvancar();

    await expect(page).toHaveURL(/login\.live\.com/);
    await expect(page.locator('body')).not.toBeEmpty();
  });
});
