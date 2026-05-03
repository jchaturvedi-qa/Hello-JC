# Playwright Web Automation Framework

This is a Web Automation framework built using [Playwright](https://playwright.dev/) and [TypeScript](https://www.typescriptlang.org/).

## Directory Structure

- `pages/`: Page Object Models representing web pages and their interactions.
- `tests/`: Test specifications.
- `utils/`: Utility functions and helpers.
- `data/`: Test data files (JSON, CSV, etc.).
- `playwright.config.ts`: Playwright configuration file.

## Getting Started

### Prerequisites
- Node.js installed

### Installation

1. Clone this repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

### Running Tests

Run all tests:
```bash
npx playwright test
```

Run tests with UI mode:
```bash
npx playwright test --ui
```

Run tests in a specific browser (e.g., chromium):
```bash
npx playwright test --project=chromium
```

View the HTML test report:
```bash
npx playwright show-report
```
