const express = require('express');
const app = express();
const fs = require('fs');
const {readDataBase, saveAccountData,login,saveTaskInfo,giveUserData} = require('./utils.js');
const res = require('express/lib/response');
const { redirect } = require('express/lib/response');
const path = require('path');
const staticPath=path.join(__dirname,"views");
app.use(express.static(staticPath));
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies