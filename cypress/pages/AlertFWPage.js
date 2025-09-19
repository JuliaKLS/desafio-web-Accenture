
class AlertFWPage {

    seletorAlertsFrameWindows = '#app > div > div > div.home-body > div > div:nth-child(3) > div > div.card-body > h5';
    seletorBrowserWindows = ':nth-child(3) > .element-list > .menu-list > #item-0';
    seletorNewWindows = '#windowButton';

    abrirmenuAFWPaginaInicial() {
        cy.get(this.seletorAlertsFrameWindows).click();
    }

    abrirBrowserWindows() {
        cy.get(this.seletorBrowserWindows).click();
    }
    fluxoClicandoNoNewWindows() {
        cy.get(this.seletorNewWindows).click();
        cy.visit('https://demoqa.com/sample');
        cy.contains('This is a sample page').should('be.visible');
        cy.go('back');
    }

};
export default AlertFWPage;