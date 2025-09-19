class InteractionPage  {
    seletorInteractionsPaginaInicial = '#app > div > div > div.home-body > div > div:nth-child(5) > div > div.card-body > h5';
    seletorSortable = ':nth-child(5) > .element-list > .menu-list > #item-0';
    seletorList = '#demo-tab-list';

    selecionarInteractionsPaginaInicial () {
        cy.get(this.seletorInteractionsPaginaInicial).click();
    }

    selecionarSortable () {
        cy.get(this.seletorSortable).click();
    }

    selecionarList () {
        cy.get(this.seletorList).click();
    }

ordenarNumerosEmOrdemCrescente() {
  const container = '.vertical-list-container.mt-4';

  cy.get(container).children().should('have.length', 6).as('itens');

  cy.get('@itens').then($itens => {
    const containerEl = Cypress.$(container);

    [...$itens].forEach((item) => {
      cy.wrap(item)
        .trigger('mousedown', { which: 1 })
        .wait(200) 
        .then(() => {
          containerEl.append(item); 
        })
        .trigger('mouseup', { force: true })
        .wait(200);
    });
  });

  cy.get(container).children().then($items => {
    const textos = [...$items].map(el => el.innerText.trim());
    expect(textos).to.deep.eq(['One','Two','Three','Four','Five','Six']);
  });
}
ordenarNumerosEmOrdemDecrescente() {
  const container = '.vertical-list-container.mt-4';

  cy.get(container).children().should('have.length', 6).as('itens');

  cy.get('@itens').then($itens => {
    const containerEl = Cypress.$(container);

    [...$itens].reverse().forEach((item, index) => {
      cy.wrap(item)
        .trigger('mousedown', { which: 1 })
        .wait(200) 
        .then(() => {
          containerEl.append(item); 
        })
        .trigger('mouseup', { force: true })
        .wait(200);
    });
  });

  cy.get(container).children().then($items => {
    const textos = [...$items].map(el => el.innerText.trim());
    expect(textos).to.deep.eq(['Six','Five','Four','Three','Two','One']);
  });
}

}
export default InteractionPage;