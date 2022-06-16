const icon = document.querySelector('.mdi-menu');
const links = document.querySelector('#menu');

const afficherMenu = () => {
    if (links.style.display == 'none' || links.style.display == '') {
        links.style.display = 'grid';
        links.style.background = 'black';
        links.style.width = '130px';
        links.style.height = '200px';
        links.style.padding = '10px';

    } else {
        links.style.display = 'none';
    }
}

icon.addEventListener('click', () => {
    afficherMenu()
});
