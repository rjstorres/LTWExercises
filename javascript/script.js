let form= document.getElementsByTagName('form');
console.log(form);

let arg2Form = document.querySelector("form input[name=quantity]");
console.log(arg2Form);

let allInputs = document.querySelectorAll("form input");

for(let i=0; i<allInputs.length; i++)
    console.log(allInputs[i]);


let form2 = document.getElementsByTagName('form')[0];
form2.addEventListener('submit', function() {
    var newLine = document.createElement("tr"); 
    let arg2 = document.querySelector("form input[name=quantity]").value;
    let arg1 = document.querySelector("form input[name=description]").value;
    console.log(arg1);
    console.log(arg2);
    newLine.innerHTML = `<td>${arg1}</td><td><input value=${arg2}></td><td><input type="button" value="Remove">`;
    let table= document.getElementsByTagName('table')[0];
    table.append(newLine);
    event.preventDefault();
});

let table = document.getElementsByTagName('table')[0];
table.addEventListener('button' function(){
    event.preventDefault();
});