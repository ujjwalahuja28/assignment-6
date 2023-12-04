const fs = require("fs");
const path = require("path");

// Load the HTML file content for testing
const htmlPath = path.join(__dirname, "./index.html");
const htmlContent = fs.readFileSync(htmlPath, "utf-8");

describe("HTML Testing", () => {
  test("HTML should have the correct DOCTYPE declaration", () => {
    const expectedDoctype = "<!DOCTYPE html>";
    expect(htmlContent).toMatch(expectedDoctype);
  });

  test("HTML should contain a header element", () => {
    expect(htmlContent).toContain("<header>");
  });
  test("HTML should have a welcome message", () => {
    expect(htmlContent).toContain("<h1>Welcome to My Website</h1>");
  });

  test("HTML should contain a main section", () => {
    expect(htmlContent).toContain("<main>");
  });

  test("HTML should have a footer element", () => {
    expect(htmlContent).toContain("<footer>");
  });

  test("HTML should have a copyright notice in the footer", () => {
    expect(htmlContent).toContain("&copy; 2023 My Website");
  });

  test("HTML should have the correct lang attribute in the <html> tag", () => {
    const expectedLang = 'fr';
    expect(htmlContent).toContain('<html lang="' + expectedLang + '">');
  });

  test("HTML should not have any extraneous elements", () => {
    const unexpectedElements = ["<script", "<style"];
    unexpectedElements.forEach((element) => {
      expect(htmlContent).not.toContain(element);
    });
  });
});

