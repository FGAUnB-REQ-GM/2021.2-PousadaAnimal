# ABORDAGEM DE ENGENHARIA DE REQUISITOS

## Histórico de revisão
| Data       | Autor                                        | Modificações                      | Versão |
| ---------- | -------------------------------------------- | --------------------------------- | ------ |
| 02/03/2022 | [Luís Lins](https://github.com/luisgaboardi) | Adiciona nova versão da engenharia de requisitos | 1.0  |

A equipe decidiu utilizar uma abordagem ágil de Engenharia de Requisitos (ER), pois a metolodogia de desenvolvimento escolhida para o desenvolvimento de software não possui etapas específicas para a ER. No contexto ágil o principal responsável pela gerência dos requisitos é o dono do produto (PO). No nosso time, ao longo do semestre, todos farão o papel de um PO. Além disso, a metodogia ágil conta com a criação do backlog do produto, em que será listado todos os requisitos. Como o desenvolvimento é dividido em um ciclo de _Sprints_, os requisitos não terão necessidade de serem detalhados logo no início do projeto, e sim quando forem movidos para o _Sprint Backlog_.

## Elicitação de Requisitos

<div align="center">
  <img src="../../images/brainstorm.png" alt="Scrum" width="500" >
</div>

O levantamento dos requisitos será feito pelo método BrainStorm, onde todos discutem quais serão os requisitos necessários para o sistema. Também teremos a histórias e usuário e o levantamento dos requisitos não funcionais que serão elucidados em workshops online.

| Atividade | Método | Ferramenta
| --------- | ------ | -------
| Levantamento de requisitos funcionais e não funcionais | BrainStorm | Microsoft Teams e Microsoft Word
| Criação das histórias de usuário | Reuniões estruturadas | Microsoft Teams e Microsoft Excel
| Identificação do Backlog do Produto segundo padrão SAFe | Reunião estruturada | Microsoft Teams


## Análise de Requisitos
O principal objetivo é identificar requisitos não válidos ou irrelevantes para o desenvolvimento do produto e retirá-los do backlog do produto, assim como refinar os que são vistos como importantes. A cada início de sprint, a equipe fará a definição das tarefas de cada requisito/história de usuário.

| Atividade | Método | Ferramenta
| --------- | ------ | -------
| Refinamento e reconsideração dos requisitos levantados | Reuniões estruturadas | Microsoft Teams
| Definição das tarefas em cima de cada requisito | Reuniões estruturadas | Microsoft Teams e Microsoft Excel


## Documentação de Requisitos
A construção da documentação dos requisitos seguirá algumas premissas do método XP, em especial, a escrita em dupla (pair programming).

| Atividade | Método | Ferramenta
| --------- | ------ | -------
| Construção do Backlog do Produto e Upload no Github Pages | Escrita pareada | Microsoft Teams e Github Pages 


## Verificação e Validação de Requisitos
A verificação, isto é, a revisão do documento, será realizada pela dupla que não participou da elaboração do documento, caso o documento não tenha sido construído em equipe. Nessa verificação, as seguintes atividades são realizadas:

- Detecção dos defeitos: O inspetor fará a busca dos possíveis defeitos.
- Dicriminação dos Defeitos: Todas as partes analisam, e dividem os defeitos em falso positivo e outros como positivos. Os falsos serão descartados e os outros serão agrupados em uma lista de defeitos.
- Retrabalho: A dupla autora do documento corrige os defeitos de acordo com a lista.

A validação dos requisitos será realizada mediante a avaliação do produto por parte de clientes voluntários, preferencialmente um dono de uma pousada para pets e um dono de pet. A aprovação dos requisitos poderá ser feita de forma presencial ou online a depender da localização.

| Atividade | Método | Ferramenta
| --------- | ------ | -------
| Verificação | Revisão pareada | Microsoft Teams
| Validação | Questionário com terceiros | Por questionários


## Gerenciamento de Requisitos 
É de vital importância o acompanhamento das alterações dos requisitos, para isso, a cada mudança que ocorrer, será gerada uma nova versão da lista de requisitos e do backlog do produto. Com isso, a equipe há de compreender o refinamento dos requisitos e identificar como isso afeta o produto.

| Atividade | Método | Ferramenta
| --------- | ------ | -------
| Criação de uma nova versão da documentação dos requisitos a cada alteração | Reuniões estruturadas | Microsoft Teams e Github Pages
| Manter registro das mudanças de requisitos | Uso de baseline | Microsoft Teams e Github Pages


## Referências Bibliográficas
1. ABC EDUCATION SERVICES. **Scrum.org**, 2022. Treinamento para a prática de scrum. Disponível em https://www.scrum.org/. Acesso em 17 fev. 2022.
2. AGILE Glossary. **Agile Alliance**, 2022. Disponível em https://www.agilealliance.org/agile101/agile-glossary/. Acessado em 18 fev. 2022.
3. DON WELLS. **Extreme Programming.org**, 1999. Valores do extreme programming. Disponível em http://www.extremeprogramming.org/rules.html. Acesso em 18 fev. 2022.
4. SOMMERVILLE, Ian. **Engenharia de software**. 10 ed. Tradução Luiz Cláudio Queiroz; revisão técnica Fábio Levy Siqueira. São Paulo: Pearson Education do Brasil, 2018.
5. MARSICANO, George. Requisitos de Software: Atividades de ER - Parte II. Brasília. 2021. Apresentação em PowerPoint. 39 slides, color, Material de aula do curso de Engenharia de Software da FGA/UNB. Disponível em: https://aprender3.unb.br/pluginfile.php/1624524/mod_resource/content/0/REQ_Aula%203%20-%20Atividades%20da%20ER%20-%20parte%202.pdf. Acesso em: 18 fev 2022.
3. Marcos Kalinowski, Rodrigo Oliveira Spinola, Guilherme Horta Travassos
6. KALINOWSKI, Marcos; SPINOLA, Rodrigo O., TRAVASSOS, Guilherme H. **Infra-estrutura Computacional para Apoio ao Processo de Inspeção de Software**. Brasília. 2004. Disponível em: http://www-di.inf.puc-rio.br/~kalinowski//publications/KalinowskiST04.pdf. Acesso em: 2 de fev. de 2022.
