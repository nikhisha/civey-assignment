/// <reference types="cypress" />

describe("live polls", () => {
  beforeEach(() => {
    cy.visit("https://civey.com/umfragen");
  });

  it("show a poll to vote", function () {
    cy.get("[data-test=poll-title]").should("be.visible");
    cy.get("[data-test=vote-area-single-choice]").should("be.visible");
  });

  it("show login before vote", function () {
    cy.get("[data-test=poll-title]").should("be.visible");
    cy.get("[data-test=vote-area-single-choice]").should("be.visible");
    cy.get("[data-test=answer-1]").click();
    cy.get("[data-test=masterdata-form]").should("be.visible");
    cy.get("[data-test=masterdata-form] footer a").should("be.visible");
  });

  it("show poll results after login", function () {
    cy.get("[data-test=poll-title]").should("be.visible");
    cy.get("[data-test=vote-area-single-choice]").should("be.visible");
    cy.get("[data-test=answer-1]").click();
    cy.get("[data-test=masterdata-form] footer a").click();
    cy.fixture("credentials").then((user) => {
      cy.get("input#email").type(user.email);
      cy.get("input#password").type(user.password);
    });
    cy.get("button[type=submit]").click();
    cy.get("[data-test=result]").should("be.visible");
  });

  it("show recommendations after vote", function () {
    cy.get("[data-test=poll-title]").should("be.visible");
    cy.get("[data-test=vote-area-single-choice]").should("be.visible");
    cy.get("[data-test=answer-1]").click();
    cy.get("[data-test=masterdata-form] footer a").click();
    cy.fixture("credentials").then((user) => {
      cy.get("input#email").type(user.email);
      cy.get("input#password").type(user.password);
    });
    cy.get("button[type=submit]").click();
    cy.get("[data-test=recommended-poll-1]").should("be.visible");
    cy.get("[data-test=recommended-poll-2]").should("be.visible");
  });

  it("show favourite button after vote", function () {
    cy.get("[data-test=poll-title]").should("be.visible");
    cy.get("[data-test=vote-area-single-choice]").should("be.visible");
    cy.get("[data-test=answer-1]").click();
    cy.get("[data-test=masterdata-form] footer a").click();
    cy.fixture("credentials").then((user) => {
      cy.get("input#email").type(user.email);
      cy.get("input#password").type(user.password);
    });
    cy.get("button[type=submit]").click();
    cy.get("[data-test=favorite-button]").should("be.visible");
  });
});
