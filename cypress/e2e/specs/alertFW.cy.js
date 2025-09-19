/// <reference types="cypress" />

import AlertFWPage from '../../pages/AlertFWPage';

const validarAlertFW = new AlertFWPage ();

describe ('Alerts, Frame & Windows', () =>{

     beforeEach(() => {
        cy.acessarPagina();
    });
    it ('Validar Alerts, Frame & Windows', () =>{
      validarAlertFW.abrirmenuAFWPaginaInicial();
      validarAlertFW.abrirBrowserWindows();
      validarAlertFW.fluxoClicandoNoNewWindows();
    })
})
