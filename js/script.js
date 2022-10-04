const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    // Don't forget to remove it in the real project
    setTimeout(() => {

        loader.classList.add('fadeOut');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);

    }, 5000);

});
