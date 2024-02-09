import axios from "axios";

const URL = "https://swapi.dev/api/films/";

const searchUrl = "https://swapi.dev/api/films/?search=";

export const getData = (param) => {
    return axios.get(`${URL}`)
}

export const searchData = (searchTerm) => {
    console.log('Search Term',searchTerm)
   return axios.get(`${searchUrl}${searchTerm}`)
}