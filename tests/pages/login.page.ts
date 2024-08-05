import { $ } from "@wdio/globals";
import Page from "./page";

class LoginPage extends Page {
  public get emailInput() {
    return $("#email-login");
  }

  public get passwordInput() {
    return $("#password-login");
  }

  public get submitButton() {
    return $("#login-button");
  }

  public get homeScreen() {
    return $("#home-page");
  }

  public get logoutButton() {
    return $("#logout-button");
  }

  public async login(email: string, password: string) {
    try {
      await this.open();
      await this.emailInput.setValue(email);
      await this.passwordInput.setValue(password);
      await this.submitButton.click();
    } catch (e) {
      throw new Error("Не удалось войти в аккаунт");
    }
  }

  public open() {
    return super.open("/");
  }
}

export default new LoginPage();
