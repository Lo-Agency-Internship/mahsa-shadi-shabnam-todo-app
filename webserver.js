const express = require('express');
const app = express();

const fs = require('fs');
const {readDataBase, saveAccountData,login,saveTaskInfo,giveUserData,giveUsersInDatebase,giveUserTaskWeekly,giveUserTaskMonthly} = require('./utils.js');
const res = require('express/lib/response');
const { redirect } = require('express/lib/response');


const path = require('path');
const staticPath=path.join(__dirname,"views");

app.use(express.static(staticPath));
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/views" +"/signup.html")
    
});
//change code
app.get('/api',(req,res)=>{
    let userNameList = giveUsersInDatebase();
    res.send(userNameList);
    
    

})

app.post('/',(req, res) => {
    
    let myDataBase = readDataBase("db");
    const newAccountId = Math.floor(100000 + Math.random()*900000);
    myDataBase[newAccountId] = req.body;
    myDataBase[newAccountId]["tasks"] = [];
    saveAccountData(myDataBase)
    return res.redirect('/login')
})

   

    

app.get('/login',(req,res) =>{
    res.sendFile(__dirname + "/views" +"/login.html")
})

app.post('/login',(req,res)=>{
    const formData = req.body;
    const userName = formData["username"];
    const passWord = formData["password"];
    let userLogin = login(userName,passWord);

    if (userLogin.islogin){
        return res.redirect(`/tasks/${userLogin.userId}`)
    }
    

})


app.get('/api/tasks/:id',(req,res)=>{
    let userId = req.params.id;
    let userData = giveUserData(userId);
    res.send(userData);
    
})

app.post('/tasks/:id',(req,res)=>{
    let requestContent = req.body;
    let userId = req.params.id;
    saveTaskInfo(requestContent, userId);
    return res.redirect(`/tasks/${userId}`);
    
})

app.get('/tasks/:id',(req,res)=>{
    let userId = req.params.id;
    res.sendFile(__dirname + "/views" + "/task.html")
})

app.get('/api/weekly/:id',(req,res)=>{
    let userId = req.params.id;
    let weeklyTasks = giveUserTaskWeekly(userId);
    res.send(weeklyTasks);
    

})

app.get('/api/monthly/:id',(req,res)=>{
  
    let userId = req.params.id;
    let monthlyTasks = giveUserTaskMonthly(userId);
    res.send(monthlyTasks);
    


})




app.listen(3000);

console.log("I am listenng");



