"use strict";
let click = document.querySelector(`.click`);
let ul = document.querySelector(`.ul`);
let myafter = document.querySelector(`.myafter`);
click.addEventListener(`click`, () => {
    if (!ul.classList.contains("cli")) {
        myafter.classList.add(`!opacity-100`);
        ul.classList.add("cli");
        ul.classList.add("w-[90%]");
        ul.classList.add(`h-[350px]`);
        ul.classList.remove(`w-0`);
        ul.classList.remove(`h-0`);
    }
    else {
        myafter.classList.remove(`!opacity-100`);
        ul.classList.remove("cli");
        ul.classList.remove("w-[90%]");
        ul.classList.remove(`h-[350px]`);
        ul.classList.add(`w-0`);
        ul.classList.add(`h-0`);
    }
});
