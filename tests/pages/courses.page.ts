import { $ } from "@wdio/globals";
import Page from "./page";

class CoursesPage extends Page {
  public get loading() {
    return $("#courses-loading");
  }

  public get courses() {
    return $("#courses-list");
  }

  public async loadCourses() {
    try {
      await this.open();
      (await this.loading).waitForDisplayed({ timeout: 2000 });
      (await this.courses).waitForDisplayed({ timeout: 2000 });
    } catch (e) {
      throw new Error("Не удалось загрузить список курсов");
    }
  }

  public open() {
    return super.open("/home");
  }
}

export default new CoursesPage();
