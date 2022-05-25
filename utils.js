const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');


function readDataBase(fileName){
    const filePath = path.join(__dirname,"data", `${fileName}.json`);
    const content = fs.readFileSync(filePath).toString()
    return JSON.parse(content)
}

function saveAccountData(data){
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(path.join(__dirname,"data", "db.json"),stringifyData)
    return
}

function login(userName,passWord){
    let myDataBase = readDataBase("db");
    
    console.log(typeof(myDataBase));
    
    for(let item in myDataBase){
        

        if (userName === myDataBase[item]["username"]){
            if(passWord === myDataBase[item]["password"]){
            
                console.log("you did it")
                let userId = item;
                return {islogin:true,userId}
                
            }
        }
        
    }
}