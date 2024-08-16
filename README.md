<h1 align="center" id="title">Aloware Test Project</h1>

## Introduction

Welcome to the Aloware Test Automation project! This repository contains automated tests for the Aloware landing page, designed to ensure high quality and reliability using Cypress.

Cypress is a powerful testing framework that allows for comprehensive end-to-end testing of web applications. This project leverages Cypress to automate testing tasks, covering various aspects of the Aloware landing page, including functionality, usability, and performance.

## Technology Stack

The test suite is implemented using Cypress, a JavaScript end-to-end testing framework.
Programming Language

## Features

Faker library to automate random data in order to replicate real-like user interaction,
Mochawesome reporter for enhenced html reports,
Prettier opinionated code formatter,
GitHub actions.

## How to use

To get started with this project, follow these steps:

Clone the Repository:

bash

`git clone https://github.com/your-repo/aloware-test-automation.git`

`cd aloware-test-automation`

Install Dependencies:

bash

`npm install`

Run Tests:

You can run the tests in different ways:

Cypress runner

Execute the command and follow the intuitive UI:

`npx cypress open`

Headless browser:

`npx cypress run`

Custom scripts with mochawesome reports

landing ui tests:

`npm run landingtest-report`

## GitHub Actions

Additionally, I configured my tests to be able to run on the CI/CD GitHub Actions. In order to do this, go to the "Actions" tab within the repository link, you will be able to see how every change pushed to the repository executes the defined workflows based on specified events or schedules.
There you will be able to monitor the status and results of these executions plus run them as you please.

## Project Structure

```
ALOWARETP/
│
├── .github/
│ └── workflows/
│ └── cypress-test.yml
│
├── cypress/
│ ├── pages/
│ │ └── landingPage.js
│ ├── reports/
│ ├── screenshots/
│ ├── support/
│ │ └── commands.js
│ ├── e2e.js
│ └── tests/
│ └── ui/
│
├── node_modules/
│
├── .gitignore
├── cypress.config.js
├── cypress.env.json
├── package-lock.json
├── package.json
└── README.md
```

-.github/workflows: Contains the yml file for GitHub actions integration.

-cypress/: Contains all Cypress test files and configuration.

-pages: Contains the Page Objects classes for the Page Object Pattern implementation.

-reports: Once you run the repository for the first time this folder will appear, including the index.html file where you can see the mochawesome reporter integration results.

-screenshots: Contains an image of the last test execution.

-support: Includes a file with custom commands meant to contribute to code reusability.

-tests: Includes the test specs.

-cypress.config.js: Cypress configuration file.

-package.json: Project dependencies and scripts.

-README.md: This file.


Solution written by Agustin Leonangeli
