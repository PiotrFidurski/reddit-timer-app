// load the global Cypress types
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to intercept a request and search
     * @params {string} subreddit
     * @params {string} [fixture=pushshiftapi-response.json]
     * @params {number} [delay=1000]
     * @example cy.interceptAndSearch({subreddit:"javascript"})
     */
    interceptAndSearch({
      subreddit,
      fixture,
      delay,
    }: {
      subreddit: string;
      fixture?: string;
      delay?: number;
    }): Cypress.Chainable<JQuery<HTMLElement>>;
    /**
     * Custom command to open a link in a new tab with assertions on attributes
     * @params {string} name
     * @params {string} href
     * @example cy.linkOpensInNewTab({name:/Github/i,href:"https://github.com/chimson"})
     */
    linkOpensInNewTab({ name, href }: { name: string | RegExp; href: string }): Cypress.Chainable<undefined>;
  }
}
