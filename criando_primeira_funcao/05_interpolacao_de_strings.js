createStringConnection("db_products","felipe","9876")
function createStringConnection(databaseName, user, pass){
      //A interpolação de strings é feita com os sinais `` e com o ${}
      console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)      
}