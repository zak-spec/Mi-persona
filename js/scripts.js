const emo = document.querySelector(".emo");
const img_cir = document.querySelector(".img-cir");
const code = document.querySelector(".code");
const img_nor = document.querySelector(".img-nor");
const container = document.querySelector(".container");
let inter;
let timeout;

var c = document.getElementById("c");
var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
matrix = matrix.split("");

var font_size = 10;
var columns = c.width / font_size;
var drops = [];
for (var x = 0; x < columns; x++)
    drops[x] = 1;

//drawing the characters
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#00ff00"; // Color del texto
    ctx.font = font_size + "px arial";
    for (var i = 0; i < drops.length; i++) {
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

code.addEventListener('mouseover', () => {
    img_cir.src = "../imagenes/pixel1.jpg";
    img_nor.src = "../imagenes/pixel2.jpg";
    document.body.style.fontFamily = 'Pixelify Sans'; // Cambia a la fuente deseada
    document.body.style.color = "springgreen"; // Cambia el color del texto
    inter = setInterval(draw, 35); // Iniciar el intervalo
    container.style.backgroundColor = 'rgba(44, 62, 80, 0.418)';
});

code.addEventListener('mouseout', () => {
    clearTimeout(timeout); // Limpiar el temporizador anterior

    timeout = setTimeout(() => {
        img_cir.src = "../imagenes/DSC_8199 copia (1).jpg";
        img_nor.src = "../imagenes/9f741258-84af-4cb3-830f-967bfd6308af.jpg";
        document.body.style.fontFamily = '"Baskervville SC'; // Cambia a la fuente deseada
        document.body.style.color = "aliceblue";   // Cambia el color del texto
        container.style.backgroundColor = 'rgb(44, 62, 80)';
        clearInterval(inter); // Detener el intervalo
        clearCanvas(); // Limpiar el canvas
    }, 3000); // 3000 milisegundos = 3 segundos
});

img_cir.addEventListener('mouseover', () => {
    img_cir.src = "../imagenes/copia.jpg";
});

img_cir.addEventListener('mouseout', () => {
    img_cir.src = "../imagenes/DSC_8199 copia (1).jpg";
});
// Función para limpiar el canvas
function clearCanvas() {
    ctx.clearRect(0, 0, c.width, c.height); // Limpiar el canvas
}

// Resto de tu código para emojis y eventos
const emojis = [
    "👋", "👍", "🤙", "👊", "🤘", "👏", "✌️", "💪", "🎉", "🥳", "🚴‍♂️", "🌴", "🏖", "👀",
];

const emorandom = (array) => {
    let copy = array.slice(0);
    return function () {
        if (copy.length < 1) {
            copy = array.slice(0);
        }
        let index = Math.floor(Math.random() * copy.length);
        let item = copy[index];
        copy.splice(index, 1);
        return item;
    };
};

let random = emorandom(emojis);
emo.addEventListener("click", (e) => {
    let emo2 = document.querySelector(".emo-ico");
    let emoji = random();
    emo.innerText = emoji;
    emo2.href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${emoji}</text></svg>`;
    e.preventDefault();
});