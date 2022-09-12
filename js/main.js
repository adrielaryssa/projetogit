let valordsaq= prompt ("Digite o valor que deseja sacar:")

let resto = Number(valordsaq)

while (resto>=100){

    document.write('<img src = "img/100.jpg">')
    resto = resto-100

}
while (resto>=50){

    document.write('<img src = "img/50.jpg">')
    resto = resto-50

}
while (resto>=10){

    document.write('<img src = "img/10.jpg">')
    resto = resto-10

}

while (resto>=5){ 

    document.write('<img src = "img/5.jpg">')
    resto = resto-5
}

while (resto>=1){

    document.write('<img src = "img/1.jpg">')
    resto = resto-1

}