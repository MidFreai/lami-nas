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
        <a href="index.html">Inicio</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
    `;
}

function docTitle(title){
    document.title = title;
}

nav();
