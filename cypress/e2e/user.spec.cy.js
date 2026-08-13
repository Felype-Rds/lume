import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: ".oxd-alert-content",
    myInforButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    datePickerField: "[placeholder='yyyy-dd-mm']",
    closeButton: ".--close",
    saveButton: "[type='submit']",
    nationalityDropdown: ".oxd-select-text-input",
    radioButton: ".oxd-radio-input--active"
  }

  
  it.only('User Info Update - Success', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).contains('Login').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInforButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstName')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    // cy.get(selectorsList.genericField).eq(4).clear().type('NickNameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('IdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriverLicenseNumberTest')
    // cy.get(selectorsList.genericField).eq(9).clear().type('SSNNumberTest')
    // cy.get(selectorsList.genericField).eq(10).clear().type('SINNumberTest')
    cy.get(selectorsList.datePickerField).eq(0).clear().type('1995-12-12')
    cy.get(selectorsList.closeButton).click()
    cy.get(selectorsList.nationalityDropdown).eq(0).click({ force: true })
    cy.contains('Italian').click()
    cy.get(selectorsList.nationalityDropdown).eq(1).click({ force: true })
    cy.contains('Single').click()
    cy.get(selectorsList.datePickerField).eq(1).clear().type('2000-09-12')
    cy.get(selectorsList.closeButton).click()
    cy.get(selectorsList.radioButton).eq(0).click()
    // cy.get(selectorsList.saveButton).eq(0).click({ force: true })
    // cy.get('body').should('contain', 'Successfully Updated')
    

  })
  it('User Info Update - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).contains('Login').click()
    cy.get(selectorsList.wrongCredentialAlert).should('contain', 'Invalid credentials')

  })
})