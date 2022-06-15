'use strict';

// PARENT CLASS
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    // Getters
    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    // Setters
    set isCheckedOut(status) {
        this._isCheckedOut = status;
    }

    // Public methods
    getAverageRating() {
        return this.ratings.reduce(
            (sum, cur, _, array) => sum + cur / array.length,
            0
        );
    }

    toggleCheckedOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }

    addRating(rating) {
        this.ratings.push(rating);
    }
}

// BOOK CLASS extends Media
class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    // Getters
    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

// MOVIE CLASS extends Media
class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    // Getters
    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

// CD CLASS extends Media
class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    // Getters
    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }
}

// Book Instance
const historyOfEverything = new Book(
    'A Short History of Nearly Everything',
    'Bill Bryson',
    544
);

historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

// Movie instance
const speed = new Movie('Speed', 'Jan de Bont', 116);

speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(3);
speed.addRating(4);
speed.addRating(5);
console.log(speed.getAverageRating());
