import { faker } from '@faker-js/faker'; 

class ElementsPage {

    seletorElementsPaginaInicial = ':nth-child(1) > :nth-child(1) > .card-body > h5';
    seletorSubMenuWebTables = ':nth-child(1) > .element-list > .menu-list > #item-3';
    seletorAdd = '#addNewRecordButton';
    seletorFirstName = '#firstName';
    seletorLastName = '#lastName';
    seletorEmail = '#userEmail';
    seletorAge = '#age';
    seletorSalary = '#salary';
    seletorDepartment = '#department';
    seletorSubmit = '#submit';
    seletorPesquisar = '#searchBox';
    seletorEditar = '#edit-record-4 > svg';
    seletorExcluir = '#delete-record-4 > svg';
    seletorScrollHorizontal = '.ReactTable .rt-table';
    seletorNextPg2 = '.-btn';
    seletorExcluirImagem = '.container > :nth-child(1) > :nth-child(3)' 

    selecionarElementsPaginaInicial() {
        cy.get(this.seletorElementsPaginaInicial).click();
    }

    selecionarSubMenuWebTables () {
        cy.get(this.seletorSubMenuWebTables).click();
    }

    adicionarNovoElemensts () {
        cy.get(this.seletorAdd).click();
    }

    inserirFirstName() {
        this.nome = faker.person.firstName();
        return cy.get(this.seletorFirstName).type(this.nome);
    }

    inserirLastName() {
        cy.get(this.seletorLastName).type(faker.person.lastName());
    }

    inserirEmail() {
        cy.get(this.seletorEmail).type(faker.internet.email());
    }

    inserirAge () {
        cy.get(this.seletorAge).type(faker.string.numeric(2));
    }

    inserirSalary () {
        cy.get(this.seletorSalary).type(faker.string.numeric(5));
    }

    inserirDepartment () {
       cy.get(this.seletorDepartment).type('QA');
    }

    submit () {
       cy.get(this.seletorSubmit).click();
    }

    pesquisar () {
        cy.get(this.seletorPesquisar).type(this.nome);
    }

   editar() {
        cy.get(this.seletorEditar).click();
        cy.get(this.seletorDepartment).clear().type('Editado'); 
    }

    submit () {
       cy.get(this.seletorSubmit).click();
    }

    alterarScroll () {
       cy.get(this.seletorScrollHorizontal).invoke('css', 'overflow', 'visible').click()

    }
    
    removerImagem(){
        cy.get(this.seletorExcluirImagem).then($img => {
        $img.remove();
    });

}

    excluir () {
        cy.get(this.seletorExcluir).click();
    }

    voltarScroll () {
       cy.get(this.seletorScrollHorizontal).invoke('css', 'overflow', 'auto').click();

    }
};

export default ElementsPage;