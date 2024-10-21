const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const img = document.querySelector(".tti");
const but = document.querySelector("button")

yesBtn.addEventListener("click", () => {
  question.innerHTML = "hí hí anh yêu em nhiều lắm 😘";
  gif.src =
    "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
  img.src =  "3.jpg"
  img.style.width = "610px"
  gif.style.position = "absolute"
  gif.style.left = "240px"
  gif.style.top = "1px"
  gif.style.width = "400px"
  yesBtn.style.visibility = "hidden"
  noBtn.style.visibility = "hidden"
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
