import { Page, Locator } from '@playwright/test';

/**
 * Page Object Model for the Naukri Registration Page.
 * Encapsulates the UI elements and actions for creating a new account.
 * This class follows the Single Responsibility Principle, ensuring all
 * locators and page-specific interactions are maintained in one place.
 */
export class NaukriRegistrationPage {
  readonly page: Page;

  // Locators for the registration form elements
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly mobileInput: Locator;
  readonly workStatusExperienced: Locator;
  readonly workStatusFresher: Locator;
  readonly registerButton: Locator;

  /**
   * Initializes the NaukriRegistrationPage object.
   * @param page - The Playwright Page instance provided by the test runner.
   */
  constructor(page: Page) {
    this.page = page;

    // Initializing locators using IDs or robust selectors where possible
    this.fullNameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.mobileInput = page.locator('#mobile');

    // Locators for the "Work Status" selection (Experienced vs Fresher)
    this.workStatusExperienced = page.locator('div[data-val="exp"]');
    this.workStatusFresher = page.locator('div[data-val="fresher"]');

    // Locator for the final submit/register button
    this.registerButton = page.locator('button[type="submit"]');
  }

  /**
   * Navigates the browser to the Naukri registration page.
   */
  async navigate() {
    await this.page.goto('https://www.naukri.com/registration/createAccount?othersrcp=22636');
  }

  /**
   * Fills in the basic user information in the registration form.
   * This method abstracts the individual input actions to make tests more readable.
   *
   * @param name - The user's full name.
   * @param email - The user's email address.
   * @param password - The user's desired password.
   * @param mobile - The user's mobile number.
   */
  async fillBasicDetails(name: string, email: string, password: string, mobile: string) {
    // Elements on this site use custom JavaScript overlays to simulate a readonly state.
    // We force the inputs to accept the fill values to ensure test stability.
    await this.fullNameInput.fill(name, { force: true });
    await this.emailInput.fill(email, { force: true });
    await this.passwordInput.fill(password, { force: true });
    await this.mobileInput.fill(mobile, { force: true });
  }

  /**
   * Selects the work status of the registering user.
   *
   * @param status - The status to select: 'fresher' or 'experienced'.
   */
  async selectWorkStatus(status: 'fresher' | 'experienced') {
    if (status === 'fresher') {
      await this.workStatusFresher.click();
    } else {
      await this.workStatusExperienced.click();
    }
  }

  /**
   * Submits the registration form by clicking the "Register" button.
   */
  async submitRegistration() {
    await this.registerButton.click();
  }
}
