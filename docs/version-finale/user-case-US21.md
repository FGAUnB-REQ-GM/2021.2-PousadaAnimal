# Especificação de caso de Uso: Informar Status do Pet

## Histórico de revisão
| Data       | Autor                                        | Modificações                      | Versão |
| ---------- | -------------------------------------------- | --------------------------------- | ------ |
| 26/04/2022 | [Laís Portela](https://github.com/laispa) | Adicionando formatação do caso de uso | 1.0 |
| 26/04/2022 | [Kathlyn Lara](https://github.com/klmurussi) | Adicionando caso de uso | 1.1 |

## 1    Breve Descrição
US utilizado por funcionários para descreverem o status do animal.

## 2    Atores
2.1	Funcionários da Pousada

## 3    Condições Prévias
O funcionário precisa estar logado na sua conta como administrador.

## 4    Fluxo Básico de Eventos (FB)
4.1     O funcionário seleciona a opção “Status do Pet”;

4.2	    O sistema apresenta a lista de pets hospedados (FE01);

4.3 	O funcionário seleciona a opção “chat” no pet desejado;

4.4 	O sistema apresenta o chat do funcionário com o dono do pet;

4.5 	O funcionário escreve uma mensagem para enviar para o dono do pet;

4.6 	O funcionário solicita Enviar a mensagem (RN01) (FE02);

4.7 	O sistema informa que a mensagem foi enviada com sucesso;

4.8 	O funcionário seleciona a opção “Sair”.

4.9 	O caso de uso é encerrado.

## 5    Fluxos Alternativos (FA)
Não se aplica.

## 6    Fluxo de Exceção (FE)
### 6.1	FE01 - Nenhum pet hospedado
No passo 4.2 do FB, caso não haja nenhum animal hospedado no momento, aparecerá o texto “Nenhum pet hospedado no momento”, e o caso de uso é encerrado.

### 6.2	FE02 - Mensagem inválida
No passo 4.6 do FB, caso a mensagem seja inválida, o sistema apresenta a mensagem “texto inválido” e o caso de uso retorna ao passo 4.5 do FB.

## 7    Regras de Negócio (RN)
### 7.1	RN01 - Validação de mensagem
No passo 4.6 do FB, para que a mensagem seja considerada válida não pode ser vazia (nenhum texto escrito). 

## 8    Condições Posteriores
8.1	Para FB: mensagem enviada para o dono do pet.

## 9    Pontos de Extensão
Não se aplica.
