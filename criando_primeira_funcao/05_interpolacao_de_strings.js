createStringConnection("db_products","felipe","9876") //Parâmetros que serão chamados na função
function createStringConnection(databaseName, user, pass){ //Variáveis que carregarão os parâmetros
      console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
      //A interpolação de strings substitui a concatenação (sinal de +)
      //Utiliza os sinais `` e o ${} que substitui pelo valor da variável do mesmo nome
}