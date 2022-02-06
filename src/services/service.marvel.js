import { defaultAxios } from "./config.js";
import { getUrls } from "./ApiUrls.js";

export const marvelService = {
    getCharacters,
    getComics,
    getCreators,
    getEvents,
    getStories
}

async function getCharacters(keyword) {
    let url = getUrls().characters

    if(keyword !== ''){
        url = url+'&nameStartsWith='+keyword
    }

    return await defaultAxios.get(url)
        .then(result => {
            return result.data
        })
}

async function getComics(keyword) {
    let url = getUrls().comics

    if(keyword !== ''){
        url = url+'&titleStartsWith='+keyword
    }

    return await defaultAxios.get(url)
        .then(result => {
            return result.data
        })
}

async function getCreators(keyword) {
    let url = getUrls().creators

    if(keyword !== ''){
        url = url+'&nameStartsWith='+keyword
    }

    return await defaultAxios.get(url)
        .then(result => {
            return result.data
        })
}
async function getEvents(keyword) {
    let url = getUrls().events

    if(keyword !== ''){
        url = url+'&nameStartsWith='+keyword
    }

    return await defaultAxios.get(url)
        .then(result => {
            return result.data
        })
}
async function getStories(keyword) {
    let url = getUrls().stories

    if(keyword !== ''){
        url = url+'&nameStartsWith='+keyword
    }

    return await defaultAxios.get(url)
        .then(result => {
            return result.data
        })
}