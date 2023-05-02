function showMenu() {
    document.getElementById('navigation').style.transform = "translateX(0%)";
    document.getElementById('xIcon').style.display = "block";
    document.getElementById('hamIcon').style.display = "none";
}
function hideMenu() {
    document.getElementById('navigation').style.transform = "translateX(100%)";
    document.getElementById('xIcon').style.display = "none";
    document.getElementById('hamIcon').style.display = "block";
}

function hideButtons() {
    if (window.innerWidth > 767) {
        document.getElementById('xIcon').style.display = "none";
        document.getElementById('hamIcon').style.display = "none";
        document.getElementById('navigation').style.transform = "translateX(0%)";
    }
    else {
        document.getElementById('hamIcon').style.display = "block";
        document.getElementById('navigation').style.transform = "translateX(100%)";
    }
}

window.addEventListener("resize", hideButtons);

