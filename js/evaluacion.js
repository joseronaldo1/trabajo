function nada(){
    let n1
    n1 = document.getElementById("cantidad1").value
    let n2
    n2=document.getElementById("valor1").value
    cubo = n1*n2
    document.getElementById("respuesta").innerHTML = 
    "<div>" +cubo+"</div>"
}
function quince(){
    let n1
    n1 = document.getElementById("cantidad1").value
    let n2
    n2=document.getElementById("valor1").value
    cubo = n1*n2* 85 / 100
    document.getElementById("respuesta").innerHTML = 
    "<div>" +cubo+"</div>"
}
function cinco(){
    let n1
    n1 = document.getElementById("cantidad1").value
    let n2
    n2=document.getElementById("valor1").value
    cubo = n1*n2* 50 /100
    document.getElementById("respuesta").innerHTML = 
    "<div>" +cubo+"</div>"
}