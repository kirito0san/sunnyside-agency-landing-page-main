let click = document.querySelector(`.click`) as HTMLImageElement;
let ul = document.querySelector(`.ul`) as HTMLUListElement;
let myafter = document.querySelector(`.myafter`) as HTMLParagraphElement;
click.addEventListener(`click`, () => {
  if (!ul.classList.contains("cli")) {
    myafter.classList.add(`!opacity-100`);
    ul.classList.add("cli");
    ul.classList.add("w-[90%]");
    ul.classList.add(`h-[350px]`);
    ul.classList.remove(`w-0`);
    ul.classList.remove(`h-0`);
  } else {
    myafter.classList.remove(`!opacity-100`);
    ul.classList.remove("cli");
    ul.classList.remove("w-[90%]");
    ul.classList.remove(`h-[350px]`);
    ul.classList.add(`w-0`);
    ul.classList.add(`h-0`);
  }
});
