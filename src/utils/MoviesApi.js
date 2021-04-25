const checkResponse = (response) => response.ok ? response.json() : Promise.reject(`Ошибка на сервере: ${response.status}`);

class ApiMovies {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }

    getMovies() {
        return fetch(`${this.baseUrl}`, {
            method: "GET",
            headers: this.headers
        })
            .then(checkResponse);
    }
}

const apiMovies = new ApiMovies({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiMovies;