//<Reference types ="cypress"/>


describe("lesson1",()=>{

it("visit maginto site",()=>{

    cy.visit("/");
    cy.visit("gear/bags.html/")
    //cy.visit("https://magento.softwaretestingboard.com/gear/bags.html")
});

it.only("validate login",()=>{
cy.visit("/");
cy.visit("customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
cy.get('#email').type("cypressuser@gmail.com")
cy.get("#pass").type("test@123")
cy.get("#send2").click()
})




}

);

