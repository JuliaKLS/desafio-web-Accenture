/// <reference types="cypress" />

import InteractionPage from "../../pages/InteractionPage";

const interactionPage = new InteractionPage ();

describe ('Numeros em Ordem Crescente', () =>{

     beforeEach(() => {
        cy.acessarPagina();
    });
it('Numeros em Ordem Crescente', () => {

    interactionPage.selecionarInteractionsPaginaInicial ();
    interactionPage.selecionarSortable ();
    interactionPage.selecionarList();
    interactionPage.ordenarNumerosEmOrdemCrescente(); 
});

it('Numeros em Ordem Decrescente', () => {
    interactionPage.selecionarInteractionsPaginaInicial ();
    interactionPage.selecionarSortable ();
    interactionPage.selecionarList();
    interactionPage.ordenarNumerosEmOrdemDecrescente();
});

});
