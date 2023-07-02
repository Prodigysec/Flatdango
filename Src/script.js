document.addEventListener('DOMContentLoaded', function () {
    var scrollButton = document.querySelector('.scroll-button');
    var movieContainer = document.querySelector('.movie-container');

    scrollButton.addEventListener('click', function () {
        movieContainer.scrollIntoView({ behavior: 'smooth' });
    });

    const filmsList = document.getElementsByClassName("films-list");

    fetch("http://localhost:3000/films")
        .then(result => { return result.json(); })
        .then(data => {
            let individualFilmTitle = [];
            let individualFilmRuntime = [];
            let individualFilmCapacity = [];
            let individualFilmShowtime = [];
            let individualFilmTicketsSold = [];
            let individualFilmDescription = [];
            let individualFilmPoster = [];

            for (const key in data) {
                individualFilmTitle.push(data[key].title);
                individualFilmRuntime.push(data[key].runtime);
                individualFilmCapacity.push(data[key].capacity);
                individualFilmShowtime.push(data[key].showtime);
                individualFilmTicketsSold.push(data[key].tickets_sold);
                individualFilmDescription.push(data[key].description);
                individualFilmPoster.push(data[key].poster);
            }

        });
});
