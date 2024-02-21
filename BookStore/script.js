var overlay=document.querySelector(".popup-overlay")
var box=document.querySelector(".popup-box")
var add=document.querySelector(".add")
var cancel=document.getElementById("cancelbook")
var addbook=document.getElementById("addbook")

add.addEventListener("click",function (){
    overlay.style.display="block"
    box.style.display="block"
})
cancel.addEventListener("click",function(event){
    event.preventDefault(event)
    overlay.style.display="none"
    box.style.display="none"
})

var container=document.querySelector(".container")
var bname=document.querySelector("#bname ")
var aname=document.querySelector("#aname ")
var desc=document.querySelector("#description ")
addbook.addEventListener("click",function(event){
    event.preventDefault(event)
    var div=document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML=`<h1 class="bookName">${bname.value}</h1>
    <h3 class="author">${aname.value}</h3>
    <p>${desc.value}</p>
    <button class="deleteButton" onclick="handleDelete(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    box.style.display="none"
})
function handleDelete(event){
    event.target.parentElement.remove()
}
