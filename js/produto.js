const id = new URLSearchParams(location.search).get("id");

async function getById(){
    const r = await fetch("js/db.json");
    const prod = await r.json();
    for(let i=0;i<prod.length;i++){
        if(id == prod[i].id){
            return prod[i];
        }
    }  
}

function drawProduto(prod){
    let main = document.getElementById("prod");
    main.innerHTML = `
        <article class="info">
            <img class="img-res" src="${prod.img}">
            <h2>${prod.nome}<br><br>R$:${prod.preco}
                <button class="Carrinho" onclick="addCarrinho()">
                    <a><img src="img/download.svg"></a>
                </button>
            </h2>
        </article>
    `;
}

async function runIdDraw(){
    let produto = await getById();
    drawProduto(produto);
    docTitle(produto.nome);
}
runIdDraw();
