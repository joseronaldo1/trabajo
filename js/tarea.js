
function verficha(){
    let n1
    n1 = document.getElementById("numero1").value
    cubo = n1*n1*n1
    document.getElementById("respuesta").innerHTML = 
    "<div>" +cubo+"</div>"
}