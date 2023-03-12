const numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?');
const personalMoveDB= {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

let lastWachMovie = prompt('Один из последний просмотренный фильмов?','Не помню!'),
    ballToMovie = prompt('На сколько вы его оцените?','0');
lastWachMovie1 = prompt('Один из последний просмотренный фильмов?','Не помню!');
ballToMovie1 = prompt('На сколько вы его оцените?','0');
personalMoveDB['movies'][lastWachMovie] = ballToMovie;
personalMoveDB['movies'][lastWachMovie1] = ballToMovie1;

console.log(personalMoveDB)