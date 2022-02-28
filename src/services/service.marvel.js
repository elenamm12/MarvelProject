import { defaultAxios } from "./config.js";
import { getUrls } from "./ApiUrls.js";

export const marvelService = {
    getCharacters,
    getComics,
    getCreators,
    getEvents,
    getStories
}

async function getCharacters(keyword, offset) {
    let url = getUrls().characters
    url = url+"&offset="+(20*offset)

    if(keyword !== ''){
        url = url+'&nameStartsWith='+keyword
    }

    return await defaultAxios.get(url)
        .then(result => {
            return result.data
        })
}

async function getComics(keyword, offset) {
    let url = getUrls().comics
    url = url+"&offset="+(20*offset)

    if(keyword !== ''){
        url = url+'&titleStartsWith='+keyword
    }

    return await defaultAxios.get(url)
        .then(result => {
            return result.data
        })
}

async function getCreators(keyword, offset) {
    let url = getUrls().creators
    url = url+"&offset="+(20*offset)

    if(keyword !== ''){
        url = url+'&nameStartsWith='+keyword
    }

    return await defaultAxios.get(url)
        .then(result => {
            return result.data
        })
}
async function getEvents(keyword, offset) {
    let url = getUrls().events
    url = url+"&offset="+(20*offset)

    if(keyword !== ''){
        url = url+'&nameStartsWith='+keyword
    }

    return await defaultAxios.get(url)
        .then(result => {
            return result.data
        })
}
async function getStories(keyword, offset) {
    let url = getUrls().stories
    url = url+"&offset="+(20*offset)

    if(keyword !== ''){
        url = url+'&nameStartsWith='+keyword
    }

    return await defaultAxios.get(url)
        .then(result => {
            return result.data
        })
}