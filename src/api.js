import axios from "axios";

const URL = "https://swapi.dev/api/films/";

const searchUrl = "https://swapi.dev/api/films/?search={}";

export const getData = (param) => {
    return axios.get(`${URL}`)
}

export const searchData = (searchMovie) => {
console.log('searchdata',searchMovie)
   return axios.get(`${"https://swapi.dev/api/films/?search="}${searchMovie}`)
}