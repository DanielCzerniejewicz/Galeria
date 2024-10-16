const tab = ["1","2","3","4","5"];
let index = 0;

function rysowanie() {
    let zdjecie = document.getElementById("galeria");
    zdjecie.innerHTML = `<img src="${tab[index]}.png" alt="Zdjęcie ${index + 1}" style="width: 100%; height: 100%; object-fit: cover;">`;
}


function Lewy() {
    if (index > 0) {
        index -= 1;
    } else {
        index = tab.length - 1;
    }
    rysowanie();
}

function Prawy() {
    if (index < tab.length - 1) {
        index += 1;
    } else {
        index = 0;
    }
    rysowanie();
}
