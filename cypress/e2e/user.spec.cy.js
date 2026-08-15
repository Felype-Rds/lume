import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MyInfoPage from '../pages/myInfoPage'
import SavePage from '../pages/saveMyInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()
const savePage = new SavePage()
const firstName = 'NameTest'
const lastName = 'LastNameTest'
// const nickName = 'NickNameTest'
const idTest = 'IdTest'
const otherId = 'OtherIdTest'
const driverLicenseNumber = 'NumberTest'
// const ssnNumber = 'SSNNumberTest'
// const sinNumber = 'SINNumberTest'
const dateLicense = '1995-12-12'
const nationality = 'Italian'
const marital = 'Single'
const dateBirth = '2000-09-12'

describe('Orange HRM Tests', () => {


  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.accessDashboardPage()
    myInfoPage.accessMyInfoPage()
    myInfoPage.formFieldsMyInfo(
        firstName, 
        lastName, 
        // nickName, 
        idTest, 
        otherId, 
        driverLicenseNumber, 
        // ssnNumber, 
        // sinNumber, 
        dateLicense, 
        nationality, 
        marital, 
        dateBirth
      )
    savePage.saveMyInfo()
    savePage.validateSuccessMassage()
  

  })
  it('User Info Update - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).contains('Login').click()
    cy.get(selectorsList.wrongCredentialAlert).should('contain', 'Invalid credentials')

  })
})