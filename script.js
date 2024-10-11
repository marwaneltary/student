function add(){

    var student = document.getElementById("std").value
    var newTag = document.createElement("li");
    newTag.innerHTML = student;
    document.getElementById("list").appendChild(newTag);
}