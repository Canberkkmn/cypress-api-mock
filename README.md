# Cypress API Mock Test Automation

This project is a Cypress-based test automation framework designed to test API interactions with a web application. The framework uses **Mochawesome** for generating test reports.

## 📌 Features

- **Cypress for end-to-end testing**
- **Mock API requests and responses**
- **Mochawesome HTML test reports**
- **CI/CD pipeline with GitHub Actions**
- **Retries for flaky tests**

---

## 🚀 Installation & Setup

### **1. Clone the repository**

```sh
git clone https://github.com/your-repo/cypress-api-mock.git
cd cypress-api-mock
```

### **2. Install dependencies**

```sh
npm install
```

### **3. Run Cypress tests locally**

```sh
npx cypress run --reporter mochawesome
```

---

## 🔄 Running Tests in CI/CD (GitHub Actions)

This project includes a **GitHub Actions** workflow that runs Cypress tests automatically on every **push** or **pull request** to the `main` branch.

### **GitHub Actions Workflow (`.github/workflows/cypress-ci.yml`)**

- Runs Cypress tests in a **headless environment**.
- Generates an **HTML test report**.
- Uploads test reports as GitHub artifacts.

To trigger the workflow, simply push your changes:

```sh
git add .
git commit -m "Run Cypress tests in CI/CD"
git push origin main
```

You can view the results in the **Actions** tab of your GitHub repository.

---

## 📊 Viewing Test Reports

Once the tests are complete, **Mochawesome reports** are available inside `mochawesome-report/`.

To open the HTML report locally:

```sh
open mochawesome-report/mochawesome_<timestamp>.html
```

Or manually open it in a browser.

In GitHub Actions, reports can be downloaded from **Artifacts** after the test run.

---

## 📌 Contributors

Feel free to contribute! Fork the repo, create a feature branch, and submit a PR. 🚀

---

## 📜 License

This project is licensed under the MIT License.
