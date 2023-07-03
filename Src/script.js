document.addEventListener('DOMContentLoaded', function () {
    var scrollButton = document.querySelector('.scroll-button');
    var movieContainer = document.querySelector('.movie-container');

    scrollButton.addEventListener('click', function () {
        movieContainer.scrollIntoView({ behavior: 'smooth' });
    });

    const filmsList = document.querySelector(".films-list");

    let individualFilmTitle = [];
    let individualFilmRuntime = [];
    let individualFilmCapacity = [];
    let individualFilmShowtime = [];
    let individualFilmTicketsSold = [];
    let individualFilmDescription = [];
    let individualFilmPoster = [];

    fetch("http://localhost:3000/films")
        .then(result => { return result.json(); })
        .then(data => {
            for (const key in data) {
                individualFilmTitle.push(data[key].title);
                individualFilmRuntime.push(data[key].runtime);
                individualFilmCapacity.push(data[key].capacity);
                individualFilmShowtime.push(data[key].showtime);
                individualFilmTicketsSold.push(data[key].tickets_sold);
                individualFilmDescription.push(data[key].description);
                individualFilmPoster.push(data[key].poster);
            }

            individualFilmTitle.forEach(function (element) {
                const filmTitle = document.createElement('p');
                filmTitle.textContent = element;
                filmsList.appendChild(filmTitle);
            });
            attachEventListener();

        }).catch(error => {
            console.error(error);
        });

    function attachEventListener() {
        const filmTitleElements = document.querySelectorAll('.films-list p');

        filmTitleElements.forEach((filmTitleElement, index) => {
            filmTitleElement.addEventListener('click', event => {
                const imageElement = document.createElement('img');
                const movieImage = document.querySelector('.movie-image');
                imageElement.src = individualFilmPoster[index];
                imageElement.alt = 'Movie Poster';
                movieImage.innerHTML = '';
                movieImage.appendChild(imageElement);


                const paragraphElement = document.createElement('p');
                const buttonElement = document.createElement('button');
                const movieDescription = document.querySelector('.movie-description');

                paragraphElement.className = 'movie-description-text';
                paragraphElement.textContent = individualFilmDescription[index];
                buttonElement.className = 'buy-ticket-btn';
                movieDescription.innerHTML = '';
                buttonElement.textContent = 'Buy Ticket';

                movieDescription.appendChild(paragraphElement);
                movieDescription.appendChild(buttonElement);

                const movieInfo1 = document.createElement('div');
                const movieInfoClassNames = ['movie-runtime', 'movie-capacity', 'movie-showtime', 'movie-tickets-sold'];
                for (let i = 0; i < 4; i++) {
                    const childParagraph = document.createElement('p');
                    childParagraph.textContent = i === 0 ? `Minutes: ${individualFilmRuntime[index]}` :
                        i === 1 ? `Available Seats: ${individualFilmCapacity[index]}` :
                            i === 2 ? `Time: ${individualFilmShowtime[index]}` :
                                `Tickets Sold: ${individualFilmCapacity[index] - individualFilmTicketsSold[index]}`;
                    childParagraph.className = movieInfoClassNames[i];
                    movieInfo1.appendChild(childParagraph);
                }

                const parentMovieDetails = document.querySelector('.movie-details-right');
                parentMovieDetails.innerHTML = '';
                parentMovieDetails.appendChild(movieInfo1);
            });
        });
    }
});
