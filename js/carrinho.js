function addCarrinho(){
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.push(new URLSearchParams(location.search).get('id'));

    localStorage.setItem("carrinho",JSON.stringify(carrinho));
}

function esvasiarCarrinho(){
    localStorage.clear("carrinho");

    document.getElementById("lista").innerHTML = `
        <h3 style="color:white">O Carrinho esta vazio<h3>
    `;

    printPrice()
}

async function fetchParseJson() {
    const r = await fetch("js/db.json");
    return await r.json();
}


async function drawLista(){
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    let lista = document.getElementById("lista");
    
    const prod = await fetchParseJson();
    
    for(let i=0;i<prod.length;i++){
        for(let j=0;j<carrinho.length;j++){
            if(carrinho[j] == prod[i].id){
                lista.innerHTML += `
                <article class="box">
                <a href="produto.html?id=${prod[i].id}">
                <img class="img-res" src="${prod[i].img}">
                <h2>${prod[i].nome} <br> <br>R$:${prod[i].preco}<br><br><br></h2>
                </a>
                </article>
                `;
            }
        }
    }
}

async function pickPrice() {
    const prod = await fetchParseJson();

    let preco = 0;

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    for(let i=0;i<prod.length;i++){
        for(let j=0;j<carrinho.length;j++){
            if(carrinho[j] == prod[i].id){
                preco += parseFloat(prod[i].preco);
            }
        }
    }
    return preco;
}

async function printPrice(){
    let preco = await pickPrice();

    let docid = document.getElementById("preco");
    docid.innerHTML = `
        <h1>Total<h1>
        <h2>R$:${preco}</h2>
    `;
}