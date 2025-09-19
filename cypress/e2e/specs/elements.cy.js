/// <reference types="cypress" />

import ElementsPage from "../../pages/ElementsPage";

const elementsPage = new ElementsPage ();
describe ('Criar, Editar e Excluir Elements', () =>{

     beforeEach(() => {
        cy.acessarPagina();
    });

    it.only('Criar Elements', () => {
        elementsPage.selecionarElementsPaginaInicial();
        elementsPage.selecionarSubMenuWebTables ();
        elementsPage.adicionarNovoElemensts ();
        elementsPage.inserirFirstName();
        elementsPage.inserirLastName();
        elementsPage.inserirEmail();
        elementsPage.inserirAge ();
        elementsPage.inserirSalary ();
        elementsPage.inserirDepartment ();
        elementsPage.submit();
        elementsPage.alterarScroll();
        elementsPage.removerImagem();
        elementsPage.pesquisar();
        elementsPage.editar();
        elementsPage.submit(); 
        elementsPage.excluir();
        elementsPage.voltarScroll ();
    });
});