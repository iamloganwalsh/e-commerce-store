function openNav() {
    if (window.innerWidth <= 600) {
        document.getElementById("side-nav").style.width = "100vw";
    } else {
        document.getElementById("side-nav").style.width = "20vw";
    };
}

function closeNav() {
    document.getElementById("side-nav").style.width = "0";
}   

function closeNavOnClickOutside(event) {
    var cursorX = event.clientX;
    if (cursorX > (0.2 * window.innerWidth) && window.innerWidth > 600) {
        closeNav();
    }
}

document.addEventListener("click", closeNavOnClickOutside);
