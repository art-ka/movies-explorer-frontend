const checkResponse = (response) => response.ok ? response.json() : Promise.reject(`Ошибка на сервере: ${response.status}`);

class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }

    getMovies() {
        return fetch(`${this.baseUrl}/movies`, {
            headers: this.headers
        })
        .then(checkResponse);
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers
        })
        .then(checkResponse);
    }

    updateUserInfo(data) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        })
        .then(checkResponse);
    }

    saveMovie(movie) {
        console.log(movie);
        return fetch(`${this.baseUrl}/movies`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({ 
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: movie.image && `https://api.nomoreparties.co${movie.image.url}`,
                trailer: movie.trailerLink,
                thumbnail: movie.image && `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            })
        })
        .then(checkResponse);
    }

    deleteMovie(id) {
        return fetch(`${this.baseUrl}/movies/${id}`, {
            method: "DELETE",
            headers: this.headers
        })
        .then(checkResponse);
    }

    register(name, email, password) {
        return fetch(`${this.baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "name": name, "email": email, "password": password })
        })
            .then(checkResponse);
    };
    
    authorize(email, password) {
        return fetch(`${this.baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(checkResponse);
    };

    getToken(token) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(checkResponse);
    }

    refreshToken() {
        this.headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
    }
    
}

const api = new Api({
    baseUrl: 'http://localhost:3000',
    headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
    }
});

export default api;