import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ElementsPage from "../../../pages/ElementsPage";

const elementsPage = new ElementsPage();

Given('Que acesso a página "Elements"', () => {
  cy.acessarPagina();
  elementsPage.selecionarElementsPaginaInicial();
});

Given('Seleciono o submenu "Web Tables"', () => {
  elementsPage.selecionarSubMenuWebTables();
});

When("Eu crio um novo registro", () => {
  elementsPage.adicionarNovoElemensts();
  elementsPage.inserirFirstName();
  elementsPage.inserirLastName();
  elementsPage.inserirEmail();
  elementsPage.inserirAge();
  elementsPage.inserirSalary();
  elementsPage.inserirDepartment();
  elementsPage.submit();
});

Then("O registro deve ser exibido na tabela", () => {
  elementsPage.pesquisar();
  cy.get('.rt-tbody').should("contain", elementsPage.nome);
});

When("Eu edito o registro", () => {
  elementsPage.editar();
  cy.get(elementsPage.seletorDepartment).clear().type("Automation");
  elementsPage.submit();
});

Then("O registro deve ser atualizado", () => {
  elementsPage.pesquisar();
  cy.get('.rt-tbody').should("contain", "Automation");
});

When("Eu deleto o registro", () => {
  elementsPage.excluir();
});

Then("O registro não deve estar mais na tabela", () => {
  cy.get('.rt-tbody').should("not.contain", elementsPage.nome);
});

When("Eu crio 12 registros", () => {
  for (let i = 0; i < 12; i++) {
    elementsPage.adicionarNovoElemensts();
    elementsPage.inserirFirstName();
    elementsPage.inserirLastName();
    elementsPage.inserirEmail();
    elementsPage.inserirAge();
    elementsPage.inserirSalary();
    elementsPage.inserirDepartment();
    elementsPage.submit();
  }
});

Then("Os 15 registros devem estar visíveis na tabela", (numRegistros) => {
  let totalRegistros = 0;

  function contarPagina() {
    return cy.get('.rt-tr-group').then($rows => {
      totalRegistros += $rows.length;
    });
  }

  function irParaProximaPagina() {
    cy.get('.-next').then($next => {
      if ($next.is(':enabled')) {
        cy.wrap($next).click();
        contarPagina().then(() => {
          irParaProximaPagina();
        });
      } else {
        expect(totalRegistros).to.eq(numRegistros);
      }
    });
  }

  contarPagina().then(() => {
    irParaProximaPagina();
  });
});
