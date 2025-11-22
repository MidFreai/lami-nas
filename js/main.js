function abremenu(){
    const menu = document.getElementById('mainmenu');
    menu.classList.toggle('show');
}

fetch("js/db.json")
    .then(resposta => resposta.json()) //ver se a resposta e do tipo q quero
    .then(produtos => {
        const lista = document.getElementById("content");
        produtos.forEach(prod => {
            lista.innerHTML += `
                <article class="box">
                    <img class="img-res" src="${prod.img}">
                    <h2>${prod.nome}</h2>
                </article>
            `;
        });
    })
    .catch(err => console.error("erro ao carregar json", err));