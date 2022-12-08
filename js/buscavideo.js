import { API } from "./main.js";
import card from "./mostrarVideo.js";

async function buscarVideo(evento){

    evento.preventDefault();

    const pesquisa = document.querySelector("[data-pesquisa]").value;
    const buscar = await API.busca(pesquisa);

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    buscar.forEach(element => lista.appendChild(
        card(element.titulo, element.descricao, element.url, element.imagem)
    ));

    if(buscar.length==0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Nenhum vídeo encontrado</h2>`;
    }
}

const botaoDePesquisa = document.querySelector("[data-botao]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));
