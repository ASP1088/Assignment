import axios from "axios";

const URL = "https://swapi.dev/api/films/";

export const getData = (param) => {
    return axios.get(`${URL}`)
}