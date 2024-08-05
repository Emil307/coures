import { expect } from "@wdio/globals";
import CoursesPage from "../pages/courses.page";

describe("Courses page", () => {
  it("load courses", async () => {
    await CoursesPage.open();
    await CoursesPage.loadCourses();
  });
});
