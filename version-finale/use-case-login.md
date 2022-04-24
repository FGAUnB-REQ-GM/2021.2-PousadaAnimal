# Especificação de caso de Uso < Fazer Login >

## Histórico de revisão
| Data       | Autor                                        | Modificações                      | Versão |
| ---------- | -------------------------------------------- | --------------------------------- | ------ |
| 24/04/2022 | [Laís Portela](https://github.com/laispa) |Adicionando caso de uso | 1.0 |

## Breve Descrição

Caso de uso utilizado por *clientes* e *funcionários* para fazerem login na plataforma.Os dois atores usam o login para terem acesso a sua página específica, obtendo acesso às funcionalidades exclusivas.

## Fluxo Básico de Eventos 
1. O cliente acessa a página de Login.
2. O cliente e o funcionário digita a senha e escreve seu e-mail.
3. O sistema verifica se se o usuário existe.
4. O sistema redireciona para a página do ator.

## Fluxo Alternativo

### < A1 - Cliente ou usuário com dados inexistentes >
No passo 3, se o usuário que tentar fazer login e não tiver cadastro ou tiver a senha e usuário incorreto, o sistema mostra a mensagem “Usuário ou senha inválidos. Tente novamente” e o caso de uso termina.

## Subfluxos 

### S1 - < Usuário vê que não tem cadastro e clica para criar um cadastro novo >
1. O cliente acessa a página de login.
2. O cliente e o funcionário digita a senha e escreve seu e-mail.
3. O sistema verifica se se o usuário existe.
4. O usuário recebe o aviso de erro e lembra que ainda não se cadastrou.
5. O usuário clica para se cadastrar e é redirecionado para o cadastro

### S2 - < Usuário percevbe que esqueceu a senha após a mensagem de erro>
1. O cliente acessa a página de login.
2. O cliente e o funcionário digita a senha e escreve seu e-mail.
3. O sistema verifica se se o usuário existe.
4. O usuário recebe o aviso de erro e percebe que esqueceu a sua senha
5. O usuário clica para se cadastrar e é redirecionado para a página de recuperação de senha

## Cenários Chaves

Cenário 1
- Login no sistema
- Login Aprovado
- Verificar qual o  tipo de usuário
- Usuário é um funcionário
- Redirecionar para a página do administrador.

Cenário 2
- Login no sistema
- Login Aprovado
- Verificar qual o  tipo de usuário
- Usuário é um cliente
- Redirecionar para a página do cliente.


## Condições Prévias
Ter cadastro na plataforma da Pousada Animal

## Requistos Especiais

### < Segurança >
O sistema deve guardar os dados de login com segurança.

### < Idioma > 
A página de login tem estar em língua portuguesa


# Especificação de caso de Uso <>

## Histórico de revisão
| Data       | Autor                                        | Modificações                      | Versão |
| ---------- | -------------------------------------------- | --------------------------------- | ------ |
| 24/04/2022 | [Laís Portela](https://github.com/laispa) | Adicionando formatação do caso de uso | 1.0 |

## Breve Descrição

## Fluxo Básico de Eventos 

## Fluxo Alternativo

### Área de Funcionalidade 

### <A1 - >

### Subfluxo Alternativo

### <A2 - >

### Subfluxo Alternativo

## Subfluxos 

### S1 - <>

### S2 - <>

## Cenários Chaves

## Condições Prévias

<>

## Condições Posteriores

## Ponto de Extensão

(são as opções que o caso pode fazer)
Ex: 
(devolver produtos)   <--extend--- (efetuar troca)

    | 
    |extend 
    |
    (ressarcir dinheiro)

Os pontos de extensão seriam então *opção de troca* e *opção de ressarcimento *
fonte: <https://dtic.tjpr.jus.br/wiki/-/wiki/Governança-TIC/Modelo+de+Caso+de+Uso/pop_up#:~:text=opcional%20do%20sistema.-,Pontos%20de%20Extensão,estendido)%20pelo%20%27apelido%27.>

## Requistos Especiais
