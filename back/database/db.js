import  {Sequelize} from "sequelize"


const db = new Sequelize ("test","root","",{
    host:"localhost",
    dialect:"mysql",
    port:3306
})

export default db