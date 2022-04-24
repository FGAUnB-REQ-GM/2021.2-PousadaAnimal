# Especificação de caso de Uso <Pré-agendamento>

## Histórico de revisão
| Data       | Autor                                        | Modificações                      | Versão |
| ---------- | -------------------------------------------- | --------------------------------- | ------ |
| 24/04/2022 | [Laís Portela](https://github.com/laispa) | Adicionando formatação do caso de uso | 1.0 |

## Breve Descrição
US utilizado pelos clientes para fazer o pré-agendamento do animal, bem como escolher os serviços prestados e meios de pagamento

## Fluxo Básico de Eventos 
1. O cliente seleciona a opção "hospedar pet"na Área do Usuário
2. O cliente seleciona o animal desejado.
3. O cliente digita a data desejada e as observações do pet.
4. O sistema habilita o botão "cadastrar"
5. O sistema mostra o valor do agendamento.
6. O cliente clica no botão de cadastro
7. O sistema mostra a mensagem de sucesso, redirecionando para a área da hospedagem.
8. O usuário pode selecionar alguma dessas opções:
    a) Seleciona serviços (Subfluxo S1).
    b) Escolhe opções de pagamento (Subfluxo S2).
9. O caso de uso é encerrado
    
## Fluxo Alternativo

### < A1 - Erro no agendamento >
No passo 6, o cliente clica em cadastrar, mas é o sistema mostra a mensagem "Erro ao agendar. Tente novamente!" e o caso de uso termina.

## Subfluxos 

### S1 - < Selecionar serviços >
1. O subfluxo inicia quando o Cliente seleciona em "Selecionar serviços" na área de hospedagem.
2. O sistema redireciona para a página  "Selecionar serviços".
3. O cliente escolhe quais serviços deseja.
4. O cliente clica em "salvar".
5. O sistema emite uma mensagem de sucesso e redireciona para a página do usuário

### S2 - < Selecionar pagamento >
1. O subfluxo inicia quando o Cliente seleciona em "selecionar pagamento" na área de hospedagem.
2. O sistema redireciona para a página "Selecionar Pagamento".
2. O sistema redireciona para a página  "Selecionar Serviços".
3. O cliente escolhe qual será o meio de pagamento desejado.
4. O cliente clica em "salvar".
5. O sistema emite uma mensagem de sucesso e redireciona para a página do usuário.

## Cenários Chaves
Cenário 1
- Cliente seleciona pet.
- Cliente escolhe da data de agendamento da hospedagem.
- Sistem mostra valor da hospedagem.
- Cliente clicou em agendar.
- Sistema redireciona para a página do usuário.
- Cliente vai em "Selecionar Serviços"
- Cliente escolhe serviços.
- Sistema redireciona para a página do usuário.

Cenário 2
- Cliente seleciona pet.
- Cliente escolhe da data de agendamento da hospedagem.
- Sistem mostra valor da hospedagem.
- Cliente clicou em agendar.
- Sistema redireciona para a página do usuário.
- Cliente vai em "Selecionar Pagamento"
- Cliente escolhe meio de pagamento.
- Sistema redireciona para a página do usuário.


Cenário 3
- Cliente seleciona pet.
- Cliente escolhe da data de agendamento da hospedagem.
- Sistem mostra valor da hospedagem.
- Cliente clicou em agendar.
- Sistema redireciona para a página do usuário.


## Condições Prévias

Usuário fez login e cadastrou pelo menos um animal.

## Ponto de Extensão

O pré-agendamento é o ponto de extensão do caso de uso Cadastrar animal

## Requistos Especiais

### < Segurança >
O sistema deve guardar os dados de agendamento com segurança.

### < Idioma > 
As páginas de pré-agendamento tem  de estar em língua portuguesa.
