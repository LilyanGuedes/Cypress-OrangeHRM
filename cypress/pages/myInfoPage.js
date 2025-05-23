export class MyInfoPage {
  selectorList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      middleNameField: "[name='middleName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateCloseButton: ".--close",
      submitButton: "[type='submit']",
      genericCombobox: ".oxd-select-text--arrow",
      fourthItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
      fifthItemCombobox: ".oxd-select-dropdown > :nth-child(4)",
    };
    return selectors;
  }

  fillPersonalDetails(firstName, middleName, lastName) {
    cy.get(this.selectorList().firstNameField).clear().type(firstName)
    cy.get(this.selectorList().middleNameField).clear().type(middleName)
    cy.get(this.selectorList().lastNameField).clear().type(lastName)
    // cy.get(this.selectorList().genericField).eq(3).clear().type("NickNameTest")
  }

  fillEmployeeDetails(employeeId, otherId, DriversLicense, dateLicese) {
    cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
    cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)
    cy.get(this.selectorList().genericField).eq(5).clear().type(DriversLicense)
    cy.get(this.selectorList().genericField).eq(6).clear().type(dateLicese)
    cy.get(this.selectorList().dateCloseButton).click()
  }

  fillStatus() {
    cy.get(this.selectorList().genericCombobox).eq(0).click()
    cy.get(this.selectorList().fourthItemCombobox).click()
    cy.get(this.selectorList().genericCombobox).eq(1).click()
    cy.get(this.selectorList().fifthItemCombobox).click()
  }

  saveForm() {
    cy.get(this.selectorList().submitButton).eq(0).click({force:true})
    cy.get('body').should('contain', 'Successfully Update')
  }
}
