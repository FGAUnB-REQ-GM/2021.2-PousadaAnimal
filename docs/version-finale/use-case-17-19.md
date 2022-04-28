# Especificação de caso de Uso <Pré-agendamento>

## Histórico de revisão
| Data       | Autor                                        | Modificações                      | Versão |
| ---------- | -------------------------------------------- | --------------------------------- | ------ |
| 24/04/2022 | [Laís Portela](https://github.com/laispa) |Adicionando caso de uso no documento | 1.0 |
| 26/04/2022 | [Laís Portela](https://github.com/laispa) |Revisão do documento | 1.1 |
| 26/04/2022 | [Laís Portela](https://github.com/laispa) |Alterações no fluxo básico e em outros.| 1.2 |
| 26/04/2022 | [Laís Portela](https://github.com/laispa) |Adição de regra de negócio.| 1.3 |
 
## 1. Breve Descrição
Este caso de uso é utilizado pelos clientes para fazer o pré-agendamento do animal, bem como escolher os serviços prestados e meios de pagamento
 
## 2. Atores
2.1 Cliente que deseja hospedar o seu animal em um hotel para pets
 
2.2 Funcionário que trabalha no hotel para animais e deseja aprovar agendamentos e definir serviços de forma virtual.
 
## 3. Condições Prévias
3.1 Cliente fez login.

3.2 Cliente cadastrou pelo menos um animal.
 
## 4. Fluxo Básico (FB)
 
4.1. O cliente seleciona a opção "hospedar pet".

4.2. O cliente seleciona o animal desejado.

4.3. O cliente digita as datas desejadas(RN04).

4.4. O sistema faz a validação da data (FE01)(FE02)(FE03)(RN01).

4.5. O sistema mostra o valor da hospedagem (RN01).

4.6. O sistema digita informações complementares do animal.

4.7. O cliente confirma o pré-agendamento (RN02).

4.8. O sistema verifica se o cliente deseja escolher algum serviço ou definir a forma de pagamento (FA01) (FA02) (FA03).
 
## 5. Fluxo Alternativo (FA)
### FA01 - Selecionar serviços
5.1.1. O cliente seleciona "Serviços".

5.1.2. O cliente escolhe quais serviços deseja.

5.1.3. O cliente salva as informações (RN03).

5.1.4. O sistema emite uma mensagem de sucesso.

 
### FA02 - Selecionar pagamento
5.2.1. O cliente seleciona "Pagamento".

5.2.2. O cliente escolhe qual será o seu meio de pagamento.

5.2.3. O sistema mostra o valor total.

5.2.3. O cliente salva sua opção (RN03).

5.2.4. O sistema emite uma mensagem de sucesso.
 
### FA03 - Sair do pré-agendamento
5.3.1. O cliente decide finalizar o pré-agendamento, após a conclusão do fluxo básico.
 
## 6. Fluxo de Exceção (FE)
### 6.1 FE01 - Data de entrada maior que a de saída
No passo 4.4 do fluxo básico, caso o cliente digite uma data de entrada maior que a de saída, o sistema emite a mensagem: "A data de entrada deve ser maior que a de saída". E, o caso de uso retorna ao 4.3 do FB.
### 6.2 FE02 - Data anterior a atual
No passo 4.4 do fluxo básico, caso o cliente digite nos campos de entrada ou de saída uma data anterior à data do dia atual, o sistema mostra a seguinte mensagem: "As datas devem ser maiores que a de hoje".  E, o caso de uso retorna ao 4.3 do FB.
### 6.3 FE03 - Data com mais de um ano a frente
No passo 4.4 do fluxo básico, caso o cliente digite nos campos de entrada ou de saída uma data que ultrapasse o período de um ano da atual, o sistema mostra a seguinte mensagem: "As datas não devem ser de mais de um ano". E, o caso de uso retorna ao 4.3 do FB.
### 6.4 FE04 - Cliente não digitou as informações necessárias
No passo 4.7 do fluxo básico, caso o cliente não digite as informações do "pet", no caso 4.2, e as datas, no passo 4.3, corretamente, o sistema impedirá que o cliente avance para o próximo passo.
 
## 7. Regra de Negócio (RN)
### 7.1 RN01 - Valor do pré-agendamento
No passo 4.5 do fluxo básico, o valor da hospedagem depende do peso do animal e dias de agendamento, para ser mostrado ao cliente os campos "Pet",passo 4.2, "Entrada" e "Saída", passo 4.3, devem ser preenchidos, sendo que "pet" deve ser selecionado entre as opções de animais cadastrados.
### 7.2 RN02 - Validação dos dados
No passo 4.7 do fluxo básico, para que o sistema realize o pré-agendamento, é necessário que o passo 4.2, 4.3 estejam preenchidos corretamente, e que o sistema valide o passo 4.4.
### 7.3 RN03 - Campo preenchido
No passo 5.1.3 e 5.2.3 do fluxo alternativo, para que o sistema confirme as informações, elas não devem ser nulas.
### 7.4 RN04 - Validação das datas
No passo 4.3 do fluxo alternativo, as datas preenchidas devem seguir os seguintes critérios: 
- As datas tem que ser posteriores ou igual ao dia atual.
- As datas devem ser de até um ano depois do dia atual.
- A data de entrada não pode ser posterior a data de saída.
## 8. Pós-condições
 Não se aplica.
## 9. Ponto de Extensão
 O pré-agendamento é o ponto de extensão do caso de uso Cadastrar animal.
