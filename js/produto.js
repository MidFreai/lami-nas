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
    let div = document.getElementById("prod");
    div.innerHTML = `
        <article class="box">
            <img class="img-res" src="${prod.img}">
            <h2>${prod.nome} <br> <br>R$:${prod.preco}</h2>
        </article>
    `;
}

async function run(){
    let produto = await getById();
    console.log(produto);
    drawProduto(produto);
}

run();