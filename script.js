function changeСard(id_el) {
  let button = document.querySelector(id_el + " button");
  let card = document.querySelector(id_el);
  let img = document.querySelector(id_el + " button img");
  let hr_ln = document.querySelector(id_el + " div.horizontal_line");
  let p = document.querySelector(id_el + " p.min_p");

  button.addEventListener("click", () => {
    if (card.classList.contains("bg_green")) {
      card.classList.remove("bg_green");
      card.classList.add("bg_gray");
      hr_ln.classList.remove("block");
      hr_ln.classList.add("none");
      p.classList.remove("block");
      p.classList.add("none");
      img.src = "img/+.svg";
    } else {
      card.classList.remove("bg_gray");
      card.classList.add("bg_green");
      hr_ln.classList.remove("none");
      hr_ln.classList.add("block");
      p.classList.remove("none");
      p.classList.add("block");
      img.src = "img/-.svg";
    }
  });
}
