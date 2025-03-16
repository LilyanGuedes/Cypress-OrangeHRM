import userData from '../fixtures/users/userData.json'
import { LoginPage } from '../pages/loginPage'

const loginPage = new LoginPage()
describe('Orange HRM Tests', () => {

  const selectorList = {
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: '.orangehrm-dashboard-grid',
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    genericCombobox: ".oxd-select-text--arrow",
    fourthItemCombobox : '.oxd-select-dropdown > :nth-child(3)',
    fifthItemCombobox: '.oxd-select-dropdown > :nth-child(4)'
  }

  it.only('User info update - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginwithUser(userData.userSuccess.userName, userData.userSuccess.password)
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    // cy.get(selectorList.sectionTitleTopBar).contains('Dashboard') não é bom usar textos
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type("Maria")
    cy.get(selectorList.middleNameField).clear().type("Clara")
    cy.get(selectorList.lastNameField).clear().type("Santos")
    // cy.get(selectorList.genericField).eq(3).clear().type("NickNameTest")
    cy.get(selectorList.genericField).eq(3).clear().type("employee")
    cy.get(selectorList.genericField).eq(4).clear().type("1111")
    cy.get(selectorList.genericField).eq(5).clear().type("2222")
    cy.get(selectorList.genericField).eq(6).clear().type("2035-01-01")
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.genericCombobox).eq(0).click()
    cy.get(selectorList.fourthItemCombobox).click()
    cy.get(selectorList.genericCombobox).eq(1).click()
    cy.get(selectorList.fifthItemCombobox).click()
    cy.get(selectorList.submitButton).eq(0).click({force:true})
    cy.get('body').should('contain', 'Successfully Update')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  }) 
})
