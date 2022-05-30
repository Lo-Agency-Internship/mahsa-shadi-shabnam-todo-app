function getInfoFromBackend(){

  let myUrl = window.location.pathname
  
  myUrl = myUrl.split('/')
  
  let userId = myUrl[2];
  
  let xhr = new XMLHttpRequest();
  xhr.onload = () =>
   { if (xhr.status >= 200 && xhr.status < 300){
     const response = JSON.parse(xhr.response);
     let outer = document.getElementById('outer');
    response.forEach((item)=>{
    let div = document.createElement('div');
    div.className = "test";
    let label = document.createElement('LABEL');
    label.className = "container";
    let x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.setAttribute('id',item.id); 
    x.checked = item.status;
    let span = document.createElement("SPAN");
    span.className = "checkmark";
    label.innerHTML = item.task;
    label.appendChild(x);
    label.appendChild(span);
    let p = document.createElement('p');
    p.innerHTML = item.date;
    let button = document.createElement('button');
    button.innerHTML = 'Delete';
    div.appendChild(label);
    div.appendChild(p);
    div.appendChild(button);
    outer.appendChild(div);
       
     })

   } 
    };
      
  xhr.open('GET',`http://localhost:3000/api/tasks/${userId}` ,true);
  xhr.send();
  }

  


function fetch( url, cb) {

const xhttp = new XMLHttpRequest();
xhttp.onload = () => {

if (xhttp.status >= 200 && xhttp.status < 300) {

  let response = xhttp.response;
  response = JSON.parse(response);
  cb(response);
}
} 
xhttp.open('GET', url, true);
xhttp.send();
}
//my call back function

function createHtmlElement(response){
  
  let outer = document.getElementById('outer');
  	outer.innerHTML="";
    response.forEach((item)=>{
    let div = document.createElement('div');
    div.className = "test";
    let label = document.createElement('LABEL');
    label.className = "container";
    let x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.setAttribute('id',item.id); 
    x.checked = item.status;
    let span = document.createElement("SPAN");
    span.className = "checkmark";
    label.innerHTML = item.task;
    label.appendChild(x);
    label.appendChild(span);
    let p = document.createElement('p');
    p.innerHTML = item.date;
    let button = document.createElement('button');
    button.innerHTML = 'Delete';
    div.appendChild(label);
    div.appendChild(p);
    div.appendChild(button);
    outer.appendChild(div);
    

})   
}

function weeklyButton(createHtmlElement) {
let myUrl = window.location.pathname
myUrl = myUrl.split('/')
let userId = myUrl[2];
fetch( `http://localhost:3000/api/weekly/${userId}`,createHtmlElement);
}


function monthlyButton(createHtmlElement) {
let myUrl = window.location.pathname
myUrl = myUrl.split('/')
let userId = myUrl[2];
fetch( `http://localhost:3000/api/monthly/${userId}`,createHtmlElement);
}


  
