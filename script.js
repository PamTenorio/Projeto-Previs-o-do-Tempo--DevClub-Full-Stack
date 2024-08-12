//variaveis é um espaço da memoria do computador que guarda algo como por exemplo uma imagem um texto  
//uma função é um trecho do cogigo que só é executado quando é chamado 

//async é usado em frente a função significa que vamos acessar um servidor pra buscar informações 
//await é usado para pedir pro javascript esperar as informações.
// fetch é a ferramenta que vai ate o servidor buscar a informação.

let chave = "aa9e46cb2e6f025d209935f76965a252"

function colocaNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".tempo") .innerHTML = Math.floor (dados.main.temp) + " °C"
    document.querySelector(".nuvens") .innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity +" %"
    document.querySelector(".icone").src ="https://openweathermap.org/img/wn/" + dados.weather[0].icon +".png"
}


async function buscarCidade(cidade) {
    let dados = await fetch( 
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric" )
        .then (resposta => resposta .json())

        colocaNaTela(dados)
    console.log(dados)
}


function clickbotao() {

    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}
