const main = document.querySelector('main');
const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const footer = document.querySelector('footer');

const changeMode = () => {
    chageClasses();
    changeText();
}

const chageClasses = () => {
    main.classList.toggle("main-dark");
    h1.classList.toggle("h1-white");
    button.classList.toggle("button-white");
    footer.classList.toggle("footer-dark-mode")
}

const changeText = () => {
    if (button.classList.contains("button-white")) {
        button.innerText = "Light Mode";
        h1.innerText = "Dark Mode ON"
        return;
    }
    button.innerText = "Dark Mode";
    h1.innerText = "Ligth Mode ON"
}

button.addEventListener("click", changeMode);
