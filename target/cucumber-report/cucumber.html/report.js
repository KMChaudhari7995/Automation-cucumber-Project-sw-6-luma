$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("geartest.feature");
formatter.feature({
  "line": 1,
  "name": "GearTest",
  "description": "As a user I want to verify Gear Page",
  "id": "geartest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3309381100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "I should Add Product Successfully to shopping cart",
  "description": "",
  "id": "geartest;i-should-add-product-successfully-to-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on Gear MenU",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Bags",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Product Name Overnight duffle",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "message verify the text \"Overnight Duffle\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I update the QTY \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on ADD to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify the text \"You added Overnight Duffle to your shopping cart.\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Shopping Cart link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify text \"Overnight Duffle\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify the quantity \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I  product price \"$135.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I update the quantity \"5\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on update shopping cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify the product Price \"$225.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should be able to add product on cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "WomentestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 48047800,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.iMouseHoverOnGearMenU()"
});
formatter.result({
  "duration": 564842700,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.iClickOnBags()"
});
formatter.result({
  "duration": 726743800,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.iClickOnProductNameOvernightDuffle()"
});
formatter.result({
  "duration": 695640300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Overnight Duffle",
      "offset": 25
    }
  ],
  "location": "GearSteps.messageVerifyTheText(String)"
});
formatter.result({
  "duration": 74974300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "GearSteps.iUpdateTheQTY(String)"
});
formatter.result({
  "duration": 71860200,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.iClickOnADDToCartButton()"
});
formatter.result({
  "duration": 40309400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You added Overnight Duffle to your shopping cart.",
      "offset": 17
    }
  ],
  "location": "GearSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 1531304800,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.iClickOnShoppingCartLink()"
});
formatter.result({
  "duration": 1773800900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Overnight Duffle",
      "offset": 15
    }
  ],
  "location": "GearSteps.iVerifyText(String)"
});
formatter.result({
  "duration": 24487000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    }
  ],
  "location": "GearSteps.iVerifyTheQuantity(String)"
});
formatter.result({
  "duration": 31500500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$135.00",
      "offset": 18
    }
  ],
  "location": "GearSteps.iProductPrice(String)"
});
formatter.result({
  "duration": 21110500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 23
    }
  ],
  "location": "GearSteps.iUpdateTheQuantity(String)"
});
formatter.result({
  "duration": 54459900,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.iClickOnUpdateShoppingCartButton()"
});
formatter.result({
  "duration": 41663200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$225.00",
      "offset": 28
    }
  ],
  "location": "GearSteps.iVerifyTheProductPrice(String)"
});
formatter.result({
  "duration": 3113067800,
  "status": "passed"
});
formatter.match({
  "location": "GearSteps.iShouldBeAbleToAddProductOnCartSuccessfully()"
});
formatter.result({
  "duration": 15800,
  "status": "passed"
});
formatter.after({
  "duration": 651449200,
  "status": "passed"
});
});