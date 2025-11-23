let produtos = [];
const lista = document.getElementById("content");


function abremenu(){
    const menu = document.getElementById('mainmenu');
    menu.classList.toggle('show');
}

function abrefiltro(){
    const ordem = document.getElementById("ordem");
    ordem.classList.toggle('show');
}

function nav() {
    document.getElementById("mainmenu").innerHTML = `
        <a href="index.html">Inicio</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
    `;
}

function jsonFetch(){
    fetch("js/db.json")
    .then(resposta => resposta.json()) //ver se a resposta e do tipo q quero
    .then(data => { // e ai eu pego o resultado
        produtos = data
        mostar(produtos);
    })
    .catch(err => console.error("erro ao carregar json", err));
}


function mostar(prod){
    prod.forEach(prod => {
        lista.innerHTML += `
            <article class="box">
                <img class="img-res" src="${prod.img}">
                <h2>${prod.nome}</h2>
            </article>
        `;
    });
}

function ordem(tipo) {
    let ord = [...produtos];
    lista.innerHTML = "";

    switch(tipo){
        case "az":
            ord.sort((a, b) => a.nome.localeCompare(b.nome));
            break;
        case "za":
            ord.sort((a, b) => b.nome.localeCompare(a.nome));
            break;
        case "precomenor":
            ord.sort((a, b) => a.preco - b.preco);
            break;
        case "precomaior":
            ord.sort((a, b) => b.preco - a.preco);

        default: break;
    }

    mostar(ord);
}

nav();
jsonFetch();