// SELECIONANDO IDS
const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

// Loop para cada botão
buttons.forEach((btn) => {
  // evento para quando clicar no botão
  btn.addEventListener("click", (e) => {
    console.log(e);
    // loop no botão e verificando se alguem tem a classe selecionado, caso sim->remover
    buttons.forEach((btn) =>
      btn.querySelector(".color").classList.remove("selected")
    );

    // selecionando o botão
    const button = e.target;

    // atribuindo id ao botão
    const id = button.getAttribute("id");

    // adicionando a classe select para o botão selcionado o botão
    button.querySelector(".color").classList.add("selected");

    // adicionando classe changing, onde a opacidade da imagem vai ficar de acordo com a definição no css
    image.classList.toggle("changing");

    // alterando o src na imagem
    image.setAttribute("src", `img/iphone_${id}.jpg`);

    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});
