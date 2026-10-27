# 🛒 E-Commerce Playwright POM Framework

An end-to-end test automation framework for an e-commerce web application, built using **Playwright, TypeScript, and the Page Object Model (POM)** design pattern.

This project demonstrates automated UI testing practices, reusable page objects, and a structured approach to maintaining scalable and reliable test cases.

## 🛠️ Tech Stack

- **Playwright** – Browser automation and end-to-end testing
- **TypeScript** – Test scripting and type safety
- **Node.js** – JavaScript runtime environment
- **Page Object Model (POM)** – Test architecture and code reusability
- **Git & GitHub** – Version control and project management

## 🎯 Project Objectives

- Automate essential e-commerce user workflows.
- Reduce code duplication through reusable page objects.
- Improve test readability and maintainability.
- Practice end-to-end testing using Playwright and TypeScript.
- Organize automated tests for easier debugging and future expansion.

## 📁 Project Structure


```
ecommerce-playwright-pom-framework/
├── pages/
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   └── CartPage.ts
├── tests/
│   ├── login.spec.ts
│   ├── product.spec.ts
│   └── cart.spec.ts
├── playwright.config.ts
├── package.json
└── README.md
```

## 🧪 Test Coverage

The framework is designed to support common e-commerce scenarios, including:

| Test Area        | Example Scenarios                  |
| ---------------- | ---------------------------------- |
| Authentication   | Valid and invalid login attempts   |
| Product Browsing | Product navigation and details     |
| Shopping Cart    | Adding and removing products       |
| Form Validation  | Required fields and invalid inputs |
| Checkout         | Checkout flow and input validation |


## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the Repository

```
git clone https://github.com/YOUR-USERNAME/ecommerce-playwright-pom-framework.git
cd ecommerce-playwright-pom-framework
```

### 2. Install Dependencies

```
npm install
```

### 3. Install Playwright Browsers

```
npx playwright install
```

### 4. Execute Tests

Run all tests:

```
npx playwright test
```

Run tests in headed mode:

```
npx playwright test --headed
```

Run tests using the Playwright UI:

```
npx playwright test --ui
```

## 📊 Test Reports

Playwright provides HTML reporting to help review test execution results and investigate failures.

To view an existing HTML report:

```
npx playwright show-report
```

## 🧩 Page Object Model (POM)

The Page Object Model design pattern separates page-specific interactions from test logic.

Each page object can contain reusable locators and methods, allowing tests to focus on verifying application behavior rather than repeatedly implementing UI interactions.

**Benefits:**

- Improved test readability
- Reduced code duplication
- Easier locator maintenance
- Better separation of responsibilities
- Greater scalability as test coverage expands

## 🔮 Future Enhancements

Potential improvements include:

- API testing integration
- Cross-browser execution
- Data-driven testing
- CI/CD integration using GitHub Actions
- Expanded negative and edge-case scenarios
- Enhanced test reporting

## 👩🏽‍💻 Author

**Kayla Anderson**

QA Automation Engineer | Software Testing | Playwright | TypeScript

This project is part of my ongoing hands-on work in test automation and quality engineering.
