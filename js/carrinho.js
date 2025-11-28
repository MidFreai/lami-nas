function addCarrinho(){
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.push(new URLSearchParams(location.search).get('id'));

    localStorage.setItem("carrinho",JSON.stringify(carrinho));
}

function esvasiarCarrinho(){
    localStorage.clear("carrinho");
}


async function drawLista(){
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    let lista = document.getElementById("lista");

    const r = await fetch("js/db.json");
    const prod = await r.json();

    for(let i=0;i<prod.length;i++){
        for(let j=0;j<carrinho.length;j++){
            if(carrinho[j] == prod[i].id){
                lista.innerHTML += `
                    <article class="box">
                        <a href="produto.html?id=${prod[i].id}">
                            <img class="img-res" src="${prod[i].img}">
                            <h2>${prod[i].nome} <br> <br>R$:${prod[i].preco}</h2>
                        </a>
                    </article>
                `;
            }
        }
    }
}