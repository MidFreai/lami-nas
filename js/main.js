function abremenu() {
    const menu = document.getElementById('mainmenu');
    menu.classList.toggle('show');
}

function abrefiltro() {
    const ordem = document.getElementById("ordem");
    ordem.classList.toggle('show');
}

function nav() {
    document.getElementById("mainmenu").innerHTML = `
    <img id="logo" src="img/Gemini_Generated_Image_yytg6vyytg6vyytg.png">
        <a class="btn" id="home" href="index.html">
            <img src="img/home.png">
        </a>
        <a class="btn" href="carrinho.html">
            <img src="img/download.svg">
        </a>
    `;
}

function docTitle(title){
    document.title = title;
}

nav();