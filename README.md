# Drops-UI-end-to-end-tests
This repository contains the end to end tests for the languagedrops UI. The tests are running on (https://app.languagedrops.com/), which can be configured with the `` baseUrl `` variable.


# Installation instruction


After cloning this repository, you need to install [Cypress](https://www.cypress.io/) to run the tests.

``` 
git clone  https://github.com/karthikyadav3/Drops-UI-end-to-end-tests.git
cd /Drops-UI-end-to-end-tests.git
```

For installing Cypress and its dependencies run the following commands

``` 
npm install cypress

```
``` 
npm i -D cypress-wait-until

```
``` 
npm install adm-zip

```

To open the Cypress Test Runner, run the following command. You can then choose which test to launch in the windows that opens up.

 `` npx cypress open ``
 
 
 # Details of the tests

 | File name | Detail |
| --------- | ------ |
| ``test_languages.js`` | Check the list of languages and test if all languages are visible, Select the particular language and redirects and tests the redirected page.|