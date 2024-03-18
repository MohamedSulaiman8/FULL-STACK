var productContainer=document.querySelector(".products")
var search=document.querySelector("#search")
var products=productContainer.querySelectorAll("div")
search.addEventListener("keyup",function (event){
    var eventValue=event.target.value.toUpperCase()
    for(i=0;i<products.length;i++){
        var productname=products[i].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(eventValue)<0){
            products[i].style.display="none"
        }
        else{
            products[i].style.display="block"
        }
    }
})