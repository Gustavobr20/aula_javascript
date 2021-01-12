/* Manipulando a DOM

function cliclou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://digitalinnovation.one") // redireciona para outra url em outra aba
    window.location.href = "https://www.facebook.com"; // redireciona para url na mesma aba
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse aqui";
    elemento.innerHTML = "Obrigado por passar o mouse aqui";
    // alert("trocar texto");
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){ // a função load é chamada quando o body é carregado
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

// FIM

* Funções
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
};

var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade));

alert(soma(5,10));

// FIM

* Date

var d = new Date();
alert(d.getMonth()+1);
alert(d.getHours());
alert(d.getMinutes());

* Estrutura de repetição com for

var count;
for (count = 0; count <= 5; count++){
    alert(count);
};


* Estrutura de repetição com while

var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};

// FIM

* Condicionais

var idade = prompt ("Qual sua idade"); // comando prompt exibe uma pergunta na página web e oq ele responder será gravado na variavel
if (idade >= 18){
    alert("maior de idade");
}else{
    aler("menor de idade");
}

// FIM

* Lista de dicionarios

var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "verde"}]
console.log(frutas);
alert(frutas[1].nome);

// FIM


* Dicionarios

var fruta = {nome: "maça", cor: "vermelha"} // Dicionario
console.log(fruta.nome)
alert(fruta.cor);

// FIM

* Array list

var lista = ["maça", "pera", "laranja"];
lista.push("uva");
lista.pop("");

onsole.log(lista);
console.log(lista.toString());
console.log(lista.join(" | "))

// FIM

* Variaveis

var nome = "Gustavo Henrique";
var n1 = 5;
var n2 = 3;
var frase = "São Paulo FC é o melhor time do mundo";
alert(nome + " tem " + idade + " anos");
alert (idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
alert(frase.replace("São Paulo FC", "Brasil"));
*/

// FIM