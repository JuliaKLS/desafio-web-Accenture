import { faker } from '@faker-js/faker'; 

class PreencherFormularioPage {
    seletorForms1 = '#app > div > div > div.home-body > div > div:nth-child(2) > div > div.card-body > h5'
    seletorForms2 = ':nth-child(2) > .element-list > .menu-list > #item-0'; 
    seletorPraticeForm = '.btn.btn-light.active';
    seletorFirstName = '#firstName';
    seletorLastName = '#lastName';
    seletorEmail = '#userEmail';
    seletorGender = '#genterWrapper > .col-md-9 > :nth-child(3)';
    seletorMobile = '#userNumber';
    seletorDateOfBirth = '#dateOfBirthInput';
    seletorAno = '.react-datepicker__year-select';
    seletorMes = '.react-datepicker__month-select';
    seletorDia = '#dateOfBirth > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div.react-datepicker__month-container > div.react-datepicker__month > div:nth-child(3) > div.react-datepicker__day.react-datepicker__day--016';
    seletorOpcaoSubjects = '#react-select-2-option-0';
    seletorMultiSubjects = '.subjects-auto-complete__multi-value'
    seletorSubjects = '#subjectsContainer > div > div.subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3';
    seletorHobbies = '#hobbiesWrapper > .col-md-9 > :nth-child(3)';
    seletorSelectPicture = '#uploadPicture';
    seletorCurrentAddress = '#currentAddress';
    seletorComboState = '#state > .css-yk16xz-control > .css-1hwfws3';
    seletorState = '#react-select-3-option-0';
    seletoComboCity = '#city > .css-yk16xz-control > .css-1hwfws3'
    seletorCity = '#react-select-4-option-0';
    seletorSubmit = '#submit';
    seletorPopUp = '.modal';
    seletorBtnClose = '#closeLargeModal';

     selecionarForms1() {
         cy.get(this.seletorForms1).click();
    }

    selecionarForms2() {
         cy.get(this.seletorForms2).click();
    }

    selecionarSubMenu() {
         cy.get(this.seletorPraticeForm).click();
    }

    inserirFirstName() {
         cy.get(this.seletorFirstName).type(faker.person.firstName());
    }

    inserirLastName() {
         cy.get(this.seletorLastName).type(faker.person.lastName());
    }

    inserirEmail() {
         cy.get(this.seletorEmail).type(faker.internet.email());
    }

    selecionarGender() {
         cy.get(this.seletorGender).click();
    }

    inserirNumberMobile() {
        cy.get(this.seletorMobile).type(faker.string.numeric(10));
    }

    inserirBirthDate() {
        cy.get(this.seletorDateOfBirth).click();
        cy.get(this.seletorMes).select( 'March'); 
        cy.get(this.seletorAno).select('1994'); 
        cy.get(this.seletorDia).click();
    }
    
    inserirSubjects() {
     cy.get(this.seletorSubjects).type('Bio{enter}');
     cy.get(this.seletorSubjects).type('Eng{enter}');
     cy.get(this.seletorMultiSubjects)
     .should('contain', 'Biology')
     .and('contain', 'English');
     }

    selecionarHobbies () {
         cy.get(this.seletorHobbies).click();
    }

    inserirArquivo () {
         cy.get(this.seletorSelectPicture)
        .selectFile(`cypress/fixtures/arquivoTesteAccenture.txt`, { action: 'drag-drop', force: true });
    }

    inserirAddress () {
        cy.get(this.seletorCurrentAddress).type(
            faker.location.streetAddress() + ', ' +
            faker.location.zipCode() + ', ' +
            faker.location.country()
            );
    }

    selecionarState () { 
        cy.get(this.seletorComboState).click();
        cy.get(this.seletorState).click();
    }

    selecionarCity () {
         cy.get(this.seletoComboCity).click();
         cy.get(this.seletorCity).click();
    }

    submit () {
         cy.get(this.seletorSubmit).click();
    }

    validarPopUp () {
       cy.get(this.seletorPopUp).should('contain.text', 'Thanks for submitting the form');

    }

    fecharPopUp () {
        cy.get(this.seletorPopUp).contains('Close').click({force: true});
    }
}

export default PreencherFormularioPage;



 
        
        
        
        