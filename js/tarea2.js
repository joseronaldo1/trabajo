function primero(){
    let n1
    n1 =document.getElementById("cantidad1").value
    let n2
    n2 =document.getElementById("valor1").value
    tin1 =n1*n2
    document.getElementById("respuesta").innerHTML = 
    "<div>" +tin1+"</div>"
}
function segundo(){
    let n1
    n1 =document.getElementById("cantidad").value
    let n2
    n2 =document.getElementById("valor").value
    tin2 =n1*n2
    document.getElementById("respuesta2").innerHTML = 
    "<div>" +tin2+"</div>"
}
function tercero(){
    let n1
    n1 =document.getElementById("respuesta").value
    let n2
    n2 =document.getElementById("respuesta2").value
    tin =n1+n2
    document.getElementById("respuesta3").innerHTML = "<div>" +tin+"</div>"
}