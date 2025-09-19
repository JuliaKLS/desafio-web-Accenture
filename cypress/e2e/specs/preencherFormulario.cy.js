/// <reference types="cypress" />

import PreencherFormularioPage from "../../pages/PreencherFormularioPage";

const formularioPage = new PreencherFormularioPage ();

describe ('Formulário', () =>{

     beforeEach(() => {
        cy.acessarPagina();
    });
    it ('Preencher Formulário Completo', () =>{
        formularioPage.selecionarForms1();
        formularioPage.selecionarForms2();
        formularioPage.selecionarSubMenu();
        formularioPage.inserirFirstName();
        formularioPage.inserirLastName();
        formularioPage.inserirEmail();
        formularioPage.selecionarGender();
        formularioPage.inserirNumberMobile();
        formularioPage.inserirBirthDate();
        formularioPage.inserirSubjects();
        formularioPage.selecionarHobbies();
        formularioPage.inserirArquivo();
        formularioPage.inserirAddress();
        formularioPage.selecionarState();
        formularioPage.selecionarCity();
        formularioPage.submit();
        formularioPage.validarPopUp ();
        formularioPage.fecharPopUp ();

    })
})