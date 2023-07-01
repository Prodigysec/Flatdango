document.addEventListener('DOMContentLoaded', function () {
    var scrollButton = document.querySelector('.scroll-button');
    var movieContainer = document.querySelector('.movie-container');

    scrollButton.addEventListener('click', function () {
        movieContainer.scrollIntoView({ behavior: 'smooth' });
    });
});
