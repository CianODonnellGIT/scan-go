import mysql from "mysql2/promise";

export async function query({query, value = []}){

    const mySQLconnect = await mysql.createConnection({
        host: process.env.SQL_Host,
        user: process.env.SQL_User,
        password: process.env.SQL_Pass,
        port: process.env.SQL_Port,
        database: process.env.SQL_Database
    });

    try{
        const [result] = await mySQLconnect.execute(query, value);
        mySQLconnect.end();
        return result;
    }catch(error) {
        throw Error(error.message);
    }
}

