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
    for(let item in myDataBase){
        if (userName === myDataBase[item]["username"]){
            if(passWord === myDataBase[item]["password"]){
                let userId = item;
                return {islogin:true,userId}      
            }
        }
        
    }
}
function saveTaskInfo(data,id){
    let myDataBase = readDataBase("db");
    myDataBase[id]['tasks'].push(data);  
    fs.writeFileSync(path.join(__dirname,"data", "db.json"),JSON.stringify(myDataBase))
    return
}
function giveUserData(userId){
    let myDataBase = readDataBase("db");
    let userData = myDataBase[userId];
    return userData
}
module.exports = {readDataBase,saveAccountData,login,saveTaskInfo,giveUserData}
