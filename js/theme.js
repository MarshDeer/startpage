const body = document.querySelector('body');
const main = document.querySelector('main');

function themetoggle() {
        main.classList.toggle('dark');
        main.classList.toggle('light');
        body.classList.toggle('dark');
        body.classList.toggle('light');
}
