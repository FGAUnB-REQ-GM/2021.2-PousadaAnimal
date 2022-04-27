# Especificação de caso de Uso < Consultar status do animal >

## Histórico de revisão
| Data       | Autor                                        | Modificações                      | Versão |
| ---------- | -------------------------------------------- | --------------------------------- | ------ |
| 26/04/2022 | [Laís Portela](https://github.com/laispa) | Adicionando formatação do caso de uso | 1.0 |
| 26/04/2022 | [Ana Júlia](https://github.com/aluzianobriceno) | Adicionando caso de uso | 1.1 |

## 1. Breve Descrição
Este caso de uso é utilizado por clientes para consultar o status do seu pet que está hospedado na pousa, de forma a mantê-lo informado sobre tudo que está acontecendo com o seu pet. 

## 2. Atores
2.1 Cliente que deseja acompanhar a estadia de seu pet em um hotel para pets.

## 3. Condições Prévias
3.1 Cliente fez login;
3.2 Cliente já fez o pré-agendamento;
3.3 Cliente já escolheu os serviços;
3.4 Cliente já deixou seu animal na pousada.

## 4. Fluxo Básico (FB) 
4.1 O cliente acessa sua página de perfil;
4.2 O cliente encontra informações do seu pet no mural de seu perfil (FE01);
4.3 O caso de uso é encerrado.

## 5. Fluxo Alternativo (FA)
### FA01 - Informações mais específicas 
5.1 O cliente digita mensagem para a pousada;
5.2 O cliente solicita Enviar a mensagem (RN01) (FE02).

## 6. Fluxo de Exceção (FE)
### 6.1 FE01 - Nenhum pet hospedado
No passo 4.2 do FB, caso não haja nenhum animal hospedado no momento, aparecerá o texto "Nenhum pet hospedado no momento", e o caso de uso é encerrado.

### 6.2 FE02 - Mensagem inválida
No passo 5.2 do FA, caso a mensagem seja invalida, o sistema apresenta a mensagem "texto inválido" e o caso de uso retorna ao passo 5.1 do FA.

## 7. Regra de Negócio (RN)
### 7.1	RN01 - Validação de mensagem
No passo 5.2 do FA, para que a mensagem seja considerada válida não pode ser vazia (nenhum texto escrito). 

## 8. Condições Posteriores
Não se aplica.

## 9. Ponto de Extensão
Não se aplica.
