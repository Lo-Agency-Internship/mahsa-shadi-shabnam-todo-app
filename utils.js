const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');
const {filterDateWeekly,filterDateMonthly} = require('./filterFunctions.js');



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
    data['taskId'] = myDataBase[id]['tasks'].length;
    data['status'] = false;
    myDataBase[id]['tasks'].push(data);    
    fs.writeFileSync(path.join(__dirname,"data", "db.json"),JSON.stringify(myDataBase))
    return

}

function giveUsersInDatebase () {
 
    let myDataBase = readDataBase("db");
    let usersInDataBase = [];
    for (item in myDataBase){
        let username = myDataBase[item]["username"]
        usersInDataBase.push(username)

    }

    return usersInDataBase


}

function giveUserData(userId){
    let myDataBase = readDataBase("db");
    let userData = myDataBase[userId];
    return userData
    

}

function giveUserTaskMonthly(userId){
    let mydata = giveUserData(userId);
    let userTasks = mydata['tasks'];
    let monthlyTasks = userTasks.filter((task)=>filterDateMonthly(task['date']));
    monthlyTasks = JSON.stringify(monthlyTasks);
    return monthlyTasks
}

function giveUserTaskWeekly(userId){
    let mydata = giveUserData(userId);
    let userTasks = mydata['tasks'];//it is a list of user tasks object
    let weeklyTasks = userTasks.filter((task)=>filterDateWeekly(task['date']));
    weeklyTasks = JSON.stringify(weeklyTasks);
    return weeklyTasks
}




module.exports = {readDataBase,saveAccountData,login,saveTaskInfo,giveUserData,giveUsersInDatebase,giveUserTaskWeekly,giveUserTaskMonthly}




