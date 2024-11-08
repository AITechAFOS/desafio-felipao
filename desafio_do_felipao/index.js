/*1️⃣ Desafio Classificador de nível de Herói
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
Ao final deve se exibir uma mensagem: "O Herói de nome **{nome}** está no nível de **{nivel}**" */


let nomePersonagem = "Zelda"
let xp = 10100
let nivel = ""

//UTILIZANDO A ESTRUTURA DE CONTROLE IF 
if(xp <= 1000) {
      nivel = "Ferro"
      } else if (xp > 1000 && xp <= 2000) {
            nivel = "Bronze"
      } else if (xp > 2000 && xp <= 5000) {
            nivel = "Prata"
      } else if (xp > 5000 && xp <= 7000) {
            nivel = "Ouro"
      } else if (xp > 7000 && xp <= 8000) {
            nivel = "Platina"
      } else if (xp > 8000 && xp <= 9000) {
            nivel = "Ascendente"
      } else if (xp > 9000 && xp <= 10000) {
            nivel = "Imortal"
      } else if (xp > 10000) {
            nivel = "Radiante"
      }

/*UTILIZANDO A ESTRUTURA DE CONTROLE SWITCH CASE:
switch (xp) {
      case xp <= 1000:
            nivel = "Ferro"
            break
      case xp > 1000 && xp <= 2000:
            nivel = "Bronze"
            break
      case xp > 2000 && xp <= 5000:
            nivel = "Prata"
            break
}

Tentei fazer utilizando o SHITCH CASE
Funcionou parcialmente, consegui exibir a mensagem final, porém não teve jeito da variável nivel ser exibida, então busquei ajuda com o Copilot da Microsoft, que me retornou o motivo de eu não conseguir resolver a questão:
"Seu código tem um pequeno problema: os case dentro do switch precisam ser valores exatos ou expressões que resultem em valores exatos, não condições como <= ou &&. O switch em JavaScript compara o valor da expressão fornecida com os valores exatos dos case. Para resolver isso, você pode usar uma estrutura if...else no lugar do switch.
Como eu já tinha resolvido com o IF ELSE, acredito que consegui me sair bem no meu primeiro desafio de código
*/

console.log("O Herói de nome " + nomePersonagem + " está com um XP de " + xp + " e está no nível " + nivel + ".")


