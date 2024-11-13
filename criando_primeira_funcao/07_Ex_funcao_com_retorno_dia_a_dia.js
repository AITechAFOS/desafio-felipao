let userName = getFirstName("Felipe-Amaral-Silveira-Cantos","-")  //splitChar será o "-"
console.log("Seja bem-vindo " + userName)
userName = getFirstName("Carlos Almeida Juanito Gargalo")
console.log("Seja bem-vindo " + userName)
//O propósito desta função é pegar o nome completo, fatiá-lo de acordo com um caractere de corte passado e pegar somente a posição 0 desse vetor de palavras fatiadas                       
function getFirstName(name, splitChar = " "){   //Definindo o separador padrão na declaração da função
      let firstName = name.split(splitChar)[0]  //Utilizando o parâmetro splitChar para separar os nomes
      return firstName }


