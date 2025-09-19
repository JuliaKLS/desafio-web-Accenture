/// <reference types="cypress" />

import ProgressBarPage from "../../pages/ProgressBarPage";

const progressBarPage = new ProgressBarPage ();

describe ('Progress Bar', () =>{

     beforeEach(() => {
        cy.acessarPagina();
    });

    it('Pausar Progress Bar = 25%', () => {
        progressBarPage.selecionarWidgets();
        progressBarPage.selecionarSubMenuProgressBar();
        progressBarPage.controlarBarra();
    });
});

