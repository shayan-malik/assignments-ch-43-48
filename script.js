function showLink() {
    alert("Hello World!")
}

function purchase() {
    alert("Thanks for purchasing a phone from us")
}



let students = [];

function addList() {
    let userName = document.getElementById("userName").value;
    let userClass = document.getElementById("userClass").value;
    let studentObj = {
        name: userName,
        class: userClass
    }
    students.push(studentObj);
    addRow()

}

function addRow() {
    let row = "";
    for (let i = 0; i < students.length; i++) {
        row += `<tr>
                    <td>${i}</td>
                    <td>${students[i].name}</td>
                    <td>${students[i].class}</td>
                    <td><button onclick="deleteRow(${i})">Delete</button></td>
                </tr>`

    }
    
    document.getElementById("tbody").innerHTML = row;
}

function deleteRow(index) {
    students.splice(index, 1)
    addRow()
}




function newImage(){
    document.getElementById("img").src = "./images/img2.jpg";
}


function previousImage(){
    document.getElementById("img").src = "./images/img1.jpg";
}





let counter = 0;
function minusOne(){
    document.getElementById("counter").innerHTML = --counter;
}


function plusOne(){
    document.getElementById("counter").innerHTML = ++counter;

}