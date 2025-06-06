import userData from '../fixtures/users/userData.json'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginwithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()
  }) 

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginwithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  }) 
})
