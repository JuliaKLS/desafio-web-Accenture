Feature: Gerenciar Registros De Elementos Na Web Tables

  Scenario: Criar, Editar e Excluir Um Registro
    Given Que acesso a página "Elements"
    And Seleciono o submenu "Web Tables"
    When Eu crio um novo registro
    Then O registro deve ser exibido na tabela
    When Eu edito o registro
    Then O registro deve ser atualizado
    When Eu deleto o registro
    Then O registro não deve estar mais na tabela

  Scenario: Criar e Excluir Múltiplos Registros
    Given Que acesso a página "Elements"
    And Seleciono o submenu "Web Tables"
    When Eu crio 12 registros
    Then Os 15 registros devem estar visíveis na tabela
    When Eu deleto todos os registros
    Then A tabela deve ficar vazia



