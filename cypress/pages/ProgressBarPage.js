import { faker } from '@faker-js/faker'; 

class ProgressBarPage {
    seletorWidgets = ':nth-child(4) > :nth-child(1) > .card-body > h5';;
    seletorSubMenuProgressBar = ':nth-child(4) > .element-list > .menu-list > #item-4 > .text';
    seletorProgressBar = '#progressBar';
    seletorStart = '#startStopButton';
    seletorStop = '#startStopButton'
    seletorReset = '#resetButton';
    
    selecionarWidgets () {
        cy.get(this.seletorWidgets).click();
    }

    selecionarSubMenuProgressBar () {
        cy.get(this.seletorSubMenuProgressBar).click();
    }
    
    controlarBarra() {
        cy.get(this.seletorStart).click();
        cy.get(this.seletorProgressBar).should('contain.text', '22%');
        cy.get(this.seletorStop).click();
        cy.wait(3000)
        cy.get(this.seletorStart).click();
        cy.get(this.seletorProgressBar).should('contain.text', '100%');
         cy.get(this.seletorReset).click();
    }
}
export default ProgressBarPage;