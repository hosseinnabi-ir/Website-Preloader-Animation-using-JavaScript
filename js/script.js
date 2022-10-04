const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    // Making 5s delay in website loading
    setTimeout(() => {

        loader.classList.add('fadeOut');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);

    }, 5000);

});
