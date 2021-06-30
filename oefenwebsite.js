const plaatje = document.querySelectorAll('img');

for (let i = 0; i < plaatje.length; i++) {
    plaatje[i].addEventListener('click', () => {
        alert("Blijf van mijn plaatjes af!");
    })
}

const muziekjes = document.querySelector('.dropdown');
let nummer = 0;

muziekjes.addEventListener('click', () => {
    if (nummer == 0) {
        document.body.style.backgroundImage = "url('imgs/achtergrond.jpg')";
        nummer = 1;
    }
    else {
        document.body.style.backgroundImage = "initial";
        nummer = 0;
    }
})
