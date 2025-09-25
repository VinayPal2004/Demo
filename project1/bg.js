const buttons = document.querySelectorAll("button");
const body =document.querySelector("body");

buttons .forEach( function(button){
    button .addEventListener("click",function(e){
        if(e.target.id === "red"){
            body.style.backgroundColor = "crimson";
        }
        else if(e.target.id === "blue"){
            body.style.backgroundColor ="blue";
        }
        else if(e.target.id === "green"){
            body.style.backgroundColor ="green";
        }
        else if(e.target.id === "purple"){
            body.style.backgroundColor ="rebeccapurple";
        }
        else if(e.target.id === "orange"){
            body.style.backgroundColor ="darkorange";
        }
    })
})