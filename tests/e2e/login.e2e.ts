import LoginPage from "../pages/login.page";
import { expect } from "@wdio/globals";

describe("Login page", () => {
  it("login with valid data", async () => {
    await LoginPage.open();
    await LoginPage.login("emilnovikov392@gmail.com", "12345678");
    await expect(LoginPage.homeScreen).toBeExisting();
    await LoginPage.logoutButton.click();
  });

  it("login with not valid email", async () => {
    await LoginPage.open();
    await LoginPage.login("em@gmail.com", "12345678");
    await expect(LoginPage.homeScreen).not.toBeExisting();
  });

  it("login with not valid password", async () => {
    await LoginPage.open();
    await LoginPage.login("emilnovikov392@gmail.com", "11111111");
    await expect(LoginPage.homeScreen).not.toBeExisting();
  });
});
