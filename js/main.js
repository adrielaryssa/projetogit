let nome = prompt ("Digite seu nome:")
var min =1
var vsaque, op
var deposito =0

var saldo = Infinity

do{
    op = parseInt(prompt("Digite a opção desejada:\n 1-saque \n2-Deeposito\n3-Saldo"))
    switch(op){
        case 1: 
        vsaque= parseInt(prompt("Digite o valor do saque"))
        if (saldo = saldo -vsaque) {
            alert ("Saque em processamento ]... aguarde")
            
        }

        case 2:
            deposito = parseInt(prompt("Digite o valor do deposito:"))

            alert ("Agora voce está" +deposito+ "R$ mais rico ")
            saldo = saldo + deposito;
        case 3: 

        alert ("Seu saldo em conta é de... Inifitos dinheirinhos, parabéns voce é muito rico!!!!")
        









    }

}while (op != 0 ){

}