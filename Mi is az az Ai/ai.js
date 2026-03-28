// Ezt hívd meg a főmenü gombnál (toggle)
function menuGomb() {
    document.getElementById("menu").classList.toggle("open");
    document.querySelector(".main").classList.toggle("menu-active");
}

// Ezt hívd meg, ha el akarod tüntetni (visszahúzza a menüt és a tartalmat is)
function nemGomb() {
    document.getElementById("menu").classList.remove("open");
    document.querySelector(".main").classList.remove("menu-active");
}