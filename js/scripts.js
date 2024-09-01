// alert("Hello, World!");
const emo = document.querySelector(".emo");
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
