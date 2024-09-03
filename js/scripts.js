// alert("Hello, World!");
const emo = document.querySelector(".emo");
const img_cir=document.querySelector(".img-cir");
const code = document.querySelector(".code");
const img_nor=document.querySelector(".img-nor");
code.addEventListener('mouseover', () => {
    // Código a ejecutar cuando el mouse está sobre el elemento
    img_cir.src="../imagenes/pixel1.jpg"
    img_nor.src="../imagenes/pixel2.jpg"
    document.body.style.fontFamily = 'Pixelify Sans'; // Cambia a la fuente deseada
    });
code.addEventListener('mouseout', () => {
    // Código a ejecutar cuando el mouse sale del elemento
      img_cir.src="../imagenes/DSC_8199 copia (1).jpg"
      img_nor.src="../imagenes/9f741258-84af-4cb3-830f-967bfd6308af.jpg"
      document.body.style.fontFamily = '"Baskervville SC'; // Cambia a la fuente deseada
      });


const emojis = [
  "👋",
  "👍",
  "🤙",
  "👊",
  "🤘",
  "👏",
  "✌️",
  "💪",
  "🎉",
  "🥳",
  "🚴‍♂️",
  "🌴",
  "🏖",
  "👀",
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
  emo.innerText = emoji + " hola, mi nombre es";
  emo2.href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${emoji}</text></svg>`;
  e.preventDefault();
});
